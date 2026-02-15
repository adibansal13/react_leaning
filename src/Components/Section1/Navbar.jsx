import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-15 py-5">
      <h3 className="bg-black text-white px-8 py-2 rounded-full">
        Target Audience
      </h3>
      <button className="bg-gray-300 px-8 py-2  rounded-full text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
