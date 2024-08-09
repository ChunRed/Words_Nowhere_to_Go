import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';
import Typed from "typed.js";
import React, { useState, useEffect, useRef } from 'react'

export default function Home() {

  const ScannerWeb = (params) => {
    window.location.href = "https://chunred.github.io/BarcodeTest/client/";
  }

  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);

  function show() {
    let typed1 = new Typed(t1.current, {
      strings: ['In today\'s world, the rapid and convenient flow of information has become a defining feature of our lives. However, conversations between people are now often subject to the presence of a third party—monitoring, censorship, and the monopolization and manipulation by technological capital and power.'],
      startDelay: 0,
      typeSpeed: 20,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });

    let typed2 = new Typed(t2.current, {
      strings: ['The work " Words Nowhere to Go " seeks to create a sanctuary amid this turbulent era, where voices and thoughts can find refuge.'],
      startDelay: 50,
      typeSpeed: 55,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });

    let typed3 = new Typed(t3.current, {
      strings: ['In the digital age, let us preserve memories, emotions, and words that were once silenced, weaving them into the fabric of everyday life through the use of “Barcodes.”'],
      startDelay: 0,
      typeSpeed: 40,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });
  }

  useEffect(show, []);

  return (
    
    <main>
      <div className="container bg-black">
        <div className="row mt-5">
          <h1 className='text-center text-light'>- Words Nowhere to Go -</h1>
        </div>

        <div className="row m-3">
          <div className={styles.hrline}></div>
        </div>

        <div className="row m-3">
          <div ref={t1} className="text-light mt-3"></div>

          <div ref={t2} className="text-light mt-3"></div>

          <div ref={t3} className="text-light mt-3"></div>
        </div>

        <div className="row mt-5">
          
          <div className="col text-center">
            <button className='btn btn-block btn-outline-light p-2 w-100'><Link className='h4' href={'/scan'}>Start To Scan</Link></button>
          </div>
        </div>
      </div>
    </main>
  );

  

}
