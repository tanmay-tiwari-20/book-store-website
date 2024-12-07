const CheckoutContent = () => {
  return (
    <div className="py-10">
      {/* Breadcrumb Section */}
      <div className="mb-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28">
        <p className="text-sm sm:text-base text-gray-700">
          <span className="opacity-50">
            Account / My Account / Product / View Cart
          </span>{" "}
          / Checkout
        </p>
      </div>

      {/* Checkout Content */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 font-inter tracking-wider">
            Billing Details
          </h2>
          <form className="space-y-4">
            {[
              { id: "first-name", label: "First Name", required: true },
              { id: "company-name", label: "Company Name", required: false },
              { id: "street-address", label: "Street Address", required: true },
              {
                id: "apartment",
                label: "Apartment, floor, etc. (optional)",
                required: false,
              },
              { id: "city", label: "Town/City", required: true },
              { id: "phone-number", label: "Phone Number", required: true },
              { id: "email", label: "Email Address", required: true },
            ].map((field) => (
              <div key={field.id}>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor={field.id}
                >
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.id === "email" ? "email" : "text"}
                  id={field.id}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-red-300"
                />
              </div>
            ))}

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="save-info"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="save-info" className="ml-2 text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 font-inter tracking-wider">
            Your Order
          </h2>
          <div className="border border-gray-300 rounded-md p-6">
            <div className="space-y-4">
              {[
                {
                  item: "Business management",
                  price: "₹650",
                  imgUrl: "/img/business.png",
                },
                {
                  item: "HI Gamepad",
                  price: "₹1100",
                  imgUrl: "/img/industry.png",
                },
              ].map((product, index) => (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex items-center">
                    <img src={product.imgUrl} alt="" className="w-14" />
                    <span className="ml-2">{product.item}</span>
                  </div>
                  <span className="font-medium">{product.price}</span>
                </div>
              ))}
              <div className="flex justify-between border-t pt-4">
                <span>Subtotal:</span>
                <span className="font-medium">₹1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span>Total:</span>
                <span className="font-bold text-lg">₹1750</span>
              </div>
            </div>

            <div className="mt-6">
              {[
                { label: "Bank", icon: "/img/bankicon.png" },
                { label: "Cash on delivery", icon: null },
              ].map((method, index) => (
                <label key={index} className="flex items-center mb-2 last:mb-0">
                  <input
                    type="radio"
                    name="payment-method"
                    defaultChecked={index === 1}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300"
                  />
                  <span className="ml-2 text-sm">{method.label}</span>
                  {method.icon && (
                    <img
                      src={method.icon}
                      alt=""
                      className="ml-auto w-12 md:w-16 lg:w-20"
                    />
                  )}
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-red-300 mb-4 md:mb-0 md:mr-4"
              />
              <button className="px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm">
                Apply Coupon
              </button>
            </div>

            <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
