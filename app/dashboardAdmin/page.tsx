// app/dashboardAdmin/page.tsx
import DashboardHeader from "@/components/DashboardHeader";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardAdmin() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    select: { role: true },
  });

  if (user?.role !== "ADMIN") {
    redirect("/403");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <DashboardHeader />
      <main className="max-w-6xl mx-auto p-8 space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-violet-400">
            Tableau de bord Administrateur
          </h2>
          <p className="text-gray-400">
            Supervisez toutes les activités, gérez les utilisateurs, les rôles
            et les paramètres globaux de la plateforme.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-violet-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-violet-300">
              Gestion des utilisateurs
            </h3>
            <p className="text-sm text-gray-400">
              Modifier les rôles, supprimer ou activer les comptes Clerk.
            </p>
          </div>

          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-violet-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-violet-300">
              Paramètres système
            </h3>
            <p className="text-sm text-gray-400">
              Gérer les paramètres de l’application et les autorisations.
            </p>
          </div>

          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-violet-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-violet-300">
              Statistiques globales
            </h3>
            <p className="text-sm text-gray-400">
              Analyse complète de la charge, des interventions et des agences.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
