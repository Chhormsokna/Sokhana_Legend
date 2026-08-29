import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../context/Authcontext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(
      email,
      password
    );

    if (result.success) {
      navigate("/profile");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-7 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cinema-600 text-xl font-black">
            L
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to manage your bookings.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
            />
          </div>

          <button className="w-full rounded-lg bg-cinema-600 py-3 font-semibold hover:bg-cinema-700">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-cinema-500 hover:text-cinema-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;