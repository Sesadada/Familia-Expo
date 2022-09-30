import React from "react";

const ModalButton = ({ text, handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      className="px-4 py-2 rounded-full bg-blue-100 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default ModalButton;
