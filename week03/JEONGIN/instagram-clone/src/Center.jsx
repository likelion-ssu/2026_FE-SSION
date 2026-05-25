import Me from "./Me.jsx";
import profileImg from "./assets/profile.png";
import heartImg from "./assets/heart.png";
import commentImg from "./assets/comment.png";
import shareImg from "./assets/share.png";
import saveImg from "./assets/save.png";

function Center({img}) {
    return (
        <div className="flex flex-col w-1/2 h-full">
            <Me img={profileImg} text={"jxxi.0457"} subtext={"2시간"} />
            <img src={img} className=""></img>
            <div className="flex justify-between my-1">
                <div className="flex">
                    <img src={heartImg} className="w-7 h-7"></img>
                    <img src={commentImg} className="w-7 h-7"></img>
                    <img src={shareImg} className="w-7 h-7"></img>
                </div>
                <img src={saveImg} className="w-7 h-7"></img>
            </div>
            <div>
                <strong>좋아요 32개</strong>
                <p><strong>sunwin1029</strong> 프론트엔드 화이팅~!</p>
                <p>댓글 12개 보기</p>
                <strong>댓글 달기</strong>
            </div>
        </div>
    );
}

export default Center;