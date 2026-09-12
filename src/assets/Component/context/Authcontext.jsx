import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AVATARS_KEY = "legend_avatars";

function readAvatars() {
  try {
    return JSON.parse(localStorage.getItem(AVATARS_KEY)) || {};
  } catch {
    return {};
  }
}

function determineRole(email) {
  if (!email) return "customer";
  const normalized = email.trim().toLowerCase();
  // If email contains "admin" (e.g. admin@legend.com, admin@cinema.com), assign admin role
  if (normalized.includes("admin") || normalized.startsWith("manager")) {
    return "admin";
  }
  return "customer";
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("legend_user");
    if (!savedUser) return null;
    try {
      const parsed = JSON.parse(savedUser);
      // Ensure role exists on stored user
      if (!parsed.role) {
        parsed.role = determineRole(parsed.email);
      }
      return parsed;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Please enter email and password.",
      };
    }

    const avatars = readAvatars();
    const role = determineRole(email);

    const loggedUser = {
      id: Date.now(),
      name: role === "admin" ? "Cinema Administrator" : "Legend Customer",
      email,
      phone: "",
      role,
      avatar: avatars[email] || null,
    };

    setUser(loggedUser);

    localStorage.setItem("legend_user", JSON.stringify(loggedUser));

    return {
      success: true,
      role,
      message: "Login successful.",
    };
  };

  const register = (userData) => {
    const avatars = readAvatars();
    const role = userData.role || determineRole(userData.email);

    const newUser = {
      id: Date.now(),
      avatar: avatars[userData.email] || null,
      ...userData,
      role,
    };

    setUser(newUser);

    localStorage.setItem("legend_user", JSON.stringify(newUser));

    return {
      success: true,
      role,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("legend_user");
  };

  const updateProfile = (updates) => {
    setUser((previous) => {
      const updated = { ...previous, ...updates };

      try {
        localStorage.setItem("legend_user", JSON.stringify(updated));
      } catch {
        // storage full
      }

      if (previous?.email && updates.avatar) {
        const avatars = readAvatars();
        avatars[previous.email] = updates.avatar;

        try {
          localStorage.setItem(AVATARS_KEY, JSON.stringify(avatars));
        } catch {
          // storage full
        }
      }

      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isAdmin: user?.role === "admin",
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}