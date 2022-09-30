import { useState } from "react";
import GenericButton from "../buttons/genericButton";
import Informe from "./Informe";

const total = [
  { informe: "Traumatologo", id: "1" },
  { informe: "Otorrino", id: "2" },
  { informe: "Dermatologo", id: "3" },
];
// fetch informes

const Informes = () => {
  return (
    <div className=" w-full">
      <Accordion />
    </div>
  );
};

export default Informes;

export function Accordion() {
  const [accord, setAccord] = useState(false);
  const visible = () => {
    setAccord(!accord);
  };
  return (
    <div className="">
      <div className="p-4 pt-2 border-2 rounded-md list-none flex flex-col items-center ">
        <div className="flex flex-col items-center w-full justify-center ">
          <h4 className="font-bold pb-2 ">Informes Sanitarios</h4>
          <button
            className="px-6 py-1 bg-blue-300 rounded-full text-white shadow-lg"
            onClick={visible}
          >
            {!accord ? "Ver" : "Esconder"}
          </button>
        </div>
      </div>
      {accord &&
        total.map((tot) => (
          <div className="mt-2 " key={tot.id}>
            <Informe key={tot.id} cont={tot} />
          </div>
        ))}
    </div>
  );
}
