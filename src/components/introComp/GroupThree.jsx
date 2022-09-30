import React from "react";
import { Link } from "react-router-dom";
import LargeButton from "../buttons/LargeButton";

const GroupThree = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <section>
        <img
          src="/front.jpg"
          alt="senniors familia"
          className="w-20 h-20 object-cover blur-sm"
        />
      </section>
      <div className="flex flex-col p-4 justify-center items-center gap-4">
        <h3>Ya estas listo para comenzar!</h3>
        <Link to="/Register">
          <LargeButton>Regístrate</LargeButton>
        </Link>
      </div>
    </div>
  );
};

export default GroupThree;
