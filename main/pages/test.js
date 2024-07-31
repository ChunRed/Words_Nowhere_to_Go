import Head from 'next/head';
import Link from 'next/link';

export default function test() {
    return (
        <main>
            <h1>test</h1>
            <h1 className="title">
                Read <Link href="/">this page!</Link>
            </h1>
        </main>
    );
}
