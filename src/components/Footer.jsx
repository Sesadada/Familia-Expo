import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center relative">
      <div className=" border-t-2 h-16 flex justify-around p-2 items-center">
        <Link to="/profesional">
          <div className="z-20 text-white rounded-full w-20 h-10 bg-blue-200 cursor-pointer flex items-center justify-center shadow-lg focus:shadow-none">
            pro
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="z-20 rounded-full bg-blue-200 w-16 h-16 text-white text-center mb-16 shadow-2xl"></div>
        </Link>
        <Link to="/chat">
          <div className="z-20 rounded-full w-20 h-10 bg-blue-200 flex items-center justify-center shadow-lg text-white">
            chat
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
