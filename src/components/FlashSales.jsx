import Product from "../components/Product";

const FlashSales = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="mt-10 lg:mt-20 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 lg:gap-4">
          <div className="py-2 px-1 md:py-3 md:px-2 bg-[#DB4444] rounded-sm"></div>
          <h1 className="text-sm md:text-base lg:text-lg font-semibold text-[#DB4444]">
            Today's
          </h1>
        </div>
      </div>
      <div className="my-5 lg:my-10 flex flex-row items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Flash Sales
        </h1>
        <div className="flex flex-row items-center gap-2">
          <div className="bg-[#F5F5F5] p-2 rounded-full">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="bg-[#F5F5F5] p-2 rounded-full">
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
      </div>
      <div className="flex flex-row gap-3 lg:gap-4 overflow-x-scroll no-scrollbar">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="w-full mt-5 mb-10 lg:mt-10 lg:mb-14 flex flex-row items-center justify-center">
        <button className="mt-6 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
          View All Products
        </button>
      </div>
      <hr />
    </div>
  );
};

export default FlashSales;
