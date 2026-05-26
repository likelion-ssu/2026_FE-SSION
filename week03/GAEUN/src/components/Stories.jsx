function StoryItem({ id }) {
  return (
    <div className="text-center">
      <div className="mb-1 flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full bg-[linear-gradient(45deg,#feda75_0%,#fa7e1e_30%,#e1306c_65%,#c13584_100%)] p-[0.18rem]">
        <div className="flex h-full w-full items-center justify-center rounded-full border-[0.2rem] border-white bg-[#f5f5f5] text-[1.9rem] text-[#a8a8a8]">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>

      <p className="text-[0.7rem]">{id}</p>
    </div>
  );
}

function Stories() {
  const stories = ["sunwin1", "jung_in", "habin", "yunwoo_", "m_insang", "seo_ye0n"];

  return (
    <section className="mb-6 flex justify-center gap-[1.2rem]">
      {stories.map((name) => (
        <StoryItem key={name} id={name} />
      ))}
    </section>
  );
}

export default Stories;