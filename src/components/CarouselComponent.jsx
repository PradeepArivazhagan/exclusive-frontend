import iphone from "../assets/images/iphone.png";
import apple from "../assets/images/apple.png";

const CarouselComponent = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row md:items-center text-white py-10 md:pl-10 md:pr-5 lg:pl-20 lg:pr-10">
      <div className="w-full px-10 md:px-0 md:w-1/2">
        <div className="flex flex-row items-center gap-4">
          <img src={apple} alt="apple" />
          <h1>iPhone 14 Series</h1>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold my-6">
          Up to 10% off Voucher
        </h1>
        <div className="flex flex-row items-center gap-3">
          <p className="text-sm md:text-base pb-2 border-b border-white">
            Shop Now
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="w-full mt-10 md:mt-0 md:w-1/2">
        <img
          className="w-3/4 mx-auto md:mx-0 md:w-full"
          src={iphone}
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
