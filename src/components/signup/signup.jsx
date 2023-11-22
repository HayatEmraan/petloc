"use client";
import { useCredentials } from "@/hooks/useCredentials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useRouter } from "next/navigation";
import Slide from "../slide/slide";

const Signup = () => {
  const { loading, user, createUser, updateUser } = useCredentials();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const notify = toast.loading("Signing up...");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((user) => {
        updateUser(user, name)
          .then(() => {
            toast.update(notify, {
              render: "Signed up successfully",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          })
          .catch((err) => {
            toast.update(notify, {
              render: err.message,
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          });
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.update(notify, {
            render: "Email already in use",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        } else if (
          err.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.update(notify, {
            render: "Invalid email or password",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
      });
  };

  if (!loading && user) {
    return router.replace("/");
  }
  return (
    <div className="w-full h-screen md:grid grid-cols-12">
      <div className="md:col-span-6 lg:col-span-7 bg-[#faf5f4] flex flex-col lg:px-28 px-4 py-8 relative">
        <img
          src="https://petloc.vercel.app/logo/logo.png"
          className="lg:w-1/6 w-2/4 mb-4"
          alt=""
        />

        <div>
          <Slide />
        </div>
      </div>
      <div className="m-4 lg:pl-12 lg:py-32 py-8 lg:w-[64%] md:col-span-6 lg:col-span-5">
        <h1 className="text-3xl text-black font-bold">Sign up</h1>
        <h3 className="text-lg mb-16 mt-2 text-[#19171199]">
          Already have an account?
          <span className="text-[#6e50ff] border-b-[1px] border-b-[#6e50ff]">
            {" "}
            <a href="/login">Log in</a>
          </span>
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-lg text-[#19171199]">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border py-[15px] rounded-lg px-3 mb-3 mt-1"
            id="name"
            placeholder="e.g. John Doe"
          />
          <label htmlFor="email" className="block text-lg text-[#19171199]">
            Email
          </label>
          <input
            type="text"
            name="email"
            required
            className="w-full border py-[15px] rounded-lg px-3 mb-3 mt-1"
            id="email"
            placeholder="e.g. john@gmail.com"
          />
          <label htmlFor="password" className="block text-lg text-[#19171199]">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full border py-[15px] rounded-lg px-3 mb-12 mt-1"
            id=""
            placeholder="Enter your password"
          />
          <button className="hover:bg-[#5A3EDD] bg-[#6E50FF] text-lg text-white w-full rounded-lg py-[15px]">
            Continue
          </button>
        </form>
        <button className="border my-12 text-lg w-full rounded-lg py-[15px]">
          <a href="/recover">Recover Wind Business</a>
        </button>
        <div>
          <p className="text-[#19171199]">
            By continuing, you agree to our
            <span className="text-[#000000] border-b-[1px] border-b-[#000000]">
              {" "}
              Terms & Conditions
            </span>{" "}
            and
            <span className="text-[#000000] border-b-[1px] border-b-[#000000]">
              {" "}
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Signup;
