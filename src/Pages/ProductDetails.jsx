import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import detailMain from "../assets/images/detailMain.png";
import detail1 from "../assets/images/detail1.png";
import detail2 from "../assets/images/detail2.png";
import detail3 from "../assets/images/detail3.png";
import detail4 from "../assets/images/detail4.png";
import deliveryBlack from "../assets/icons/deliveryBlack.svg";
import returnIcon from "../assets/icons/return.svg";
import Product from "../components/Product"

const ProductDetails = () => {
  return (
    <>
      <MainHeader />
      <div className="pt-24 pb-10 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className=" w-full lg:w-1/2 flex flex-col md:flex-row gap-5">
              <div className="order-2 md:order-1 flex flex-row gap-2 md:gap-0 md:flex-col justify-between">
                <div className="bg-[#F5F5F5] py-4 px-5 rounded-md flex flex-row items-center justify-center">
                  <img src={detail1} alt="detail1" />
                </div>
                <div className="bg-[#F5F5F5] py-4 px-5 rounded-md flex flex-row items-center justify-center">
                  <img src={detail2} alt="detail2" />
                </div>
                <div className="bg-[#F5F5F5] py-4 px-5 rounded-md flex flex-row items-center justify-center">
                  <img src={detail3} alt="detail3" />
                </div>
                <div className="bg-[#F5F5F5] py-4 px-5 rounded-md flex flex-row items-center justify-center">
                  <img src={detail4} alt="detail4" />
                </div>
              </div>
              <div className="order-1 md:order-2 bg-[#F5F5F5] py-10 md:py-32 px-5 rounded-md">
                <img src={detailMain} alt="main" />
              </div>
            </div>
            <div className=" w-full lg:w-1/2 py-8 md:py-10 md:px-0 lg:py-0 lg:px-16">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">
                  Havic HV G-92 Gamepad
                </h1>
                <div className="my-3 flex flex-row gap-4">
                  <div className="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFAD33"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFAD33"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFAD33"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFAD33"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFAD33"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-slate-500">(150 reviews)</p>
                  </div>
                  <p className="text-sm text-[#00FF66] pl-4 border-l border-black">
                    In Stock
                  </p>
                </div>
                <h1 className="text-lg md:text-xl">$192.00</h1>
                <p className="text-sm md:text-base my-4">
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </p>
                <hr />
                <div className="my-5 flex flex-row items-center gap-4">
                  <h1 className="text-base md:text-lg">Colors:</h1>
                  <div className="flex flex-row items-center gap-2">
                  <input type="radio" autoFocus className=" w-5 h-5 accent-[gray]"/>
                    <input type="radio" autoFocus className=" w-5 h-5 accent-[#DB4444]"/>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <h1 className="text-base md:text-lg">Size:</h1>
                  <div className="flex flex-row items-center gap-3">
                    <button className="w-8 p-1 text-sm font-semibold border border-black rounded-md">
                      XS
                    </button>
                    <button className="w-8 p-1 text-sm font-semibold border border-black rounded-md">
                      S
                    </button>
                    <button className="w-8 p-1 text-sm font-semibold border border-black rounded-md">
                      M
                    </button>
                    <button className="w-8 p-1 text-sm font-semibold border border-black rounded-md">
                      L
                    </button>
                    <button className="w-8 p-1 text-sm font-semibold border border-black rounded-md">
                      XL
                    </button>
                  </div>
                </div>
                <div className="my-6 flex flex-row items-center gap-6">
                  <div className="flex flex-row items-center">
                    <button className="w-8 p-1 text-xl border border-black rounded-l-sm">
                      -
                    </button>
                    <p className="px-5 text-lg border-y p-1 border-black">1</p>
                    <button className="w-8 p-1 text-xl border border-black rounded-r-sm">
                      +
                    </button>
                  </div>
                  <button className="bg-[#DB4444] hover:bg-[#E07575] py-[9px] px-6 rounded-sm text-sm text-white">
                    Buy Now
                  </button>
                  <button className="p-2 text-xl border border-black rounded-md flex flex-col items-center justify-center">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="my-8 border border-black rounded-sm md:flex md:flex-row lg:flex-col">
                  <div className="flex flex-row items-center py-4 px-5">
                    <img src={deliveryBlack} alt="delivery" />
                    <div className="px-4">
                      <h1 className="text-base">Free Delivery</h1>
                      <p className="text-xs underline mt-2">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-row items-center py-4 px-5 md:border-l md:border-black lg:border-0">
                    <img src={returnIcon} alt="return" />
                    <div className="px-4">
                      <h1 className="text-base">Return Delivery</h1>
                      <p className="text-xs underline mt-2">
                        Free 30 Days Delivery Returns. Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0 md:mt-5 lg:mt-24 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4">
              <div className="py-3 px-2 bg-[#DB4444] rounded-sm"></div>
              <h1 className="font-semibold text-[#DB4444]">Related Items</h1>
            </div>
          </div>
          <div className="mt-10 flex flex-row gap-5 overflow-x-scroll no-scrollbar">
            <Product/>            
            <Product/>            
            <Product/>            
            <Product/>            
            <Product/>            
            <Product/>            
            <Product/>            
            <Product/>            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
