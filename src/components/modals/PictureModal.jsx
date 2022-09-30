import { openPicture } from "../../../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import LargeButton from "../buttons/LargeButton";
import { useState } from "react";

export const PictureModal = () => {
  const [showPicture, setShowPicture] = useRecoilState(openPicture);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    //<input type="file" name="file" onChange={changeHandler} />

    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);
  };
  return (
    <>
      {showPicture ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-2/3 my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <div>
                    <p className="mb-4 text-slate-500 text-center text-sm leading-relaxed">
                      De dónde quieres seleccionar la foto?{" "}
                    </p>
                    <div className="flex flex-col gap-3 items-center w-full">
                      <button
                        className="px-6 bg-slate-300 rounded-lg shadow-md py-1 w-2/4"
                        onClick={() => setShowPicture(false)}
                      >
                        Galería
                      </button>
                      <button
                        className="px-6 bg-slate-300 rounded-lg shadow-md py-1 w-2/4"
                        onClick={() => setShowPicture(false)}
                      >
                        Hacer Foto
                      </button>
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
