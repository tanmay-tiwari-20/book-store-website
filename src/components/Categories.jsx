import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Mathematics",
      imgSrc: "/img/maths.png",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Psychology",
      imgSrc: "/img/brain.png",
      isHighlighted: false,
    },
    { id: 3, name: "Law", imgSrc: "/img/+99.png", isHighlighted: true },
    { id: 4, name: "Science", imgSrc: "/img/lab.png", isHighlighted: false },
    {
      id: 5,
      name: "Mathematics",
      imgSrc: "/img/monitor.png",
      isHighlighted: false,
    },
    { id: 6, name: "Language", imgSrc: "/img/lang.png", isHighlighted: false },
  ];

  return (
    <>
      {/* Section Header */}
      <div className="flex items-center px-5 mt-10 ml-20 gap-5 mx-32">
        <div className="w-6 h-12 bg-red-500 rounded ml-10"></div>
        <p className="text-red-500 text-lg font-bold">Categories</p>
      </div>

      {/* Browse By Category */}
      <div className="flex items-center justify-between mx-3 mt-6">
        <h2 className="text-3xl font-bold ml-32 cursor-pointer tracking-wide">
          Browse By Category
        </h2>
        <div className="flex items-center gap-4 mr-32">
          <HiArrowSmallLeft className="bg-[#f5f5f5] p-2 text-4xl rounded-full cursor-pointer" />
          <HiArrowSmallRight className="bg-[#f5f5f5] p-2 text-4xl rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {categories.map(({ id, name, imgSrc, isHighlighted }) => (
          <div
            key={id}
            className={`w-44 h-44 ${
              isHighlighted
                ? "bg-red-500 border-red-500 text-white"
                : "bg-[#f5f5f5] border-gray-200 text-black"
            } border-2 rounded-md my-10 flex flex-col items-center justify-center gap-3`}
          >
            <img
              src={imgSrc}
              alt={name}
              className={`w-32 ${
                isHighlighted ? "bg-red-500" : "bg-[#f5f5f5]"
              }`}
            />
            <p
              className={`font-medium ${
                isHighlighted
                  ? "text-white bg-red-500"
                  : "text-black bg-[#f5f5f5]"
              }`}
            >
              {name}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-16 mb-6 w-[80%] mx-auto border" />
    </>
  );
};

export default Categories;
