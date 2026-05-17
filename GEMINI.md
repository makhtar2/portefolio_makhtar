# 🏠 Makhtar Wade Portfolio - AI Project Guide (GEMINI.md)

Ce fichier est la référence absolue pour l'IA et les développeurs travaillant sur le Portfolio de Makhtar Wade.

## 🚀 État Actuel du Projet

Le projet est un portfolio premium pour Makhtar Wade, un Étudiant Entrepreneur, Développeur Full Stack et Designer.

### 🛠 Tech Stack
- **Framework :** Next.js 15+ (App Router)
- **Styling :** Tailwind CSS 4.0+ (Configuration via `@tailwindcss/postcss`)
- **Animations :** Framer Motion
- **Génération CV :** Outil intégré de génération de CV au format PDF via impression web (/cv).

### 🔑 Architecture
- **Routes Publiques :** `/` (Accueil), `/#work` (Projets), `/#about` (À propos), `/#contact` (Contact).
- **Design :** Style premium avec coins très arrondis (`rounded-3xl` ou `rounded-[2.5rem]`) et typographie forte (`font-black`).

## 🎨 Conventions UI/UX
- **Style Premium :** Utilisation intensive de `rounded-3xl` et de dégradés circulaires.
- **Typographie :** `font-black` pour les titres et éléments d'emphase.
- **Palette :** Or (`#d9a54e`) et Bronze (`#c2773a`) en dégradé circulaire pour les actions principales et les accents.

## 📂 Structure du Code
- `app/` : Routes et Server Actions.
- `components/` : UI réutilisable.
- `lib/` : Configuration (supabase, utils).
- `assets/` & `public/` : Ressources statiques (images de profil, captures de projets).

## 📝 Instructions de Continuité
1. **Validation :** Toujours tester les modifications et vérifier la console pour des erreurs de rendu.
2. **Surgical Edits :** Ne modifier que ce qui est nécessaire.
3. **Double Check :** Vérifier les imports (Next.js 15 utilise souvent des composants clients/serveurs spécifiques).
