import "./App.css"
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";

function App() {
    return (
        <div className="container">
            <Sidebar></Sidebar>

            {/* 가운데 메인 피드 */}
            <div id="center">
                <Story></Story>

                {/* 게시글 */}
                <div id="center-bottom">
                    <div className="post">
                            <div className="post-header">
                                <img src="/src/assets/cutepets.png" alt="cutepets" />
                                <span>bonnie.cutepets</span>
                                <span className="post-time">• 6시간</span>
                                <i className="bi bi-three-dots"></i>
                            </div>
                        <div className="post-image">
                            <img src="/src/assets/post-image.png" alt="post" />
                        </div>
                        <div className="post-icons">
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-arrow-left-right"></i>
                            <i className="bi bi-send"></i>
                            <i className="bi bi-bookmark"></i>
                        </div>
                        <div className="post-like">
                            <img src="/src/assets/profile.png" alt="profile" />
                            <span>seo_ye0n4님 여러 명이 좋아합니다</span>
                        </div>
                        <div className="post-content">
                            <span className="post-username">bonnie.cutepets</span>
                            <span>New pet (now it’s not afraid of me anymore)#CutePetDebutPlan #Puppy #dogbaby</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 오른쪽 추천 영역 */}
            <div id="right">
                <div id="right-top">
                    <img src="/src/assets/profile.png" alt="profile" />
                    <div className="right-top-profile">
                        <span>seo_ye0n4</span>
                        <span className="txt">박서연</span>
                    </div>
                    <span className="txt">전환</span>
                </div>

                <div id="right-center">
                    <span>회원님을 위한 추천</span>
                    <span>모두 보기</span>
                </div>

                <div id="right-bottom">
                    <div className="right-bottom-detail">
                        <img src="/src/assets/wdohwan.png" alt="wdohwan" />
                        <div className="right-bottom-detail-ex">
                            <span>wdohwan</span>
                            <span className="txt">yy_0n0님 외 7명이 팔로우합니다</span>
                        </div>
                        <span className="txt">팔로우</span>
                    </div>
                    <div className="right-bottom-detail">
                        <img src="/src/assets/pampermoony.png" alt="pampermoony" />
                        <div className="right-bottom-detail-ex">
                            <span>pampermoony</span>
                            <span className="txt">yy_0n0님 외 2명이 팔로우합니다</span>
                        </div>
                        <span className="txt">팔로우</span>
                    </div>
                    <div className="right-bottom-detail">
                        <img src="/src/assets/ssodam.png" alt="ssodam" />
                        <div className="right-bottom-detail-ex">
                            <span>ssodam_xoxo</span>
                            <span className="txt">frog님 외 1명이 팔로우합니다</span>
                        </div>
                        <span className="txt">팔로우</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;