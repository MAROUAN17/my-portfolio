import React from "react";
import Content from "./content";
import NavBar from "./navbar";
import Capabilities from "./capabilities";

export default function HomePage() {
    return (
        <div>
            <div className="font-poppins relative">
                <div className='absolute inset-0 bg-[right_1px] overflow-hidden max-h-max bg-main-image bg-no-repeat w-full h-full opacity-60 bg-[length:70%]'></div>
                <nav className="relative">
                    <NavBar />
                </nav>
                <div className="relative">
                    <Content />
                </div>
            </div>
            <div className="relative">
                <Capabilities />
            </div>
        </div>
    )
}