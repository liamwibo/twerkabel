'use client'

import bronze from '@/../public/bronze.webp';
import silver from '@/../public/silver.webp';
import golden from '@/../public/gold.webp';
import platinum from '@/../public/platinum.webp';
import titanium from '@/../public/titanium.webp';
import vibranium from '@/../public/vibranium.webp';
import elon from '@/../public/elon.webp';
import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function RankedPage() {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: false,   // Whether animation should happen only once
            offset: 200,   // Offset (in pixels) from the original trigger point
        })
    }, [])
    return (
        <div>
            <div
                className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Coming Soon!</div>
                <div className="grid place-items-center">
                    <div className="text-black">
                        Twerkabel Ranked is momenteel nog in ontwikkeling. We werken hard aan het finetunen van de gameplay, matchmaking en andere functies om een optimale ervaring te bieden. Houd onze updates in de gaten voor de officiële release! Scroll naar beneden om de ranks te bekijken.
                    </div>
                    <div className="text-xs text-gray-500 mt-5">Scroll Down</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-down-short animate-bounce text-gray-500 mt-3" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
            </div>
            <div
                data-aos="fade-right"
                className="bg-white ml-3 mr-3 p-10 mt-96 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Bronze Bouncer</div>
                <div className="grid place-items-center">
                <Image className="rounded-xl" src={bronze} alt={"bronze rank"}/>
                </div>
            </div>
            <div data-aos="fade-right"
                 className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Silver Shaker</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={silver} alt={"bronze rank"}/>
                </div>
            </div>
            <div data-aos="fade-right"
                 className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Golden Grinder</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={golden} alt={"bronze rank"}/>
                </div>
            </div>
            <div
                data-aos="fade-right"
                className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Platinum Pounder</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={platinum} alt={"bronze rank"}/>
                </div>
            </div>
            <div data-aos="fade-right"
                 className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Titanium Twerker</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={titanium} alt={"bronze rank"}/>
                </div>
            </div>
            <div
                 data-aos="fade-right"
                 className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Vibranium Vibrator</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={vibranium} alt={"bronze rank"}/>
                </div>
            </div>
            <div data-aos="fade-right"
                 className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block sm:hidden">
                <div className="mb-3 text-2xl font-bold text-black">Elon Enchanter</div>
                <div className="grid place-items-center">
                    <Image className="rounded-xl" src={elon} alt={"bronze rank"}/>
                </div>
            </div>
        </div>
    );
}