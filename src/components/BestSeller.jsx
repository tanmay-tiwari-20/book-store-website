import { FiEye } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";

const BestSeller = () => {
  // Book Data
  const books = [
    {
      id: 1,
      title: "Legal System",
      price: "₹305",
      originalPrice: "₹605",
      discount: "-40%",
      rating: 4,
      reviews: 88,
      imgSrc: "/img/legal.png",
    },
    {
      id: 2,
      title: "Industry 4.0",
      price: "₹450",
      originalPrice: "₹750",
      discount: "-40%",
      rating: 5,
      reviews: 120,
      imgSrc: "/img/industry.png",
    },
    {
      id: 3,
      title: "Business Law",
      price: "₹500",
      originalPrice: "₹900",
      discount: "-45%",
      rating: 4,
      reviews: 67,
      imgSrc: "/img/business.png",
    },
    {
      id: 4,
      title: "Mass Management",
      price: "₹320",
      originalPrice: "₹640",
      discount: "-50%",
      rating: 5,
      reviews: 45,
      imgSrc: "/img/mass.png",
    },
  ];

  return (
    <>
      {/* Section Header */}
      <div className="flex items-center gap-4 px-5 sm:px-6 lg:px-36 mt-10">
        <div className="w-6 h-12 bg-red-500 rounded"></div>
        <p className="text-red-500 text-lg font-bold">This Month</p>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 px-5 sm:px-6 lg:pl-36 mt-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider cursor-pointer font-inter">
          Best Sellers
        </h2>
        <div className="mt-4 sm:mt-0 mr-0 lg:mr-28">
          <button className="px-6 py-2 text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded text-white">
            View All
          </button>
        </div>
      </div>

      {/* Best Sellers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-14 lg:mx-32 mt-5 mb-20">
        {books.map((book) => (
          <div key={book.id} className="relative bg-[#f5f5f5] rounded pt-8">
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {book.discount}
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
              src={book.imgSrc}
              alt={book.title}
              className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
            />

            {/* Book Details */}
            <div className="flex flex-col items-start justify-start mt-4">
              <div className="font-semibold text-sm mb-2 mt-4">
                {book.title}
              </div>
              <div className="text-red-500 font-bold text-lg">
                {book.price}{" "}
                <span className="text-gray-500 line-through">
                  {book.originalPrice}
                </span>
              </div>
              <div className="flex justify-center gap-1 text-yellow-500 mt-2">
                {"⭐".repeat(book.rating)} ({book.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] max-w-[1200px] h-auto lg:h-[70vh] bg-black mx-auto my-24 flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className="bg-black w-full lg:w-[50%] px-5 lg:px-0">
          <p className="bg-black text-[#00FF66] text-lg mt-10 lg:mt-20 ml-0 lg:ml-20 text-center lg:text-left">
            enhance your experience
          </p>
          <h1 className="bg-black text-white text-4xl lg:text-6xl mt-5 lg:mt-10 ml-0 lg:ml-20 font-inter font-medium text-center lg:text-left">
            Best in our <br /> business
          </h1>
          <div className="flex justify-center lg:justify-start bg-black mb-10">
            <button className="px-10 py-3 bg-red-500 hover:bg-red-600 text-white rounded mt-10 lg:mt-10 ml-0 lg:ml-20">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="bg-black w-full flex items-center justify-center relative overflow-hidden">
          <img
            src="/img/backdrop.png"
            alt="Backdrop Image"
            className="bg-transparent rounded-full absolute w-[115vw] right-10 "
          />
          <img
            src="/img/tree.png"
            alt="Tree"
            className="bg-transparent absolute right-28 w-1/2 lg:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
