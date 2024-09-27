import Slider from "react-slick";
import apple from "../assets/images/apple.png";
import iphone from "../assets/images/iphone.png";
import vegetable from "../assets/images/vegetable.png";
import womenclothes from "../assets/images/womenclothes.png";
import furniture from "../assets/images/furniture.png";
import babyproducts from "../assets/images/babyproducts.png";

const CarouselComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="bg-black flex flex-row items-center justify-center text-white px-6 py-9 md:py-7 md:px-14 lg:py-14 lg:px-20">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4">
              <img src={apple} alt="apple" className="max-md:w-5" />
              <h1 className="text-xs md:text-base">iPhone 14 Series</h1>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-3 md:my-6">
              Up to 10% off Voucher
            </h1>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xs md:text-sm lg:text-base pb-2 border-b border-white">
                Shop Now
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 md:size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end justify-center">
            <img
              className="w-36 h-32 md:w-52 md:h-48 mx-auto lg:w-80 lg:h-72"
              src={iphone}
              alt="iphone"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 flex flex-row items-center justify-center text-white px-6 py-8 md:py-8 md:px-14 lg:py-14 lg:px-20">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-xs md:text-base lg:font-semibold">
                Fresh & Healthy Fruits and Vegetables
              </h1>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-3 md:my-6 text-[#FCCD2A]">
              Super Grocery Sale!
            </h1>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xs md:text-sm lg:text-base pb-2 border-b border-white">
                Order Now
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
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              className="w-full h-full mx-auto lg:w-full lg:h-72"
              src={vegetable}
              alt="vegetable"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 flex flex-row items-center justify-center text-white px-6 py-8 md:py-9 md:px-14 lg:py-14 lg:px-20">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-xs md:text-base lg:font-semibold">
                Get Quality at Affordable Prices
              </h1>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-3 md:my-6 text-[#EAD8B1]">
              Discount upto 40%
            </h1>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xs md:text-sm lg:text-base pb-2 border-b border-white">
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
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              className="w-36 h-32 md:w-52 md:h-48 mx-auto lg:w-80 lg:h-72"
              src={womenclothes}
              alt="womenclothes"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 flex flex-row items-center justify-center text-white px-6 py-8 md:py-9 md:px-14 lg:py-14 lg:px-20">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-xs md:text-base lg:font-semibold text-black">
                Exclusive Modern Home Furnitures
              </h1>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-3 md:my-6 text-[#185519]">
              Big Furniture Sale!!
            </h1>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xs md:text-sm lg:text-base pb-2 border-b border-black text-black">
                Shop Now
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
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
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              className="w-full h-full mx-auto lg:w-full lg:h-72"
              src={furniture}
              alt="furniture"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 flex flex-row items-center justify-center text-white px-6 py-8 md:py-8 md:px-14 lg:py-14 lg:px-20">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-xs md:text-base lg:font-semibold ">
                Super Nourishing Baby care Combos
              </h1>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-3 md:my-6 text-[#4F1787]">
              Essential baby products
            </h1>
            <div className="flex flex-row items-center gap-3">
              <p className="text-xs md:text-sm lg:text-base pb-2 border-b border-white">
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
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              className="w-full h-full mx-auto lg:w-full lg:h-72"
              src={babyproducts}
              alt="babyproducts"
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselComponent;
