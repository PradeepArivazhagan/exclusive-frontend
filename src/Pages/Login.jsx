import AuthHeaders from "../components/AuthHeaders";
import Footer from "../components/Footer";
import login from "../assets/images/login.png";

const Login = () => {
  return (
    <>
      <AuthHeaders />
      <div className="pt-24 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 flex flex-col items-center justify-center">
        <div className="w-10/12 md:11/12 lg:w-8/12 mx-auto flex flex-col md:flex md:flex-row">
          <img
            className="order-1 md:order-0 mt-4 md:mt-0 w-10/12 mx-auto md:mx-0 md:w-1/2 lg:w-2/4 max-sm:rounded-lg md:rounded-l-3xl "
            src={login}
            alt="login"
          />
          <div className="order-0 md:order-1 py-10 md:py-0 w-full flex flex-col items-center justify-center bg-slate-50 max-sm:rounded-xl md:rounded-r-3xl">
            <div className="md:1/2 lg:w-3/5 md:p-10 lg:p-0">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold tracking-wider">
                  Login in to Exclusive
                </h1>
                <p className="mt-2 text-xs">Enter your details below</p>
              </div>
              <form className="w-full mt-8 md:mt-10 flex flex-col">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="bg-transparent focus:outline-none text-sm pb-1 border-b-2 border-slate-300"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-5 md:mt-8 bg-transparent focus:outline-none text-sm pb-1 border-b-2 border-slate-300"
                />
                <div className="mt-8 md:mt-10 flex flex-row items-center justify-between">
                  <button className="py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm self-start text-white">
                    Log In
                  </button>
                  <p className="text-[#DB4444] text-xs lg:text-sm">
                    Forget Password?
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
