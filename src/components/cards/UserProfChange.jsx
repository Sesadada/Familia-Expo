import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { openPicture } from "../../../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { PictureModal } from "../modals/PictureModal";

const UserProfChange = () => {
  const [showPicture, setShowPicture] = useRecoilState(openPicture);
  console.log(showPicture);
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full bg-white shadow-lg rounded-lg mt-12 border-t-2 flex justify-between px-8 md:w-2/5 mx-auto">
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-500 flex flex-col justify-evenly">
            <p className="text-xs">Bienvenido</p>
            <p className="text-xl font-black text-gray-900">Carlos Linares</p>
            <p className="text-md text-slate-500">656 890 768</p>
          </div>
          <Link to="/">
            <button className="mt-3 rounded-full px-2 py-1 bg-blue-200 text-white text-xs shadow-md">
              Log Out
            </button>
          </Link>
        </div>
        <header
          className="text-right pb-5 h-40 w-30 "
          onClick={() => setShowPicture(true)}
        >
          <svg
            className=" cursor-pointer inline-flex -mt-9 w-40 h-40 fill-current rounded-full border-4 border-white box-content shadow mb-3"
            viewBox="0 0 72 72"
          >
            <path className="text-blue-400" d="M0 0h72v72H0z" />
          </svg>
        </header>
      </div>
      <PictureModal />
    </div>
  );
};

export default UserProfChange;
