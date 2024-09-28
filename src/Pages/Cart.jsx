import MainHeader from "../components/MainHeader";
import cart1 from "../assets/images/cart1.png";
import cart2 from "../assets/images/cart2.png";
import MainFooter from "../components/MainFooter";

const Cart = () => {
  return (
    <>
      <MainHeader />
      <div className="pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="w-full py-5 px-2 md:px-10 shadow-sm rounded-md">
            <ul className="w-full grid grid-cols-4 text-sm md:text-base">
              <li>Product</li>
              <li className="text-center">Price</li>
              <li className="text-center">Quantity</li>
              <li className="text-end">Subtotal</li>
            </ul>
          </div>

          <div className="mt-2 md:mt-4 py-5 px-2 md:px-10 shadow-sm rounded-md">
            <div className="w-full flex flex-col gap-4">
              <ul className="w-full grid grid-cols-4 text-sm md:text-base">
                <li className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4">
                  <img className="max-sm:w-1/4" src={cart1} alt="cart" />
                  <h1>H1 Gamepad</h1>
                </li>
                <li className="text-center my-auto">$650</li>
                <li className="text-center my-auto flex flex-row items-center justify-center gap-2">
                  <button className="p-1 bg-slate-100 rounded-full hover:bg-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3 md:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <h1 className="font-base">1</h1>
                  <button className="p-1 bg-slate-100 rounded-full  hover:bg-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3 md:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                </li>
                <li className="text-end my-auto">$650</li>
              </ul>
              <hr />
              <ul className="w-full grid grid-cols-4 text-sm md:text-base">
                <li className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 ">
                  <img className="max-sm:w-1/4" src={cart2} alt="cart" />
                  <h1>LCD Monitor</h1>
                </li>
                <li className="text-center my-auto">$1100</li>
                <li className="text-center my-auto flex flex-row items-center justify-center gap-2">
                  <button className="p-1 bg-slate-100 rounded-full hover:bg-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3 md:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <h1 className="font-base">1</h1>
                  <button className="p-1 bg-slate-100 rounded-full  hover:bg-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3 md:size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                </li>
                <li className="text-end my-auto">$1100</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between text-sm md:text-base ">
            <button className="py-2 px-3 md:px-6 lg:py-3 lg:px-12 border border-black hover:border-[#7D8184] hover:text-[#7D8184] rounded-sm">
              Return to Shop
            </button>
            <button className="py-2 px-3 md:px-6 lg:py-3 lg:px-12 border border-black hover:border-[#7D8184] hover:text-[#7D8184] rounded-sm">
              Update Cart
            </button>
          </div>

          <div className="mt-16 flex flex-row justify-end">
            <div className="w-full md:w-6/12 lg:w-4/12 p-3 md:py-5 md:px-4 rounded-md flex flex-col border border-black">
              <h1 className="text-lg font-semibold">Cart Total</h1>
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
              <button className="mt-4 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default Cart;
