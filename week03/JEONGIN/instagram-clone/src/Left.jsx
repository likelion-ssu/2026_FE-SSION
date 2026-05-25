function LeftCenter({ img, text} ) {
    return (
    <div className="flex flex-row items-center ml-2 p-3">
        <img src={img} className="w-7 h-7"></img>
        <span className="px-2">{text}</span>
    </div>
    );
}

export default LeftCenter;