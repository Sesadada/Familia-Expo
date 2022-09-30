import React from "react";
import { Link } from "react-router-dom";
import LargeButton from "../components/buttons/LargeButton";

const Welcome = () => {
  return (
    <div className="w-full h-screen bg-blue-100 flex flex-col justify-end items-center desktop">
      <img
        src="/front.jpg"
        alt="senniors familia"
        className="w-screen h-screen object-cover blur-sm absolute z-0"
      />
      <div className="absolute z-20 w-4/5 mb-8">
        <Link to="/Login">
          <LargeButton>Soy cliente de Senniors</LargeButton>
        </Link>

        <Link to="/intro">
          <LargeButton>Aún no soy cliente</LargeButton>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
