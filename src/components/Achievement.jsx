const Achievement = () => {
  return (
    <div className="mt-20 md:mt-24 lg:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 lg:gap-10">
      <div className="group p-6 flex flex-col justify-center items-center border border-slate-400 rounded-md hover:border-0 bg-white hover:bg-[#DB4444] hover:text-white ">
        <div className="p-2 text-white bg-black group-hover:bg-white group-hover:text-black rounded-full border-8 border-[#D9DBE9] group-hover:border-[#E07575]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-5 tracking-wider">10.5k</h1>
        <p className="text-sm mt-2">Sellers active our site</p>
      </div>
      <div className="group p-6 flex flex-col justify-center items-center border border-slate-400 rounded-md hover:border-0 bg-white hover:bg-[#DB4444] hover:text-white ">
        <div className="p-2 text-white bg-black group-hover:bg-white group-hover:text-black rounded-full border-8 border-[#D9DBE9] group-hover:border-[#E07575]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-5 tracking-wider">33k</h1>
        <p className="text-sm mt-2">Monthly Product Sale</p>
      </div>
      <div className="group p-6 flex flex-col justify-center items-center border border-slate-400 rounded-md hover:border-0 bg-white hover:bg-[#DB4444] hover:text-white ">
        <div className="p-2 text-white bg-black group-hover:bg-white group-hover:text-black rounded-full border-8 border-[#D9DBE9] group-hover:border-[#E07575]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-5 tracking-wider">45.5k</h1>
        <p className="text-sm mt-2">Customer active in our site</p>
      </div>
      <div className="group p-6 flex flex-col justify-center items-center border border-slate-400 rounded-md hover:border-0 bg-white hover:bg-[#DB4444] hover:text-white ">
        <div className="p-2 text-white bg-black group-hover:bg-white group-hover:text-black rounded-full border-8 border-[#D9DBE9] group-hover:border-[#E07575]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-5 tracking-wider">25k</h1>
        <p className="text-sm mt-2">Anual gross sale in our site</p>
      </div>
    </div>
  );
};

export default Achievement;
