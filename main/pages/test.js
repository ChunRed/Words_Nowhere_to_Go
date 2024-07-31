import Head from 'next/head';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

export default function test() {
    return (
        <main>
            <h1>test</h1>
            <h1 className="title">
                Read <Link href="/">this page!</Link>
            </h1>
            <h1 className='fdb'></h1>
        </main>
    );
}



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
                let value = document.querySelector('.fdb').innerHTML = 'Light State : ' + !snapshot.val();
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
