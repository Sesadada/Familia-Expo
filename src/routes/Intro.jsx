import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import GroupOne from "../components/introComp/GroupOne";
import GroupThree from "../components/introComp/GroupThree";
import GroupTwo from "../components/introComp/GroupTwo";

const Intro = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [groupOne, setGroupOne] = useState("flex");
  const [groupTwo, setGroupTwo] = useState("hidden");
  const [groupThree, setGroupThree] = useState("hidden");

  const handleBack = () => {
    if (count == 0) {
      navigate("/");
    } else {
      handleCount("minus");
    }
  };

  const handleCount = (action) => {
    if (action == "plus") {
      if (count < 2) {
        setCount(count + 1);
      }
    }
    if (action == "minus") {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  useEffect(() => {
    const changeVisible = () => {
      if (count == 0) {
        setGroupOne("flex");
        setGroupTwo("hidden");
        setGroupThree("hidden");
      } else if (count == 1) {
        setGroupOne("hidden");
        setGroupTwo("flex");
        setGroupThree("hidden");
      } else if (count == 2) {
        setGroupOne("hidden");
        setGroupTwo("hidden");
        setGroupThree("flex");
      }
    };
    changeVisible();
  }, [count]);

  console.log(count);
  return (
    <div className="w-full h-screen relative bg-blue-100 flex flex-col p-8 items-center justify-between desktop">
      <section>
        <div className={groupOne}>
          <GroupOne />
        </div>
        <div className={groupTwo}>
          <GroupTwo />
        </div>
        <div className={groupThree}>
          <GroupThree />
        </div>
      </section>
      <div className="h-30 w-full flex items-end justify-between">
        <AiOutlineArrowLeft
          size={20}
          className={`cursor-pointer `}
          onClick={() => handleBack()}
        />
        <AiOutlineArrowRight
          size={20}
          className={`cursor-pointer ${count == 2 && "hidden"} 
          }`}
          onClick={() => handleCount("plus")}
        />
      </div>
    </div>
  );
};

export default Intro;
