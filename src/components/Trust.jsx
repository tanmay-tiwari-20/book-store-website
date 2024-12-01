const Trust = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 my-32">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[#c1c0c1] w-28 h-28 rounded-full flex items-center justify-center">
          <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center">
            <img
              src="/img/delivery.png"
              alt="Delivery"
              className="bg-transparent w-14"
            />
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold tracking-wider mt-2">
          FREE AND FAST DELIVERY
        </h1>
        <p className="text-sm md:text-base">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[#c1c0c1] w-28 h-28 rounded-full flex items-center justify-center">
          <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center">
            <img
              src="/img/headphone.png"
              alt="Customer Service"
              className="bg-transparent w-14"
            />
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold tracking-wider mt-2">
          24/7 CUSTOMER SERVICE
        </h1>
        <p className="text-sm md:text-base">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[#c1c0c1] w-28 h-28 rounded-full flex items-center justify-center">
          <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center">
            <img
              src="/img/secure.png"
              alt="Money Back Guarantee"
              className="bg-transparent w-14"
            />
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold tracking-wider mt-2">
          MONEY BACK GUARANTEE
        </h1>
        <p className="text-sm md:text-base">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Trust;
