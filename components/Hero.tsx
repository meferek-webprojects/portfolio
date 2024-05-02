import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Title from "./Title";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row w-full justify-center px-10">
            <div className="mx-auto md:mx-0 w-[300px] 2xl:w-[500px] mt-10 md:my-auto aspect-square relative rounded-full overflow-hidden">
                <Image alt="" src="/images/me/KWADRAT.jpg" layout="fill" objectFit="cover"/>
            </div>
            <div className="my-16 md:my-auto ml-0 md:ml-16 xl:ml-32">
                <Title className="text-center md:text-left" main="Mateusz Krysiak" secondary="webdeveloper / graphic desginer"/>
                <div className="mt-10 flex gap-5 justify-center md:justify-start">
                    <div className="bg-white h-12 w-12 2xl:h-14 2xl:w-14 text-center rounded-full flex group hover:bg-lightblue hover:cursor-pointer transition-all duration-300 easy-in-out"><a href="https://pl.linkedin.com/in/mateusz-krysiak-86b5b1240?trk=people-guest_people_search-card" rel="noreferrer" target="_blank" className="my-auto mx-auto text-xl 2xl:text-2xl text-darkblue group-hover:text-white group-hover:scale-[1.1] transition-all duration-300 ease-in-out"><FaLinkedinIn /></a></div>
                    <div className="bg-white h-12 w-12 2xl:h-14 2xl:w-14 text-center rounded-full flex group hover:bg-lightblue hover:cursor-pointer transition-all duration-300 easy-in-out"><a href="https://github.com/Meferek" rel="noreferrer" target="_blank" className="my-auto mx-auto text-xl 2xl:text-2xl text-darkblue group-hover:text-white group-hover:scale-[1.1] transition-all duration-300 ease-in-out"><FaGithub /></a></div>
                    <div className="bg-white h-12 w-12 2xl:h-14 2xl:w-14 text-center rounded-full flex group hover:bg-lightblue hover:cursor-pointer transition-all duration-300 easy-in-out"><a href="https://www.instagram.com/meferphoto/?hl=pl" rel="noreferrer" target="_blank" className="my-auto mx-auto text-xl 2xl:text-2xl text-darkblue group-hover:text-white group-hover:scale-[1.1] transition-all duration-300 ease-in-out"><FaInstagram /></a></div>
                    <div className="bg-white h-12 w-12 2xl:h-14 2xl:w-14 text-center rounded-full flex group hover:bg-lightblue hover:cursor-pointer transition-all duration-300 easy-in-out"><a href="https://www.facebook.com/meferphotoofficial" rel="noreferrer" target="_blank" className="my-auto mx-auto text-xl 2xl:text-2xl text-darkblue group-hover:text-white group-hover:scale-[1.1] transition-all duration-300 ease-in-out"><FaFacebookF /></a></div>
                </div>
                <p className="px-10 md:px-0 mt-10 text-white text-center md:text-left text-lg 2xl:text-2xl font-poppins">I love to create websites and making internet <br/> more colorful as well as modern.</p>
            </div>                        
        </div>
    );
}

export default Hero;