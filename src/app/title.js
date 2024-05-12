'use client'
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'

export function Title() {
    const text1 = "Front-End Developer"
    const text2 = "Back-End Developer"
    const [text, setText] = useState(text1);

    const displayText1 = () => {
        setText(text1);
        setTimeout(displayText2, 5000);
    }

    const displayText2 = () => {
        setText(text2);
        setTimeout(displayText1, 5000);
    }

    useEffect(() => {
        displayText1()
        return () => {
            clearTimeout(displayText1);
            clearTimeout(displayText2);
        }
    }, [])

    const variants = {
        hidden : {opacity : 0},
        visible: {opacity : 1}
    }

    return (
        <div className="text-left ml-72 text-10xl">
            <h1 className="">Hi,</h1>
            <h1 className="">I'm Marouan</h1>
            <motion.span 
                className=""
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
                key={text}
            >
                {text.split('').map((text) => {
                    return (
                    <motion.span 
                        variants={variants}
                        className=""
                        >
                            {text}
                    </motion.span>
                )
                })}
            </motion.span>
        </div>
    )
}