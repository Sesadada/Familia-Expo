import { useState } from "react";
import ModalButton from "../buttons/modalButton";
import { useRecoilState } from "recoil";
import { openState } from "../../../atoms/modalAtoms";
import GenericButton from "../buttons/GenericButton";
const month = "junio";

export const InformeModal = () => {
  const [showModal, setShowModal] = useRecoilState(openState);
  const [state, setState] = useState(true);

  const handleSubmit = () => {
    setState(false);
    //logic to download PDF
  };
  const handleFinish = () => {
    setState(true);
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  {state ? (
                    <div>
                      <p className="mb-4 text-slate-500 text-center text-sm leading-relaxed">
                        ¿Como quieres descargar el informe de {month}?{" "}
                      </p>
                      <div className="flex flex-col gap-3">
                        <ModalButton
                          text="Envialo a mi email"
                          handleSubmit={() => handleSubmit()}
                        ></ModalButton>
                        <ModalButton
                          text="En el dispositivo"
                          handleSubmit={() => handleSubmit()}
                        ></ModalButton>{" "}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-4 text-slate-500 text-center text-sm leading-relaxed">
                        Informe descargado correctamente{" "}
                      </p>
                      <div className="flex flex-col gap-3 items-center">
                        <GenericButton onClick={() => handleFinish()}>
                          Volver al inicio
                        </GenericButton>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
