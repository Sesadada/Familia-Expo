import { useRecoilState } from "recoil";
import { openAlert, alert } from "../../atoms/notificationAtoms";
import GenericButton from "../components/buttons/GenericButton";

const allAlerts = [
  {
    day: "14/08/2022",
    time: "13.30",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    day: "15/08/2022",
    time: "14.30",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate iure beatae eligendi quia voluptates qui",
  },
  {
    day: "16/08/2022",
    time: "17.30",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicvoluptates qui",
  },
  {
    day: "18/08/2022",
    time: "19.30",
    text: "Lorem ipsum, dolor sit amet consectetur igendi quia voluptates qui",
  },
  {
    day: "20/08/2022",
    time: "20.30",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate iurevoluptates qui",
  },
];

const Alerts = () => {
  const [showAlert, setShowAlert] = useRecoilState(openAlert);
  return (
    <div className="flex flex-col h-full ">
      <div className="w-4/5 flex items-center justify-start mx-auto text-left py-3 ">
        <h3 className="text-xs ">Notificaciones</h3>
      </div>
      {!showAlert ? (
        <div className="w-full h-full">
          {allAlerts.map((alert) => (
            <Alert info={alert} key={alert.time} />
          ))}
        </div>
      ) : (
        <AlertCard />
      )}
    </div>
  );
};

export default Alerts;

export const Alert = ({ info }) => {
  const [showAlert, setShowAlert] = useRecoilState(openAlert);
  const [currentAlert, setCurrentAlert] = useRecoilState(alert);

  const handleAlert = () => {
    setShowAlert(true);
    setCurrentAlert(info);
  };
  return (
    <div
      onClick={handleAlert}
      className=" w-full p-4 bg-white rounded border-b border-1 flex"
    >
      <div className="px-8">
        <p className="focus:outline-none text-sm leading-none">
          <span className="text-blue-700 text-xs">{info.day}</span> {info.time}
        </p>
        <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
          {info.text}
        </p>
      </div>
    </div>
  );
};

export const AlertCard = () => {
  const [currentAlert, setCurrentAlert] = useRecoilState(alert);
  const [showAlert, setShowAlert] = useRecoilState(openAlert);
  return (
    <div className=" px-10 h-full bg-white flex flex-col justify-center items-start ">
      <div className="p-4 rounded border border-1 ">
        <p className="focus:outline-none text-sm leading-none">
          <span className="text-blue-700 text-xs">{currentAlert.day}</span>{" "}
          {currentAlert.time}
        </p>
        <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
          {currentAlert.text}
        </p>
        <div className="flex justify-around pt-8">
          <GenericButton>Llamar</GenericButton>
          <GenericButton>Ir al chat</GenericButton>
        </div>
      </div>
      <div
        className="bg-white flex-1 h-full w-full"
        onClick={() => setShowAlert(false)}
      ></div>
    </div>
  );
};
