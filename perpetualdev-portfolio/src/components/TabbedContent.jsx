import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../App.css";
import Reference from "./Reference";
import { TbHome } from "react-icons/tb";
import * as weather from "../utilities/weather";
import data from "../assets/data/siteData.json";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github-mark-white.svg";
import unrealLogo from "../assets/unreal-logo.svg";
import ToolIcon from "./ToolIcon";
import PopoverIcon from "./PopoverIcon";

const TabbedContent = ({ onTabChange, ...props }) => {
  const [weatherCondition, setWeatherCondition] = useState({
    time: "night",
    weatherStatus: "catsanddogs",
  });
  const [activeTab, setActiveTab] = useState(2);

  let tabChanged = false;
  useEffect(() => {
    onTabChange(activeTab);
    tabChanged = true;
  }, [activeTab]);

  useEffect(() => {
    weather.getCurrentWeather().then((w) => {
      setWeatherCondition(w);
    });
  }, []);

  return (
    <Tabs.Root
      className="flex flex-col w-full"
      defaultValue={activeTab}
      onValueChange={setActiveTab}
    >
      <Tabs.List className="shrink-0 flex self-center bg-white border-b w-2/3 rounded-b-3xl border-mauve6">
        <div
          className={`inkblot active shrink-grow tab${Number(activeTab) + 1}`}
        ></div>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-bl-3xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:focus:relative outline-none cursor-default z-10"
          value="0"
        >
          Who Am I?
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  hover:text-violet11 data-[state=active]:text-violet11  outline-none cursor-default z-10"
          value="1"
        >
          Experience
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none hover:text-violet11 data-[state=active]:text-violet11  outline-none cursor-default z-10"
          value="2"
        >
          <TbHome size={40} />
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none hover:text-violet11 data-[state=active]:text-violet11  outline-none cursor-default z-10"
          value="3"
        >
          My Toolkit
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-br-3xl hover:text-violet11 data-[state=active]:text-violet11  outline-none cursor-default z-10"
          value="4"
        >
          Contact
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none"
        value="0"
      >
        {/*WHO AM I*/}
        <h1>My name is Luke Ferreira.</h1>
        <PopoverIcon />
        <p className="mb-5 text-mauve11 text-[15px] leading-normal">
          I am a Boston-based Software Engineer and Indie Developer. I have a
          Bachelors in Computer Information Science from the University of
          Massachusetts Dartmouth. Starting from an early age, I learned how to
          create dynamic animations with adobe flash, then persued game
          development in Unity and Unreal Engine which ultimately leading to
          higher education in Comp Sci to learn the ins and out of programming.
          I take pride in my ability to learn anything related to computers.
          From video editing, photo editing, web development, 3D illustration I
          have yet to find a discipline of computer applications that doesnt
          spark the joy of learning. My first years of employment helped me
          understand the full development lifecycle. Being in a role surrounded
          by colleagues with decades of experience helped to quickly envisage
          concepts of computer architecture that we invisible to me before.
          However, this role left me with a distict lack of experience in
          leadership. I found my stride at my previous job where I was able to
          lead a product aquisition team and evaluate and plan key changes to
          both platforms movign forward. In my next role I'm looking for a
          project that ignites my passion to learn and allows me to work with
          individuals who are as eager as I am to create elegant and cutting
          edge technology.
        </p>
        <h3>Don't believe me? Hear what others have to say about me.</h3>
        <div className="flex flex-row">
          <Reference reference={data.references[0]} />
          <Reference reference={data.references[1]} />
        </div>
        <a href="https://github.com/czurch" target="_blank">
          <img src={githubLogo} className="logo" alt="Vite logo" />
        </a>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="1"
      >
        {/*EXPERIENCE*/}
        <h3>Pluralsight - Farmington, Utah Software Engineer 2022-present</h3>
        <p>
          Responsible for the full Video Services life-cycle from uploading and
          content authoring to video delivery and embeddable player support to
          ensure a smooth user experience. Tasked with implementing new features
          to improve the user experience including; accessibility options for
          individuals with visual impairments, and scrubbing thumbnails to the
          catalog of video learning modules. Wrote and maintained a Node, React,
          PostgreSQL stack as well as created and maintained RESTful APIs.
          Utilized tools like Gitlab, Postman, Kafka, Mux, and Docker to
          streamline development and ensure seamless integration. Monitored and
          triaged error in the video service, ensuring no downtime by responding
          to OpsGenie alerts and analyzing live issues. Lead a team to integrate
          code between Pluralsight and a newly acquired company, extending
          learning modalities for both platforms and creating a unified learning
          experience for the end user.
        </p>
        <h3>
          DELL EMC – Hopkinton, Massachusetts Software Engineer July 2016 – 2022
        </h3>
        <p>
          Maintained, organized and restructured the working code-base of EMC’s
          flagship VMAX system. Specifically addressing bugs and updates to the
          code regarding the cache structures. Took part in the full development
          lifecycle including testing, continuous integration, delivery and
          support of microservice based products. Wrote clean, modular code that
          adheres to strict coding standards. Emphasis on multi-threaded,
          parallel programming concepts and memory management in C. Able to work
          in Linux environments, as well as to create and learn new command line
          interfaces. Requires deep knowledge in C, the ability to collaborate
          using Git, as well as an understanding of Linux CLI.
        </p>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="2"
      >
        {/*HOME*/}
        <div className="flex-none flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold underline bg-cyan-950 text-white p-3 pr-20 pl-20 rounded-full">
            Perpetual Dev.
          </h1>
          <h1 className="bg-cyan-950 text-white p-2 rounded-full text-xs">
            In Providence, RI is currently {weatherCondition.weatherStatus}{" "}
            during the {weatherCondition.time}
          </h1>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="3"
      >
        {/*TOOLKIT*/}
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap w-2/3 mt-16">
            <ToolIcon
              title="Unreal Engine"
              imgsrc={unrealLogo}
              link="https://www.unrealengine.com/"
              alt="UE logo"
              description="Unreal Engine is the world's most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences."
            ></ToolIcon>
            <ToolIcon
              title="React"
              imgsrc={reactLogo}
              link="https://reactjs.org"
              alt="React logo"
              description="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies."
            ></ToolIcon>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent outline-none self-center"
        value="4"
      >
        {/*CONTACT*/}
        <p className="mb-5 text-mauve11 text-[15px] leading-normal">
          Like what you see? Please feel free to contact me regarding; job
          opportunities, consultation, or commisions for 3D art.
        </p>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="name"
            placeholder="Your Name"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="username"
            placeholder="example@email.com"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="message"
          >
            Your message
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] align-text-top leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[100px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="message"
            type="text"
            placeholder="Write your message here..."
          />
        </fieldset>
        <div className="flex justify-end mt-5">
          <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
            Send Message
          </button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabbedContent;
