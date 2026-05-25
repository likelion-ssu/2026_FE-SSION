function Me({img, text, subtext, marginY, textColor}) {
    return (
        <div className="flex items-center">
            <img src={img} className={`w-7 h-7 m-1 ${marginY}`}></img>
            <span className="m-2">{text}</span>
            <strong className={`${textColor}`}>{subtext}</strong>
        </div>
    );
}

export default Me;