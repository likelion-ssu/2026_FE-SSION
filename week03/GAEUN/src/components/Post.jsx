function Post() {
  return (
    <section className="flex w-full justify-center">
      <div className="w-[26.5rem]">
        <img
          src="/image/kia_post.png"
          alt="post"
          className="block h-[33rem] w-full rounded-[0.2rem] object-cover"
        />

        <div className="mt-3 flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
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

        <p className="mt-2 w-full text-[0.9rem]">
          <strong>always_kia_tigers</strong>
          <i className="fa-solid fa-circle-check mx-1 text-[0.7rem] text-[#0095f6]"></i>
          <span className="font-[400]">
          승리의 마지막 아웃카운트는 박정우의 손에!
          </span>
        </p>
      </div>
    </section>
  );
}

export default Post;