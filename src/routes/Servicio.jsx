import { useParams } from "react-router-dom";
import GenericButton from "../components/buttons/genericButton";
const servicios = [
  { serv: "Fisioterapeuta", id: "1", color: "pink" },
  { serv: "Masajista", id: "2", color: "blue" },
  { serv: "Psicologo", id: "3", color: "pink" },
  { serv: "Cardiologo", id: "4", color: "green" },
  { serv: "Traumatologo", id: "5", color: "orange" },
  { serv: "Dermatologo", id: "6", color: "blue" },
];

const Servicios = () => {
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
          <h3 className="text-xl font-bold  mb-1 text-blue-500">
            {final.serv}
          </h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            eius nisi tempore cumque omnis expedita unde laudantium itaque, rem
            perferendis, recusandae voluptate! Excepturi maiores eligendi fugit
            cum voluptate qui quod!
          </p>

          <p className="text-xs">
            Velit impedit quis nemo temporibus eaque voluptates recusandae ex
            culpa!
          </p>
          <img
            src="/front.jpg"
            alt="senniors familia"
            className="w-full h-28 mt-4 object-cover rounded-md"
          />
          <p className="text-xs my-6 w-4/5">
            Si estas interesado llámanos y gestionaremos tu solicitud
          </p>

          <GenericButton>902 333 345</GenericButton>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
