import LeftCenter from "./Left.jsx";
import insta from "./assets/insta.png";
import homeImg from "./assets/home.png";
import reelsImg from "./assets/reels.png";
import msgImg from "./assets/share.png";
import srchImg from "./assets/search.png";
import whrImg from "./assets/nachi.png";
import alrtImg from "./assets/heart.png";
import mkImg from"./assets/plus.png";
import profileImg from "./assets/profile.png";
import hamImg from "./assets/hambur.png";
import otherImg from "./assets/other.png";
import Story from "./Story.jsx";

function App() {
  return(
    <div className="flex">
      <div className="w-1/4 h-screen flex flex-col justify-between">
        <img src={insta} className="w-10 h-10 m-2"></img> 
        <div>
          <LeftCenter img={homeImg} text={"홈"} />
          <LeftCenter img={reelsImg} text={"릴스"} />
          <LeftCenter img={msgImg} text={"메시지"} />
          <LeftCenter img={srchImg} text={"검색"} />
          <LeftCenter img={whrImg} text={"탐색 탭"} />
          <LeftCenter img={alrtImg} text={"알림"} />
          <LeftCenter img={mkImg} text={"만들기"} />
          <LeftCenter img={profileImg} text={"프로필"} />
        </div>
        <div>
          <LeftCenter img={hamImg} text={"더보기"} />
          <LeftCenter img={otherImg} text={"Meta의 다른 앱"} />
        </div>
      </div>
      <div className="w-1/2 h-screen">
        <div className="flex h-1/6 border-b border-gray-300">
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
        </div>
      </div>
    </div>
  )
}

export default App;