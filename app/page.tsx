"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { SignInButton } from "@clerk/nextjs";
import { ShieldCheck, Wrench, Users, Lock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-10 md:py-24 flex flex-col items-center text-center grow">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Gestion des interventions{" "}
            <span className="text-emerald-400">optimisée</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            Une solution centralisée pour les techniciens et les gestionnaires.
            Suivi en temps réel, planification intelligente et sécurité
            maximale.
          </p>
        </div>

        {/* Cartes de rôle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {/* Espace Technicien */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <div>
                <Wrench className="h-10 w-10 text-amber-400" />
              </div>
              <CardTitle className="text-xl">Espace Technicien</CardTitle>
              <CardDescription className="text-gray-400 text-sm">
                Consultez vos interventions, gérez les clients, générez les
                rapports et validez vos missions en un clic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignInButton mode="redirect" redirectUrl="/after-login">
                <Button
                  variant="outline"
                  className="w-full border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                >
                  Se connecter en tant que technicien
                </Button>
              </SignInButton>
            </CardContent>
          </Card>

          {/* Espace Gestionnaire */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <div>
                <Users className="h-10 w-10 text-emerald-400" />
              </div>
              <CardTitle className="text-xl">Espace Gestionnaire</CardTitle>
              <CardDescription className="text-gray-400 text-sm">
                Affectez les interventions, suivez les performances, gérez les
                équipes et les agences avec une vue d’ensemble.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignInButton mode="redirect" redirectUrl="/after-login">
                <Button
                  variant="outline"
                  className="w-full border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                >
                  Se connecter en tant que gestionnaire
                </Button>
              </SignInButton>
            </CardContent>
          </Card>
        </div>

        {/* Call-to-Action centrale */}
        <div className="mt-16">
          <p className="text-foreground mb-6">
            Accédez à votre espace sécurisé
          </p>
          <Button
            asChild
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 px-8 py-6"
          >
            <Link href="/sign-in">
              <Lock className="mr-2 h-5 w-5" />
              Connexion sécurisée
            </Link>
          </Button>
        </div>
      </main>

      {/* Section Valeurs */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Carte 1 */}
            <Card className="bg-gray-900/40 border-gray-800 hover:bg-gray-900/60 transition-all duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                <ShieldCheck className="h-8 w-8 text-violet-400" />
                <CardTitle className="text-lg">Sécurité & Conformité</CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  Authentification multi-facteurs, hachage des mots de passe, et
                  conformité aux normes de sécurité.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Carte 2 */}
            <Card className="bg-gray-900/40 border-gray-800 hover:bg-gray-900/60 transition-all duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                <Wrench className="h-8 w-8 text-amber-400" />
                <CardTitle className="text-lg">Réactivité Technique</CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  Outils de diagnostic, planification intelligente et support
                  local via nos 57 agences.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Carte 3 */}
            <Card className="bg-gray-900/40 border-gray-800 hover:bg-gray-900/60 transition-all duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                <Users className="h-8 w-8 text-emerald-400" />
                <CardTitle className="text-lg">
                  Collaboration Optimisée
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  Interface claire pour techniciens et gestionnaires, avec une
                  synchronisation temps réel.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} CASHCASH – Application de gestion des
          interventions
        </p>
        <p className="mt-2">Développé selon les standards VDEV – Jalon 2</p>
      </footer>
    </div>
  );
}
