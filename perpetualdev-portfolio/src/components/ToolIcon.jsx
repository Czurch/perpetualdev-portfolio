import React, { useEffect, useRef } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const ToolIcon = ({ title, imgsrc, link, alt, description, ...props }) => {
  return (
    <div className="flex flex-col">
      <div className="m-2">
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <a className="flex justify-center" href={link} target="_blank">
              <img src={imgsrc} className="logo self-center" alt={alt} />
            </a>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
              sideOffset={5}
              side="right"
            >
              <div className="flex flex-col gap-[7px]">
                <img
                  className="block h-[60px] w-[60px] rounded-full bg-black"
                  src={imgsrc}
                  alt={alt}
                />
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                      {title}
                    </div>
                    <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                      {link}
                    </div>
                  </div>
                  <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                    {description}
                  </div>
                </div>
              </div>
              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <h3 className="text-sm text-center w-auto text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ToolIcon;
