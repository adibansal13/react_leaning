import React from "react";
import RightCard from "./RightCard";

const RightContent = props => {
  return (
    <div
      id="rightCard"
      className=" h-full w-2/3 p-3 flex flex-nowrap gap-5 overflow-x-auto"
    >
      {props.user.map((element, idx) => {
        return <RightCard user={element} key={idx} id={idx} />;
      })}
    </div>
  );
};

export default RightContent;
