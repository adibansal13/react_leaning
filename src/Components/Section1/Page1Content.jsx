import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = props => {
  return (
    <div className="px-15 py-4 h-[90vh] flex gap-10 items-center ">
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  );
};

export default Page1Content;
