import Footer from "./Footer";
import Trust from "./Trust";

const AboutContent = () => {
  return (
    <>
      <div className="mx-auto py-10 ">
        {/* Breadcrumb Section */}
        <div className="mb-8 px-8 lg:px-28">
          <p className="text-sm sm:text-base">
            <span className="opacity-50">Home</span> / About
          </p>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:px-28 px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-inter tracking-wide">
              Sultan Chand & Sons
            </h1>
            <p className="text-sm sm:text-base text-black mb-4">
              Shri Sultan Chand ji, founder of M/s S. Chand & Company (1917) and
              of M/s Sultan Chand & Sons (1950), was pioneer in the field of the
              publication of school and college level texts by Indian teachers.
              He had inherited the spirit of nationalism and lofty ideals from
              his noble father, Master Amir Chand ji (born in 1869), a dedicated
              teacher, a social reformer, a great patriot and revolutionary, who
              was awarded death sentence in 1915 for his involvement in the
              Hardinge Bomb Case.
            </p>
            <p className="text-sm sm:text-base text-black">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>

          {/* Image */}
          <div className="">
            <img
              src="/img/about.png"
              alt="Children reading books"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-5 sm:px-10 lg:px-28 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {[
          { img: "shop.png", stat: "10.5k", text: "Authors active our site" },
          {
            img: "sale.png",
            stat: "33k",
            text: "Monthly Books Sale",
            bg: "bg-red-500",
            textColor: "text-white",
          },
          {
            img: "bag.png",
            stat: "45.5k",
            text: "Customer active in our site",
          },
          {
            img: "money.png",
            stat: "25k",
            text: "Anual gross sale in our site",
          },
        ].map(
          (
            { img, stat, text, bg = "bg-white", textColor = "text-black" },
            index
          ) => (
            <div
              key={index}
              className={`w-full h-72 border-2 ${bg} ${textColor} rounded flex flex-col items-center justify-center gap-4 p-5`}
            >
              <div
                className={`${
                  bg === "bg-red-500" ? "bg-red-400" : "bg-[#c1c0c1]"
                } w-24 h-24 rounded-full flex items-center justify-center`}
              >
                <div
                  className={`${
                    bg === "bg-red-500" ? "bg-white" : "bg-black"
                  } w-16 h-16 rounded-full flex items-center justify-center`}
                >
                  <img
                    src={`/img/${img}`}
                    alt={text}
                    className="w-10 bg-transparent"
                  />
                </div>
              </div>
              <h1
                className={`text-2xl sm:text-3xl font-bold font-inter tracking-wider ${
                  bg === "bg-red-500" && "bg-red-500"
                }`}
              >
                {stat}
              </h1>
              <p className={`${bg === "bg-red-500" && "bg-red-500"}`}>{text}</p>
            </div>
          )
        )}
      </div>

      {/* Spacer Section */}
      <div className="px-5 sm:px-10 lg:px-28 mx-auto h-screen"></div>

      <Trust />
      <Footer />
    </>
  );
};

export default AboutContent;
