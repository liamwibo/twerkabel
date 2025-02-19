import Link from 'next/link';
import {bgGreen, green} from "next/dist/lib/picocolors";

export default function Navbar() {
    return (
        <div className="bg-green-600 flex items-center gap-x-5 justify-center sm:justify-start h-20 text-white  font-bold flex-wrap place-content-evenly sticky top-0 z-20">
            <div className="text-3xl text-black font-bold pr-2 hidden sm:block pl-5">Energie</div>
            <Link className="" href="/">Home</Link>
            <Link href="/info/About">Over Ons</Link>
            <Link href="/game/ranked">Ranked</Link>
        </div>
    );
}