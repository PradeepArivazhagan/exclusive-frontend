import { useRef } from "react";
import Slider from "react-slick";
const BrowseCategory = () => {
  let sliderRef = useRef(null);
  const nextArrow = () => {
    sliderRef.slickNext();
  };
  const previousArrow = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="mt-10 lg:mt-20 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 lg:gap-4">
          <div className="py-2 px-1 md:py-3 md:px-2 bg-[#DB4444] rounded-sm"></div>
          <h1 className="text-sm md:text-base lg:text-lg font-semibold text-[#DB4444]">
            Categories
          </h1>
        </div>
      </div>
      <div className="my-5 lg:my-10 flex flex-row items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Browse by Category
        </h1>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={previousArrow}
            className="bg-[#F5F5F5] p-2 rounded-full"
          >
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
          </button>
          <button onClick={nextArrow} className="bg-[#F5F5F5] p-2 rounded-full">
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
          </button>
        </div>
      </div>

      <div className="mb-10 lg:mb-14">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="w-full"
        >
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16 flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_926_868)">
                  <path
                    d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6667 7H31.1354"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 44.0052V44.0305"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="15.1667"
                    y1="39.8334"
                    x2="40.8333"
                    y2="39.8334"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_868">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">Phone</h1>
            </div>
          </div>
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16 flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <g clipPath="url(#clip0_926_613)">
                  <path
                    d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3333 46.6666H39.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 37.3334V46.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 37.3334V46.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 32H48"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_613">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">Computers</h1>
            </div>
          </div>
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16 flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <g clipPath="url(#clip0_926_629)">
                  <path
                    d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 42V49H35V42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14V7H35V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="24"
                    y1="23"
                    x2="24"
                    y2="34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="28"
                    y1="28"
                    x2="28"
                    y2="34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32"
                    y1="26"
                    x2="32"
                    y2="34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_629">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">SmartWatch</h1>
            </div>
          </div>
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16 flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <g clipPath="url(#clip0_926_6)">
                  <path
                    d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_6">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">Camera</h1>
            </div>
          </div>
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16  flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <g clipPath="url(#clip0_926_644)">
                  <path
                    d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_644">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">HeadPhones</h1>
            </div>
          </div>
          <div className="mr-3">
            <div className="w-40 h-36 md:w-60 md:h-40 lg:w-80 lg:h-44 px-16  flex flex-col items-center justify-center border border-slate-400 rounded-md hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_926_809)">
                  <path
                    d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 28H23.3333M18.6667 23.3334V32.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 25.6666V25.6908"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 30.3333V30.3574"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_926_809">
                    <rect width="56" height="56" fill="none" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-2">Gaming</h1>
            </div>
          </div>
        </Slider>
      </div>
      <hr />
    </div>
  );
};

export default BrowseCategory;
