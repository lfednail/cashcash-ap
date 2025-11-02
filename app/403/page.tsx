// app/403/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function ForbiddenPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100">
      <div className="text-center space-y-6 p-8 rounded-2xl border border-gray-800 bg-gray-900/70 shadow-lg backdrop-blur-sm">
        <ShieldAlert className="h-16 w-16 text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold text-red-400">Accès refusé</h1>
        <p className="text-gray-400">
          Vous n’avez pas les droits nécessaires pour accéder à cette page.
        </p>
        <Button
          variant="outline"
          onClick={() => router.push("/")}
          className="border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Retour à l’accueil
        </Button>
      </div>
    </div>
  );
}
