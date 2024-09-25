import about from "../assets/images/about.png";

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-3 md:pr-6 lg:p-16 flex flex-col items-start justify-center">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          Our Story
        </h1>
        <p className="mt-5 md:mt-8">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
        </p>
        <p className="mt-3 md:mt-6">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <img
        src={about}
        alt="about"
        className="w-full md:w-1/2 max-sm:mt-4 rounded-tr-3xl rounded-bl-3xl"
      />
    </div>
  );
};

export default OurStory;
