import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F4F8FD]">
      <div className="container w-full mx-auto py-12 lg:px-24 px-4 md:flex items-center justify-center space-y-6 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Welcome to PetLoc - <br /> Your One-stop Destination for <br /> Pet
            Care
          </h1>
          <p className="text-xl font-semibold mb-6">
            At PetLoc, we understand the unique needs of pet owners and strive
            to <br />
            provide comprehensive pet care solutions. From pet adoption to{" "}
            <br />
            breeding and grooming services, we’ve got you covered.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Our Services
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-md"
            src="/images/banner/hero-banner.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
