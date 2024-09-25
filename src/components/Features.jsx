import delivery from "../assets/icons/delivery.svg"
import service from "../assets/icons/service.svg" 
import secure from "../assets/icons/secure.svg"

const Features = () => {
  return (
    <div className="mt-20 md:mt-24 lg:mt-48 w-10/12 md:w-full lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="flex flex-col justify-center items-center">
        <div className="p-2 text-white bg-black rounded-full border-8 border-[#D9DBE9]">
          <img src={delivery} alt="delivery" />
        </div>
        <h1 className="text-base lg:text-lg font-bold mt-5 tracking-wider">
          FREE AND FAST DELIVERY
        </h1>
        <p className="text-sm mt-2">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-2 text-white bg-black rounded-full border-8 border-[#D9DBE9]">
          <img src={service} alt="service" />
        </div>
        <h1 className="text-base lg:text-lg font-bold mt-5 tracking-wider">
          24/7 CUSTOMER SERVICE
        </h1>
        <p className="text-sm mt-2">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-2 text-white bg-black rounded-full border-8 border-[#D9DBE9]">
          <img src={secure} alt="secure" />
        </div>
        <h1 className="text-base lg:text-lg font-bold mt-5 tracking-wider">
          MONEY BACK GUARANTEE
        </h1>
        <p className="text-sm mt-2">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
