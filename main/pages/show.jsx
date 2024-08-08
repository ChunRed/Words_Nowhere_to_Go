import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import React, { useState, useEffect, useRef } from 'react'
import Typed from "typed.js";


export default function Show() {
    const el = useRef(null);

    //get scan value
    const router = useRouter();
    const {
        query: { v = 'go to scan' },
    } = router
    const props = { v };
    //get scan value

    //read firebase data/////////////////////////////////////////////////////////
    let firebase_data = '';
    let firebase_data_length = 0;
    let typed;

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

    const app = initializeApp(firebaseConfig);

    let value = props.v;

    function readOnceWithGet() {
        const dbRef = ref(getDatabase());
        if (value != undefined) {
            get(child(dbRef, '/' + props.v[6] + props.v[7])).then((snapshot) => {
                if (snapshot.exists()) {
                    
                    let data = snapshot.val();
                    firebase_data_length = data.length;
                    console.log(data);
                    console.log(firebase_data_length);
                    console.log('/' + props.v[6] + props.v[7]+'/'+(firebase_data_length));

                    // deal with firebase message
                    for (let i = 0; i < data.length; i++) {
                        firebase_data += i + ". <br>";
                        firebase_data += data[data.length-1-i];
                        firebase_data += "<br><br>"
                    }
                    let firebase_new_data = '';
                    for (let i = 0; i < firebase_data.length; i++) {
                        if (firebase_data[i] == '█') {
                            firebase_new_data += '<span style="color:rgb(30,30,255); background-color:rgb(30,30,255); border:1px solid rgb(30,30,255)">█</span>'
                        }
                        else {
                            firebase_new_data += firebase_data[i];
                        }
                    }

                    typed = new Typed(el.current, {
                        strings: [firebase_new_data], // Strings to display
                        // Speed settings, try diffrent values untill you get good results
                        startDelay: 0,
                        typeSpeed: 2,
                        backSpeed: 0,
                        backDelay: 0
                    });

                    // Destropying
                    return () => {
                        typed.destroy();
                    };

                } else {
                    console.log("No data available");
                    typed = new Typed(el.current, {
                        strings: ["no message"],
                        startDelay: 0,
                        typeSpeed: 10,
                        backSpeed: 0,
                        backDelay: 0
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    useEffect(readOnceWithGet, []);
    //read firebase data/////////////////////////////////////////////////////////

    //send data to firebase/////////////////////////////////////////////////////
    function set_firebase_data(e) {
        const { value } = document.querySelector(e.target.getAttribute("data-input"));
        firebase_data = '';
        writeUserData(value);
        readOnceWithGet();
    }
    function writeUserData(value) {
        const db = getDatabase();
        
        set(ref(db, '/' + props.v[6] + props.v[7]+'/'+(firebase_data_length)), value);
    }
    //send data to firebase/////////////////////////////////////////////////////



    return (
        <main>
            <div className="container bg-black">
                <div className="row mt-3">
                    <h1 className='text-center text-light'>Message In the Barcode</h1>
                    <h5 className='text-center text-light mt-5'>[ {props.v} ]</h5>
                </div>


                <div className="row mt-5 justify-content-center align-items-center">
                    <div className="card text-light bg-black border-light scroll-width">
                        <div className="card-header border-light h5 text-center">Write Message In This Barcode</div>
                        <div className="card-body">
                            <div className="input-group mt-2 ">
                                <input id='input_value' type="text" className="form-control" placeholder="your message..." aria-label="Write Message In This Barcode" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light" data-input="#input_value" onClick={(e) => set_firebase_data(e)} type="button">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center align-items-center" >

                    <div className="text-light mt-3 card bg-black border-light scroll-width">
                        <div className="card-header border-light h4 text-center">History Messages</div>
                        <div className="card-body overflow-auto scroll-height mt-1 mb-1">
                            <p ref={el} className='card-text'></p>
                        </div>
                    </div>
                </div>


                <div className="col text-center mt-5">
                    <button className='btn btn-block btn-outline-light p-2 m-3'><Link className='p-3' href={'/scan'}>back to scan</Link></button>
                    <button className='btn btn-block btn-outline-light p-2 m-3'><Link className='p-3' href={'/'}>back to home</Link></button>
                </div>

                <style jsx>{`
                    .scroll-height{
                        height: 200px;
                    }
                    .scroll-width{
                        width: 22rem;
                    }
                    
                `}</style>

            </div>
        </main>
    );
}
