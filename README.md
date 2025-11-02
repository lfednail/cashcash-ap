```sh
# CashCash Ap

**Description :**  
Ce projet est une application web de gestion des interventions multi-rôles (Gestionnaire / Technicien) développée avec **Next.js**, **Tailwind CSS**, **Shadcn/UI**, **Clerk** pour l’authentification, et **Prisma** pour la gestion de la base de données et MySQL pour ma basse de données.  

L’application permet :  
- Gestion d'interventions en fonction de l’utilisateurs qui a rôles spécifiques.  
- Accès sécurisé aux dashboards selon le rôle grace à Clerk qui gerer l'authentification.  
- Gestion des données via Prisma et MySQL/PostgreSQL.
- UI responsive et profestionnelle avec **Tailwind css** et **Shadcn/UI**

---

## Table des Matières

1. [Technologies](#technologies)  
2. [Installation](#installation)  
3. [Configuration](#configuration)  
4. [Structure du projet](#structure-du-projet)  
5. [Authentification et sécurité](#authentification-et-sécurité)  
6. [Scripts disponibles](#scripts-disponibles)  
7. [Déploiement](#déploiement)  
8. [Contribution](#contribution)  
9. [Licence](#licence)  

---

## Technologies

- **Framework** : Next.js 14  
- **UI** : Tailwind CSS, Shadcn/UI  
- **Authentification** : Clerk (email/password, social login)  
- **Base de données** : Prisma ORM + MySQL / PostgreSQL  
- **Icones** : Lucide-react  
- **Outils** : TypeScript, ESLint, Prettier  

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=flat-square&logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-Auth-green?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?style=flat-square&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
---

## 📸 Aperçu

![Page d'accueil](./public/screenshots/home.png)  
*Page d'accueil moderne et responsive*  

![Dashboard Gestionnaire](./public/screenshots/dashboard-gestionnaire.png)  
*Dashboard du gestionnaire avec création et gestion des techniciens*

![Dashboard Technicien](./public/screenshots/dashboard-technicien.png)  
*Dashboard du technicien pour suivi des tâches et interventions*


## Installation

1. Cloner le dépôt :  
```bash
git clone https://github.com/votre-utilisateur/votre-projet.git
cd votre-projet

```
