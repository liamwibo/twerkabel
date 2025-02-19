import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <div>
            <div
                className="bg-white ml-3 mr-3 p-10 mt-10 mb-10 relative rounded-lg break-words tex t-black block">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black"
                     className="bi bi-info-circle mb-4" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
                <div className="mb-3 text-2xl font-bold text-black">Over Ons</div>
                <div className="grid place-items-center">
                    <div className="text-black">
                        Welkom bij Twerkabel, dé toekomst van duurzame energie! 🌍⚡ Terwijl anderen zonne- en windenergie
                        gebruiken, zagen wij een onbenutte krachtbron: twerkende mensen. Ja, je leest het goed! Onder
                        leiding van onze visionaire CEO, Vincent, zetten we elke shake, bounce en drop om in pure
                        elektriciteit.
                        Of je nu een doorgewinterde twerker bent of gewoon je best doet op de maat, bij ons draag je
                        letterlijk bij aan een groenere planeet. 💃🔋 Sluit je aan en laat die wattages maar komen!
                    </div>
                    <div className="text-black text-xs text-center mt-3">Hier een korte informatieve video over hoe wij tewerk gaan.</div>
                    <Link className="mt-6 bg-red-500 p-3 rounded-md animate-" href="https://www.youtube.com/watch?v=TSpDnK3K3YY">Bekijk Hier!</Link>
                </div>
            </div>
        </div>
    );
}