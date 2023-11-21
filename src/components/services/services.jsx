import React from "react";
import Features from "../features/features";

const Services = () => {
  return (
    <div className="bg-[#F4F8FD]">
      <div className="container w-full mx-auto lg:px-28 px-4 my-12 pb-12 pt-16">
        <h1 className="text-5xl font-bold mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <img
              className="rounded-md"
              src="https://10web-site.ai/13/wp-content/uploads/sites/15/2023/11/sam-balye-fjTJ_Q0Pwkg-unsplash_Qc1I0GOv.webp"
              alt=""
            />
            <h3 className="my-2 text-xl font-semibold">Pet Adoption</h3>
            <p className="text-lg text-gray-600">
              We help pets find their forever homes with our comprehensive pet
              adoption service that is simple and straightforward.
            </p>
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://10web-site.ai/13/wp-content/uploads/sites/15/2023/11/evelyn-paris-QR_vT8_hBZM-unsplash_Qc1I0GOv.webp"
              alt=""
            />
            <h3 className="my-2 text-xl font-semibold">Breeding Solutions</h3>
            <p className="text-lg text-gray-600">
              We offer professional breeding solutions that are safe, ethical,
              and responsible to produce healthy, happy, and well-socialized
              puppies and kittens.
            </p>
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://10web-site.ai/13/wp-content/uploads/sites/15/2023/11/soroush-karimi-crjPrExvShc-unsplash_Qc1I0GOv.webp"
              alt=""
            />
            <h3 className="my-2 text-xl font-semibold">Grooming Services</h3>
            <p className="text-lg text-gray-600">
              Our professional grooming services help your pet stay healthy,
              happy, and looking their best.
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Services;
