import React from "react";
import GenericButton from "../buttons/GenericButton";
import { useRecoilState } from "recoil";
import { openState } from "../../../atoms/modalAtoms";

const Informe = ({ cont }) => {
  const [showModal, setShowModal] = useRecoilState(openState);
  return (
    <div className=" p-4 flex gap-2 justify-between items-center rounded-md mt-2 shadow-sm  bg-blue-100 ">
      <div className="text-sm"> {cont.informe}</div>
      <GenericButton onClick={() => setShowModal(true)}>Descarga</GenericButton>
    </div>
  );
};

export default Informe;
