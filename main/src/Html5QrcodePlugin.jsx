import { Html5QrcodeScanner } from "html5-qrcode";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/html5-qrcode-css.module.css'
import Script from 'next/script'
const qrcodeRegionId = "html5qr-code-full-region";

// let img_file = document.getElementById('html5-qrcode-anchor-scan-type-change');
// img_file.style.opacity = '0 !important';

let custom_aspectRatio = 0.5;

class Html5QrcodePlugin extends React.Component {


    
    render() {
        
        return (
            <div >
                <h1 className='text-center text-light m-3'>- Words Nowhere to Go -</h1>
                <div id={qrcodeRegionId} className="QRview"></div>
                
                
                <style jsx>{`
                    #html5-qrcode-button-camera-stop{
                        background-color: rgb(255,0,0) !important;
                        color: rgb(255,0,0) !important;
                    }

                `}</style>

                <style jsx global>{`

                    button{
                        background-color: rgba(0, 0, 0, 0.5) !important;
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
            
            //document.querySelector('#html5qr-code-full-region__scan_region').style.maxHeight = '30%';

            var config = {};
            if (props.fps) {
                config.fps = props.fps;
            }

            if(window.innerWidth > 1024){
                config.qrbox = { width: window.innerWidth*0.3 , height: 80 };
            }
            else if(window.innerWidth > 768){
                config.qrbox = { width: window.innerWidth*0.7 , height: 60 };
            }
            else{
                config.qrbox = { width: window.innerWidth*0.5 , height: 50 };
            }

            
            config.aspectRatio = 0.7;
            if (props.aspectRatio) {
                //config.aspectRatio = props.aspectRatio;
                // config.aspectRatio = custom_aspectRatio;
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
