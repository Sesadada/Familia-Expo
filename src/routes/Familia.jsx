import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../components/cards/UserProfile";
import { total } from "../../mock";
const Familia = () => {
  return (
    <div className="flex flex-col justify-center items-center desktop">
      <Link to="/user">
        <UserProfile />
      </Link>

      <div className="mt-8 w-4/5 flex flex-col items-center ">
        <h4>¿Qué perfil quieres ver?</h4>
        <div className="flex flex-col w-4/5 mt-8">
          {total.map((par) => (
            <Card key={par.id} info={par} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Familia;

export const Card = ({ info }) => {
  return (
    <Link to="/dashboard">
      <div className=" cursor-pointer text-center text-white p-3 my-2 rounded-md shadow-lg bg-blue-300">
        {info.name}
      </div>
    </Link>
  );
};
