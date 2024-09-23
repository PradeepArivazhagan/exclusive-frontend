import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
const Account = () => {
  return (
    <>
      <MainHeader />
      <div className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-20 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex flex-row items-center justify-between">
            <h1>My Account</h1>
            <h1>
              Welcome! <span className="text-[#DB4444]">Pradeep</span>
            </h1>
          </div>
          <div className="mt-8 md:mt-10 lg:mt-14 flex flex-col md:flex-row">
            <div className="w-full md:w-3/12 md:mr-2">
              <h1 className="text-sm lg:text-base font-semibold">Manage My Account</h1>
              <ul className="pl-8 py-3">
                <li className="text-slate-400 py-1 text-sm lg:text-base">My Profile</li>
                <li className="text-slate-400 py-1 text-sm lg:text-base">Address Book</li>
                <li className="text-slate-400 py-1 text-sm lg:text-base">My Payment Options</li>
              </ul>
              <h1 className="text-sm lg:text-base font-semibold">My Orders</h1>
              <ul className="pl-8 py-3">
                <li className="text-slate-400 py-1 text-sm lg:text-base">My Returns</li>
                <li className="text-slate-400 py-1 text-sm lg:text-base">My Cancellations</li>
                <li className="text-slate-400 py-1 text-sm lg:text-base">My Payment Options</li>
              </ul>
              <h1 className="text-sm lg:text-base font-semibold">My Wishlist</h1>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-9/12 py-5 px-3 md:py-5 md:px-5 lg:px-10 shadow-md rounded-md">
              <div>
                <h1 className="text-[#DB4444] font-semibold">
                  Edit Your Profile
                </h1>
                <ul className="flex flex-row flex-wrap">
                  <li className="mt-3 w-1/2 pr-5 lg:pr-10">
                    <label htmlFor="firstname" className="text-sm">
                      First Name
                    </label>{" "}
                    <br />
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                  </li>
                  <li className="mt-3 w-1/2">
                    <label htmlFor="lastname" className="text-sm">
                      Last Name
                    </label>{" "}
                    <br />
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                  </li>
                  <li className="mt-3 w-1/2 pr-5 lg:pr-10">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>{" "}
                    <br />
                    <input
                      id="email"
                      type="text"
                      placeholder="Email"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                  </li>
                  <li className="mt-3 w-1/2">
                    <label htmlFor="address" className="text-sm">
                      Address
                    </label>{" "}
                    <br />
                    <input
                      id="address"
                      type="address"
                      placeholder="Address"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                  </li>
                  <li className="mt-3 w-full">
                    <label htmlFor="password" className="text-sm">
                      Password Changes
                    </label>{" "}
                    <br />
                    <input
                      id="password"
                      type="password"
                      placeholder="Current Password"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                    <input
                      id="password"
                      type="password"
                      placeholder="New Password"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                    <input
                      id="password"
                      type="password"
                      placeholder="Confirm New Password"
                      className="bg-[#F5F5F5] p-3 rounded-md focus:outline-none text-sm mt-1 w-full"
                    />
                  </li>
                  <li className="mt-5 md:mt-10 flex flex-row items-center ml-auto">
                    <button className="py-2 px-6 lg:py-3 lg:px-8">Cancel</button>
                    <button className="py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
                      Save Changes
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
