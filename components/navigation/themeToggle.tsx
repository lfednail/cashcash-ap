"use client";

import { useTheme } from "next-themes";
import { MoonStar, SunDim } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonStar className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunDim className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Basculer le thème</span>
    </Button>
  );
}
