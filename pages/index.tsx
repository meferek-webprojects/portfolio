import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Background from "../components/Background";
import { SmContainer } from "../components/Containers";
import Hero from "../components/Hero";
import Title from "../components/Title";

const index = () => {
    return (
        <>
            <Head>
                <title>Mateusz Krysiak Site</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
                <meta name="author" content="Mateusz Krysiak"/>
            </Head>

            <Background/>

            <Hero />

            <SmContainer id="myprojects">
                <Title className="pt-24 w-full" main="MY PROJECTS" secondary="as a webdeveloper"/>
                <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-4 my-auto">
                    <a href="https://mkwmstudios.pl/" rel="noreferrer" target="_blank">
                        <div className="relative aspect-[16/8.2] group hover:cursor-pointer rounded-md overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none">
                            <Image className="object-cover transition-all duration-[5000ms] object-top hover:object-bottom mx-auto" fill src="/images/projects/MKWM/2.jpeg" alt=""/>
                        </div>
                        <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">MKWM Studios</p>
                    </a>
                    <a href="https://www.jfcpolska.pl/" rel="noreferrer" target="_blank">
                        <div className="relative aspect-[16/8.2] group hover:cursor-pointer rounded-md overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none">
                            <Image className="object-cover transition-all duration-[5000ms] object-top hover:object-bottom" fill src="/images/projects/JFC/2.jpeg" alt=""/>
                        </div>
                        <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">JFC Polska</p>
                    </a>
                </div>
            </SmContainer>
        </>
    );
}

export default index;