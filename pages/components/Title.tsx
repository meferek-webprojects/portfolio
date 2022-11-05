type Props = {
    main: string,
    secondary: string,
    className?: string,
}

const Title = ({main, secondary, className}: Props) => {
    return (
        <div className={className}>
            <h2 className="text-white text-4xl md:text-5xl 2xl:text-7xl font-poppinsbold uppercase">{main}</h2>
            <h3 className="text-white text-3xl md:text-2xl 2xl:text-4xl font-poppinsthin">{secondary}</h3>
        </div>
    );
}

export default Title;