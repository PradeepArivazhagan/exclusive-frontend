import CarouselComponent from "../components/CarouselComponent";
const CategoryAndCarousel = () => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
      <div className="pt-6 md:pt-8 flex flex-col lg:flex-row">
        <ul className="order-1 mt-3 md:mt-5 lg:mt-0 lg:order-0 w-full pt-5 md:pt-4 lg:py-0 lg:w-2/12 flex flex-row flex-wrap justify-evenly lg:justify-between lg:flex-col gap-3">
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Woman’s Fashion
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Men’s Fashion
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Electronics
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Home & Lifestyle
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Medicine
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Sports & Outdoor
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Baby’s & Toys
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Groceries & Pets
          </li>
          <li className="bg-slate-200 lg:bg-transparent py-1 px-3 lg:py-0 lg:px-0 rounded-full text-xs md:text-sm lg:text-base">
            Health & Beauty
          </li>
        </ul>
        <div className="order-0 lg:order-1 w-full h-full lg:w-10/12">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default CategoryAndCarousel;
