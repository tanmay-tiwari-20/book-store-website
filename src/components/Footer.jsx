import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-blue-500 text-white px-4 sm:px-6 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-blue-500">
        {/* Exclusive Section */}
        <div className="flex flex-col gap-5 bg-blue-500">
          <h3 className="text-xl sm:text-2xl font-bold bg-blue-500">
            Exclusive
          </h3>
          <p className="text-base sm:text-lg bg-blue-500">Subscribe</p>
          <p className="bg-blue-500">Get 10% off your first order</p>
          <form className="flex flex-col sm:flex-row gap-2 items-center bg-blue-500">
            <div className="flex items-center border-2 rounded w-full bg-blue-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded outline-none bg-blue-500"
              />
              <button className="px-4 bg-blue-500 text-white rounded-r-md">
                <img
                  src="/img/send.png"
                  alt="Send"
                  className="w-10 bg-blue-500"
                />
              </button>
            </div>
          </form>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-5 bg-blue-500">
          <h3 className="text-xl sm:text-2xl font-bold bg-blue-500">Support</h3>
          <address className="not-italic leading-6 bg-blue-500">
            23, Daryaganj, Ansari Road <br />
            New Delhi-110002 <br />
            <a
              href="mailto:exclusive@gmail.com"
              className="underline bg-blue-500"
            >
              exclusive@gmail.com
            </a>
            <br />
            +88015-88888-9999
          </address>
        </div>

        {/* Account Section */}
        <div className="bg-blue-500">
          <h3 className="text-xl sm:text-2xl font-bold bg-blue-500">Account</h3>
          <ul className="space-y-3 mt-5 bg-blue-500">
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
              (item) => (
                <li key={item} className="bg-blue-500">
                  <a href="#" className="hover:underline bg-blue-500">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="bg-blue-500">
          <h3 className="text-xl sm:text-2xl font-bold bg-blue-500">
            Quick Link
          </h3>
          <ul className="space-y-3 mt-5 bg-blue-500">
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (item) => (
                <li key={item} className="bg-blue-500">
                  <a href="#" className="hover:underline bg-blue-500">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 bg-blue-500">
        <div className="flex space-x-4 bg-blue-500">
          <a href="#" className="hover:text-gray-300 ">
            <FaFacebookF size={24} className="bg-blue-500" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} className="bg-blue-500" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} className="bg-blue-500" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn size={24} className="bg-blue-500" />
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-white text-blue-500 p-4 rounded-full transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
