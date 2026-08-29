import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.password !==
      form.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    register({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    navigate("/profile");
  };

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-7">
        <h1 className="text-2xl font-black">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Join Legend Cinema today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-4"
        >
          {[
            ["name", "Full Name", "text"],
            ["email", "Email", "email"],
            ["phone", "Phone", "tel"],
            ["password", "Password", "password"],
            [
              "confirmPassword",
              "Confirm Password",
              "password",
            ],
          ].map(([name, label, type]) => (
            <div key={name}>
              <label className="mb-2 block text-sm font-semibold">
                {label}
              </label>

              <input
                name={name}
                type={type}
                required
                value={form[name]}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500"
              />
            </div>
          ))}

          <button className="w-full rounded-lg bg-cinema-600 py-3 font-semibold hover:bg-cinema-700">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cinema-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
