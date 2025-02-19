'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import solarimage from "../../public/solar.jpg"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: false,   // Whether animation should happen only once
            offset: 320,   // Offset (in pixels) from the original trigger point
        })
    }, [])
  return (
      <div>
          <div className="h-60">
              <Image
                  src={solarimage}
                  width="4000"
                  height="2250"
                  alt="Solar"
                  className="-z-10 w-[100%] h-[300px] object-cover"
              />
          </div>
          <div className="bg-white ml-3 mr-3 p-10 -mt-1 z-10 relative rounded-lg break-words text-black ">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffb000"
                   className="bi bi-lightning-charge-fill mb-10" viewBox="0 0 16 16">
                  <path
                      d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
              </svg>
              <div>
                  Twerkabel is opgericht door Vincent, een visionair ondernemer die gelooft in de kracht van beweging en
                  duurzaamheid. Onze energie wordt 100% opgewekt door mensen die twerken, waardoor we niet alleen groene
                  stroom leveren, maar ook een gezonde levensstijl stimuleren.
              </div>
              <div className="grid place-items-center">
                  <div className="text-xs text-gray-500 mt-5">Scroll Down</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-arrow-down-short animate-bounce text-gray-500 mt-3" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                  </svg>
              </div>
          </div>
          <div data-aos="fade-up"
               className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words text-black block sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                   className="bi bi-joystick mb-2" viewBox="0 0 16 16">
                  <path
                      d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2"/>
                  <path
                      d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23"/>
              </svg>
              <div className="mb-3 text-2xl font-bold">Introducing ranked</div>
              <div>
                  Twerkabel is een innovatief bedrijf dat energie opwekt door kinetische energie om te zetten tijdens
                  het werken. Opgericht door Vincent, combineert Twerkabel technologie en beweging om duurzame
                  energieoplossingen te bieden. Zijn visionaire idee leidde tot de ontwikkeling van Twerkabel Ranked,
                  een game die werk en competitie samenbrengt om energieopwekking leuk en efficiënt te maken. Met een
                  focus op innovatie en duurzaamheid streeft Twerkabel ernaar om de manier waarop we werken en energie
                  verbruiken te transformeren.
              </div>
              <div className="grid place-items-center">
                  <Link className="mt-6 bg-red-500 p-3 rounded-md animate-" href="/game/ranked">Ontdek Meer</Link>
              </div>
          </div>
      </div>
  );
}
