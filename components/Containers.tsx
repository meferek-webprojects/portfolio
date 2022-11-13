import CircleLight from "./CircleLight";

type Props = {
    children: JSX.Element | JSX.Element[],
    id?: string,
}

export const SmContainer = ({children, id}: Props) => {
    return (
        <>
        <div id={id} className="h-screen flex flex-col w-full justify-center px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 overflow-hidden">
                {children}
        </div>
        </>
    );
}