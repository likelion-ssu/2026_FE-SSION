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
import Me from "./Me.jsx";
import Rmd from "./Rmd.jsx";

function App() {
  return(
    <div className="flex">

      {/* 좌측 */}
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

      {/* 중앙 */}
      <div className="w-1/2 h-screen">
        <div className="flex h-1/6 border-b border-gray-300 mx-20">
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
          <Story img={profileImg} text={"하이"} />
        </div>
        <div>
          {/* 메인글 */}
        </div>
      </div>

      {/* 우측 */}
      <div>
        <Me img={profileImg} text={"jxxi.0457"} subtext={"팔로우"} marginY="my-15" textColor="text-blue-600" />
        <div>
          <span className="text-gray-500 m-1">회원님을 위한 추천</span>
          <strong className="text-gray-500 ml-65">모두 보기</strong>
        </div>
        <div>
          <Rmd img={profileImg} text1={"recommened_person1"} text2={"sunwin1029 외 1명이 팔로우합니다"} />
          <Rmd img={profileImg} text1={"recommened_person2"} text2={"sunwin1029 외 2명이 팔로우합니다"} />
          <Rmd img={profileImg} text1={"recommened_person3"} text2={"sunwin1029 외 3명이 팔로우합니다"} />
        </div>
      </div>
    </div>
  )
}

export default App;