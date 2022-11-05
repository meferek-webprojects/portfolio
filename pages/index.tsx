import Head from "next/head";
import Image from "next/image";
import Background from "./components/Background";
import { SmContainer } from "./components/Containers";
import Hero from "./components/Hero";
import Title from "./components/Title";

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

            <SmContainer>
                <div className="my-24 text-white">
                    <Title main="My projects" secondary="as a webdeveloper"/>
                </div>
            </SmContainer>

        </>
    );
}

export default index;