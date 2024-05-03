import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { SmContainer } from "./Containers";
import Title from "./Title";
import designProjects from "./database/desginProjects.json";

const MyDesignProjects = ({openModal, setOpenModal}: any) => {

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

        if (hoverOnDesignerProjects || openModal != "") cancelAnimationFrame(animationFrameId);

        return () => cancelAnimationFrame(animationFrameId);

    }, [hoverOnDesignerProjects, openModal]);

    return (
        <SmContainer id="myDesignProject" className="scrollbar scrollSection">
            <Title className="pt-24 w-full" main="MY PROJECTS" secondary="as a designer"/>
            <div className="flex my-auto gap-4 overflow-x-auto w-full h-96 cursor-pointer" ref={ containerRef } onMouseEnter={ () => setHoverOnDesignerProjects(true) } onMouseLeave={ () => setHoverOnDesignerProjects(false) }>
                { designProjects.map((project, index) => (
                    <div onClick={ () => setOpenModal(project) } className="group w-80 shrink-0 cursor-pointer" key={ index }>
                        <div className="w-full h-80 relative rounded-3xl overflow-hidden border-[3px] group-hover:border-lightblue border-[#ffffff00] duration-300 cursor-pointer">
                            <Image className="object-cover group-hover:scale-[1.2] duration-300" fill src={ project.url } alt=""/>
                        </div>
                    </div>
                )) }
            </div>
        </SmContainer>
    );

}

export default MyDesignProjects;