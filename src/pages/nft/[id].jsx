/* eslint-disable @next/next/no-img-element */
import React from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";

const NftDropPage = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col space-y-7 items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 p-2 rounded-xl to-purple-600">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72 border"
            />
          </div>
          <h1 className="text-4xl font-bold text-white">Pavan NFT CARD</h1>
          <h2 className="text-xl text-gray-300">Collection of APES..</h2>
        </div>
      </div>
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default NftDropPage;
