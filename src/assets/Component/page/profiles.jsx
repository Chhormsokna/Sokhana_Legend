import { Link, useNavigate } from "react-router-dom";
import {
  Camera,
  LogOut,
  User,
  Mail,
  Phone,
} from "lucide-react";

import { useAuth } from "../hooks/useAuth";

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const size = 256;
        const canvas =
          document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext("2d");
        const min = Math.min(
          image.width,
          image.height
        );

        context.drawImage(
          image,
          (image.width - min) / 2,
          (image.height - min) / 2,
          min,
          min,
          0,
          0,
          size,
          size
        );

        resolve(
          canvas.toDataURL("image/jpeg", 0.85)
        );
      };

      image.onerror = reject;
      image.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function Profile() {
  const navigate = useNavigate();
  const { user, logout, updateProfile } =
    useAuth();

  if (!user) {
    return (
      <div className="container-cinema py-24 text-center">
        <h1 className="text-3xl font-black">
          Please Login
        </h1>

        <Link
          to="/login"
          className="cinema-button mt-6"
        >
          Login
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAvatarChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5 MB.");
      return;
    }

    try {
      const avatar = await readImageFile(file);
      updateProfile({ avatar });
    } catch {
      alert(
        "Could not read that image. Please try another one."
      );
    }
  };

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-cinema-500">
          Account
        </p>

        <h1 className="mt-2 text-4xl font-black">
          My Profile
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-6 lg:col-span-2">
          <div className="flex items-center gap-5 border-b border-white/10 pb-6">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cinema-600 text-2xl font-black">
                  {user.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <label
                title="Update photo"
                className="absolute -bottom-1 -right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-gray-300 transition hover:bg-cinema-600 hover:text-white"
              >
                <Camera size={15} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>

            <div>
              <h2 className="text-xl font-bold">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">
                Legend Cinema Member
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-4">
              <User className="text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  Name
                </p>
                <p>{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  Email
                </p>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">
                  Phone
                </p>
                <p>
                  {user.phone || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/my-bookings"
            className="block rounded-xl border border-white/10 bg-zinc-900 p-5 font-semibold hover:bg-white/5"
          >
            🎟️ My Bookings
          </Link>

          {/* <Link
            to="/admin"
            className="block rounded-xl border border-cinema-500/30 bg-cinema-900/20 p-5 font-semibold text-cinema-400 hover:bg-cinema-900/40"
          >
            📊 Admin Dashboard
          </Link> */}

          <Link
            to="/movies"
            className="block rounded-xl border border-white/10 bg-zinc-900 p-5 font-semibold hover:bg-white/5"
          >
            🎬 Browse Movies
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-5 font-semibold text-red-400 hover:bg-red-500/10"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;