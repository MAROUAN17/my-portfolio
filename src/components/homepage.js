import React from "react";
import Content from "./content";
import NavBar from "./navbar";
import Capabilities from "./capabilities";

export default function HomePage() {
    return (
        <div>
            <div className="font-poppins">
                <div className='bg-main-image bg-no-repeat bg-right w-full h-full opacity-60 absolute bg-[length:80%]'>
                </div>
                <nav className="relative">
                    <NavBar />
                </nav>
                <div className="relative">
                    <Content />
                </div>
            </div>
            <div className="">
                <Capabilities />
            </div>
        </div>
    )
}