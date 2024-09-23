import Footer from "../components/Footer";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import AuthHeaders from "../components/AuthHeaders";

const Contact = () => {
  return (
    <>
      <AuthHeaders />
      <div className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center justify-center">
        <div className="w-10/12 md:11/12 lg:w-8/12 mx-auto flex flex-col md:flex-row gap-3 ">
          <div className="w-full md:w-5/12 py-6 px-4 lg:py-10 lg:px-8 shadow-md rounded-md">
            <div>
              <div className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-full bg-[#DB4444]">
                  <img src={phone} alt="phone" />
                </div>
                <h1 className="text-base font-semibold">Call To Us</h1>
              </div>
              <p className="text-base mt-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-base mt-4 mb-6">Phone: +8801611112222</p>
              <hr />
              <div className="flex flex-row items-center gap-3 mt-6">
                <div className="p-2 rounded-full bg-[#DB4444]">
                  <img src={mail} alt="mail" />
                </div>
                <h1 className="text-base font-semibold">Write To Us</h1>
              </div>
              <p className="text-base mt-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-base mt-4">Emails: customer@exclusive.com</p>
              <p className="text-base mt-4">Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="w-full md:w-9/12 py-6 px-4 lg:py-10 lg:px-8 shadow-md rounded-md flex flex-col">
            <div className="grid md:grid-col-1 lg:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#F5F5F5] focus:outline-none p-4 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#F5F5F5] focus:outline-none p-4 rounded-md"
              />
              <input
                type="number"
                placeholder="Your Phone"
                required
                className="bg-[#F5F5F5] focus:outline-none p-4 rounded-md"
              />
            </div>
            <textarea
              className="w-full bg-[#F5F5F5] focus:outline-none p-4 rounded-md mt-3"
              placeholder="Enter Message"
              cols="30"
              rows="8"
            ></textarea>
            <button className="self-end mt-6 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
