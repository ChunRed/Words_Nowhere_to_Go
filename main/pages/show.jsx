import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/global.css';
import {useRouter} from "next/router";

export default function Show() {
    const router = useRouter();

    const {
        query: {v},
    } = router

    const props = {v};

    return (
        <main>
            <div className="container bg-black">
                <div className="row mt-5">
                    <h1 className='text-center text-light'>SHOW</h1>
                </div>

                <div className="row mt-5">
                    <h1 className='text-center text-light'>{props.v}</h1>
                </div>
                
            </div>
        </main>
    );
}
