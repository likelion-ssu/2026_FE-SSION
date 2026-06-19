function Sidebar() {
  const menuIcons = [
    "fa-solid fa-house",
    "fa-regular fa-square-caret-right",
    "fa-regular fa-paper-plane",
    "fa-solid fa-magnifying-glass",
    "fa-regular fa-compass",
    "fa-regular fa-heart",
    "fa-solid fa-plus",
    "fa-regular fa-circle-user",
  ];

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[4.8rem] flex-col items-center border-r border-[#dbdbdb] py-[1.4rem]">
      <div className="mb-[4.5rem] text-[1.35rem]">
        <i className="fa-brands fa-instagram"></i>
      </div>

      <nav className="flex flex-col items-center gap-[1.55rem]">
        {menuIcons.map((icon, index) => (
          <div key={index} className="flex h-[1.3rem] w-[1.3rem] items-center justify-center">
            <i className={`${icon} cursor-pointer text-[1.25rem]`}></i>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-[1.45rem]">
        <div className="flex h-[1.3rem] w-[1.3rem] items-center justify-center">
          <i className="fa-solid fa-bars cursor-pointer text-[1.25rem]"></i>
        </div>
        <div className="flex h-[1.3rem] w-[1.3rem] items-center justify-center">
          <i className="fa-solid fa-border-all cursor-pointer text-[1.25rem]"></i>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;