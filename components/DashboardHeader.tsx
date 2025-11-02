// app/components/DashboardHeader.tsx
"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="flex justify-between items-center bg-gray-900/80 backdrop-blur-md border-b border-gray-700 p-4 rounded-b-xl">
      <h1 className="text-xl font-semibold text-white tracking-wide">
        {user?.fullName ? `Bienvenue, ${user.fullName}` : "Tableau de bord"}
      </h1>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => router.push("/")}
          className="border-gray-600 text-gray-200 hover:bg-gray-700"
        >
          Retour à l’accueil
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
