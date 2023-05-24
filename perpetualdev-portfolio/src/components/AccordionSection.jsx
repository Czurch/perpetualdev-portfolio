import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import data from "../assets/data/siteData.json";
import ModelCanvas from "./ModelCanvas";

const AccordionSection = () => (
  <Accordion.Root
    className="bg-transparent w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <div className="flex w-full justify-center px-70">
        <AccordionTrigger>
          <ModelCanvas model="gameboy" rotateforward={false} className="m-7" />
          <div className="p-32" />
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <h2>Early Life</h2> {data.profile["early-life"]}
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <div className="flex w-full justify-center px-70">
        <AccordionTrigger>
          <div className="p-32" />
          <ModelCanvas model="gradcap" rotateforward={true} className="m-7" />
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <h2>Early Career</h2> {data.profile["early-career"]}
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <div className="flex w-full justify-center px-70">
        <AccordionTrigger>
          <ModelCanvas model="console" rotateforward={false} className="m-7" />
          <div className="p-32" />
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <h2>Present Day</h2> {data.profile["present-day"]}
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className="focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 rounded-lg focus-within:relative focus-within:z-10"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    const handleClick = () => {
      // Scroll to the AccordionContent when the trigger is clicked
      const accordionContent = document.querySelector(".accordion-content");
      if (accordionContent) {
        const triggerRect = forwardedRef.current.getBoundingClientRect();
        const contentRect = accordionContent.getBoundingClientRect();
        const scrollPosition =
          contentRect.top -
          window.innerHeight / 2 +
          contentRect.height / 2 -
          triggerRect.height / 2;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    };

    return (
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className="text-mauve2 shadow-mauve group flex self-end h-full flex-1 cursor-default items-center justify-between bg-transparent px-5 text-[15px] leading-none outline-none"
          onClick={handleClick}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className="text-primary bg-secondary data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionSection;
