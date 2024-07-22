const Background = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-blackblue z-[-1]">
            {/* <CircleLight color="darkblue" size="350px" position="left-0 top-0"/>
            <CircleLight color="lightblue" size="700px" position="right-[280px] -top-[450px]"/>
            <CircleLight color="lightblue" size="450px" position="-left-[80px] -bottom-[80px]"/>
            <CircleLight color="darkblue" size="700px" position="-right-[0px] -bottom-[150px]"/> */}
            <div className={`animate-moveRight blur-3xl left-0 top-0 absolute w-[350px] h-[350px] bg-darkblue rounded-full`}></div>
            <div className={`animate-moveLeft blur-3xl right-[280px] -top-[450px] absolute w-[700px] h-[700px] bg-lightblue rounded-full`}></div>
            <div className={`animate-moveRight blur-3xl -left-[80px] -bottom-[80px] absolute w-[460px] h-[450px] bg-lightblue rounded-full`}></div>
            <div className={`animate-moveLeft blur-3xl -right-[0px] -bottom-[150px] absolute w-[700px] h-[700px] bg-darkblue rounded-full`}></div>
        </div>
    );
}

export default Background;