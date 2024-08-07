import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';

export default function Home() {

  const ScannerWeb = (params) => {
    window.open("https://chunred.github.io/BarcodeTest/client/");
  }

  return (
    <main>
      <div className="container bg-black">
        <div className="row mt-5">
          <h1 className='text-center text-light'>home</h1>
        </div>
        <div className="row mt-2">
          <div className="col text-center">
            <button className='btn btn-block btn-outline-light p-3 '><Link href="/scan">go to scanner web</Link></button>
          </div>
        </div>
      </div>
    </main>
  );
}
