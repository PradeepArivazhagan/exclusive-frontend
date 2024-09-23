import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import cart1 from "../assets/images/cart1.png";
import cart2 from "../assets/images/cart2.png";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
const Checkout = () => {
  return (
    <>
      <MainHeader />
      <div className="pt-24 pb-14 md:pt-32 md:pb-24 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center">
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row">
          <div className="w-full md:w-3/4 mx-auto lg:mx-0 lg:w-4/12">
            <h1 className="max-sm:font-semibold text-3xl">Billing Details</h1>
            <div className="mt-6">
              <label htmlFor="firstname" className="text-sm text-slate-500">
                First Name
              </label>
              <br />
              <input
                id="firstname"
                type="text"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="companyname" className="text-sm text-slate-500">
                Company Name
              </label>
              <br />
              <input
                id="companyname"
                type="text"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="text-sm text-slate-500">
                Street Address
              </label>
              <br />
              <input
                id="address"
                type="address"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="text-sm text-slate-500">
                Apartment, floor, etc. (optional)
              </label>
              <br />
              <input
                id="address"
                type="address"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="text-sm text-slate-500">
                Town/City
              </label>
              <br />
              <input
                id="address"
                type="address"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phonenumber" className="text-sm text-slate-500">
                Phone Number
              </label>
              <br />
              <input
                id="phonenumber"
                type="number"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-slate-500">
                Email Address*
              </label>
              <br />
              <input
                id="email"
                type="email"
                className="bg-[#F5F5F5] p-2 w-full mt-1 rounded-sm focus:outline-none"
              />
            </div>
            <div className="mt-4 flex flex-row items-center">
              <input
                id="checkbox"
                type="checkbox"
                className="mr-2 w-4 h-4 accent-[#DB4444]"
              />
              <label htmlFor="checkbox" className="text-sm text-slate-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="w-full md:w-3/4 mx-auto lg:mx-0 lg:w-8/12 mt-8 lg:mt-0 flex flex-col items-center justify-center">
            <div className="w-full lg:w-3/4 px-3 py-3 md:px-5 lg:px-10 md:py-5  shadow-md">
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center gap-4 lg:gap-8">
                  <img className="max-sm:w-1/4" src={cart1} alt="cart" />
                  <h1 className="text-sm md:text-base">H1 Gamepad</h1>
                </div>
                <h1 className="text-sm md:text-base">$650</h1>
              </div>
              <div className="mt-4 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4 lg:gap-8">
                  <img className="max-sm:w-1/4" src={cart2} alt="cart" />
                  <h1 className="text-sm md:text-base">LCD Monitor</h1>
                </div>
                <h1 className="text-sm md:text-base">$1100</h1>
              </div>
              <div className="my-3">
                <div className="py-3 flex flex-row items-center justify-between">
                  <h1 className="text-sm md:text-base">Subtotal:</h1>
                  <h1 className="text-sm md:text-base">$1750</h1>
                </div>
                <hr />
                <div className="py-3 flex flex-row items-center justify-between">
                  <h1 className="text-sm md:text-base">Shipping:</h1>
                  <h1 className="text-sm md:text-base">Free</h1>
                </div>
                <hr />
                <div className="py-3 flex flex-row items-center justify-between">
                  <h1 className="text-sm md:text-base">Total:</h1>
                  <h1 className="text-sm md:text-base">$1750</h1>
                </div>
              </div>
              <div className="mt-6 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <input
                    type="radio"
                    name="delivery"
                    id="card"
                    value="card"
                    className="h-4 w-4 accent-black"
                  />
                  <label htmlFor="card" className="text-sm md:text-base">
                    Bank
                  </label>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={card1} alt="card1" />
                  <img src={card2} alt="card1" />
                  <img src={card3} alt="card1" />
                  <img src={card4} alt="card1" />
                </div>
              </div>
              <div className="mt-5 flex flex-row items-center gap-4">
                <input
                  type="radio"
                  name="delivery"
                  id="cashondelivery"
                  value="cash"
                  className="h-4 w-4 accent-black"
                />
                <label htmlFor="cashondelivery" className="text-sm md:text-base">
                  Cash on Delivery
                </label>
              </div>
              <div className="mt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="py-2 px-4 border border-black rounded-sm focus:outline-none text-sm md:text-base"
                  />
                  <button className="py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
                    Apply Coupon
                  </button>
                </div>
                <button className="mt-6 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
