const slideDiv = document.getElementById("slideContainer");
const slidePrev = document.getElementById("prev");
const slideNext = document.getElementById("next");

let count = 0;

const renderUI = () => {
  slideDiv.innerHTML = "";
  switch (count) {
    case 1:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <div className="slide transform-left">
          <h1 className="text-4xl font-bold mt-8">Pay near zero transfer fees</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Reduce payment costs by paying your team at near-zero transaction
            fees.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-2.svg"
            alt=""
          />
          </div> 
    `;
      count++;
      break;
    case 2:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Run payroll using the batch payments tool</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Easily pay your entire remote teams in just few simple clicks, anywhere across the globe.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-3.svg"
            alt=""
          />
    `;
      count++;
      break;
    case 3:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Withdraw locally, anytime</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Your teams can cash out funds locally to their banks or e-wallets from any of our supported countries.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-4.svg"
            alt=""
          />
    `;
      count = 0;
      break;
    default:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <div className="slide transform-left">
          <h1 className="text-4xl font-bold mt-8">Cheaper, faster, simpler payouts</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Make cross-border payments with the lowest fees at the best conversion rates.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-1.svg"
            alt=""
          />
          </div>
    `;
      count++;
      break;
  }
};

slideNext.addEventListener("click", function () {
  renderUI();
});

slidePrev.addEventListener("click", function () {
  slideDiv.innerHTML = "";

  count = count === 0 ? 3 : count - 1;

  switch (count) {
    case 1:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Pay near zero transfer fees</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Reduce payment costs by paying your team at near-zero transaction
            fees.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-2.svg"
            alt=""
          />
    `;
      break;
    case 2:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Run payroll using the batch payments tool</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Easily pay your entire remote teams in just few simple clicks, anywhere across the globe.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-3.svg"
            alt=""
          />
    `;
      break;
    case 3:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Withdraw locally, anytime</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Your teams can cash out funds locally to their banks or e-wallets from any of our supported countries.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-4.svg"
            alt=""
          />
    `;
      break;
    default:
      slideDiv.innerHTML = `
        <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p
                className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"
              ></p>
            </div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
            <div><p className="py-1 rounded-md w-full bg-[#6e50ff]"></p></div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Cheaper, faster, simpler payouts</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Make cross-border payments with the lowest fees at the best conversion rates.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-1.svg"
            alt=""
          />
    `;
      break;
  }
});

renderUI();

// setInterval(() => {
//   renderUI();
// }, 3000);

console.log(count);
