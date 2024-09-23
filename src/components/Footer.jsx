import send from "../assets/icons/send.svg";
import copyright from "../assets/icons/copyright.svg";
import qrcode from "../assets/images/qrcode.png";
import googleplay from "../assets/images/googleplay.png";
import appstore from "../assets/images/appstore.png";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

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
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </li>
          <li className="text-sm mt-3">exclusive@gmail.com</li>
          <li className="text-sm mt-3">+880 123 456 789</li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Account</li>
          <li className="text-sm mt-4">My Account</li>
          <li className="text-sm mt-3">Login / Register</li>
          <li className="text-sm mt-3">Cart</li>
          <li className="text-sm mt-3">Wishlist</li>
          <li className="text-sm mt-3">Shop</li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Quick Link</li>
          <li className="text-sm mt-4">Privacy Policy</li>
          <li className="text-sm mt-3">Terms of Use</li>
          <li className="text-sm mt-3">FAQ</li>
          <li className="text-sm mt-3">Contact</li>
        </ul>
        <ul>
          <li className="text-xl font-bold">Download App</li>
          <li className="text-xs mt-4">Save $3 with App New User Only</li>
          <li className="text-sm mt-3 flex flex-row items-center gap-2">
            <img src={qrcode} alt="qrcode" />
            <div className="flex flex-col gap-2">
              <img src={googleplay} alt="google play" />
              <img src={appstore} alt="app store" />
            </div>
          </li>
          <li className="text-sm mt-5 flex flex-row items-center gap-4">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </li>
        </ul>
      </div>
      <div className="py-5 border-t-2 border-t-[#363738]">
        <div className="w-10/12 mx-auto flex flex-row items-center justify-center gap-2">
          <img src={copyright} alt="copyright" />
          <p className="text-sm text-[#363738]">
            Copyright Pradeep 2024. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
