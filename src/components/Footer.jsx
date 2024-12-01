import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white px-6 py-8">
      <div className="flex flex-wrap justify-between gap-10 bg-blue-500">
        {/* Exclusive Section */}
        <div className="flex flex-col gap-5 w-full sm:w-auto bg-blue-500">
          <h3 className="text-2xl font-bold bg-blue-500">Exclusive</h3>
          <p className="text-xl bg-blue-500">Subscribe</p>
          <p className="bg-blue-500">Get 10% off your first order</p>
          <form className="flex flex-wrap gap-2 items-center bg-blue-500">
            <div className="flex items-center border-2 rounded w-full sm:w-auto bg-blue-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full sm:w-auto rounded outline-none text-blue-500 bg-blue-500"
              />
              <button className="px-4 bg-blue-500 text-white rounded-r-md">
                <img
                  src="/img/send.png"
                  alt="Send"
                  className="w-6 bg-blue-500"
                />
              </button>
            </div>
          </form>
        </div>
        {/* Support Section */}
        <div className="flex flex-col gap-5 w-full sm:w-auto bg-blue-500">
          <h3 className="text-2xl font-bold bg-blue-500">Support</h3>
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
        <div className="w-full sm:w-auto bg-blue-500">
          <h3 className="text-2xl font-bold bg-blue-500">Account</h3>
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
        <div className="w-full sm:w-auto bg-blue-500">
          <h3 className="text-2xl font-bold mb-2 bg-blue-500">Quick Link</h3>
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
        <div className="flex space-x-4">
          {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
            <a key={platform} href="#" className="hover:text-gray-300">
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
        <button className="bg-white text-blue-500 p-4 rounded-full">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
