import React from "react";

const GenericButton = ({ children, onClick }) => (
  <a
    onClick={onClick}
    className=" cursor-pointer z-0  px-4 border-none py-1  bg-blue-400 text-white rounded-full shadow-md text-center h-min"
  >
    {children}
  </a>
);

export default GenericButton;
