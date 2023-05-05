import { Suspense, useEffect, useState } from "react";
import CoffeeLoader from "../components/CoffeeLoader";

const DevInProgress = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-cyan-950 justify-center align-middle">
      <CoffeeLoader />
      <h2 className="p-4 self-center text-white font-normal">
        This site is currently under maintainance. Check back later.
      </h2>
      <a
        href="https://docs.google.com/document/d/1Y2bkGMNall4X3bbzslBU8QOsIMWp-ZSlChob-bvdYhk/edit?usp=sharing"
        className="bg-cyan-600 hover:bg-cyan-500 hover:font-semibold w-52 rounded-md p-4 self-center"
      >
        See my Resume.
      </a>
    </div>
  );
};

export default DevInProgress;
