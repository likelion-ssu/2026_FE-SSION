import profile from "./assets/profile.jpeg";

function Recommend_friend({id, name, content}) {
    return (
        <div className="flex flex-row items-center justify-between w-79.75 h-17 px-4 py-2">
            <img src={profile} alt="프로필" className="w-11 h-11"/>
            <div className="w-[198.23px] h-9.5 flex flex-col justify-start items-start gap-0.5 text-sm">
                <p>{id}</p>
                <p>{name}</p>
            </div>
            <p className="text-xs text-[#3143e3]">{content}</p>
        </div>
    );
}

export default Recommend_friend;
