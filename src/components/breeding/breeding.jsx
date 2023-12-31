import React from "react";

const Breeding = () => {
  return (
    <div id="breeding" className="container w-full mx-auto lg:px-28 px-4 my-12">
      <div>
        <h1 className="text-4xl text-gray-700 font-bold">Breeding</h1>
        <ul className="md:text-xl text-gray-700 font-semibold list-disc mb-6 mt-2 mx-5 md:mx-12">
          <li>Access to top breeders and their litters</li>
          <li>Customized breeding plans based on your preferences</li>
          <li>Expert guidance and support throughout the breeding process</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          className="rounded-lg"
          src="/images/breeding/breeding1.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/images/breeding/breeding2.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/images/breeding/breeding3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Breeding;
