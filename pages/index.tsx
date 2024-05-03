import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Background from "../components/Background";
import { SmContainer } from "../components/Containers";
import Hero from "../components/Hero";
import Title from "../components/Title";
import designProjects from "../components/database/desginProjects.json";
import Modal from "../components/Modal";
import MyDesignProjects from "../components/MyDesignProjects";
import MyWebProjects from "../components/MyWebProjects";

const Index = () => {

    const [openModal, setOpenModal] = useState<any>(null);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        let animationFrameId: any;
    
        const handleScroll = (event: any) => {
            if (!scrolling && event.deltaY > 0) {
                setScrolling(true);
                animationFrameId = requestAnimationFrame(() => {
                    setTimeout(() => {
                        setScrolling(false);
                    }, 1000); // Ustawienie czasu opóźnienia w milisekundach
                });
            }
        };
    
        window.addEventListener("wheel", handleScroll);
    
        return () => {
            window.removeEventListener("wheel", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrolling]);

    useEffect(() => {
        if (scrolling) {
            const sections = document.querySelectorAll('.scrollSection');
            let closestSection = sections[0] as HTMLElement;
            let distance = Math.abs(window.innerHeight / 2 - closestSection.getBoundingClientRect().top);

            sections.forEach(section => {
                const sectionDistance = Math.abs(window.innerHeight / 2 - section.getBoundingClientRect().top);
                if (sectionDistance < distance) {
                    closestSection = section as HTMLElement;
                    distance = sectionDistance;
                }
            });

            window.scrollTo({
                top: closestSection.offsetTop - (window.innerHeight / 2) + (closestSection.offsetHeight / 2),
                behavior: 'smooth'
            });
        }
    }, [scrolling]);

    return (
        <>

            <Modal openModal={ openModal } setOpenModal={ setOpenModal } />

            <Head>
                <title>Mateusz Krysiak - site</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
                <meta name="author" content="Mateusz Krysiak"/>
            </Head>

            <Background/>

            <Hero />

            <MyWebProjects />

            <MyDesignProjects openModal={ openModal } setOpenModal={ setOpenModal }/>

        </>
    );
}

export default Index;
