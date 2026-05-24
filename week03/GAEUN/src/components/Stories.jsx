function Stories() {
  const stories = ["sunwin1", "jung_in", "habin", "yunwoo_", "m_insang", "seo_ye0n"];

  return (
    <section className="mb-6 flex justify-center gap-[1.2rem]">
      {stories.map((name) => (
        <div key={name} className="text-center">
          <div className="mb-1 flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#962fbf] p-[0.33rem]">
            <div className="flex h-full w-full items-center justify-center rounded-full border-[0.2rem] border-white bg-[#f5f5f5] text-[1.9rem] text-[#a8a8a8]">
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
          <p className="text-[0.7rem]">{name}</p>
        </div>
      ))}
    </section>
  );
}

export default Stories;