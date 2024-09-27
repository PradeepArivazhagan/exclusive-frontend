import justforyou1 from "../assets/images/justforyou1.png";
const FavouriteProduct = () => {
  return (
    <div className="mx-auto">
      <div className="w-full md:w-64 lg:w-72 bg-[#F5F5F5] flex flex-col items-center justify-center rounded-t-md">
        <div className="pt-2 px-2 w-full flex flex-row items-start justify-between">
          <p className="p-1 lg:p-2 bg-[#DB4444] text-white text-xs rounded-md">
            -35%
          </p>
          <div className="bg-white p-2 rounded-full">
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
        <div className="h-28 md:h-40 lg:h-48 flex flex-col items-center justify-center">
          <img
            className="w-24 md:w-32 lg:w-40"
            src={justforyou1}
            alt="justforyou"
          />
        </div>
        <button className="relative w-full py-2 flex flex-row items-center justify-center gap-2 rounded-b-md text-white bg-black hover:bg-gray-900">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="text-sm">Add To Cart</span>
        </button>
      </div>
      <div className="mt-3 font-medium">
        <h1 className="text-sm md:text-base lg:text-lg">
          ASUS FHD Gaming Laptop
        </h1>
        <div className="my-1 flex flex-row items-center gap-3">
          <p className="text-[#DB4444] text-sm md:text-base">$950</p>
          <p className="text-slate-400 text-sm md:text-base line-through">
            $950
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
