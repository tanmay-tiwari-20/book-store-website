import { IoIosHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const NewReleases = () => {
  return (
    <div className="px-10 py-10">
      {/* Header */}
      <div className="w-6 h-12 bg-red-500 rounded ml-0 lg:ml-10"></div>

      <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 lg:gap-10 mt-10 mb-8 lg:mx-10">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold underline text-center md:text-left cursor-pointer font-inter">
          New Releases
        </h2>

        {/* Timer Units */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div key={index} className="text-center">
              <div className="text-xs sm:text-sm text-gray-600">{unit}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                03
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 sm:gap-4">
          <HiArrowSmallLeft className="bg-[#f5f5f5] p-1 sm:p-2 text-2xl sm:text-4xl rounded-full cursor-pointer" />
          <HiArrowSmallRight className="bg-[#f5f5f5] p-1 sm:p-2 text-2xl sm:text-4xl rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Grid Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 ">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="ml-10">
              <div className="relative bg-[#f5f5f5] rounded pt-8">
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  -40%
                </div>

                {/* Wishlist and View Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 bg-[#f5f5f5]">
                  <button className="p-1 bg-white rounded-full flex items-center justify-center">
                    <IoIosHeartEmpty className="bg-white text-xl" />
                  </button>
                  <button className="p-1 bg-white rounded-full">
                    <FiEye className="bg-white text-xl" />
                  </button>
                </div>

                {/* Book Image */}
                <img
                  src="/img/mass.png"
                  alt="Book"
                  className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
                />

                {/* Add to Cart */}
                <button className="mt-4 bg-black text-white py-2 px-4 w-full rounded">
                  Add To Cart
                </button>
              </div>
              <div className="flex flex-col items-start mt-4">
                {/* Title */}
                <div className="text-center font-semibold text-sm mb-2">
                  Financial Market
                </div>

                {/* Price */}
                <div className="text-center text-red-500 font-bold text-lg">
                  ₹305 <span className="text-gray-500 line-through">₹605</span>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 text-yellow-500 mt-2">
                  {"⭐".repeat(4)}⭐ (88)
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
          View All Books
        </button>
      </div>
      <hr className="mt-6 w-[85%] mx-auto border" />
    </div>
  );
};

export default NewReleases;
