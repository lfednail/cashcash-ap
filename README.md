```sh
# CashCash Ap

**Description :**  
Ce projet est une application web de gestion des interventions multi-rôles (Gestionnaire / Technicien) développée avec **Next.js**, **Tailwind CSS**, **Shadcn/UI**, **Clerk** pour l’authentification, et **Prisma** pour la gestion de la base de données et MySQL pour ma basse de données.  

L’application permet :  
- Gestion d'interventions en fonction de l’utilisateurs qui a rôles spécifiques.  
- Accès sécurisé aux dashboards selon le rôle grace à Clerk qui gerer l'authentification.  
<<<<<<< HEAD
- Gestion des données via **Prisma** et **MySQL**.
- UI responsive et professionnelle avec **Tailwind CSS** et **Shadcn/UI**

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=flat-square&logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-Auth-green?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?style=flat-square&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

  

- Authentification sécurisée via **Clerk**  
- Dashboards distincts selon les rôles  
- Gestion de la base de données avec **Prisma**  
- UI responsive et professionnelle avec **Tailwind CSS** et **Shadcn/UI**
=======
- Gestion des données via Prisma et MySQL/PostgreSQL.
- UI responsive et profestionnelle avec **Tailwind css** et **Shadcn/UI**
>>>>>>> 49c9c9f53923a45efb9a46b357831ca53b8ae0ec

---

## 📸 Aperçu

![Page d'accueil](./public/screenshots/home.png)  
*Page d'accueil moderne et responsive*  

![Dashboard Gestionnaire](./public/screenshots/dashboard-gestionnaire.png)  
*Dashboard du gestionnaire avec création et gestion des techniciens*

![Dashboard Technicien](./public/screenshots/dashboard-technicien.png)  
*Dashboard du technicien pour suivi des tâches et interventions*

---

## 🚀 Technologies

- **Framework** : Next.js 14  
- **UI** : Tailwind CSS + Shadcn/UI  
- **Authentification** : Clerk  
- **Base de données** : Prisma + MySQL/PostgreSQL  
- **Langage** : TypeScript  
- **Icones** : Lucide-react  
- **Outils** : ESLint, Prettier  

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=flat-square&logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-Auth-green?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?style=flat-square&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
---

<<<<<<< HEAD
## ⚡ Installation
=======
## 📸 Aperçu

![Page d'accueil](./public/screenshots/home.png)  
*Page d'accueil moderne et responsive*  

![Dashboard Gestionnaire](./public/screenshots/dashboard-gestionnaire.png)  
*Dashboard du gestionnaire avec création et gestion des techniciens*

![Dashboard Technicien](./public/screenshots/dashboard-technicien.png)  
*Dashboard du technicien pour suivi des tâches et interventions*


## Installation
>>>>>>> 49c9c9f53923a45efb9a46b357831ca53b8ae0ec

```sh
1. Cloner le dépôt :  
```bash
git clone https://github.com/sukig.dew/cashcach-ap.git
cd cashcash-ap
```

## 2. Installer les dépendances :

```sh
npm install
# ou
yarn install

```

## 3. Configurer l’environnement :
Créer un fichier .env :

```sh
DATABASE_URL="mysql://user:password@localhost:3306/nom_database"
CLERK_FRONTEND_API="<votre_clerk_frontend_api>"
CLERK_API_KEY="<votre_clerk_api_key>"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

```

## 4. Initialiser Prisma :

```sh
npx prisma generate
npx prisma migrate dev --name init

```
