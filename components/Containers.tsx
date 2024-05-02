import CircleLight from "./CircleLight";

type Props = {
    children: JSX.Element | JSX.Element[],
    id?: string,
    className?: string,
    ref?: any,
}

export const SmContainer = ({children, id, className, ref}: Props) => {
    return (
        <>
        <div id={id} ref={ ref ? ref : null } className={`${className} h-screen flex flex-col w-full justify-center px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 overflow-hidden`}>
                {children}
        </div>
        </>
    );
}