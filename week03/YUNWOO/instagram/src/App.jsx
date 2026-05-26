import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <aside className="sticky top-0 min-h-screen w-60 border-r border-[#dbdbdb] px-5 py-8">
        <div className="mb-10">
          <img src="/assets/logo.png" alt="logo" className="w-[120px]" />
        </div>

        <nav className="flex h-[90vh] flex-col">
          <div className="flex flex-col gap-[30px]">
            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/home.png" alt="" className="h-6 w-6 object-cover" />
              <span>홈</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/search.png" alt="" className="h-6 w-6 object-cover" />
              <span>검색</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/explore.png" alt="" className="h-6 w-6 object-cover" />
              <span>탐색 탭</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/reels.png" alt="" className="h-6 w-6 object-cover" />
              <span>릴스</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/message.png" alt="" className="h-6 w-6 object-cover" />
              <span>메시지</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/heart.png" alt="" className="h-6 w-6 object-cover" />
              <span>알림</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/create.png" alt="" className="h-6 w-6 object-cover" />
              <span>만들기</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/profile.jpg" alt="" className="h-6 w-6 rounded-full object-cover" />
              <span>프로필</span>
            </a>
          </div>

          <div className="mt-auto mb-[60px] flex flex-col gap-[30px]">
            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/threads.png" alt="" className="h-6 w-6 object-cover" />
              <span>Threads</span>
            </a>

            <a href="#" className="flex items-center gap-4 text-black no-underline">
              <img src="/assets/menu.png" alt="" className="h-6 w-6 object-cover" />
              <span>더보기</span>
            </a>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default App
