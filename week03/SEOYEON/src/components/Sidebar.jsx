import NavItem from "./NavItem";

function Sidebar() {
    return (
        <div id="left">
            <div className="left-top">
                <i className="bi bi-instagram"></i>
            </div>

            <div className="left-center">
                <NavItem icon="bi bi-house-door-fill" menu="홈" />
                <NavItem icon="bi bi-play-btn nav-icon" menu="릴스" />
                <NavItem icon="bi bi-send" menu="메시지" />
                <NavItem icon="bi bi-search nav-icon" menu="검색" />
                <NavItem icon="bi bi-compass nav-icon" menu="탐색 탭" />
                <NavItem icon="bi bi-heart nav-icon" menu="알림" />
                <NavItem icon="bi bi-plus-lg" menu="만들기" />
                <NavItem icon="bi bi-person-circle nav-icon" menu="프로필" />
            </div>

            <div className="left-bottom">
                <NavItem icon="bi bi-list nav-icon" menu="더 보기" />
                <NavItem icon="bi bi-grid" menu="Meta의 다른 앱" />
            </div>
        </div>
    );
}

export default Sidebar;