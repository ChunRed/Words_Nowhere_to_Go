import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useState, useEffect, useRef } from 'react'
import Typed from "typed.js";


export default function Show() {
    const el = useRef(null);

    //get scan value
    const router = useRouter();
    const {
        query: { v },
    } = router
    const props = { v };
    //get scan value

    //console.log('/' + props.v[6] + props.v[7]);


    //firebase
    let firebase_data = '';
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
                    console.log(snapshot.val());
                    let data = snapshot.val();

                    // deal with firebase message
                    for (let i = 0; i < data.length; i++) {
                        firebase_data += i + ". <br>";
                        firebase_data += data[i];
                        firebase_data += "<br><br>"
                    }
                    let firebase_new_data = ''
                    for (let i = 0; i < firebase_data.length; i++) {
                        if (firebase_data[i] == '█') {
                            firebase_new_data += '<span style="color:rgb(30,30,255); background-color:rgb(30,30,255); border:1px solid rgb(30,30,255)">█</span>'
                        }
                        else {
                            firebase_new_data += firebase_data[i];
                        }
                    }


                    const typed = new Typed(el.current, {
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
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    useEffect(readOnceWithGet, []);
    //firebase




    return (
        <main>
            <div className="container bg-black">
                <div className="row mt-3">
                    <h1 className='text-center text-light'>Message In the Barcode</h1>
                    <h1 className='text-center text-light'>{props.v}</h1>
                </div>


                <div className="row mt-3">
                    <div className='text-light text-center h5 '>save some message in this barcode</div>
                    <div className={styles.hrline}></div>
                </div>

                <div className="row m-1">
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className='text-light text-center h5 '>massage in this barcode</div>
                    <div className={styles.hrline}></div>
                </div>

                <div className="row text-light" >
                    <div className="overflow-auto scroll-height mt-3">
                        <p ref={el} className='m-3 text-light'>hhh</p>
                    </div>
                    <style jsx>{`
                        .scroll-height{
                            height: 400px;
                        }
                    `}</style>
                </div>


                <div className="row mt-5">
                    <div className='text-light text-center h5'> go back  </div>
                    <div className={styles.hrline}></div>
                </div>

                <div className="col text-center">
                    <button className='btn btn-block btn-outline-light p-2 m-3'><Link className='h4' href={'/scan'}>back to scan</Link></button>
                    <button className='btn btn-block btn-outline-light p-2 m-3'><Link className='h4' href={'/'}>back to home</Link></button>
                </div>

            </div>
        </main>
    );
}
