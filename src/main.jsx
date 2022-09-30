import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Alerts from "./routes/Alerts";
import Profesional from "./routes/Profesional";
import Register from "./routes/Register";
import User from "./routes/User";
import Welcome from "./routes/Welcome";
import Familia from "./routes/Familia";
import Intro from "./routes/Intro";
import { RecoilRoot } from "recoil";
import GenericButton from "./components/buttons/genericButton";
import Servicio from "./routes/Servicio";
import ServicioExtra from "./routes/ServicioExtra";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<App />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/familia" element={<Familia />} />
            <Route path="/profesional" element={<Profesional />} />
            <Route path="/serviciosExtra/:id" element={<ServicioExtra />} />
            <Route path="/servicios/:id" element={<Servicio />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/user" element={<User />} />
            <Route
              path="*"
              element={
                <main className="flex flex-col justify-center items-center m-auto h-full">
                  <p className="p-4">There's nothing here!</p>
                  <Link to="/dashboard">
                    <GenericButton>Back Home!</GenericButton>
                  </Link>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
