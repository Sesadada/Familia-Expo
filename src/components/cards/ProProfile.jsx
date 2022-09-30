import React from "react";
import GenericButton from "../buttons/genericButton";
import { useRecoilState } from "recoil";
import { openAddPro, openChangePro } from "../../../atoms/modalAtoms";

const ProProfile = () => {
  const [showAddProModal, setAddProModal] = useRecoilState(openAddPro);
  const [service, SetService] = useRecoilState(openChangePro);

  const handleClick = (service) => {
    setAddProModal(true);
    SetService(service);
  };

  return (
    <div className="w-screen mx-auto">
      <div className="w-4/5 flex items-center justify-start mx-auto text-left py-3 ">
        <h3 className="text-xs ">Cuidados</h3>
      </div>
      <div className="bg-white shadow-lg rounded-lg border-t-2 mx-auto md:w-2/5 flex justify-center flex-col items-center">
        <header className="text-center flex w-4/5  ">
          <div className="w-1/5 pt-4">
            <svg
              className=" w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
              viewBox="0 0 72 72"
            >
              <path className="text-blue-400" d="M0 0h72v72H0z" />
            </svg>
          </div>
          <div className="flex flex-col text-left pl-6 pt-4 w-4/5">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Carmela Pérez
            </h3>
            <div className="text-sm font-medium text-gray-500">
              <p className="text-slate-400">Profesional</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </header>
        <div className="flex w-4/5 gap-3 py-3">
          <GenericButton onClick={() => handleClick("cambio")}>
            <p className="text-xs">Solicitar cambio</p>
          </GenericButton>
          <GenericButton onClick={() => handleClick("adicional")}>
            <p className="text-xs">Cuidadora adicional</p>
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default ProProfile;
