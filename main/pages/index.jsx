import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';
import Typed from "typed.js";
import React, { useState, useEffect, useRef } from 'react'

export default function Home() {

  const t1 = useRef(null);

  function show() {
    let typed1 = new Typed(t1.current, {
      strings: ['In today\'s world, the rapid flow of information defines our lives. Yet, exchanges between people are often monitored, censored, and manipulated by technological powers, leaving individuals unable to acknowledge their gender, country, or speak freely.<br><br>The work "Words Nowhere to Go" aims to create a sanctuary in this turbulent era, where voices and thoughts can find refuge.<br><br>In the digital age, let us preserve the once-silenced memories, emotions, and words, weaving them into everyday life through "Barcodes."'],
      startDelay: 3000,
      typeSpeed: 2,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });
  }

  useEffect(show, []);

  return (

    <main>
      <div className="container bg-black">
        <div className="row">
          {/* <h1 className='text-center text-light'>- Words Nowhere to Go -</h1> */}
          <video className='fullscreen-video' src={require('../media/03.mp4')} autoPlay muted loop playsInline />
        </div>

        <div className="row">
          <div className={styles.hrline}></div>
        </div>

        <header>
          <video className='fullscreen-video' src={require('../media/01.mp4')} autoPlay muted loop playsInline />
          <div className="header-content">
            <div className="header-content-inner">
              <div className="row test w-100">
                <div ref={t1} className="text-light mt-3 "></div>
              </div>

            </div>
          </div>
        </header>

        <div className="row mt-2">
          <div className="col text-center">
            <button className='btn btn-block btn-outline-light p-2 w-100'><Link className='h4' href={'/scan'}>Start To Scan</Link></button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <button className='btn btn-block btn-outline-light p-2 w-100'><Link className='h4' href={'/about'}>About</Link></button>
          </div>
        </div>

      </div>
    </main>
  );



}
