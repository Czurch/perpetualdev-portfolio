import React, { useEffect, useRef } from "react";
import data from "../assets/data/siteData.json";
import AccordionSection from "./AccordionSection";
import Reference from "./Reference";

const Profile = (...props) => {
  return (
    <div className="flex flex-col">
      <h1>I am Luke Ferreira.</h1>
      <p className="text-white">
        Boston-based Software Engineer and Indie Developer, BA of Computer
        Information Science University of Massachusetts Dartmouth.
      </p>
      <div className="flex flex-col m-4">
        <AccordionSection />
        <p className="mb-5 text-mauve11 text-[15px] leading-normal"></p>
      </div>
      <div className=" text-white rounded-lg w-1/3 self-center">
        <h3 className="text-xl">
          Don't believe me? Hear what others have to say!
        </h3>
      </div>
      <div className="flex flex-col w-2/3 self-center">
        {data.references.map((reference, ix) => (
          <div id={ix} className={`m-4 ${ix % 2 ? "self-end" : "self-start"}`}>
            <Reference reference={reference} />
          </div>
        ))}
      </div>
      <a href="https://github.com/czurch" target="_blank">
        <img
          src="./img/github-mark-white.svg"
          className="logo"
          alt="Github logo"
        />
      </a>
    </div>
  );
};

export default Profile;
