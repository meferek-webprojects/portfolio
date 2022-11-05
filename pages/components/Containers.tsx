import CircleLight from "./CircleLight";

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const SmContainer = ({children}: Props) => {
    return (
        <>
            <div className="h-screen flex w-full px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
                {children}
            </div>
        </>
    );
}