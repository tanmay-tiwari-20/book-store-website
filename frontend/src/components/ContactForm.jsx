import { AiOutlineMail } from "react-icons/ai";
import { SlCallEnd } from "react-icons/sl";

const ContactForm = () => {
  return (
    <>
      <div className="px-28 ml-3 mx-auto pt-10">
        <p>
          <span className="opacity-50">Home</span> / Contact
        </p>
      </div>
      <div className="w-full md:w-11/12 mx-auto p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section (Card) */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 space-y-6 h-full">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                  <SlCallEnd className="bg-red-500 text-xl text-white -rotate-90" />
                </div>

                <h3 className="font-semibold text-lg">Call To Us</h3>
              </div>
              <p className="text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-semibold text-gray-800">Phone: +876386485</p>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center space-x-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                  <AiOutlineMail className="bg-red-500 text-xl text-white" />
                </div>

                <h3 className="font-semibold text-lg">Write To Us</h3>
              </div>
              <p className="text-gray-600">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-semibold text-gray-800">
                Emails: customer@exclusive.com
              </p>
              <p className="font-semibold text-gray-800">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Card) */}
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6 h-full">
          <form className="space-y-4 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="col-span-1 md:col-span-1  bg-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="col-span-1 md:col-span-1 bg-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="col-span-1 md:col-span-1 bg-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full h-[35vh] rounded p-2 focus:outline-none focus:ring-2 bg-gray-100 focus:ring-red-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
