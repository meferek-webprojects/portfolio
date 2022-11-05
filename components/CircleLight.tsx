type Props = {
    size: string,
    color: string,
    position: string,
}

const CircleLight = ({size, color, position}: Props) => {
    return (
        <div className={`animate-moveLeft absolute blur-3xl h-[${size}] w-[${size}] bg-${color} rounded-full`+` ${position}`}></div>
    );
}

export default CircleLight;