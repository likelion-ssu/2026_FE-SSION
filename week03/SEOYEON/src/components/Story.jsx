import profileImg from "../assets/profile.png";
import leeunImg from "../assets/leeun.png";
import likelionImg from "../assets/likelion.png";
import globalmediaImg from "../assets/globalmedia.png";

function Story() {
    return (
        <div className="mb-[30px] flex gap-5 overflow-x-auto">
            <div className="flex flex-col items-center gap-2 text-xs">
                <img className="h-20 w-20 rounded-full border-[3.5px] border-[#ff0191]" src={profileImg} alt="profile" />
                <span>seo_ye0n4</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs">
                <img className="h-20 w-20 rounded-full border-[3.5px] border-[#ff0191]" src={profileImg} alt="profile" />
                <span>odooou4</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs">
                <img className="h-20 w-20 rounded-full border-[3.5px] border-[#ff0191]" src={leeunImg} alt="leeun" />
                <span>leeun04</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs">
                <img className="h-20 w-20 rounded-full border-[3.5px] border-[#ff0191]" src={likelionImg} alt="likelion" />
                <span>likelion_ssu</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xs">
                <img className="h-20 w-20 rounded-full border-[3.5px] border-[#ff0191]" src={globalmediaImg} alt="globalmedia" />
                <span>ssu_globalmedia</span>
            </div>
        </div>
    );
}

export default Story;
