import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import {
  Menu,
  Search,
  User,
  X,
} from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Cinemas", path: "/cinemas" },
    { name: "Showtimes", path: "/showtimes" },
    { name: "Promotions", path: "/promotions" },
    { name: "Food & Drinks", path: "/food" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="container-cinema">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cinema-600 font-black">
              K
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-wide">
              KON KHMER
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-400">
             LEGEND
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-cinema-500"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {user ? (
              <Link
                to="/profile"
                title={user.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold transition hover:bg-white/10"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cinema-600 text-xs font-black">
                    {user.name
                      ?.charAt(0)
                      .toUpperCase()}
                  </span>
                )}
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                <User size={17} />
                Login
              </Link>
            )}
          </div>

          {/* Mobile button */}
          <button
            className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-cinema-600 text-white"
                        : "text-gray-300 hover:bg-white/10"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {user ? (
                <Link
                  to="/profile"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt=""
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  ) : (
                    <User size={18} />
                  )}
                  My Profile
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold"
                >
                  <User size={18} />
                  Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;