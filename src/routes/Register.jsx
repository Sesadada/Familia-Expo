import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/familia");
  };
  /*
  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });
    await router.push('/signIn/clientSignIn');
  };
onSubmit={submit}

*/
  return (
    <div className=" desktop w-full h-screen relative bg-blue-100 flex flex-col p-8 items-center justify-center">
      <h3 className="text-xl text-blue-400 p-8">Register</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="px-6 py-2 rounded-md m-2"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="px-6 py-2 rounded-md m-2"
          required
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Telephone"
          className="px-6 py-2 rounded-md m-2"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
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
      <Link to="/">
        <AiOutlineArrowLeft className="cursor-pointer mt-4" />
      </Link>
    </div>
  );
};

export default Register;
