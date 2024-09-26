import { Link } from "react-router-dom";
import send from "../assets/icons/send.svg";
import copyright from "../assets/icons/copyright.svg";
import qrcode from "../assets/images/qrcode.png";
import googleplay from "../assets/images/googleplay.png";
import appstore from "../assets/images/appstore.png";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white">
      <div className="w-10/12 mx-auto py-10 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <ul>
          <li className="text-xl font-bold">Exclusive</li>
          <li className="text-base mt-4">Subscribe</li>
          <li className="text-sm mt-3">Get 10% off your first order</li>
          <li className="mt-4 flex flex-row border border-white w-fit py-2 px-3 rounded-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-36 text-sm bg-transparent focus:outline-none placeholder:text-[#363738]"
            />
            <button>
              <img src={send} alt="send" />
            </button>
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Support</li>
          <li className="text-sm mt-4">
            123 Main Street, Namakkal, Tamil Nadu
          </li>
          <li className="text-sm mt-3">support.exclusive@gmail.com</li>
          <li className="text-sm mt-3">+123 123 456 789</li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Account</li>
          <Link to="/account">
            <li className="text-sm mt-4">My Account</li>
          </Link>
          <Link to="/login">
            <li className="text-sm mt-3">Login / Register</li>
          </Link>
          <Link to="/cart">
            <li className="text-sm mt-3">Cart</li>
          </Link>
          <Link to="/wishlist">
            <li className="text-sm mt-3">Wishlist</li>
          </Link>
          <Link to="/">
            <li className="text-sm mt-3">Shop</li>
          </Link>
        </ul>
        <ul>
          <li className="text-xl font-bold">Quick Link</li>
          <li className="text-sm mt-4">Privacy Policy</li>
          <li className="text-sm mt-3">Terms of Use</li>
          <li className="text-sm mt-3">FAQ</li>
          <Link to="/contact">
            <li className="text-sm mt-3">Contact</li>
          </Link>
        </ul>
        <ul>
          <li className="text-xl font-bold">Download App</li>
          <li className="text-xs mt-4">Save ₹300 with App new User Only</li>
          <li className="text-sm mt-3 flex flex-row items-center gap-2">
            <img src={qrcode} alt="qrcode" className="w-20 rounded-sm" />
            <div className="flex flex-col gap-2">
              <img src={googleplay} alt="google play" />
              <img src={appstore} alt="app store" />
            </div>
          </li>
          <li className="text-sm mt-5 flex flex-row items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.0em"
              height="2.0em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2q.784 0 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298a1.63 1.63 0 0 0-.691.692c-.22.411-.298.814-.298 2.138z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.8em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.0em"
              height="2.0em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
              ></path>
            </svg>
            <a href="https://www.linkedin.com/in/pradeeparivazhagan/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.0em"
                height="2.0em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-5 border-t-2 border-t-[#363738]">
        <div className="w-10/12 mx-auto flex flex-row items-center justify-center gap-2">
          <img src={copyright} alt="copyright" />
          <p className="text-xs md:text-sm text-[#363738]">
            Copyright Pradeep Arivazhagan 2024. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
