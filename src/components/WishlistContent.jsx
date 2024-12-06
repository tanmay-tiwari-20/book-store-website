import { FiEye } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const WishlistContent = () => {
  // Mock data for wishlist and recommendations
  const wishlistItems = [
    { id: 1, title: "Financial Book", price: 960, originalPrice: 1160 },
    { id: 2, title: "Environmental Studies", price: 1960, originalPrice: 2160 },
    { id: 3, title: "Tax and Management", price: 550, originalPrice: 850 },
    { id: 4, title: "Cost Accounting", price: 750, originalPrice: 1050 },
  ];

  const recommendedItems = [
    { id: 5, title: "Industry", price: 960, originalPrice: 1160, rating: 4 },
    {
      id: 6,
      title: "Stock Management",
      price: 1160,
      originalPrice: 1360,
      rating: 5,
    },
    {
      id: 7,
      title: "Business Statistics",
      price: 560,
      originalPrice: 860,
      rating: 4,
    },
    { id: 8, title: "Industry", price: 200, originalPrice: 400, rating: 3 },
  ];

  const renderBooks = (items, isWishlist = false) =>
    items.map((item) => (
      <div key={item.id} className="">
        <div className="relative bg-[#f5f5f5] rounded pt-8">
          {/* Discount Badge */}
          {item.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              -
              {Math.round(
                ((item.originalPrice - item.price) / item.originalPrice) * 100
              )}
              %
            </div>
          )}

          {/* Icon Section (Trash for Wishlist, Eye for Recommendations) */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 bg-[#f5f5f5]">
            <button className="p-1 bg-white rounded-full">
              {isWishlist ? (
                <BsTrash3 className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </button>
          </div>

          {/* Book Image */}
          <img
            src="/img/mass.png"
            alt={item.title}
            className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
          />

          {/* Add to Cart */}
          <button className="mt-4 bg-black text-white py-2 px-4 w-full rounded flex items-center justify-center gap-2">
            <IoCartOutline className="text-lg bg-black" />
            Add To Cart
          </button>
        </div>
        <div className="flex flex-col items-start mt-4">
          {/* Title */}
          <div className="text-center font-semibold text-sm mb-2">
            {item.title}
          </div>

          {/* Price */}
          <div className="text-center text-red-500 font-bold text-lg">
            ₹{item.price}{" "}
            {item.originalPrice && (
              <span className="text-gray-500 line-through">
                ₹{item.originalPrice}
              </span>
            )}
          </div>

          {/* Rating (Only for Recommendations) */}
          {!isWishlist && item.rating && (
            <div className="flex justify-center gap-1 text-yellow-500 mt-2">
              {"⭐".repeat(item.rating)}{" "}
              <span className="text-gray-500">({item.rating * 20})</span>
            </div>
          )}
        </div>
      </div>
    ));

  return (
    <div className="p-6 max-w-screen-xl mx-auto my-20">
      {/* Wishlist Section */}
      <div className="mb-28">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Wishlist ({wishlistItems.length})</h2>
          <button className="px-6 py-2 border-2 rounded hover:bg-gray-100">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderBooks(wishlistItems, true)}
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          {/* Left Section: Empty Div and Text */}
          <div className="flex items-center">
            <div className="w-6 h-12 bg-red-500 rounded mr-2"></div>
            <h2 className="text-xl">Just For You</h2>
          </div>

          {/* Right Section: Button */}
          <button className="px-6 py-2 border-2 rounded hover:bg-gray-100">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderBooks(recommendedItems, false)}
        </div>
      </div>
    </div>
  );
};

export default WishlistContent;
