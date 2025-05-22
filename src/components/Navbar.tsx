
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              IPO Tracker
            </span>
          </Link>
          
          <div className="hidden md:flex ml-8 space-x-6">
            <Link 
              href="/" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            <Link 
              href="/ipos" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/ipos') || pathname.startsWith('/ipos/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              IPO Listings
            </Link>
            {isAdmin && (
              <Link 
                href="/admin" 
                className={`text-sm transition-colors hover:text-primary ${isActive('/admin') || pathname.startsWith('/admin/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm font-medium">{user.name}</span>
              <button 
                onClick={logout}
                className="px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="hidden md:flex px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          )}
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none" 
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background animate-in slide-in-from-top">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/ipos" 
              className={`text-sm ${isActive('/ipos') || pathname.startsWith('/ipos/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              IPO Listings
            </Link>
            {isAdmin && (
              <Link 
                href="/admin" 
                className={`text-sm ${isActive('/admin') || pathname.startsWith('/admin/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            
            {user ? (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <span className="text-sm text-muted-foreground">Signed in as {user.name}</span>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors w-full text-left"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login"
                className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-full text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
