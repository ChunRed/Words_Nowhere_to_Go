import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
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

    console.log('/' + props.v[6] + props.v[7]);


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

    function readOnceWithGet() {
        const dbRef = ref(getDatabase());
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

                const typed = new Typed(el.current, {
                    strings: [firebase_data], // Strings to display
                    // Speed settings, try diffrent values untill you get good results
                    startDelay: 0,
                    typeSpeed: 20,
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

    useEffect(readOnceWithGet, []);
    //firebase




    return (
        <main>
            <div className="container bg-black">
                <div className="row mt-5">
                    <h1 className='text-center text-light'>SHOW</h1>
                </div>

                <div className="row mt-5">
                    <h1 className='text-center text-light'>{props.v}</h1>
                </div>

                <div className="row mt-5">
                    <p ref={el} className='m-3 text-light'></p>
                </div>

            </div>
        </main>
    );
}
