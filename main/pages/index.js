import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>home</h1>
      <h1 className="title">
        Read <Link href="/test">this page!</Link>
      </h1>
    </main>
  );
}
