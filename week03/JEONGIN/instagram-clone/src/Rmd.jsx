function Rmd({img, text1, text2}) {
    return (
        <div className="flex items-center">
            <img src={img} className="w-10 h-10 m-1"></img>
            <div className="m-1">
                <p>{text1}</p>
                <p className="text-gray-500">{text2}</p>
            </div>
            <strong className="ml-30 text-blue-600">팔로우</strong>
        </div>
    );
}

export default Rmd;