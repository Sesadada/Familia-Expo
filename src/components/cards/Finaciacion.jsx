import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { openFinance } from "../../../atoms/modalAtoms";

const Finaciacion = () => {
  const [showFinance, setShowFinance] = useRecoilState(openFinance);
  const navigate = useNavigate();
  const handleClick = () => {
    setShowFinance(true);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 rounded-md my-4 bg-blue-100 shadow-xl text-center  cursor-pointer"
    >
      Finaciacion a Medida
    </div>
  );
};

export default Finaciacion;
