import React from "react";
import { Link } from "react-router-dom";
const servicios = [
  { serv: "Fisioterapeuta", id: "1", color: "pink" },
  { serv: "Masajista", id: "2", color: "blue" },
];

export const Slider = () => {
  return (
    <div className="w-full pb-3 flex gap-2 ">
      <div className=" border-2 w-40 p-2 rounded-md">
        <p className="text-xs">Otros servicios </p>
        <p className="text-xs">de Carmela?</p>
      </div>
      {servicios.map((s) => (
        <Link to={`/serviciosExtra/${s.id}`} key={s.id}>
          <div className=" w-22 p-2 bg-blue-200 shadow-lg rounded-md">
            <p className="text-xs font-bold">{s.serv} </p>
            <p className="text-xs">Lorem Ipsum Ips </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
