import { FaChevronDown } from "react-icons/fa";

const TopHeader = () => {
  return (
    <header className="bg-[#34c759] w-full py-2 px-4 sm:px-8 md:px-14 flex flex-wrap items-center justify-between text-white">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 bg-[#34c759]">
        <img
          src="/img/whatsappIcon.png"
          alt="Whatsapp Icon"
          className="w-8 sm:w-10 bg-[#34c759]"
        />
        <p className="text-xs sm:text-sm font-inter bg-[#34c759]">
          (+91 / 011) 23266105, 23247051
        </p>
      </div>

      {/* Middle Section */}
      <p className="text-center text-xs sm:text-sm font-poppins flex-grow order-3 sm:order-none w-full sm:w-auto mt-2 sm:mt-2 bg-[#34c759]">
        Summer Sale For All Books And Free Express Delivery - OFF 50%!
      </p>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-0 sm:mt-0 bg-[#34c759]">
        <p className="underline font-bold text-xs sm:text-sm bg-[#34c759]">
          Shop Now
        </p>
        <div className="flex items-center gap-1 sm:gap-2 bg-[#34c759]">
          <p className="text-xs sm:text-sm bg-[#34c759]">English</p>
          <FaChevronDown className="text-xs sm:text-sm bg-[#34c759]" />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
