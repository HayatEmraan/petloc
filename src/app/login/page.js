import React from "react";
import dynamic from "next/dynamic";
import Login from "@/components/login/login";

export const metadata = {
  title: "Petloc | Login - A one-stop solution for the pet owners",
  description: "A one-stop solution for the pet owners",
};

const Page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default Page;
