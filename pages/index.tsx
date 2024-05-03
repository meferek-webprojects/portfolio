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
