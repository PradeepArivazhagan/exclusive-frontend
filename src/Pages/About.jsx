import Footer from "../components/Footer";
import AuthHeaders from "../components/AuthHeaders";
import Features from "../components/Features";
import Achievement from "../components/Achievement";
import OurTeam from "../components/OurTeam";
import OurStory from "../components/OurStory";

const About = () => {
  return (
    <>
      <AuthHeaders />
      <div className="pt-20 pb-20 md:pt-32 md:pb-28 lg:pt-32 lg:pb-40 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <OurStory/>
          <Achievement/>
          <OurTeam/>
          <Features />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
