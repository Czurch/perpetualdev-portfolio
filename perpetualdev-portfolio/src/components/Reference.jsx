import React, { useEffect, useRef } from "react";
import * as Avatar from "@radix-ui/react-avatar";

const Reference = ({ reference, ...props }) => {
  return (
    <div className="reference-card">
      <div className="flex flex-row items-center">
        <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-start justify-start overflow-hidden rounded-full m-2">
          <Avatar.Image
            className="h-full w-auto rounded-[inherit] object-cover"
            src={reference.profileSrc}
            alt={reference.name}
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            {reference.initials}
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="m-2">
          <h2>{reference.name}</h2>
          <h4>{reference.title}</h4>
        </div>
      </div>
      <div>
        <p>{`"${reference.message}"`}</p>
      </div>
    </div>
  );
};

export default Reference;
