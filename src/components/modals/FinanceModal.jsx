import { openFinance } from "../../../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import GenericButton from "../buttons/GenericButton";

export const FinanceModal = () => {
  const [showFinance, setShowFinance] = useRecoilState(openFinance);
  return (
    <>
      {showFinance ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-2/3 my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <div>
                    <p className="mb-4 text-slate-500 text-center text-sm leading-relaxed">
                      Sabias que podías financiar todos nuestros servicios?{" "}
                    </p>
                    <div className="flex flex-col gap-3 items-center">
                      <GenericButton onClick={() => setShowFinance(false)}>
                        LLámanos!
                      </GenericButton>
                    </div>
                  </div>
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
