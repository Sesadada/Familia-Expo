import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col">
      <div className="bg-white shadow-lg rounded-lg mt-9 border-t-2 md:w-2/5 md:mx-auto">
        <div className="w-1/5  h-8 text-left mt-4 ml-4">
          <button
            onClick={() => navigate("/familia")}
            className="rounded-full text-xs px-2 py-1 bg-blue-200 text-white shadow-md"
          >
            Familia
          </button>
        </div>
        <header className="text-center px-5 pb-5">
          <svg
            onClick={() => navigate("/user")}
            className="inline-flex -mt-20 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
            viewBox="0 0 72 72"
          >
            <path className="text-blue-400" d="M0 0h72v72H0z" />
          </svg>

          <h3 className="text-xl font-bold text-gray-900 mb-1">Bienvenido</h3>
          <div className="text-sm font-medium text-gray-500">Carlos</div>
        </header>
      </div>
    </div>
  );
};

export default UserProfile;

/*

          <div
            onClick={() => navigate("/familia")}
            className="rounded-full text-xs px-2 py-1 bg-blue-200 text-white shadow-md"
          >
            Familia
          </div>


const UserProfile = () => {
  return (
    <div className="w-screen mx-auto">
      <div className="w-1/5  h-8 text-left relative left-0">
        <Link to="/familia">
          <button className="rounded-full text-xs px-2 py-1 bg-blue-200 text-white shadow-md">
            Familia
          </button>
        </Link>
      </div>
      <div className="bg-white shadow-lg rounded-lg mt-9 border-t-2">
        <header className="text-center px-5 pb-5">
          <svg
            className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
            viewBox="0 0 72 72"
          >
            <path className="text-blue-400" d="M0 0h72v72H0z" />
          </svg>

          <h3 className="text-xl font-bold text-gray-900 mb-1">Bienvenido</h3>
          <div className="text-sm font-medium text-gray-500">Carlos</div>
        </header>
      </div>
    </div>
  );
};

export default UserProfile;

*/
