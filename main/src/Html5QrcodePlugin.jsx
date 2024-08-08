import { Html5QrcodeScanner } from "html5-qrcode";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/html5-qrcode-css.module.css'

const qrcodeRegionId = "html5qr-code-full-region";

// let img_file = document.getElementById('html5-qrcode-anchor-scan-type-change');
// img_file.style.opacity = '0 !important';

class Html5QrcodePlugin extends React.Component {


    
    render() {
        return (
            <div >
                <h1 className='text-center text-light m-3'>- Words Nowhere to Go -</h1>
                <div id={qrcodeRegionId}></div>
                
                <style jsx>{`
                    #html5-qrcode-button-camera-stop{
                        background-color: rgb(255,0,0) !important;
                        color: rgb(255,0,0) !important;
                    }
                `}</style>

                <style jsx global>{`
                    button{
                        background-color: rgb(0,0,0) !important;
                        color: rgb(255,255,255) !important;
                        border: 1px solid rgb(150, 150, 150);
                        padding: 10px;
                    }
                    
                    select{
                        background-color: rgb(0,0,0) !important;
                        color: rgb(255,255,255) !important;
                        align-items: center;
                        -webkit-appearance: none;
                        -webkit-box-pack: center;
                        margin-bottom: 30px;
                    }

                    #html5-qrcode-anchor-scan-type-change{
                        display: none;
                        visibility: hidden;
                    }
                    
                `}</style>

            </div>
            
        );
    }


    componentWillUnmount() {
        // TODO(mebjas): See if there is a better way to handle
        //  promise in `componentWillUnmount`.
        this.html5QrcodeScanner.clear().catch(error => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
        });
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        function createConfig(props) {
            var config = {};
            if (props.fps) {
                config.fps = props.fps;
            }
            config.qrbox = { width: window.innerWidth - 150, height: 50 };
            if (props.aspectRatio) {
                config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
                config.disableFlip = props.disableFlip;
            }
            return config;
        }

        var config = createConfig(this.props);
        var verbose = this.props.verbose === true;

        // Suceess callback is required.
        if (!(this.props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }

        this.html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
        this.html5QrcodeScanner.render(
            this.props.qrCodeSuccessCallback,
            this.props.qrCodeErrorCallback);
    }
};

export default Html5QrcodePlugin;
