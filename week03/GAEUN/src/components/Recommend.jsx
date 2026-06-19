function ProfileImage() {
  return (
    <div className="flex h-[2.7rem] w-[2.7rem] shrink-0 items-center justify-center rounded-full border border-[#dbdbdb] bg-[#efefef] text-[#9aa0a6]">
      <i className="fa-solid fa-user text-2xl"></i>
    </div>
  );
}

function RecommendUser({ id, name }) {
  return (
    <div className="mb-4 flex items-center gap-[0.8rem]">
      <ProfileImage />

      <div>
        <p className="m-0 text-[1rem] font-[700] text-[#262626]">{id}</p>
        <p className="m-0 mt-1 text-[0.9rem] font-normal text-[#737373]">{name}</p>
      </div>

      <a href="#" className="ml-auto text-[0.8rem] font-[700] text-[#0095f6] no-underline">
        팔로우
      </a>
    </div>
  );
}

function Recommend() {
  const users = [
    { id: "fe_ssion", name: "회원님을 위한 추천" },
    { id: "daye_8", name: "lions님 외 29명이 팔로우합니다" },
    { id: "uk_yeong", name: "sunwin1님 외 55명이 팔로우합니다" },
    { id: "jungan2", name: "circlejae님 외 37명이 팔로우합니다" },
  ];

  return (
    <aside className="fixed right-[20rem] top-10 w-[21rem]">
      <div className="flex items-center gap-[0.8rem]">
        <ProfileImage />

        <div>
          <p className="m-0 text-[1rem] font-[800] text-[#262626]">oeuniey</p>
          <p className="m-0 mt-1 text-[0.9rem] font-normal text-[#737373]">가은</p>
        </div>

        <a href="#" className="ml-auto text-[0.8rem] font-[800] text-[#0095f6] no-underline">
          전환
        </a>
      </div>

      <div className="mb-4 mt-8 flex justify-between text-[0.9rem]">
        <span className="font-[800] text-[#737373]">회원님을 위한 추천</span>
        <span className="font-[800] text-[#262626]">모두 보기</span>
      </div>

      {users.map((user) => (
        <RecommendUser key={user.id} id={user.id} name={user.name} />
      ))}
    </aside>
  );
}

export default Recommend;