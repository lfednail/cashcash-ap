"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/navigation/themeToggle";
import { UserMenu } from "@/components/navigation/userMenu";
//import { useRoles } from "@/hooks/useRoles";
import Image from "next/image";

const navItems = [{ href: "/", label: "" }];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  //const { roles } = useRoles();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-lg"
        >
          <Image src={""} alt="Logo CashCash ap" />
          <span className="text-blue-600">CashCash</span>
          <span className="text-emerald-600 dark:text-gray-100">Ap</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                pathname === item.href
                  ? "text-blue-600"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/*
          {roles.length > 0 && (
            <div className="hidden md:flex gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className={cn(
                    "text-xs font-semibold rounded-full px-3 py-1 shadow-sm border",
                    role === "technicien"
                      ? "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900 dark:text-blue-100"
                      : "bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900 dark:text-purple-100"
                  )}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              ))}
            </div>
          )}
          */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background px-6 py-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block text-sm font-medium py-1 transition-colors hover:text-blue-600",
                pathname === item.href
                  ? "text-blue-600"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          {/*
          {roles.length > 0 && (
            <div className="pt-3 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className={cn(
                    "text-xs font-semibold rounded-full px-3 py-1 border",
                    role === "technicien"
                      ? "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900 dark:text-blue-100"
                      : "bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900 dark:text-purple-100"
                  )}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              ))}
                
            </div>
          )}*/}
        </div>
      )}
    </header>
  );
}
