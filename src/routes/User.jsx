import React from "react";
import { Link } from "react-router-dom";
import UserInfoChange from "../components/cards/UserInfoChange";
import UserProfChange from "../components/cards/UserProfChange";
import UserProfile from "../components/cards/UserProfile";

const User = () => {
  return (
    <div className="flex flex-col items-center desktop w-full">
      <UserProfChange />

      <UserInfoChange />
    </div>
  );
};

export default User;
