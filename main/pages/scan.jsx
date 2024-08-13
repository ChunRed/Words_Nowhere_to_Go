
import React, { useState, useEffect, useRef } from 'react';
import Html5QrcodePlugin from '../src/Html5QrcodePlugin.jsx'
import Router from 'next/router';
import Link from 'next/link.js';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import Typed from "typed.js";


import '../styles/global.css';
import '../styles/html5-qrcode-css.module.css';
import "bootstrap/dist/css/bootstrap.css";

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
                            id="scan_view"
                            className="border border-dark"
                            fps={10}
                            disableFlip={false}
                            //aspectRatio={custom_aspectRatio}
                            qrCodeSuccessCallback={this.onNewScanResult} />
                    </div>

                    <div className="row">
                        <div id='value' className=' mt-3 bg-black text-center'></div>
                    </div>
                </section>

                <p id="scan_value" className="h2 overflow-auto "></p>

                <style jsx>{`
                    #html5-qrcode-button-camera-stop{
                        background-color: rgb(255,0,0) !important;
                        color: rgb(255,0,0) !important;
                    }

                    #scan_value{
                        position: absolute;
                        width:100vw;
                        top: 50vh;
                        background-color: rgba(30, 30, 255, 0);
                        color: rgb(255,255,255);
                        text-align: center;
                    }
                    
                    #value{
                        color: rgb(0,0,0);
                    }
                    
                `}</style>

                <style jsx global>{`
                    .typed-cursor{
                        background-color: rgba(0, 0, 0, 0) !important;
                    }
                    .typed-cursor--blink{
                        background-color: rgba(0, 0, 0, 0) !important;
                    }
                    
                    span{
                        background-color: rgba(0, 0, 0, 0) !important;
                    }
                `}</style>
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

        if (document.getElementById('value').innerHTML != decodedText) {
            document.getElementById('value').innerHTML = decodedText;
            const firebaseConfig = {
                apiKey: "AIzaSyBCM30dzmjIothg9SmLV32i9BROyvZbXqk",
                authDomain: "words-nowhere-to-go.firebaseapp.com",
                databaseURL: "https://words-nowhere-to-go-default-rtdb.firebaseio.com",
                projectId: "words-nowhere-to-go",
                storageBucket: "words-nowhere-to-go.appspot.com",
                messagingSenderId: "867012400062",
                appId: "1:867012400062:web:f2d7ad6250d9d6d3221fef",
                measurementId: "G-FBJ3E6X8MD"
            };

            const App = initializeApp(firebaseConfig);

            const dbRef = ref(getDatabase());
            get(child(dbRef, '/' + decodedText[6] + decodedText[7])).then((snapshot) => {
                if (snapshot.exists()) {

                    let data = snapshot.val();
                    let firebase_data = "";

                    console.log(data);

                    // deal with firebase message
                    firebase_data = data[data.length - 1];

                    const app = document.getElementById("scan_value");
                    let typed = new Typed(app, {
                        strings: [firebase_data],
                        startDelay: 0,
                        typeSpeed: 10,
                        backSpeed: 0,
                        backDelay: 0,
                        showCursor: false,
                        onComplete: (self) => {
                            self.destroy();
                            app.innerHTML = firebase_data;

                            let br = document.createElement("br");
                            let button = document.createElement("BUTTON");
                            let t = document.createTextNode("preserve some words");
                            
                            button.appendChild(t);
                            app.appendChild(br);
                            app.appendChild(button);

                            button.style.position = 'absolut';
                            button.style.fontSize = '13px';
                            button.style.backgroundColor = 'rgb(255,0,0)';
                            button.onclick = () => {
                                Router.push({
                                    pathname: "/show",
                                    query: {
                                        v,
                                    },
                                });
                            }
                        },
                    });
                    app.style.padding = "10px";



                } else {
                    console.log("No data available");
                    const app = document.getElementById("scan_value");
                    let typed = new Typed(app, {
                        strings: ['no message'],
                        startDelay: 0,
                        typeSpeed: 50,
                        backSpeed: 0,
                        backDelay: 0,
                        showCursor: false,
                        onComplete: (self) => {
                            self.destroy();
                            app.innerHTML = 'no message';

                            let br = document.createElement("br");
                            let button = document.createElement("BUTTON");
                            let t = document.createTextNode("preserve some words");
                            
                            button.appendChild(t);
                            app.appendChild(br);
                            app.appendChild(button);

                            button.style.position = 'absolut';
                            button.style.fontSize = '13px';
                            button.onclick = () => {
                                Router.push({
                                    pathname: "/show",
                                    query: {
                                        v,
                                    },
                                });
                            }
                        },
                    });
                    app.style.padding = "10px";

                }
            }).catch((error) => {
                console.error(error);
            });

            let v = decodedText;
        }

    }
}

export default App;
