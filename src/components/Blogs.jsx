const Blogs = () => {
  return (
    <div className="w-[83%] mx-auto my-20">
      <div className="flex items-center gap-5">
        <div className="w-6 h-12 bg-red-500 rounded"></div>
        <p className="text-red-500 text-lg font-bold">Featured</p>
      </div>
      <h2 className="text-3xl font-bold mt-10 cursor-pointer tracking-wider font-inter">
        Latest Blogs
      </h2>

      <div className="flex gap-5 mt-10 text-white">
        <div className="w-[50%] ">
          <img src="/img/blog.png" alt="" className="w-full rounded-t" />
          <div className="bg-black px-10 py-4 rounded-b">
            <h1 className="bg-black text-3xl font-inter tracking-wider">
              Blog 75
            </h1>
            <div className="my-4">
              <p className="bg-black">
                12 <br />
                October <br />
                Bulandshahr’s Celestial Leap:
              </p>
            </div>
            <p className="bg-black text-xl underline cursor-pointer">
              Read More
            </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-8">
          <div className="flex bg-black rounded">
            <div className="w-[50%] my-auto bg-black">
              <h1 className="bg-black text-2xl ml-5 font-inter tracking-wider">
                Women’s Collections
              </h1>
              <p className="bg-black text-sm mt-2 ml-5">
                Featured woman collections that{" "}
              </p>
              <p className="bg-black text-xl underline cursor-pointer mt-4 ml-5">
                Read More
              </p>
            </div>
            <img src="/img/woman.png" alt="" className="w-[50%] rounded-r" />
          </div>
          <div className="flex gap-5">
            <div className="w-[50%] h-full bg-black p-2 rounded">
              <div className="flex flex-col bg-black">
                <img src="/img/award.png" alt="" className="" />
                <h1 className="bg-black text-2xl ml-5 font-inter tracking-wider mt-2">
                  Award giving
                </h1>
                <p className="bg-black text-sm mt-2 ml-5">
                  Giving a child an <br /> education...
                </p>
                <p className="bg-black text-xl underline cursor-pointer mt-4 ml-5">
                  Read More
                </p>
              </div>
            </div>
            <div className="w-[50%] h-full bg-black p-2 rounded">
              <div className="flex flex-col bg-black">
                <img src="/img/budget.png" alt="" className="" />
                <h1 className="bg-black text-2xl ml-5 font-inter tracking-wider mt-2">
                  Budget of 2021
                </h1>
                <p className="bg-black text-sm mt-2 ml-5">
                  The worst Budget of...
                </p>
                <p className="bg-black text-xl underline cursor-pointer mt-4 ml-5">
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
