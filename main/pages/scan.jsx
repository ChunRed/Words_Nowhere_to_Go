
import React from 'react';
import Html5QrcodePlugin from '../src/Html5QrcodePlugin.jsx'
import ResultContainerPlugin from '../src/ResultContainerPlugin.jsx'
import HowToUse from '../src/HowToUse.jsx'
import '../styles/global.css';
import '../styles/html5-qrcode-css.module.css'
import "bootstrap/dist/css/bootstrap.css";
import styles from '../styles/layout.module.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            decodedResults: []
        }

        // This binding is necessary to make `this` work in the callback.
        this.onNewScanResult = this.onNewScanResult.bind(this);
    }

    render() {
        return (
            <div className="App">
                <section className="App-section container bg-black">
                    <div className="row bg-black border border-dark">
                        <Html5QrcodePlugin
                            className="border border-dark"
                            fps={10}
                            disableFlip={false}
                            qrCodeSuccessCallback={this.onNewScanResult} />
                    </div>

                    <div className="row">
                        <div id='value' className='mt-3 bg-black text-light text-center'>{}</div>
                    </div>

                    <div className="row">
                        <div className='text-light'>hel</div>
                    </div>
                </section>
            </div>
        );
    }

    onNewScanResult(decodedText, decodedResult) {
        console.log(
            "App [result]", decodedResult);
        this.setState((state, props) => {
            
            state.decodedResults.push(decodedResult);
            return state;
        });

        const app = document.getElementById("value");
        app.innerHTML = decodedText;
    }
}

export default App;
