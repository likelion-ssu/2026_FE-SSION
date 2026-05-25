import "./App.css"

function App() {
    return (
        <div className="container">
            {/* 왼쪽 사이드바 */}
            <div id="left">
                <div className="left-top">
                    <i className="bi bi-instagram"></i>
                </div>

                <div className="left-center">
                    <div className="navigation">
                        <i className="bi bi-house-door-fill"></i>
                        <span>홈</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-play-btn nav-icon"></i>
                        <span>릴스</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-send"></i>
                        <span>메시지</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-search nav-icon"></i>
                        <span>검색</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-compass nav-icon"></i>
                        <span>탐색 탭</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-heart nav-icon"></i>
                        <span>알림</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-plus-lg"></i>
                        <span>만들기</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-person-circle nav-icon"></i>
                        <span>프로필</span>
                    </div>
                </div>

                <div className="left-bottom">
                    <div className="navigation">
                        <i className="bi bi-list nav-icon"></i>
                        <span>더 보기</span>
                    </div>
                    <div className="navigation">
                        <i className="bi bi-grid"></i>
                        <span>Meta의 다른 앱</span>
                    </div>
                </div>
            </div>

            {/* 가운데 메인 피드 */}
            <div id="center">
                {/* 스토리 */}
                <div id="center-top">
                    <div className="center-top-detail">
                        <img src="/src/assets/profile.png" alt="profile" />
                        <span>seo_ye0n4</span>
                    </div>
                    <div className="center-top-detail">
                        <img src="/src/assets/profile.png" alt="profile" />
                        <span>odooou4</span>
                    </div>
                    <div className="center-top-detail">
                        <img src="/src/assets/leeun.png" alt="leeun" />
                        <span>leeun04</span>
                    </div>
                    <div className="center-top-detail">
                        <img src="/src/assets/likelion.png" alt="likelion" />
                        <span>likelion_ssu</span>
                    </div>
                    <div className="center-top-detail">
                        <img src="/src/assets/globalmedia.png" alt="globalmedia" />
                        <span>ssu_globalmedia</span>
                    </div>
                </div>

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