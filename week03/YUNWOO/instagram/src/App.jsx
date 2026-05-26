import "./App.css";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr_320px] bg-white text-black">
      <aside className="sticky top-0 border-r border-[#dbdbdb] px-5 py-8">
        <div className="mb-10">
          <img src="/assets/logo.png" alt="logo" className="w-[120px]" />
        </div>

        <nav className="flex h-[90vh] flex-col">
          <div className="flex flex-col gap-[30px]">
            <a href="#" className="flex items-center gap-4">
              <img src="/assets/home.png" alt="" className="h-6 w-6" />
              <span>홈</span>
            </a>

            <a href="#" className="flex items-center gap-4">
              <img src="/assets/search.png" alt="" className="h-6 w-6" />
              <span>검색</span>
            </a>

            <a href="#" className="flex items-center gap-4">
              <img src="/assets/explore.png" alt="" className="h-6 w-6" />
              <span>탐색 탭</span>
            </a>

            <a href="#" className="flex items-center gap-4">
              <img src="/assets/reels.png" alt="" className="h-6 w-6" />
              <span>릴스</span>
            </a>
          </div>

          <div className="mt-auto mb-[60px] flex flex-col gap-[30px]">
            <a href="#" className="flex items-center gap-4">
              <img src="/assets/threads.png" alt="" className="h-6 w-6" />
              <span>Threads</span>
            </a>

            <a href="#" className="flex items-center gap-4">
              <img src="/assets/menu.png" alt="" className="h-6 w-6" />
              <span>더보기</span>
            </a>
          </div>
        </nav>
      </aside>

      <main className="mx-auto w-[630px] pt-[30px]">
        <section className="flex gap-[18px] border-b border-[#dbdbdb] py-5">
          <div className="flex flex-col items-center text-[12px]">
            <img
              src="/assets/profile.jpg"
              alt=""
              className="h-[66px] w-[66px] rounded-full border-2 border-pink-500 p-[2px] object-cover"
            />

            <p className="mt-2">gogumii1</p>
          </div>

          <div className="flex flex-col items-center text-[12px]">
            <img
              src="/assets/profile.jpg"
              alt=""
              className="h-[66px] w-[66px] rounded-full border-2 border-pink-500 p-[2px] object-cover"
            />

            <p className="mt-2">gogumii2</p>
          </div>
        </section>

        <div className="mt-[30px] pb-5">
          <div className="mb-[14px] flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                src="/assets/profile.jpg"
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <strong>gogumiiiii</strong>
                <span className="text-xs text-gray-500">2시간</span>
              </div>
            </div>

            <span>...</span>
          </div>

          <img
            src="/assets/post.jpg"
            alt=""
            className="max-h-[580px] w-full rounded object-cover"
          />

          <div className="mt-[14px] mb-[10px] flex justify-between">
            <div className="flex gap-4">
              <img
                src="/assets/heart.png"
                alt=""
                className="h-6 w-6 object-cover"
              />
              <img
                src="/assets/comment.png"
                alt=""
                className="h-6 w-6 object-cover"
              />
              <img
                src="/assets/message.png"
                alt=""
                className="h-6 w-6 object-cover"
              />
            </div>

            <img
              src="/assets/bookmark.png"
              alt=""
              className="h-6 w-6 object-cover"
            />
          </div>

          <p className="my-[5px]">
            <strong>좋아요 127개</strong>
          </p>

          <p className="my-[5px]">
            <strong>gogumiiiii</strong> 내 모토
          </p>

          <p className="my-[5px]">댓글 10개 보기</p>
          <p className="my-[5px]">댓글 달기</p>
        </div>
      </main>

      <aside className="px-6 py-10">
        <p className="font-bold">오른쪽 바</p>
      </aside>
    </div>
  );
}

export default App;
