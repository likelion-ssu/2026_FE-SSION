import SidebarItem from "./SidebarItem";

import logo from "./assets/logo.png";
import home from "./assets/home.png";
import reels from "./assets/reels.png";
import message from "./assets/message.png";
import search from "./assets/search.png";
import explore from "./assets/explore.png";
import alram from "./assets/alram.png";
import create from "./assets/create.png";
import profile from "./assets/profile.png";
import more from "./assets/more.png";
import meta from "./assets/meta.png";



export default function App() {
    return (
        <div className="bg-black text-white min-h-screen">
          <aside className="fixed left-0 top-0 h-screen w-64 p-6 flex flex-col justify-between">
            <div>
              <SidebarItem icon={logo} text="" />
            </div>

            <div className="flex flex-col gap2">
              <SidebarItem icon={home} text="홈" />
              <SidebarItem icon={reels} text="릴스" />
              <SidebarItem icon={message} text="메시지" />
              <SidebarItem icon={search} text="검색" />
              <SidebarItem icon={explore} text="탐색 탭" />
              <SidebarItem icon={alram} text="알림" />
              <SidebarItem icon={create} text="만들기" />
              <SidebarItem icon={profile} text="프로필" />
            </div>
            
            <div className="flex flex-col gap2">
              <SidebarItem icon={more} text="더보기" />
              <SidebarItem icon={meta} text="Meta의 다른 앱" />
            </div>

          </aside>

          <main>

          </main>

          <section>

          </section>

        </div>
    );
}