import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../App.css";
import Reference from "./Reference";
import { TbHome } from "react-icons/tb";
import data from "../assets/data/siteData.json";
import ToolIcon from "./ToolIcon";
import Profile from "./Profile";
import Experience from "./Experience";
import ContactModal from "./ContactModal";

const TabbedContent = ({ onTabChange, weatherCondition, ...props }) => {
  const [activeTab, setActiveTab] = useState(2);

  let tabChanged = false;
  useEffect(() => {
    onTabChange(activeTab);
    tabChanged = true;
  }, [activeTab]);

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
        <Experience />
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
            In Providence, RI it is currently {weatherCondition.weatherStatus}{" "}
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
          <div className="flex flex-row flex-wrap w-3/5 mt-16">
            {data.tools.map((tool, ix) => (
              <ToolIcon
                key={ix}
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
        <ContactModal />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabbedContent;
