import AuthHeaders from "../components/AuthHeaders";
import Footer from "../components/Footer";
import login from "../assets/images/login.png";
import google from "../assets/icons/google.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const navigate = useNavigate(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name === "") {
      setIsError(true);
      setErrorMessage("Please enter name");
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 3000);
    }
    else if (email === "") {
      setIsError(true);
      setErrorMessage("Please enter email");
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 3000);
    }
    else if (password === "") {
      setIsError(true);
      setErrorMessage("Please enter password");
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 3000);
    }
    if (name !== "" && email !== "" && password !== "") {
      setIsError(false);
      setErrorMessage("");
      await Axios.post("http://localhost:4000/signup", {
        name: name,
        email: email,
        password: password,
      })
        .then((response) => {
          if (response.statusText === "OK") {
            navigate("/login");
          } else {
            setIsError(true);
            setErrorMessage(response.data.message);
            setTimeout(() => {
              setIsError(false);
              setErrorMessage("");
            }, 3000);
          }
        })
        .catch((err) => {
          setIsError(true);
          setErrorMessage(err.response.statusText);
          setTimeout(() => {
            setIsError(false);
            setErrorMessage("");
          }, 3000);
        });
    }
  };

  return (
    <>
      <AuthHeaders />
      <div className="pt-24 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col md:flex md:flex-row">
          <img
            className="order-1 md:order-0 mt-4 md:mt-0 w-10/12 mx-auto md:mx-0 md:w-1/2 lg:w-2/4 max-sm:rounded-lg md:rounded-l-3xl "
            src={login}
            alt="login"
          />
          <div className="order-0 md:order-1 py-10 md:py-5 lg:py-10 w-full flex flex-col items-center justify-center bg-slate-50 max-sm:rounded-xl md:rounded-r-3xl">
            <div className="md:1/2 lg:w-3/5 md:p-10 lg:p-0">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold tracking-wider">
                  Create an account
                </h1>
                <p className="mt-2 text-xs">Enter your details below</p>
              </div>
              <form
                onSubmit={handleSignup}
                className="w-full mt-8 md:mt-10 flex flex-col"
              >
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="bg-transparent focus:outline-none text-sm pb-1 border-b-2 border-slate-300"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Email or Phone Number"
                  className="mt-5 md:mt-8 bg-transparent focus:outline-none text-sm pb-1 border-b-2 border-slate-300"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="mt-5 md:mt-8 bg-transparent focus:outline-none text-sm pb-1 border-b-2 border-slate-300"
                />
                <button
                  type="submit"
                  className="mt-8 md:mt-10 py-2 px-6 lg:py-3 lg:px-8 rounded-sm bg-[#DB4444] hover:bg-[#E07575] text-sm text-white"
                >
                  Create Account
                </button>
                <button className="mt-2 py-2 px-6 lg:py-3 lg:px-8 text-black hover:text-[#7D8184] text-sm border border-black hover:border-[#7D8184] rounded-sm flex flex-row items-center justify-center gap-2">
                  <img src={google} alt="google" />
                  <span>Sign up with Google</span>
                </button>
              </form>
              {isError && (
                <p className="text-xs mt-2 text-red-600">{errorMessage}</p>
              )}
              <p className="text-xs lg:text-sm text-slate-500 text-center mt-8 md:mt-10">
                Already have account?{" "}
                <Link
                  to="/login"
                  className="font-semibold pb-1 border-b-2 border-slate-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
