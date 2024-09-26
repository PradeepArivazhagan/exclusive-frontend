import speaker from "../assets/images/speaker.png"; 

const Banner = () => {
  return (
    <div className="bg-black my-16 lg:my-24 p-5 md:p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center">
      <div className="order-1 w-full lg:order-1 lg:w-1/2">
        <h1 className="text-sm text-[#00FF66]">Categories</h1>
        <p className="text-4xl md:text-6xl my-5 md:my-10 text-white font-semibold md:mr-5">
          Enhance Your Music Experience
        </p>
        <div className="flex flex-row items-center gap-3">
          <div className="w-16 h-14 md:h-16  rounded-full bg-white flex flex-col items-center justify-center">
            <h1 className="text-base font-extrabold">5</h1>
            <p className="text-xs mt-0">Days</p>
          </div>
          <div className="w-16 h-14 md:h-16  rounded-full bg-white flex flex-col items-center justify-center">
            <h1 className="text-base font-extrabold">23</h1>
            <p className="text-xs mt-0">Hours</p>
          </div>
          <div className="w-16 h-14 md:h-16 rounded-full bg-white flex flex-col items-center justify-center">
            <h1 className="text-base font-extrabold">59</h1>
            <p className="text-xs mt-0">Minutes</p>
          </div>
          <div className="w-16 h-14 md:h-16 rounded-full bg-white flex flex-col items-center justify-center">
            <h1 className="text-base font-extrabold">32</h1>
            <p className="text-xs mt-0">Seconds</p>
          </div>
        </div>
        <button className="mt-8 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#00FF66] text-sm text-white">
          Buy Now!
        </button>
      </div>
      <div className="order-2 w-full lg:order-2 lg:w-1/2 mt-14 flex lg:inline lg:mt-0">
        <img
          src={speaker}
          alt="speaker"
          className="w-full md:w-3/4 lg:w-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Banner;
