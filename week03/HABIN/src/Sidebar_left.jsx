import Nav from "./Nav";
import instargram_icon from "./assets/instargram_icon.png";
import home from "./assets/home.png";
import reels from "./assets/reels.png";
import DM from "./assets/DM.png";
import Magnifier from "./assets/Magnifier.png";
import exploration from "./assets/exploration.png";
import heart from "./assets/heart.png";
import plus from "./assets/plus.png";
import profile from "./assets/profile.jpeg";
import see_more from "./assets/see_more.png";
import plus_app from "./assets/plus_app.png";

function Sidebar_left() {  
    return(
        <div className="flex flex-col items-start box-border pt-2 pb-5 pe-32.5 ps-3">
            <div className="logo">
                <Nav name = {"로고"} img = {instargram_icon} />
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-166.75">
                <Nav name = {"홈"} img = {home} />
                <Nav name = {"릴스"} img = {reels} />
                <Nav name = {"디엠"} img = {DM} />
                <Nav name = {"검색"} img = {Magnifier} />
                <Nav name = {"탐색 탭"} img = {exploration} />
                <Nav name = {"알림"} img = {heart} />
                <Nav name = {"만들기"} img = {plus} />
                <Nav name = {"프로필"} img = {profile} />
            </div>
            <div className="flex flex-col items-center">
                <Nav name = {"더보기"} img = {see_more} />
                <Nav name = {"다른 앱"} img = {plus_app} />
            </div>
        </div>
    );
}

export default Sidebar_left;