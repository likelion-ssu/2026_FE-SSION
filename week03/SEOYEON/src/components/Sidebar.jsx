function Sidebar() {
    return (
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
    );
}

export default Sidebar;