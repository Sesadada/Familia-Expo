import { useParams } from "react-router-dom";
import { openState } from "../../atoms/modalAtoms";
import GenericButton from "../components/buttons/genericButton";
import Finaciacion from "../components/cards/Finaciacion";
import { useRecoilState } from "recoil";
import { FinanceModal } from "../components/modals/FinanceModal";
const servicios = [
  { serv: "Fisioterapeuta", id: "1", color: "pink" },
  { serv: "Masajista", id: "2", color: "blue" },
  { serv: "Psicologo", id: "3", color: "pink" },
  { serv: "Cardiologo", id: "4", color: "green" },
  { serv: "Traumatologo", id: "5", color: "orange" },
  { serv: "Dermatologo", id: "6", color: "blue" },
];

const Servicios = () => {
  const [showModal, setShowModal] = useRecoilState(openState);
  const { id } = useParams();
  const [final] = servicios.filter((s) => s.id == id);
  console.log(final);
  return (
    <div>
      <div className="w-screen mx-auto">
        <div className="w-4/5 flex items-center justify-start mx-auto text-left py-3 ">
          <h3 className="text-xs ">Servicios Adicionales</h3>
        </div>
        <div className="px-10">
          <h2>Quieres contratar el servicio de {final.serv} de Carmela?</h2>

          <p className="text-xs my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            eius nisi tempore cumque omnis expedita unde laudantium itaque, rem
            perferendis, recusandae voluptate! Excepturi maiores eligendi fugit
            cum voluptate qui quod!
          </p>

          <p className="text-xs my-6 w-4/5">
            Si estas interesado llámanos y gestionaremos tu solicitud
          </p>

          <GenericButton>902 333 345</GenericButton>
          <p className="text-xs my-6">
            Recuerda que puedes financiar todos tus servicios con nosotros
          </p>
          <Finaciacion />
        </div>
      </div>
      <FinanceModal />
    </div>
  );
};

export default Servicios;
