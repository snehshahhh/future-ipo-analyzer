
import React, { createContext, useContext, useState } from "react";
import { User, UserRole } from "@/lib/types";
import { adminUser, currentUser } from "@/lib/data";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(currentUser);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === "admin@example.com" && password === "password") {
      setUser(adminUser);
      toast.success("Logged in as Admin");
      return true;
    } else if (email === "user@example.com" && password === "password") {
      setUser(currentUser);
      toast.success("Logged in as User");
      return true;
    }

    toast.error("Invalid credentials");
    return false;
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully");
  };

  // This is just for demo purposes to easily switch between roles
  const switchRole = () => {
    if (isAdmin) {
      setUser(currentUser);
      toast.success("Switched to User role");
    } else {
      setUser(adminUser);
      toast.success("Switched to Admin role");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        login,
        logout,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
