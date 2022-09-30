import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className="flex flex-col w-screen h-screen justify-between overflow-y-hidden desktop"
    >
      <Header />
      <div className="overflow-y-auto h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
