import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-52 pb-36 md:pt-48 md:pb-28 lg:pt-60 lg:pb-44 flex flex-col items-center justify-center">
        <div className="11/12 lg:w-8/12 mx-auto flex flex-col items-center">
          <h1 className="text-4xl max-sm:font-semibold md:text-7xl lg:text-8xl">
            404 Not Found
          </h1>
          <p className="text-xs md:text-base lg:text-lg my-5 md:my-10">
            Your visited page not found. You may go home page.
          </p>
          <Link to="/">
            <button className="mt-6 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
      <MainFooter/>
    </div>
  );
};

export default PageNotFound;
