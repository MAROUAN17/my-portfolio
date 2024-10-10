import React from "react";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Capabilities() {
    return (
        <div className="space-y-2">
            <div className="text-center">
                <h1 className="text-white font-bold text-5xl">Tools And Technologies</h1>
                <p className="text-white py-3 text-lg">Front-end Development</p>
            </div>
            <div className="flex justify-center w-full bg-gray-950">
                <div className="flex items-center space-x-2 p-10">
                    <FaHtml5 className="text-white text-2xl" />
                    <h1 className="text-white text-xl font-bold">HTML</h1>
                </div>
                <div className="flex items-center space-x-2 p-10">
                    <FaCss3Alt className="text-white text-2xl"/>
                    <h1 className="text-white text-xl font-bold">CSS</h1>
                </div>
                <div className="flex items-center space-x-2 p-10">
                    <RiTailwindCssFill className="text-white text-2xl"/>
                    <h1 className="text-white text-xl font-bold">TailwindCSS</h1>
                </div>
                <div className="flex items-center space-x-2 p-10">
                    <RiReactjsFill className="text-white text-2xl" />
                    <h1 className="text-white text-xl font-bold">ReactJS</h1>
                </div>
                <div className="flex items-center space-x-2 p-10">
                    <IoLogoJavascript className="text-white text-2xl"/>
                    <h1 className="text-white text-xl font-bold">JavaScript</h1>
                </div>
            </div>
        </div>
    )
}
