import { FaChevronDown } from "react-icons/fa";

const TopHeader = () => {
  return (
    <header className="!bg-[#34c759] w-full h-12 py-1 px-14 flex items-center justify-between text-white">
      <div className="flex items-center justify-center gap-3 bg-[#34c759]">
        <img
          src="/img/whatsappIcon.png"
          alt="Whatsapp Icon"
          className="w-10 bg-[#34c759]"
        />
        <p className="bg-[#34c759] text-sm font-inter">(+91 / 011) 23266105 , 23247051</p>
      </div>

      <p className="bg-[#34c759] font-poppins text-sm">
        Summer Sale For All Books And Free Express Delivery - OFF 50%!
      </p>

      <p className="bg-[#34c759] underline font-bold text-sm">Shop Now</p>

      <div className="bg-[#34c759] flex items-center justify-center gap-2">
        <p className="bg-[#34c759] text-sm">English</p>
        <FaChevronDown className="bg-[#34c759] text-sm" />
      </div>
    </header>
  );
};

export default TopHeader;
