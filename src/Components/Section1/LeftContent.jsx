import React from "react";
import HeroText from "./HeroText";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className=" flex flex-col justify-between h-full w-1/3 ">
      <HeroText />
      <div>
        <ArrowUpRight size={55} />
      </div>
    </div>
  );
};

export default LeftContent;
