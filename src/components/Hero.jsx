const Hero = () => {
  return (
    <div className=" flex justify-center text-white">
      <img
        src="/img/hero.png"
        alt="Hero Img"
        className="h-[65vh] w-[90vw] object-cover"
      />
      <div className="items-center gap-5 absolute bg-transparent left-[8%] top-[30%] hidden lg:flex">
        <img
          src="/img/SCSlogo.png"
          alt=""
          className="w-12 object-cover bg-transparent"
        />
        <h1 className="text-xl font-inter bg-transparent">
          Sultan Chand & Sons
        </h1>
      </div>

      <h1 className="absolute bg-transparent font-bold text-5xl left-[8%] top-[38%] ">
        Up to 10% <br /> On Books
      </h1>
      <button className="absolute px-10 py-3 bg-red-500 hover:bg-red-600 left-[8%] top-[55%] rounded">
        Shop Now!
      </button>
    </div>
  );
};

export default Hero;
