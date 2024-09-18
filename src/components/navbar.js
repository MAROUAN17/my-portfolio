import React from "react";
import Menu from "../assets/main-menu.png"

export default function NavBar() {
    return (
        <nav className="">
            <div className="flex justify-between font-poppins py-6 px-12 items-center">
                <div className="">
                    <h1 className="text-white font-bold text-2xl">MAROUAN</h1>
                </div>
                <div className="space-x-4 flex items-center">
                    <button className="max-sm:hidden text-black bg-white px-4 py-3 rounded-full font-bold">Get in touch</button>
                    <button className="border border-white px-7 py-4 rounded-full">
                        <img className="w-4" src={Menu} alt="menu-icon"></img>
                    </button>
                </div>
            </div>
        </nav>
    )
}