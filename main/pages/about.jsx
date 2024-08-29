import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import styles from '../styles/layout.module.css';
import Typed from "typed.js";
import Image from "next/image";

export default function test() {
    const IG = (params) => {
        window.location.href = "https://www.instagram.com/chun_huang_lin/";
    }
    const CH2 = (params) => {
        window.location.href = "https://www.instagram.com/ch2_works/";
    }
    const Web = (params) => {
        window.location.href = "https://huangwork.com";
    }

    const t1 = useRef(null);
    const t2 = useRef(null);

    function show() {
        let typed1 = new Typed(t1.current, {
            strings: ['Chun-Huang LIN  |  GRed'],
            startDelay: 500,
            typeSpeed: 20,
            backSpeed: 0,
            backDelay: 0,
            showCursor: false,
        });

        let typed2 = new Typed(t2.current, {
            strings: ['New Media Art | Interractive Development'],
            startDelay: 1500,
            typeSpeed: 50,
            backSpeed: 0,
            backDelay: 0,
            showCursor: false,
        });
    }

    useEffect(show, []);

    return (
        <main>
            <div className="container bg-black">
                <div className="row mt-2">
                    <h1 className='text-center text-light' >- About -</h1>
                </div>

                <div className="row">
                    <div className={styles.hrline}></div>
                </div>

                <div className="row mt-5 ">
                    <div className="text-center">
                        <Image
                            src="/300.jpg"
                            width={200}
                            height={150}
                            priority={true}
                            alt="Picture of the author"
                        />
                    </div>
                </div>

                <div className="row mt-1">
                    <div ref={t1} className="text-light mt-1 h5 text-center"></div>
                </div>
                <div className="row mt-2">
                    <div ref={t2} className="text-light text-center" style={{ opacity: 0.5 }}></div>
                </div>

                <div className="row mt-4">
                    <div className="col text-center">
                        <button className='btn btn-block btn-outline-light p-2 w-100 ' onClick={IG}>GRed IG</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col text-center">
                        <button className='btn btn-block btn-outline-light p-2 w-100 ' onClick={CH2}>CH2 IG</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col text-center">
                        <button className='btn btn-block btn-outline-light p-2 w-100 ' onClick={Web}>CH2 Website</button>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col text-center">
                        <button className='btn btn-block btn-outline-light p-2 w-100'><Link className='h4' href={'/'}>Home</Link></button>
                    </div>
                </div>


            </div>

            <style jsx global>{`
                    html {
                        background-color: black;
                    }

                    body {
                        background-color: black;
                    }
            `}</style>
        </main>
    );
}