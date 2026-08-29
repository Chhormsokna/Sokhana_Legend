import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AVATARS_KEY = "legend_avatars";

function readAvatars() {
  try {
    return (
      JSON.parse(localStorage.getItem(AVATARS_KEY)) ||
      {}
    );
  } catch {
    return {};
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("legend_user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Please enter email and password.",
      };
    }

    const avatars = readAvatars();

    const loggedUser = {
      id: 1,
      name: "Legend Customer",
      email,
      phone: "",
      avatar: avatars[email] || null,
    };

    setUser(loggedUser);

    localStorage.setItem(
      "legend_user",
      JSON.stringify(loggedUser)
    );

    return {
      success: true,
      message: "Login successful.",
    };
  };

  const register = (userData) => {
    const avatars = readAvatars();

    const newUser = {
      id: Date.now(),
      avatar: avatars[userData.email] || null,
      ...userData,
    };

    setUser(newUser);

    localStorage.setItem(
      "legend_user",
      JSON.stringify(newUser)
    );

    return {
      success: true,
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
        localStorage.setItem(
          "legend_user",
          JSON.stringify(updated)
        );
      } catch {
        // storage full - keep the in-memory user
      }

      if (previous?.email && updates.avatar) {
        const avatars = readAvatars();
        avatars[previous.email] = updates.avatar;

        try {
          localStorage.setItem(
            AVATARS_KEY,
            JSON.stringify(avatars)
          );
        } catch {
          // storage full - avatar kept in memory only
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