import { Link, useNavigate } from "react-router-dom";
import Update from "../components/cards/Update";
import UserProfile from "../components/cards/UserProfile";
import { total } from "../../mock";
import { useRecoilState } from "recoil";
import { openState, openFinance } from "../../atoms/modalAtoms";
import { InformeModal } from "../components/modals/InformeModal";
import LargeButton from "../components/buttons/LargeButton";
import Informes from "../components/cards/Informes";
import Finaciacion from "../components/cards/Finaciacion";
import { FinanceModal } from "../components/modals/FinanceModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useRecoilState(openState);
  const [showFinance, setShowFinance] = useRecoilState(openFinance);

  const onLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center desktop">
      <UserProfile />

      <div className="w-4/5 flex-1 mt-8">
        <Update data={total[0]} />
        <LargeButton onClick={() => setShowModal(true)}>
          Informe Mensual de junio
        </LargeButton>
        <LargeButton onClick={() => setShowModal(true)}>
          Informe trimestral
        </LargeButton>
        <Informes />

        <InformeModal />

        <Finaciacion />

        <FinanceModal />
      </div>
    </div>
  );
};

export default Dashboard;
