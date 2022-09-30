import React, { useState } from "react";
import GenericButton from "../buttons/GenericButton";
let mock = {
  name: "Carlos",
  lastname: "Linares",
  phone: "656890768",
  gadget: "Apple Watch SE",
};

const UserInfoChange = () => {
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [gadget, setGadget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let current = {
      name,
      lastname,
      phone,
      gadget,
    };
    for (const key in current) {
      if (current[key] === "") {
        delete current[key];
      }
    }

    console.log(current);
    const final = { ...mock, ...current };
    setState(!state);
    console.log(final);
    setTimeout(() => setState(true), 3000);
  };

  return (
    <div className="w-full flex flex-col mt-10 ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col border-t-2">
          <label className="text-xs px-8 pt-4 text-slate-500">Nombre</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text "
            placeholder={mock.name}
            className="text-lg px-8 pb-4 placeholder-black"
          />
        </div>
        <div className="flex flex-col border-t-2">
          <label className="text-xs px-8 pt-4 text-slate-500">Apellido</label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            type="text "
            placeholder={mock.lastname}
            className="text-lg px-8 pb-4  placeholder-black"
          />
        </div>
        <div className="flex flex-col border-t-2">
          <label className="text-xs px-8 pt-4 text-slate-500">Teléfono</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text "
            placeholder={mock.phone}
            className="text-lg px-8 pb-4  placeholder-black"
          />
        </div>
        <div className="flex flex-col border-y-2">
          <label className="text-xs px-8 pt-4 text-slate-500">
            Mis Gadgets
          </label>
          <input
            onChange={(e) => setGadget(e.target.value)}
            type="text "
            placeholder={mock.gadget}
            className="text-lg px-8 pb-4  placeholder-black"
          />
        </div>
        <div className="w-full items-center flex flex-col justify-center mt-4 mb-14">
          <button
            type="submit"
            className="px-6 py-1 bg-blue-300 rounded-full text-white shadow-lg"
          >
            Guardar
          </button>
          {!state && (
            <p className="text-xs mt-1 text-gray-500">Cambios guardados</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserInfoChange;
