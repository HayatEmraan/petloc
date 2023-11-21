import React from "react";

const Delivery = () => {
  return (
    <div className="container w-full mx-auto lg:px-28 px-4 my-12">
      <h1 className="text-5xl font-bold mb-12">Pet Delivery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img
            className="rounded-lg"
            src="/images/delivery/delivery3.jpeg"
            alt=""
          />
          <ul className="text-xl font-semibold list-disc mb-6 mt-2 pl-6">
            <li>Door-to-door delivery of pets</li>
            <li>Safe and secure transportation</li>
            <li>Real-time tracking of pet delivery</li>
            <li>Delivery to any location in the country</li>
          </ul>
        </div>

        <img
          className="rounded-lg"
          src="/images/delivery/delivery1.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/images/delivery/delivery2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Delivery;
