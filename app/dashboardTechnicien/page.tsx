// app/dashboardTechnicien/page.tsx
import DashboardHeader from "@/components/DashboardHeader";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardTechnicien() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    select: { role: true },
  });

  if (user?.role !== "TECHNICIEN" && user?.role !== "ADMIN") {
    redirect("/403");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <DashboardHeader />
      <main className="max-w-6xl mx-auto p-8 space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-amber-400">
            Espace Technicien
          </h2>
          <p className="text-gray-400">
            Consultez vos interventions, mettez à jour leur statut et saisissez
            vos rapports d’intervention.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-amber-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-amber-300">
              Mes interventions
            </h3>
            <p className="text-sm text-gray-400">
              Liste de vos interventions planifiées et en cours.
            </p>
          </div>

          <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700 hover:shadow-amber-600/20 transition-all">
            <h3 className="text-lg font-semibold mb-2 text-amber-300">
              Créer un rapport PDF
            </h3>
            <p className="text-sm text-gray-400">
              Générez automatiquement une fiche d’intervention au format PDF.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
