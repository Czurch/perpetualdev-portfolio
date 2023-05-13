import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../App.css";
import Reference from "./Reference";
import { TbHome } from "react-icons/tb";
import * as weather from "../utilities/weather";
import data from "../assets/data/siteData.json";
import ToolIcon from "./ToolIcon";
import Profile from "./Profile";

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
      console.log(weatherCondition);
    });
  }, []);

  return (
    <Tabs.Root
      className="flex flex-col w-full"
      defaultValue={activeTab}
      onValueChange={setActiveTab}
    >
      <Tabs.List className="shrink-0 flex self-center bg-secondary w-2/3 rounded-b-3xl">
        <div
          className={`inkblot active shrink-grow tab${Number(activeTab) + 1}`}
        ></div>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none rounded-bl-3xl hover:text-accent data-[state=active]:text-secondary data-[state=active]:focus:relative outline-none cursor-default z-10"
          value="0"
        >
          Who Am I?
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none  hover:text-accent data-[state=active]:text-secondary  outline-none cursor-default z-10"
          value="1"
        >
          Experience
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none hover:text-accent data-[state=active]:text-secondary  outline-none cursor-default z-10"
          value="2"
        >
          <TbHome size={40} />
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none hover:text-accent data-[state=active]:text-secondary  outline-none cursor-default z-10"
          value="3"
        >
          My Toolkit
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-white select-none rounded-br-3xl hover:text-accent data-[state=active]:text-secondary  outline-none cursor-default z-10"
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
        <Profile />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="1"
      >
        {/*EXPERIENCE*/}
        <div className="flex w-full justify-center">
          <div className="flex flex-wrap flex-col w-2/3">
            <div className="bg-secondary text-primary rounded-lg w-3/5 p-5 m-5 self-start">
              <div className="flex flex-col m-2 bg-secondarybg rounded-lg p-2">
                <div className="flex flex-row justify-between">
                  <h2 className="text-primaryButton text-xl">Pluralsight</h2>
                  <h4 className="text-sm ml-2 self-end">Farmington, Utah</h4>
                </div>
                <div className="self-end text-sm">
                  <h3>Software Engineer 2022-2023</h3>
                </div>
              </div>
              <div>
                <p className="text-left">
                  Responsible for the full Video Services life-cycle from
                  uploading and content authoring to video delivery and
                  embeddable player support to ensure a smooth user experience.
                  Tasked with implementing new features to improve the user
                  experience including; accessibility options for individuals
                  with visual impairments, and scrubbing thumbnails to the
                  catalog of video learning modules. Wrote and maintained a
                  Node, React, PostgreSQL stack as well as created and
                  maintained RESTful APIs. Utilized tools like Gitlab, Postman,
                  Kafka, Mux, and Docker to streamline development and ensure
                  seamless integration. Monitored and triaged error in the video
                  service, ensuring no downtime by responding to OpsGenie alerts
                  and analyzing live issues. Lead a team to integrate code
                  between Pluralsight and a newly acquired company, extending
                  learning modalities for both platforms and creating a unified
                  learning experience for the end user.
                </p>
              </div>
            </div>
            <div className="bg-secondary text-primary rounded-lg w-3/5 p-5 m-5 self-end">
              <div className="flex flex-col m-2 bg-secondarybg rounded-lg p-2">
                <div className="flex flex-row justify-between">
                  <h2 className="text-primaryButton text-xl">DELL EMC</h2>
                  <h4 className="text-sm ml-2 self-end">
                    Hopkinton, Massachusetts
                  </h4>
                </div>
                <div className="self-end text-sm">
                  <h3>Software Engineer July 2016 – 2022</h3>
                </div>
              </div>
              <div>
                <p className="text-left">
                  Maintained, organized and restructured the working code-base
                  of EMC’s flagship VMAX system. Specifically addressing bugs
                  and updates to the code regarding the cache structures. Took
                  part in the full development lifecycle including testing,
                  continuous integration, delivery and support of microservice
                  based products. Wrote clean, modular code that adheres to
                  strict coding standards. Emphasis on multi-threaded, parallel
                  programming concepts and memory management in C. Able to work
                  in Linux environments, as well as to create and learn new
                  command line interfaces. Requires deep knowledge in C, the
                  ability to collaborate using Git, as well as an understanding
                  of Linux CLI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="2"
      >
        {/*HOME*/}
        <div className="flex-none flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold underline bg-secondary text-primary p-3 pr-20 pl-20 rounded-full">
            Perpetual Dev.
          </h1>
          <h1 className="bg-secondary text-primary p-2 rounded-full text-xs">
            In Providence, RI is currently {weatherCondition.weatherStatus}{" "}
            during the {weatherCondition.time}
          </h1>
          <img
            src={`./img/weather/weather-${weatherCondition.time}-${weatherCondition.weatherStatus}.png`}
          ></img>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent rounded-b-md outline-none "
        value="3"
      >
        {/*TOOLKIT*/}
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap w-2/3 mt-16">
            {data.tools.map((tool) => (
              <ToolIcon
                title={tool.title}
                imgsrc={tool.imgsrc}
                link={tool.link}
                alt={tool.alt}
                description={tool.description}
              ></ToolIcon>
            ))}
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-transparent outline-none self-center"
        value="4"
      >
        {/*CONTACT*/}
        <p className="mb-5 text-black text-[15px] leading-normal">
          Like what you see? Please feel free to contact me regarding; job
          opportunities, consultation, or commisions for 3D art.
        </p>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-black block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
            id="name"
            placeholder="Your Name"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-black block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
            id="username"
            placeholder="example@email.com"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-black block"
            htmlFor="message"
          >
            Your message
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] align-text-top leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[100px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
            id="message"
            type="text"
            placeholder="Write your message here..."
          />
        </fieldset>
        <div className="flex justify-end mt-5">
          <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-secondaryButton text-primary hover:bg-accent focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none cursor-default">
            Send Message
          </button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabbedContent;
