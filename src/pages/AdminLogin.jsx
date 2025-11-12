import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../utils/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginAdmin(email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials or account not found");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-8 rounded-xl shadow-xl w-80"
      >
        <h1 className="text-2xl font-bold text-[#FFD93B] mb-6 text-center">
          Admin Login
        </h1>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FFD93B] text-zinc-900 font-bold py-2 rounded hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
