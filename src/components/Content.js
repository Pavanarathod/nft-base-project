/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";

const Content = () => {
  const [someSate, setSomeSate] = useState();
  return (
    <div className="mt-10 flex items-center flex-col justify-between">
      <div className="flex flex-col items-center space-y-16 justify-center">
        <img
          src="https://links.papareact.com/bdy"
          alt=""
          className="w-80 object-cover lg:h-40"
        />
        <h1 className="text-3xl text-center lg:text-5xl lg:font-extrabold">
          mr robot coding club | NFT mania
        </h1>
      </div>
      <button className="mt-44 text-white font-bold bg-red-500 w-full rounded-full py-5">
        Mint NFT (0.01 ETH)
      </button>
    </div>
  );
};

export default Content;
