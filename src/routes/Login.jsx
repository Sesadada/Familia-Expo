import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("submit!");
    navigate("/familia");
  };

  return (
    <div className="w-full h-screen relative bg-blue-100 flex flex-col p-8 items-center justify-around desktop">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl text-blue-400 p-8">Sign In</h3>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            className="px-6 py-2 rounded-md m-2"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="px-6 py-2 rounded-md m-2"
            required
          />

          <button
            className="px-6 py-2 bg-blue-300 rounded-full text-white shadow-xl mt-8"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <Link to="/">
        <AiOutlineArrowLeft className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Login;

/*
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <h2 className="font-bold text-2xl text-pink-400 pb-4">Login</h2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center">
            <label className="w-20 text-left">Email:</label>
            <input
              type="text"
              className="bg-slate-100 rounded-md py-1 px-2 m-2"
            ></input>
          </div>

          <div className="flex items-center">
            <label className="w-20">Password:</label>
            <input
              type="password"
              className="bg-slate-100 rounded-md py-1 px-2 m-2"
            ></input>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <button
              className="rounded-full bg-pink-400 mt-4 py-2 px-6 text-white"
              type="submit"
            >
              Login
            </button>
          )}
        </div>
      </form>
    </main>

*/
