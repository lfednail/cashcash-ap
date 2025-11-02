// app/after-login/route.ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function GET() {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  // Cherche l'utilisateur synchronisé dans Prisma
  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
    select: { role: true },
  });

  if (!user) {
    // profil pas encore créé en DB (webhook pas encore passé)
    redirect("/profil/incomplet");
  }

  // Redirige selon le rôle
  switch (user?.role) {
    case "GESTIONNAIRE":
      redirect("/dashboardGestionnaire");
      break;
    case "TECHNICIEN":
      redirect("/dashboardTechnicien");
      break;
    case "ADMIN":
      redirect("/dashboardAdmin");
      break;
    default:
      redirect("/dashboardTechnicien");
  }
}
