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
          <div className="text-light lh-lg ">從貼紙的張貼到網路世代的發貼文，媒介的轉變並未改變對「言論意表」的重視，然而，在網路世 代，訊息流動的速度與便利性更加提升，人與人的對話之間多了監控、審查的第三者，更多了科技資 本、權力控制的壟斷與矇騙。作品《Words Nowhere to Go》旨在這充滿言論紛擾、流動迅速的時代中 創造一片淨土，將我們每個人認為重要的言詞封存在其中，透過貼紙實際的張貼與數位的儲存，期盼 這些無處可去的文字及話語能夠尋得寄宿之處，伴隨空間與人留存於世。</div>
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
