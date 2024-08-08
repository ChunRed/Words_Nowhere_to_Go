import Head from 'next/head';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import React, { useState, useEffect } from 'react'

export default function test() {
    const [count, setCount] = useState(0);


    //firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDczxCZJxpaY-Clph8mpTOaSdLAmP_O8tc",
        authDomain: "plantio-9dfc4.firebaseapp.com",
        databaseURL: "https://plantio-9dfc4-default-rtdb.firebaseio.com",
        projectId: "plantio-9dfc4",
        storageBucket: "plantio-9dfc4.appspot.com",
        messagingSenderId: "1005503248557",
        appId: "1:1005503248557:web:237e06b3309dd53c756e24",
        measurementId: "G-58TXGRQ5Z5"
    };


    const app = initializeApp(firebaseConfig);

    function readOnceWithGet() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, '/light')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                if (typeof window !== 'undefined') {
                    setCount('Light State : ' + !snapshot.val());
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    setInterval(() => {
        readOnceWithGet();
    }, 1000);



    return (
        <main>
            <h1>test</h1>
            <h1 className="title">
                Read <Link href="/">this page!</Link>
            </h1>
            <h1 className='fdb'>{count}</h1>
        </main>
    );
}
