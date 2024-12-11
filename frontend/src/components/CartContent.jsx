import { Link } from "react-router-dom";

const CartContent = () => {
  return (
    <div className="py-10">
      {/* Breadcrumb Section */}
      <div className="mb-8 px-4 sm:px-8 lg:px-28">
        <p className="text-sm sm:text-base">
          <span className="opacity-50">Home</span> / Cart
        </p>
      </div>

      {/* Cart Section */}
      <div className="px-4 sm:px-8 lg:px-28">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse hidden md:table">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Book</th>
                <th className="text-left py-4">Price</th>
                <th className="text-left py-4">Quantity</th>
                <th className="text-left py-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 flex items-center">
                  <button className="text-red-500 mr-4">&#10006;</button>
                  <img
                    src="/img/business.png"
                    alt="Business Management"
                    className="w-10 h-10 object-cover mr-4"
                  />
                  <span>Business Management</span>
                </td>
                <td className="py-4">₹650</td>
                <td className="py-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 border rounded text-center"
                  />
                </td>
                <td className="py-4">₹650</td>
              </tr>

              <tr className="border-b">
                <td className="py-4 flex items-center">
                  <button className="text-red-500 mr-4">&#10006;</button>
                  <img
                    src="/img/industry.png"
                    alt="Cost Accounting"
                    className="w-10 h-10 object-cover mr-4"
                  />
                  <span>Cost Accounting</span>
                </td>
                <td className="py-4">₹550</td>
                <td className="py-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="2"
                    className="w-16 border rounded text-center"
                  />
                </td>
                <td className="py-4">₹1100</td>
              </tr>
            </tbody>
          </table>

          {/* Responsive Mobile View */}
          <div className="md:hidden">
            <div className="border-b py-4 flex items-center justify-between">
              <img
                src="/img/business.png"
                alt="Business Management"
                className="w-10 h-10 object-cover mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span>Business Management</span>
                  <button className="text-red-500">&#10006;</button>
                </div>
                <div className="flex justify-between items-center">
                  <span>₹650</span>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 border rounded text-center"
                  />
                  <span>₹650</span>
                </div>
              </div>
            </div>

            <div className="border-b py-4 flex items-center justify-between">
              <img
                src="/img/industry.png"
                alt="Cost Accounting"
                className="w-10 h-10 object-cover mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span>Cost Accounting</span>
                  <button className="text-red-500">&#10006;</button>
                </div>
                <div className="flex justify-between items-center">
                  <span>₹550</span>
                  <input
                    type="number"
                    min="1"
                    defaultValue="2"
                    className="w-16 border rounded text-center"
                  />
                  <span>₹1100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Link to="/">
            <button className="border border-black/50 px-6 py-2 rounded hover:bg-gray-100">
              Return To Shop
            </button>
          </Link>
          <Link to="/wishlist">
            <button className="border border-black/50 px-6 py-2 rounded hover:bg-gray-100">
              Update Cart
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">
          {/* Coupon Code Section */}
          <div className="flex flex-wrap w-full lg:w-1/2 gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border rounded px-4 py-2 w-full sm:w-[70%]"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full sm:w-[30%]">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Section */}
          <div className="border border-black p-6 rounded shadow-md w-full lg:w-1/3">
            <h3 className="font-semibold text-lg mb-4">Cart Total</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹1750</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>₹1750</span>
            </div>
            <Link to="/checkout">
              <button className="bg-red-500 text-white w-full mt-4 py-2 rounded hover:bg-red-600">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
