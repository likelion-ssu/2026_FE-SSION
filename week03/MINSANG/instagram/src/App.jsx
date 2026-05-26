import SidebarItem from "./SidebarItem";


export default function App() {
    return (
        <div className="bg-white text-black min-h-screen">
          <aside className="fixed left-0 top-0 h-screen w-64 p-6 flex flex-col justify-between">
            <div>
              <SidebarItem icon="/home.png" text="" />
            </div>

            <div className="flex flex-col gap2">
              <SidebarItem icon="/home.png" text="홈" />
              <SidebarItem icon="/reels.png" text="릴스" />
              <SidebarItem icon="/messages.png" text="메시지" />
              <SidebarItem icon="/search.png" text="검색" />
              <SidebarItem icon="/explore.png" text="탐색 탭" />
              <SidebarItem icon="/notifications.png" text="알림" />
              <SidebarItem icon="/create.png" text="만들기" />
              <SidebarItem icon="/profile.png" text="프로필" />
            </div>
            
            <div className="flex flex-col gap2">
              <SidebarItem icon="/more.png" text="더보기" />
              <SidebarItem icon="/etc.png" text="Meta의 다른 앱" />
            </div>

          </aside>

          <main>

          </main>

          <section>

          </section>

        </div>
    );
}