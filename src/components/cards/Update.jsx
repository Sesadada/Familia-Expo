import React, { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";

import GenericButton from "../buttons/GenericButton";
import { BsArrowDownCircle } from "react-icons/bs";

const tareas = [
  "13:45 - Llegada cuidadora",
  "14:30 - Almuerzo",
  "17:55 - Pastilla tensión tomada",
  "18:55 - Pastilla lorem ipsum",
  "19:55 - Fin jornada cuidadora",
];

const UpdateCard = ({ data }) => {
  const [state, setState] = useState("hidden");
  const opening = () => {
    setState(state === "flex" ? "hidden" : "flex");
  };
  return (
    <div className="mt-4 flex justify-between flex-col rounded-md border-2 py-2">
      <div className=" px-4 rounded-md flex justify-between ">
        <div className="flex flex-col">
          <p>{data.name}</p>
          <h4 className="font-bold">Actualización Diaria</h4>
          <p className=" text-xs">17.55 - Pastilla tension tomada</p>
        </div>
        <div className=" items-center flex justify-center">
          <div className={`${state === "flex" && "hidden"} relative mb-3`}>
            <BsArrowDownCircle
              onClick={opening}
              size={30}
              className="bg-blue-300 cursor-pointer text-white rounded-full animate-bounce absolute "
            />
          </div>
          <AiOutlineClose
            onClick={opening}
            size={35}
            className={`bg-blue-400 cursor-pointer text-white rounded-full p-2 ${
              state === "flex" ? "visible" : "invisible"
            }`}
          />
        </div>
      </div>
      <div className={`flex-col p-4 ${state}`}>
        {tareas.map((t) => (
          <Tarea info={t} key={t} />
        ))}
      </div>
    </div>
  );
};

export default UpdateCard;

//https://randomuser.me/api/?exc=login

export const Tarea = ({ info }) => {
  return (
    <div className="flex justify-between">
      <div>{info}</div>
      <div>{<AiOutlineCheck />}</div>
    </div>
  );
};
