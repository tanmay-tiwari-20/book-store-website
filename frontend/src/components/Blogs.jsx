const Blogs = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      <div className="flex items-center gap-5">
        <div className="w-6 h-12 bg-red-500 rounded"></div>
        <p className="text-red-500 text-lg font-bold">Featured</p>
      </div>
      <h2 className="text-3xl font-bold mt-10 cursor-pointer tracking-wider font-inter">
        Latest Blogs
      </h2>

      <div className="flex flex-col lg:flex-row gap-5 mt-10 text-white">
        {/* Main Blog Section */}
        <div className="lg:w-[50%] w-full rounded">
          <img
            src="/img/blog.png"
            alt="Main Blog"
            className="w-full rounded-t"
          />
          <div className="bg-black px-5 py-4 rounded-b">
            <h1 className="text-3xl font-inter tracking-wider bg-black">
              Blog 75
            </h1>
            <div className="my-4">
              <p className="bg-black">
                12 <br />
                October <br />
                Bulandshahr’s Celestial Leap:
              </p>
            </div>
            <p className="text-xl underline cursor-pointer bg-black">
              Read More
            </p>
          </div>
        </div>

        {/* Secondary Blogs Section */}
        <div className="lg:w-[50%] w-full flex flex-col gap-10">
          {/* Horizontal Blog Card */}
          <div className="flex flex-col sm:flex-row bg-black rounded">
            <div className="sm:w-[50%] p-4 bg-black">
              <h1 className="text-2xl font-inter tracking-wider bg-black">
                Women’s Collections
              </h1>
              <p className="text-sm mt-2 bg-black">
                Featured woman collections that...
              </p>
              <p className="text-xl underline cursor-pointer mt-4 bg-black">
                Read More
              </p>
            </div>
            <img
              src="/img/woman.png"
              alt="Women's Collections"
              className="sm:w-[50%] w-full rounded-r sm:rounded-none"
            />
          </div>

          {/* Vertical Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 rounded">
            <div className="bg-black p-4 rounded">
              <img
                src="/img/award.png"
                alt="Award Giving"
                className="w-full rounded"
              />
              <h1 className="text-2xl font-inter tracking-wider mt-2 bg-black">
                Award Giving
              </h1>
              <p className="text-sm mt-2 bg-black">
                Giving a child an education...
              </p>
              <p className="text-xl underline cursor-pointer mt-4 bg-black">
                Read More
              </p>
            </div>
            <div className="bg-black p-4 rounded">
              <img
                src="/img/budget.png"
                alt="Budget of 2021"
                className="w-full rounded"
              />
              <h1 className="text-2xl font-inter tracking-wider mt-2 bg-black">
                Budget of 2021
              </h1>
              <p className="text-sm mt-2 bg-black">The worst Budget of...</p>
              <p className="text-xl underline cursor-pointer mt-4 bg-black">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
