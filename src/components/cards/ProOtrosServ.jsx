import React from "react";
import { Link } from "react-router-dom";
const servicios = [
  { serv: "Fisioterapeuta", id: "1", color: "pink" },
  { serv: "Masajista", id: "2", color: "blue" },
  { serv: "Psicologo", id: "3", color: "pink" },
  { serv: "Cardiologo", id: "4", color: "green" },
  { serv: "Traumatologo", id: "5", color: "orange" },
  { serv: "Dermatologo", id: "6", color: "blue" },
];

const ProOtrosServ = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-center w-full pb-2">
        <p className="text-xs">Necesitas Otros Servicios?</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
        {servicios.map((s) => (
          <Link to={`/servicios/${s.id}`} key={s.id}>
            <Card info={s} key={s.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProOtrosServ;

const Card = ({ info }) => {
  return (
    <div
      className={` bg-${info.color}-200 w-full h-16 flex rounded-md shadow-lg`}
    >
      <div className="flex items-end p-2 text-xs">{info.serv}</div>
    </div>
  );
};
