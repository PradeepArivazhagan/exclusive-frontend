import Product from "./Product";
const BestSellingProduct = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="mt-10 lg:mt-20 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 lg:gap-4">
          <div className="py-2 px-1 md:py-3 md:px-2 bg-[#DB4444] rounded-sm"></div>
          <h1 className="text-sm md:text-base lg:text-lg font-semibold text-[#DB4444]">
            This Month
          </h1>
        </div>
      </div>
      <div className="my-5 lg:my-10 flex flex-row items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Best Selling Product
        </h1>
        <button className="py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
          View All
        </button>
      </div>
      <div className="flex flex-row gap-3 lg:gap-4 overflow-x-scroll no-scrollbar">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default BestSellingProduct;
