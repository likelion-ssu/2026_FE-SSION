function Story({img, text}) {
    return (
        <div className="flex flex-col justify-center items-center m-4">
            <img src={img} className="w-16 h-16"></img>
            <span>{text}</span>
        </div>
    );
}

export default Story;