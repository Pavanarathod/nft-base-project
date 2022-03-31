import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-7">
        <h1 className="cursor-pointer text-xl w-full font-extralight">
          THE{" "}
          <span className="font-extrabold underline decoration-pink-500/50 pb-1">
            PVAN PATTINSON{" "}
          </span>{" "}
          Market place..
        </h1>
        <button className="rounded-full w-36  px-4 py-2 text-sm bg-pink-400 text-white font-bold">
          Sign in
        </button>
      </div>
      <hr className="my-2 border" />
    </header>
  );
};

export default Header;
