import React from "react";
import CafeImg from "../img/cafeimg.jpg";

function Home() {
  return (
    <>
      <div
        className="w-full h-[600px] box-border bg-cover relative"
        style={{ backgroundImage: `url(${CafeImg})` }}
      >
        <p className="text-white flex justify-center items-center w-screen h-full text-9xl bg-opacity-40 bg-black">
          The <br /> Cafe{" "}
        </p>
        <p className="bg-black text-white inline-block absolute bottom-3 left-8 px-2 py-1">
          Open from 6am to 8pm{" "}
        </p>
        <p className="text-white absolute bottom-3 right-2">
          Birendranagar, 01  Surkhet
        </p>
      </div>
    </>
  );
}

export default Home;
