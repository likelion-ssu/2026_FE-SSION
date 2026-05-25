import profile from "./assets/profile.jpeg";
import menu from "./assets/menu.png";
import heart from "./assets/heart.png";
import speech_bubble from "./assets/speech_bubble.png";
import DM from "./assets/DM.png";
import bookmark from "./assets/bookmark.png";
import feed_image from "./assets/feed_image.JPG";



function Feed() {
    return (
            <div className="flex flex-col items-center">
                <div className="w-117.5 h-11 flex flex-row justify-start p-[0px 10px 12px 14px]">
                    <div className="w-11 h-8">
                        <img src={profile} alt="기본프로필" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-92.5 h-4.5">
                        <p className="text-sm font-semibold leading-8">HABIN 2일</p>
                    </div>
                    <div className="item-center">
                        <img src={menu} alt="메뉴" className="w-6 h-6"/>
                    </div>
                </div>
                <div className="w-117 h-156">
                    <img src={feed_image} alt="피드이미지" className="w-full h-full object-cover rounded-[10px]"/>
                </div>
                <div className="w-117.5 h-23 p-[0px 12px]">
                    <div className="flex flex-row items-center w-111.5 h-10 m-1">
                        <div className="flex flex-row items-center w-111.5 h-10 m-1">
                            <img src={heart} alt="좋아요" className="w-10 h-10 p-2"/>
                            <p>777</p>
                            <img src={speech_bubble} alt="댓글" className="w-10 h-10 p-2"/>
                            <p>5</p>
                            <img src={DM} alt="공유" className="w-10 h-10 p-2"/>
                        </div>
                        <div className="ml-41.75">
                            <img src={bookmark} alt="북마크" className="w-10 h-10 p-2"/> 
                        </div>
                    </div>
                    <div className="flex ">
                    <p>
                        프론트엔드 화이팅
                    </p>
                    </div>
                </div>
             </div>
    );
}

export default Feed;