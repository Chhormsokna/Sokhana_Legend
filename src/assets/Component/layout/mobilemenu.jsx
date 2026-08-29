import { X, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function MobileMenu({ links = [], isOpen = false, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <nav className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-white/10 bg-zinc-950 p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="self-end rounded-lg p-2 transition hover:bg-white/10"
        >
          <X size={22} />
        </button>

        <div className="mt-4 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
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
        </div>

        <Link
          to="/login"
          onClick={onClose}
          className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold"
        >
          <User size={18} />
          Login
        </Link>
      </nav>
    </div>
  );
}

export default MobileMenu;
