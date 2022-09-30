import React from "react";

const GroupTwo = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-3/4">
        <div className="h-80 w-full relative">
          <div className="relative h-72 w-72 z-0 m-auto">
            <img src="/front.jpg" alt="senniors familia" />
          </div>
          <div className=" w-20 h-20 top-32 right-16 absolute z-20">
            <img src="/front.jpg" alt="senniors familia" />
          </div>
          <div className=" w-2/3 top-20 right-0 h-20 h-30 absolute z-10">
            <img src="/front.jpg" alt="senniors familia" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h1>Aqui podras</h1>
          <p className="p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            fugiat tempore eligendi ducimus ipsum ullam iste!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupTwo;
