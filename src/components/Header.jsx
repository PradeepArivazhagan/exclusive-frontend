import search from "../assets/icons/search.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [isMenuTab, setIsMenuTab] = useState(false);
  const onClickMenuMobile = () => {
    setIsMenuMobile((prevState) => !prevState);
  };

  const onClickMenuTab = () => {
    setIsMenuTab((prevState) => !prevState);
  };
  return (
    <header className="fixed z-10 bg-white w-full pt-5 pb-4 lg:pt-6 lg:pb-5 border-b border-slate-300">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <button onClick={onClickMenuMobile} className="block md:hidden">
          {isMenuMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <ul className="hidden lg:flex flex-row items-center gap-6 text-base">
          <Link to="/">
            <li className="my-1 mx-2 hover:border-b hover:border-slate-400">
              Home
            </li>
          </Link>
          <Link to="/contact">
            <li className="my-1 mx-2 hover:border-b hover:border-slate-400">
              Contact
            </li>
          </Link>
          <Link to="/about">
            <li className="my-1 mx-2 hover:border-b hover:border-slate-400">
              About
            </li>
          </Link>
          <Link to="/signup">
            <li className="my-1 mx-2 hover:border-b hover:border-slate-400">
              Signup
            </li>
          </Link>
        </ul>
        <div className="hidden md:flex flex-row items-center gap-6">
          <div className="hidden md:flex flex-row items-center py-2 px-5 bg-slate-100 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-black text-sm"
            />
            <button>
              <img src={search} alt="search icon" />
            </button>
          </div>
          <div className="hidden lg:flex flex-row items-center gap-4">
            <Link to="/wishlist"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg></Link>
            <Link to="/cart"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg></Link>
          </div>
          <button
            onClick={onClickMenuTab}
            className="hidden md:block lg:hidden"
          >
            {isMenuTab ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuMobile && (
        <ul className="bg-white w-6/12 h-screen right-0 mt-4 absolute shadow-xl flex flex-col items-end md:hidden text-sm">
          <Link
            to="/"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Home</h1>
            </div>
          </Link>
          <Link
            to="/contact"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Contact</h1>
            </div>
          </Link>
          <Link
            to="/about"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>About</h1>
            </div>
          </Link>
          <Link
            to="/signup"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Signup</h1>
            </div>
          </Link>
          <Link
            to="/wishlist"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Wishlist</h1>
            </div>
          </Link>
          <Link
            to="/cart"
            className=" w-full py-4 px-5 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center"
          >
            <div className="w-1/2 flex flex-row justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Cart</h1>
            </div>
          </Link>
          <li className="w-full my-3 flex flex-row items-center self-end py-2 px-5 bg-slate-100 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-sm w-28"
            />
            <button>
              <img src={search} className="w-5" alt="search icon" />
            </button>
          </li>
        </ul>
      )}
      {isMenuTab && (
        <ul className="bg-white w-4/12 h-screen right-0 mt-4 absolute shadow-xl hidden md:flex flex-col items-end lg:hidden text-base">
          <Link
            to="/"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Home</h1>
            </div>
          </Link>
          <Link
            to="/contact"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Contact</h1>
            </div>
          </Link>
          <Link
            to="/about"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>About</h1>
            </div>
          </Link>
          <Link
            to="/signup"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <h1>Signup</h1>
            </div>
          </Link>
          <Link
            to="/wishlist"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
            </div>
            <div className="w-3/4">
              <h1>Wishlist</h1>
            </div>
          </Link>
          <Link
            to="/cart"
            className=" w-full py-4 px-20 hover:bg-slate-100 rounded-sm flex flex-row items-center justify-center gap-3"
          >
            <div className="w-1/4">
              {" "}
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
            </div>
            <div className="w-3/4">
              <h1>Cart</h1>
            </div>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
