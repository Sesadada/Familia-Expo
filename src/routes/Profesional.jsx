import { useNavigate } from "react-router-dom";

import ProProfile from "../components/cards/ProProfile";
import { Slider } from "../components/cards/Slider";
import ProOtrosServ from "../components/cards/ProOtrosServ";
import { AddProModal } from "../components/modals/AddProModal";

const Profesional = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center desktop">
      <ProProfile />

      <div className="w-4/5 flex flex-col my-4">
        <Slider />
        <ProOtrosServ />
        <AddProModal />
      </div>
    </div>
  );
};

export default Profesional;
