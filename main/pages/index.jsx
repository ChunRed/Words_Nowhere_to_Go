import Head from 'next/head';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import styles from '../styles/layout.module.css';

export default function Home() {

  const ScannerWeb = (params) => {
    window.location.href = "https://chunred.github.io/BarcodeTest/client/";
  }

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
          <div className="text-light lh-lg text-center h2">Description<br />Interactive Process<br />Artist</div>
        </div>

        <div className="row mt-5">
          {/* <div className="col text-center">
            <button onClick={ScannerWeb} className='btn btn-block btn-outline-light p-3 '>go to scanner web</button>
          </div> */}
          <div className="col text-center">
            <button  className='btn btn-block btn-outline-light p-2 w-100'><Link className='h4' href={'/scan'}>go to scanner web</Link></button>
          </div>
        </div>
      </div>
    </main>
  );
}
