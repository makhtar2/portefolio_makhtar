# 🛡️ Configuration Sécurisée Supabase - AlmuxtaarDev

Ce guide explique comment configurer votre base de données Supabase pour que vos projets et posts LinkedIn soient affichés publiquement, tout en protégeant l'accès en écriture (seul vous pourrez modifier les données via l'interface admin).

## 1. Création des Tables (SQL)

Copiez et collez ce script dans l'**Editeur SQL** de votre tableau de bord Supabase :

```sql
-- ==========================================
-- 1. TABLE DES POSTS LINKEDIN
-- ==========================================
create table public.linkedin_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text,
  url text not null,
  image_url text,
  published_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

-- ==========================================
-- 2. TABLE DES PROJETS
-- ==========================================
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  image_url text,
  category text check (category in ('web', 'design', 'maintenance')),
  site_url text,
  tech_stack text[],
  created_at timestamp with time zone default now()
);

-- Activer Row Level Security (RLS) sur les tables
alter table public.linkedin_posts enable row level security;
alter table public.projects enable row level security;
```

## 2. Configuration de la Sécurité (RLS Policies)

Pour que tout le monde puisse **voir** vos contenus mais que **personne** ne puisse les modifier sans autorisation, exécutez ces scripts :

```sql
-- Politiques pour LINKEDIN_POSTS
create policy "Tout le monde peut lire les posts" 
on public.linkedin_posts for select 
using (true);

create policy "Seul l'admin peut modifier les posts" 
on public.linkedin_posts for all 
to authenticated 
using (true);

-- Politiques pour PROJECTS
create policy "Tout le monde peut lire les projets" 
on public.projects for select 
using (true);

create policy "Seul l'admin peut modifier les projets" 
on public.projects for all 
to authenticated 
using (true);
```

## 3. Variables d'Environnement (.env)

Assurez-vous que votre fichier `.env` à la racine du projet contient vos clés (récupérables dans Settings > API sur Supabase) :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anonyme
```

## 4. Authentification Admin

Pour accéder à la partie admin en toute sécurité :
1. Allez dans **Authentication** sur Supabase.
2. Créez-vous un compte utilisateur (votre email).
3. Une fois connecté sur votre site, Supabase reconnaîtra votre session et vous permettra d'ajouter/supprimer des éléments grâce aux politiques `to authenticated` définies plus haut.

---
*Note: Si vous n'êtes pas connecté, les formulaires de l'admin ne fonctionneront pas (erreur de permission de la part de Supabase).*
