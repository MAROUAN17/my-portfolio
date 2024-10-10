import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`transition ease-in-out duration-100 relative font-poppins ${isOpen ? 'bg-white text-black' : 'text-white bg-black'} `}>
            <div className="flex justify-between items-center md:px-20 md:py-6 px-8 py-5">
                <div className="">
                    <h1 className="font-bold text-2xl">MAROUAN.</h1>
                </div>
                <div className="space-x-4 flex items-center">
                    <button className={`max-sm:hidden text-black bg-white px-4 py-3 rounded-full font-bold ${isOpen ? 'bg-white border border-black' : 'text-black' }`}>Get in touch</button>
                    <button className={`px-7 py-4 rounded-full ${isOpen ? 'border border-black' : 'border border-white'}`} onClick={() => {setIsOpen((prev) => !prev)}}>
                        {!isOpen ? (
                            <CiMenuBurger className="text-white" />
                         ) : (
                            <IoClose className="text-black"/>
                         )}
                    </button>
                </div>
            </div>
            {
                isOpen && (
                    <div className={`animate-slideIn absolute w-full bg-white font-bold px-20 py-44 space-y-12`}>
                        <div className="flex justify-between">
                            <a href="/"><h1 className="text-8xl hover:opacity-60">Home</h1></a>
                            <button className="px-12 border border-black rounded-full hover:opacity-60">
                                <GrLinkNext />
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <a href=""><h1 className="text-8xl hover:opacity-60">About</h1></a>
                            <button className="px-12 border border-black rounded-full hover:opacity-60">
                                <GrLinkNext />
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <a href=""><h1 className="text-8xl hover:opacity-60">Works</h1></a>
                            <button className="px-12 border border-black rounded-full hover:opacity-60">
                                <GrLinkNext />
                            </button>
                        </div>
                        {/* <div className="flex space-x-12 ">
                            <h1>Instagram</h1>
                            <h1>Github</h1>
                            <h1>Linkedin</h1>
                            <h1>X</h1>
                        </div> */}
                    </div>  
                )
            }
        </nav>
    )
}