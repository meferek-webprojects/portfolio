import Image from "next/image";
import { SmContainer } from "./Containers";
import Title from "./Title";
import { useEffect, useRef, useState } from "react";

const MyWebProjects = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const isScrollingRight = useRef<boolean>(true);
    const [hoverOnDesignerProjects, setHoverOnDesignerProjects] = useState<boolean>(false);

    useEffect(() => {

        let animationFrameId: number;
    
        const scrollHandler = () => {
            
            if (containerRef.current) {
                const container = containerRef.current;
                const isEndOfScroll = container.scrollLeft === container.scrollWidth - container.clientWidth;
        
                if (isEndOfScroll || container.scrollLeft === 0) {
                    isScrollingRight.current = !isScrollingRight.current;
                }
        
                container.scrollLeft += isScrollingRight.current ? 1 : -1;
            }

            animationFrameId = requestAnimationFrame(scrollHandler);

        };
    
        animationFrameId = requestAnimationFrame(scrollHandler);

        if (hoverOnDesignerProjects) cancelAnimationFrame(animationFrameId);

        return () => cancelAnimationFrame(animationFrameId);

    }, [hoverOnDesignerProjects]);

    return (

        <SmContainer id="myprojects" className="scrollbar scrollSection">
            <Title className="pt-24 w-full" main="MY PROJECTS" secondary="as a webdeveloper"/>
            <div className="flex my-auto gap-4 overflow-x-auto w-full h-[28rem] cursor-pointer" ref={ containerRef } onMouseEnter={ () => setHoverOnDesignerProjects(true) } onMouseLeave={ () => setHoverOnDesignerProjects(false) }>
                <a className="group w-[600px] aspect-video shrink-0" href="https://mkwmstudios.pl/" rel="noreferrer" target="_blank">
                    <div className="relative aspect-[16/8.15] group cursor-pointer rounded-3xl overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300">
                        <Image className="object-cover transition-all duration-[5000ms] object-top group-hover:object-bottom mx-auto" fill src="/images/webProjects/MKWM/2.jpeg" alt=""/>
                    </div>
                    <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">MKWM Studios</p>
                </a>
                <a className="group w-[600px] aspect-video shrink-0" href="https://www.jfcpolska.pl/" rel="noreferrer" target="_blank">
                    <div className="relative aspect-[16/8.15] group cursor-pointer rounded-3xl overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300">
                        <Image className="object-cover transition-all duration-[5000ms] object-top group-hover:object-bottom" fill src="/images/webProjects/JFC/2.jpeg" alt=""/>
                    </div>
                    <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">JFC Polska</p>
                </a>
                <a className="group w-[600px] aspect-video shrink-0" href="https://portal.jfcpolska.pl/panel/logistyka" rel="noreferrer" target="_blank">
                    <div className="relative aspect-[16/8.15] group cursor-pointer rounded-3xl overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300">
                        <Image className="object-cover transition-all duration-[5000ms] object-top group-hover:object-bottom" fill src="/images/webProjects/JFC Polska Portal/1.jpeg" alt=""/>
                    </div>
                    <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">JFC Polska Portal</p>
                </a>
                <a className="group w-[600px] aspect-video shrink-0" href="https://meferek-webprojects.github.io/knowledge-2.0/index.html" rel="noreferrer" target="_blank">
                    <div className="relative aspect-[16/8.15] group cursor-pointer rounded-3xl overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300">
                        <Image className="object-cover transition-all duration-[5000ms] object-top group-hover:object-bottom" fill src="/images/webProjects/knowledge/1.jpeg" alt=""/>
                    </div>
                    <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">Knowledge base</p>
                </a>
                <a className="group w-[600px] aspect-video shrink-0" href="https://www.rankingoczyszczalni.pl/ranking" rel="noreferrer" target="_blank">
                    <div className="relative aspect-[16/8.15] group cursor-pointer rounded-3xl overflow-hidden mx-auto xl:mx-0 max-w-lg xl:max-w-none border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300">
                        <Image className="object-cover transition-all duration-[5000ms] object-top group-hover:object-bottom" fill src="/images/webProjects/rankingoczyszczalni/1.jpeg" alt=""/>
                    </div>
                    <p className="text-white font-poppinsmedium text-xl mt-6 xl:mt-12 text-center">Ranking oczyszczalni</p>
                </a>
            </div>
        </SmContainer>

    );
}

export default MyWebProjects;