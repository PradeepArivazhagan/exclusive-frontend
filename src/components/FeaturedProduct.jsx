import ps5 from "../assets/images/ps5.png";
import women from "../assets/images/women.png";
import perfume from "../assets/images/perfume.png";
import amazon from "../assets/images/amazon.png";

const FeaturedProduct = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="mt-10 lg:mt-20 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 lg:gap-4">
          <div className="py-2 px-1 md:py-3 md:px-2 bg-[#DB4444] rounded-sm"></div>
          <h1 className="text-sm md:text-base lg:text-lg font-semibold text-[#DB4444]">
            Featured
          </h1>
        </div>
      </div>
      <div className="my-5 lg:my-10 flex flex-row items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Explore Products
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
      <div className="my-5 flex flex-col lg:flex-row gap-3 lg:gap-5 text-white">
        <div
          style={{ backgroundImage: `url(${ps5})` }}
          className="h-svh bg-black bg-no-repeat bg-bottom md:bg-right-bottom lg:bg-bottom  rounded-md w-full lg:w-1/2 p-6 md:px-10 md:pt-10"
        >
          <div>
            <h1 className="text-xl md:text-3xl font-semibold">
              Play Station 5
            </h1>
            <p className="my-5 text-sm md:text-base font-light">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-sm md:text-base font-bold pb-1 border-b w-fit">
              Shop Now
            </p>
          </div>
        </div>
        <div className="rounded-md w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5">
          <div
            style={{ backgroundImage: `url(${women})` }}
            className=" bg-[#0D0D0D] bg-no-repeat md:bg-right-bottom  rounded-md w-full h-full p-6 md:p-10 lg:px-10 lg:pb-10 flex flex-col justify-end"
          >
            <div className="w-1/2">
              <h1 className="text-xl md:text-3xl font-semibold">
                Women Collection's
              </h1>
              <p className="my-5 text-sm md:text-base font-light">
                Featured woman collections that give you another vibe.
              </p>
              <p className="text-sm md:text-base font-bold pb-1 border-b w-fit">
                Shop Now
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 h-full">
            <div
              style={{ backgroundImage: `url(${amazon})` }}
              className="bg-[#0D0D0D] bg-no-repeat bg-right-top md:bg-right-bottom lg:bg-top  rounded-md w-full h-full p-6 md:p-10 lg:px-10 lg:pb-10 flex flex-col justify-end"
            >
              <div>
                <h1 className="text-xl md:text-3xl font-semibold">Speakers</h1>
                <p className="my-3 text-sm md:text-base font-light">
                  Amazon wireless speakers
                </p>
                <p className="text-sm md:text-base font-bold pb-1 border-b w-fit">
                  Shop Now
                </p>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${perfume})` }}
              className="bg-[#0D0D0D] bg-no-repeat bg-right-top md:bg-right-top lg:bg-top  rounded-md w-full h-full p-6 md:p-10 lg:px-10 lg:pb-10 flex flex-col justify-end"
            >
              <div>
                <h1 className="text-xl md:text-3xl font-semibold">Perfume</h1>
                <p className="my-3 text-sm md:text-base font-light">
                  GUCCI INTENSE OUD EDP
                </p>
                <p className="text-sm md:text-base font-bold pb-1 border-b w-fit">
                  Shop Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
