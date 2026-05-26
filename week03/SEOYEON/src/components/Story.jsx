import profileImg from "../assets/profile.png";
import leeunImg from "../assets/leeun.png";
import likelionImg from "../assets/likelion.png";
import globalmediaImg from "../assets/globalmedia.png";

function Story() {
    return (
        <div id="center-top">
            <div className="center-top-detail">
                <img src={profileImg} alt="profile" />
                <span>seo_ye0n4</span>
            </div>
            <div className="center-top-detail">
                <img src={profileImg} alt="profile" />
                <span>odooou4</span>
            </div>
            <div className="center-top-detail">
                <img src={leeunImg} alt="leeun" />
                <span>leeun04</span>
            </div>
            <div className="center-top-detail">
                <img src={likelionImg} alt="likelion" />
                <span>likelion_ssu</span>
            </div>
            <div className="center-top-detail">
                <img src={globalmediaImg} alt="globalmedia" />
                <span>ssu_globalmedia</span>
            </div>
        </div>
    );
}

export default Story;