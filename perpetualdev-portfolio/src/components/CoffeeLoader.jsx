import { Suspense, useEffect, useState } from "react";
import coffeeLoop from "../assets/img/coffee-loop.gif";

const CoffeeLoader = () => {
  return (
    <div className="self-center">
      <img className="h-32 w-auto" src={coffeeLoop}></img>
    </div>
  );
};

export default CoffeeLoader;
