import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Authors = () => {
  return (
    <div className="w-[83%] mx-auto my-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold cursor-pointer tracking-wider underline font-inter">
          Meet Our Authors
        </h2>
        <div className="flex items-center gap-4 mr-20">
          <HiArrowSmallLeft className="bg-[#f5f5f5] p-2 text-4xl rounded-full cursor-pointer" />
          <HiArrowSmallRight className="bg-[#f5f5f5] p-2 text-4xl rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-14 mb-20">
        {/* Card 1 */}
        <div className="flex flex-col items-start bg-gray-100 pt-4 rounded w-72 h-52">
          <img
            src="/img/author1.png"
            alt="Sakshi Ahlawaat"
            className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
          />
          <p className="w-full mt-4 pt-2 font-medium">Sakshi Ahlawaat</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-100 pt-4 rounded w-72 h-52">
          <img
            src="/img/author2.png"
            alt="Singh Upendra Pratap"
            className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
          />
          <p className="w-full mt-4 pt-2 font-medium">
            Singh Upendra Pratap(Dr)
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gray-100 pt-4 rounded w-72 h-52">
          <img
            src="/img/author3.png"
            alt="Gautam Dr. Pragati"
            className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
          />
          <p className="w-full mt-4 pt-2 font-medium">Gautam Dr. Pragati</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-100 pt-4 rounded w-72 h-52">
          <img
            src="/img/author4.png"
            alt="Sengupta Jhumur"
            className="w-full h-40 object-contain mb-4 bg-[#f5f5f5]"
          />
          <p className="w-full mt-4 pt-2 font-medium">Sengupta Jhumur(Dr) </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded mt-10">
          View All Our Authors
        </button>
      </div>
    </div>
  );
};

export default Authors;
