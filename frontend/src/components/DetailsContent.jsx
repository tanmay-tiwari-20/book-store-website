import { FiEye } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";

const DetailsContent = () => {
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
    <div className="py-10">
      {/* Breadcrumb Section */}
      <div className="mb-8 px-4 sm:px-8 lg:px-28">
        <p className="text-sm sm:text-base">
          <span className="opacity-50">Account / Gaming</span> / Industry
        </p>
      </div>

      {/* Product Details Section */}
      <div className="px-4 sm:px-8 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
          <div className="gap-4 flex flex-row sm:flex-col items-center justify-center">
            {[
              "/img/industry1.png",
              "/img/industry2.png",
              "/img/industry3.png",
              "/img/industry4.png",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-20 sm:w-28 p-2 cursor-pointer bg-zinc-200 rounded"
              />
            ))}
          </div>
          <div className="flex-grow bg-zinc-200 flex items-center justify-center rounded">
            <img
              src="/img/industrybig.png"
              alt="Industry 4.0 Book"
              className="w-full sm:w-96 object-cover rounded bg-zinc-200"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="p-4">
          <h1 className="text-lg sm:text-xl font-semibold mb-2">Industry</h1>
          <div className="flex items-center text-sm mb-2">
            <span className="text-yellow-500 flex items-center mr-2">
              ⭐⭐⭐⭐☆
            </span>
            <span className="text-gray-500">(150 Reviews)</span>
            <span className="text-green-500 ml-2 font-semibold">
              | In Stock
            </span>
          </div>
          <p className="text-lg font-bold text-gray-800 mb-4">₹192.00</p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Industry sustainable industrial approach is a great book to learn
            how industries work in real life, so you got to buy it.
          </p>

          {/* Colours */}
          <div className="mb-4">
            <span className="block font-semibold mb-1">Colours:</span>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-black rounded-full bg-gray-200 cursor-pointer"></div>
              <div className="w-6 h-6 border border-gray-300 rounded-full bg-red-500 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <span className="block font-semibold mb-1">Size:</span>
            <div className="flex items-center space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 text-sm border rounded ${
                    size === "M"
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300"
                  } hover:border-black`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className="flex flex-wrap items-center mb-6 space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-3 py-1 text-lg">-</button>
              <span className="px-4 py-1 text-lg border-l border-r border-gray-300">
                2
              </span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Buy Now
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
              <IoIosHeartEmpty className="text-xl hover:bg-transparent" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="border border-black rounded pt-4">
            <div className="mb-2 border-b border-black p-2">
              <p className="flex items-center">
                <img src="/img/delivery2.png" alt="" className="w-6" />
                <span className="ml-2">Free Delivery</span>
              </p>
              <span className="pl-8 text-sm cursor-pointer">
                Enter your postal code for Delivery Availability
              </span>
            </div>
            <div className="p-2">
              <p className="flex items-center">
                <img src="/img/return.png" alt="" className="w-6" />
                <span className="ml-2">Return Delivery</span>
              </p>
              <span className="pl-8 text-sm cursor-pointer">
                Free 30 Days Delivery Returns. Details
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Item Section */}
      <div className="flex items-center gap-4 px-5 sm:px-6 lg:px-36 my-10">
        <div className="w-6 h-12 bg-red-500 rounded"></div>
        <p className="text-red-500 text-lg font-bold">Related Item</p>
      </div>

      {/* Best Sellers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-6 sm:mx-10 lg:mx-32 mt-5 mb-20">
        {books.map((book) => (
          <div key={book.id} className="relative bg-[#f5f5f5] rounded pt-8">
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {book.discount}
            </div>

            {/* Wishlist and View Icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 bg-[#f5f5f5]">
              <button className="p-1 bg-white rounded-full flex items-center justify-center">
                <IoIosHeartEmpty className="text-xl" />
              </button>
              <button className="p-1 bg-white rounded-full">
                <FiEye className="text-xl" />
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
              <div className="font-semibold text-sm mt-4 mb-2">
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
    </div>
  );
};

export default DetailsContent;
