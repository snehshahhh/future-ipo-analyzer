
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="hidden md:flex">
              <span className="text-xl font-bold bg-gradient-to-r from-ipo-blue via-ipo-purple to-ipo-pink bg-clip-text text-transparent">
                IPO Tracker
              </span>
            </div>
            <div className="md:hidden">
              <span className="text-xl font-bold text-primary">IPO</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") && "text-primary font-semibold"
              )}
            >
              Home
            </Link>
            <Link
              to="/ipos"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/ipos") && "text-primary font-semibold"
              )}
            >
              IPO Listings
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/admin") && "text-primary font-semibold"
                )}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
        
        <div className="flex-1" />
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm">{user.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                Log out
              </Button>
            </div>
          ) : (
            <Button asChild variant="default" size="sm" className="hidden md:flex">
              <Link to="/login">Log in</Link>
            </Button>
          )}
          
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") && "text-primary font-semibold"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/ipos"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/ipos") && "text-primary font-semibold"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              IPO Listings
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/admin") && "text-primary font-semibold"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {user ? (
              <Button variant="outline" size="sm" onClick={logout}>
                Log out
              </Button>
            ) : (
              <Button asChild variant="default" size="sm">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
