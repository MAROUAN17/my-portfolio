'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from "react"
import frontPic from "../../public/frontend_icon.png"
import backPic from "../../public/backend_icon.png"
import myVector from "../../public/man_glasses.png"
import { PageWrapper } from './pagewrapper';
import { Title } from './title';


function Main() {

const [f_isHovered, f_setIsHovered] = useState(false);
const [s_isHovered, s_setIsHovered] = useState(false);
const [t_isHovered, t_setIsHovered] = useState(false);
const [fo_isHovered, fo_setIsHovered] = useState(false);
const [f_desc, f_setDescr] = useState("So_Long");
const [s_desc, s_setDescr] = useState("Push_Swap");
const [t_desc, t_setDescr] = useState("Ft_printf");
const [fo_desc, fo_setDescr] = useState("Employees management");


// useEffect( () => {
//     scrollYProgress.on("change", e => console.log(e))
// }, []);

const f_mouseHover = () => {
    f_setIsHovered(true);
    f_setDescr("This project is a small 2D game with minilibx. So i can learn about textures, sprites and tiles.");
}

const f_mouseLeave = () => {
    f_setIsHovered(false);
    f_setDescr("So_Long");
}

const s_mouseHover = () => {
    s_setIsHovered(true);
    s_setDescr("This project involves sorting data on a stack, with a limited set of instructions, and the smallest number of moves. To make this happen, you will have to manipulate various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting.");
}

const s_mouseLeave = () => {
    s_setIsHovered(false);
    s_setDescr("Push_Swap");
}

const t_mouseHover = () => {
    t_setIsHovered(true);
    t_setDescr("About This project is pretty straightforward, you have to recode printf. You will learn what is and how to implement variadic functions. Once you validate it, you will reuse this function in your future projects.");
}

const t_mouseLeave = () => {
    t_setIsHovered(false);
    t_setDescr("Ft_printf");
}

const fo_mouseHover = () => {
    fo_setIsHovered(true);
    fo_setDescr("A Web app to manage employees using Laravel & ReactJS");
}

const fo_mouseLeave = () => {
    fo_setIsHovered(false);
    fo_setDescr("Employees management");
}

return (
    <html>
    <body className="">
        <PageWrapper>
        <nav className="bg-black">
            <div className="flex justify-around py-3 ml-12">
                <div className="mt-2">
                    <a href="" className="font-bold text-2xl justify-start text-white">PORTFOLIO</a>
                </div>
                <div className="py-3">
                    <a href="" className="mr-6 justify-end font-semibold text-black hover:text-white-800 bg-gray-50 px-7 py-3 rounded-full">Github</a>
                    <a href="" className="mr-6 justify-end font-semibold hover:text-white text-white bg-black px-7 py-3 rounded-full">Contact</a>
                </div>
            </div>
        </nav>
        <div className='bg-black'>
            <div className='bg-black mx-40 pt-32'>
                <h1 className="my-24 font-poppins font-bold text-center text-6xl text-white">
                    <Title />
                </h1>
                {/* <p className="font-poppins text-center mt-4 text-xl text-white">I code beautifully simple things, and I love what I do.</p> */}
            </div>
            {/* <div className="flex justify-center">
                <Image src={myVector} width={350} height={350} />
            </div> */}
            <div className="relative py-12 pb-52">
                {/* <p className="text-4xl text-center mb-6 font-bold text-white font-poppins">Hi, I’m Marouan. Nice to meet you.</p>
                <div className="px-96">
                    <p className="text-center text-white font-poppins">
                        Since beginning my journey as a freelance designer 12 years ago, I've done
                        remote work for <br></br>agencies, consulted for startups, and collaborated with
                        talented people to create digital products <br></br> for both business and consumer
                        use. I'm quietly confident, naturally curious, and <br></br> perpetually working on improving my chops.
                    </p>
                </div> */}
                <div className="flex justify-center">
                    <div className="absolute top-32 flex justify-center rounded-lg">
                        <div className="border-r-2 py-28 px-24 pb-48 bg-white">
                            <Image src={frontPic} width={80} height={80} className="ml-28 mb-12" />
                            <h1 className="font-bold text-2xl text-black text-center">Frontend Developer</h1>
                            <p className="text-center mt-6 text-black">I value simple content structure, clean design<br></br> patterns, and thoughtful interactions.</p>
                            <h2 className="text-center font-bold mt-16 text-xl text-black">Languages I speak:</h2>
                            <p className="text-center mt-1 text-black">HTML, Pug, Slim, CSS, Sass, Git</p>
                        </div>
                        <div className="py-28 px-24 pb-52 bg-white">
                            <Image src={backPic} width={80} height={80} className="ml-28 mb-12" />
                            <h1 className="font-bold text-2xl text-center text-black">Backend Developer</h1>
                            <p className="text-center mt-6 text-black">I like to code things from scratch, and enjoy<br></br> bringing ideas to life in the browser.</p>
                            <h2 className="text-center font-bold mt-16 text-xl text-black">Languages I speak:</h2>
                            <p className="text-center mt-1 text-black">Laravel, AngularJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-130 bg-white">
            <h1 className="text-center font-bold text-5xl text-black font-poppins">MY RECENT WORK</h1>
            <div className="mt-12 grid grid-cols-2 mx-24">
                <div 
                    className="py-24 px-42 border bg-black rounded-lg hover:bg-white"
                    onMouseEnter={f_mouseHover}
                    onMouseLeave={f_mouseLeave}
                >
                    <a href="https://github.com/MAROUAN17/-42cursus-So_Long">
                        <h1 
                        className={`text-xl transition duration-500 ease-in-out text-center font-semibold font-poppins ${f_isHovered ? 'text-black' : 'text-white'}`}
                        >
                        {f_desc}
                        </h1>
                    </a>
                </div>
                <div 
                    className="py-24 px-42 border ml-2 rounded-lg bg-black hover:bg-white"
                    onMouseEnter={s_mouseHover}
                    onMouseLeave={s_mouseLeave}
                >
                    <img src="" />
                    <a href="https://github.com/MAROUAN17/-42cursus-Push-Swap">
                        <h1 
                        className={`text-xl transition duration-500 ease-in-out text-center font-bold font-poppins ${s_isHovered ? 'text-black' : 'text-white'}`}
                        >
                        {s_desc}
                        </h1>
                    </a>
                </div>
            </div>
            <div className="mt-2 grid grid-cols-2 mx-24">
                <div 
                className="py-24 px-42 border bg-black rounded-lg hover:bg-white"
                onMouseEnter={t_mouseHover}
                onMouseLeave={t_mouseLeave}
                >
                    <a href="https://github.com/MAROUAN17/-42cursus-ft_printf">
                        <h1 className={`transition duration-500 ease-in-out text-center font-bold font-poppins text-xl ${t_isHovered ? 'text-black' : 'text-white'}`}>
                        {t_desc}
                        </h1>
                    </a>
                </div>
                <div 
                className="py-24 px-42 border ml-2 bg-black rounded-lg hover:bg-white"
                onMouseEnter={fo_mouseHover}
                onMouseLeave={fo_mouseLeave}
                >
                    <a href="https://github.com/MAROUAN17/employeemanagement">
                        <h1 className={`transition duration-500 ease-in-out text-center font-bold font-poppins text-xl ${fo_isHovered ? 'text-black' : 'text-white'}`}>
                        {fo_desc}
                        </h1>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center mt-12">
                <a className="flex items-center text-center rounded-lg px-10 py-4 bg-black text-white font-poppins font-bold" href="https://github.com/MAROUAN17">
                    <svg className='' viewBox="0 -3.5 256 256" width="28" height="28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>
                    <p className='ml-2'>See more on github</p>
                </a>
            </div>
        </div>
        <div className="mt-24 p-52 bg-black">
            <div className="text-center">
                <img href=""/>
                <h1 className="text-white font-semibold text-2xl font-poppins">Start a project</h1>
                <p className="text-white mt-2 font-poppins">
                    Interested in working together? We should queue up a time to chat.
                </p>
                <div className="flex justify-center mt-4">
                    <a href=""><svg className='mr-2' fill="#ffffff" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20.3 57.3996C43.9 57.3996 56.7 37.8996 56.7 20.9996C56.7 20.5996 56.7 19.8996 56.6 19.2996C59.1 17.4996 61.3 15.1996 63 12.6996C60.6 13.7996 58.2 14.3996 55.7 14.6996C58.4 13.0996 60.4 10.5996 61.3 7.59961C58.8 8.99961 56.2 10.0996 53.1 10.6996C50.7 8.19961 47.5 6.59961 43.8 6.59961C36.7 6.59961 30.9 12.3996 30.9 19.4996C30.9 20.4996 31 21.4996 31.2 22.4996C20.9 21.7996 11.5 16.6996 5.1 8.99961C4 10.9996 3.4 13.0996 3.4 15.3996C3.4 19.8996 5.7 23.6996 9.2 25.9996C7.1 25.8996 5.1 25.2996 3.4 24.3996C3.4 24.4996 3.4 24.4996 3.4 24.4996C3.4 30.5996 7.8 35.8996 13.6 37.0996C12.5 37.3996 11.3 37.4996 10.4 37.4996C9.6 37.4996 8.7 37.3996 8 37.1996C9.7 42.2996 14.4 45.9996 20 46.0996C15.6 49.4996 10.1 51.5996 4.2 51.5996C3 51.7996 2 51.5996 1 51.4996C6.4 55.2996 13.1 57.3996 20.3 57.3996Z"/></svg></a>
                    <a href=""><svg className="mr-2" fill="#ffffff" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M58.5016 1H5.60156C3.10156 1 1.10156 3 1.10156 5.5V58.5C1.10156 60.9 3.10156 63 5.60156 63H58.3016C60.8016 63 62.8016 61 62.8016 58.5V5.4C63.0016 3 61.0016 1 58.5016 1ZM19.4016 53.7H10.3016V24.2H19.4016V53.7ZM14.8016 20.1C11.8016 20.1 9.50156 17.7 9.50156 14.8C9.50156 11.9 11.9016 9.5 14.8016 9.5C17.7016 9.5 20.1016 11.9 20.1016 14.8C20.1016 17.7 17.9016 20.1 14.8016 20.1ZM53.9016 53.7H44.8016V39.4C44.8016 36 44.7016 31.5 40.0016 31.5C35.2016 31.5 34.5016 35.3 34.5016 39.1V53.7H25.4016V24.2H34.3016V28.3H34.4016C35.7016 25.9 38.6016 23.5 43.1016 23.5C52.4016 23.5 54.1016 29.5 54.1016 37.7V53.7H53.9016Z"/></svg></a>
                    <a href=""><svg className="mr-2" fill="#ffffff" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z"/></svg></a>
                    <a href="https://mail.google.com/mail/u/marouan.agl@gmail.com"><svg class=" text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" viewBox="0 0 23 23">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                    </svg></a>
                </div>
            </div>
        </div>
        </PageWrapper>
    </body>
    </html>
    )
}

export default Main;