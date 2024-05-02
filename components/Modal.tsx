import Image from "next/image";
import { useEffect, useState } from "react";

const Modal = ({openModal, setOpenModal}: any) => {

    const [hiddenModal, setHiddenModal] = useState<boolean>(true);

    const handleCloseModal = () => {

        setHiddenModal(true);
        setTimeout(() => {
            setOpenModal("");
        }, 300);

    };
    
    useEffect(() => {
        
        if (openModal != "" && openModal != null) {
            setHiddenModal(false);
        }

    }, [openModal]);

    return (
        <>
            <div onClick={ handleCloseModal } className={`${ openModal != "" ? "fixed flex" : "hidden" } ${ !hiddenModal ? "opacity-100" : "opacity-0" } duration-300 bg-blackblue/50 backdrop-blur-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-full w-full z-[99999]`}>
                <div className="flex gap-20 p-8 w-10/12 h-4/5 mx-auto my-auto relative bg-blackblue/90 rounded-xl lg:flex-row flex-col">
                    <div className="basis-2/3 relative rounded-xl ">
                        <Image className="object-contain" priority fill src={ openModal?.url } alt="" />
                    </div>
                    <div className="flex flex-col gap-4 basis-1/3 justify-center pr-12">
                        <h3 className="font-poppinsbold text-white text-3xl">{ openModal?.title }</h3>
                        <p className="font-popinsthin text-white text-lg text-justify">{ openModal?.description }</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Modal;