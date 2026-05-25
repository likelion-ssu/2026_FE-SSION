function Me({img, text, subtext, marginY="my-0", textColor="text-black-900"}) {
    return (
        <div className="flex items-center">
            <img src={img} className={`w-7 h-7 m-1 ${marginY}`}></img>
            <span className="m-2">{text}</span>
            <span className={`${textColor}`}>{subtext}</span>
        </div>
    );
}

export default Me;