// app/dashboardGestionnaire/page.tsx
import DashboardHeader from "@/components/DashboardHeader";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardGestionnaire() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    select: { role: true, name: true },
  });

  if (user?.role !== "GESTIONNAIRE" && user?.role !== "ADMIN") {
    redirect("/403");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <DashboardHeader />
      <main className="max-w-6xl mx-auto p-8 space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-emerald-400">
            Tableau de bord Gestionnaire
          </h2>
          <p className="text-gray-400">
            Vous pouvez gérer les interventions, affecter les techniciens et
            consulter les performances de vos équipes.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 shadow-md hover:shadow-emerald-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-emerald-300">
              Affecter une intervention
            </h3>
            <p className="text-sm text-gray-400">
              Attribuez une intervention à un technicien selon sa disponibilité.
            </p>
          </div>

          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-emerald-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-emerald-300">
              Voir les statistiques
            </h3>
            <p className="text-sm text-gray-400">
              Suivez les performances des techniciens et les délais moyens
              d’intervention.
            </p>
          </div>

          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-emerald-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-emerald-300">
              Gérer les agences
            </h3>
            <p className="text-sm text-gray-400">
              Ajoutez, modifiez ou supprimez les agences et affectez des
              techniciens.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
