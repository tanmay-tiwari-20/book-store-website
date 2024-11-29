import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";

const NewReleases = () => {
  return (
    <div className="px-10 py-10">
      {/* Header */}
      <div className="w-6 h-12 bg-red-500 rounded ml-10"></div>

      {/* Timer */}
      <div className="flex items-center mt-10 gap-8 mb-8">
        <h2 className="text-3xl font-bold underline ml-10 cursor-pointer">
          New Releases
        </h2>
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
          <div key={index} className="text-center ">
            <div className="text-sm text-gray-600">{unit}</div>
            <div className="text-3xl font-bold">03</div>
          </div>
        ))}
      </div>

      {/* Swiper Book Cards */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="mySwiper mb-10 ml-10"
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="ml-10">
              <div className="relative bg-[#f5f5f5] rounded pt-8 ">
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
                  src="https://via.placeholder.com/150"
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
            </SwiperSlide>
          ))}
      </Swiper>

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
