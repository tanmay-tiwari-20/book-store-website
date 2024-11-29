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
    </div>
  );
};

export default Blogs;
