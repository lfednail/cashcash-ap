import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navigation from "@/components/navigation/Nav";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "CasCash ap - Interventions",
  description: "Application web de gestion des interventions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground">
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
