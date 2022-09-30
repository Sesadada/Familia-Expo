import { useState } from "react";
import ModalButton from "../buttons/modalButton";
import { useRecoilState } from "recoil";
import { openAddPro, openChangePro } from "../../../atoms/modalAtoms";
import GenericButton from "../buttons/GenericButton";
const month = "junio";

export const AddProModal = () => {
  const [showAddProModal, setAddProModal] = useRecoilState(openAddPro);
  const [service, SetService] = useRecoilState(openChangePro);

  const [state, setState] = useState(true);

  const handleSubmit = () => {
    setState(false);
    //logic to download PDF
  };
  const handleFinish = () => {
    setState(true);
    setAddProModal(false);
  };
  return (
    <>
      {showAddProModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  {state ? (
                    <div>
                      <p className="mb-4 text-slate-500 text-center text-xs leading-relaxed">
                        Solicitud cuidadora adicional{" "}
                      </p>
                      {service === "adicional" ? (
                        <p className="text-xs p-2">
                          Cuentanos brevemente qué necesitas y nos pondremos en
                          contacto contigo lo antes posible.
                        </p>
                      ) : (
                        <p className="text-xs p-2">
                          Dinos por favor el motivo de tu solicitud de cambio de
                          cuidadora y la llamaremos cuanto antes
                        </p>
                      )}
                      <form
                        onSubmit={handleFinish}
                        className="flex flex-col justify-center items-center w-full"
                      >
                        <label className="text-xs p-2 mb-4 w-full">
                          <p className="text-left">Comentarios</p>
                        </label>
                        <input type="text" className="border-b-2 w-4/5 py-2" />
                        <div
                          className="flex flex-col mt-4 w-2/4 mx-auto
                      "
                        >
                          <ModalButton
                            text="Enviar"
                            handleSubmit={() => handleSubmit()}
                          ></ModalButton>
                        </div>
                      </form>
                      <p className="mt-6 text-slate-500 text-center text-xs leading-relaxed">
                        También puedes llamarnos si lo prefieres{" "}
                      </p>
                      <div
                        className="flex flex-col mt-2 w-3/4 mx-auto
                      "
                      >
                        <ModalButton
                          text="902 334 334"
                          handleSubmit={() => handleFinish()}
                        ></ModalButton>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-4 text-slate-500 text-center text-sm leading-relaxed">
                        Tu solicitud se ha enviado correctamente, nos pondremos
                        en contacto contigo lo antes posible{" "}
                      </p>
                      <div className="flex flex-col gap-3 items-center">
                        <GenericButton onClick={() => handleFinish()}>
                          Volver a cuidados
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
