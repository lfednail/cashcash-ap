// app/profil/incomplet/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ProfilIncompletPage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100">
      <div className="text-center space-y-6 p-8 rounded-2xl border border-gray-800 bg-gray-900/70 shadow-lg backdrop-blur-sm">
        <Loader2 className="h-10 w-10 animate-spin text-amber-400 mx-auto" />
        <h1 className="text-2xl font-semibold text-amber-300">
          Profil en cours de création
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Votre compte a bien été créé, mais votre profil n’a pas encore été
          synchronisé dans la base de données. Cela ne prend que quelques
          secondes.
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
