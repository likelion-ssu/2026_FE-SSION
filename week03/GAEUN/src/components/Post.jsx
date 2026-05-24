function Post() {
  return (
    <section className="mx-auto w-[26.5rem]">
      <div className="flex h-[33rem] w-full items-center justify-center overflow-hidden rounded-[0.2rem]">
        <img
          src="/image/kia_post.png"
          alt="post"
          className="block h-full w-full object-cover"
        />
      </div>

      <div className="mt-3 flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-heart cursor-pointer text-2xl"></i>
            <span className="text-[0.8rem] font-bold">1.7만</span>
          </div>

          <div className="flex items-center gap-1">
            <i className="fa-regular fa-comment cursor-pointer text-2xl"></i>
            <span className="text-[0.8rem] font-bold">135</span>
          </div>

          <div className="flex items-center gap-1">
            <i className="fa-regular fa-paper-plane cursor-pointer text-2xl"></i>
            <span className="text-[0.8rem] font-bold">164</span>
          </div>
        </div>

        <i className="fa-regular fa-bookmark cursor-pointer text-2xl"></i>
      </div>

      <div className="mt-2 text-[0.9rem]">
        <p>
          <strong>always_kia_tigers</strong>
          <i className="fa-solid fa-circle-check mx-1 text-[0.7rem] text-[#0095f6]"></i>
          승리의 마지막 아웃카운트는 박정우의 손에!
        </p>
      </div>
    </section>
  );
}

export default Post;