INSERT INTO public.projects (name, description, image_url, category, site_url, tech_stack)
VALUES 
('Sherifa Parfumerie', 'Maison de parfumerie de luxe sénégalaise spécialisée dans les fragrances exclusives et les huiles précieuses. Une expérience e-commerce fluide avec une direction artistique raffinée.', 'sherifa.png', 'web', 'https://www.sherifaparfumerie.com/', ARRAY['Next.js', 'React', 'Tailwind CSS', 'E-commerce']),
('Vote Numérique UCAK', 'Système sécurisé de gestion et d’automatisation des élections universitaires, garantissant l''intégrité et la transparence des scrutins.', 'placeholder-image.png', 'web', '#', ARRAY['Next.js', 'PostgreSQL', 'Cybersecurity']),
('Qurratul Ayni', 'Plateforme numérique pédagogique dédiée à la diffusion d''enseignements sacrés. Structure en chapitres pour une navigation intuitive et une étude approfondie.', 'qurratul.png', 'web', 'https://qurratul-ayni-2a8b.vercel.app/', ARRAY['Next.js', 'Framer Motion', 'Education']),
('Babos Photographie', 'Studio professionnel Thiessois proposant un système complet de réservation, une académie de formation et une boutique en ligne pour photographes.', 'babos.png', 'web', 'https://babos.vercel.app/', ARRAY['Next.js', 'Supabase', 'Booking System']),
('AgriChampion', 'Application de timing et scoring en temps réel pour les compétitions académiques agricoles entre l''ENSA et l''UCAK.', 'agrichampion.png', 'web', 'https://agrichampion.vercel.app/', ARRAY['React', 'Real-time', 'AgriTech']),
('Faaris Signature', 'Agence d''événementiel haut de gamme alliant élégance intemporelle et esprit de la Teranga sénégalaise. Portfolio immersif et luxueux.', 'faaris.png', 'web', 'https://faaris.vercel.app/', ARRAY['Next.js', 'Design Premium', 'Event']),
('PARAR Consulting', 'Cabinet d''ingénierie AgriTech spécialisé dans l''irrigation solaire et les aménagements hydro-agricoles au Sahel.', 'parar.png', 'web', 'https://parar.vercel.app/', ARRAY['Next.js', 'Corporate', 'Engineering']),
('Gestion Kurel', 'Outil d''administration pour les groupements communautaires, simplifiant la gestion des membres, des activités et de la coordination locale.', 'kurel.png', 'web', 'https://gestion-kurel.vercel.app/', ARRAY['React', 'Management Tool']),
('Service Agri - Identité Visuelle', 'Conception d''une charte graphique et de supports de communication pour le secteur agricole. Un design épuré alliant nature et innovation.', 'serviceagri.png', 'design', 'https://canva.link/2kqnxotkekxcqxl', ARRAY['Canva', 'Graphic Design', 'Agri-Branding']),
('Design Institutionnel - UCAK', 'Conception de supports de communication visuelle institutionnels. Un mélange de rigueur académique et de créativité moderne.', 'design-ucak.png', 'design', 'https://canva.link/dzjavtf39cmqd4h', ARRAY['Canva', 'Graphic Design', 'Branding']),
('GymScore', 'Application de suivi de performance physique permettant l''enregistrement précis et l''analyse des scores sportifs en temps réel.', 'gymscore.png', 'web', 'https://gymscore.vercel.app/', ARRAY['React Native Web', 'Fitness']);

-- Global Air SN (ajout manuel)
INSERT INTO public.projects (name, description, image_url, category, site_url, tech_stack)
VALUES (
  'Global Air SN',
  'Plateforme e-commerce de produits high-tech et électroniques au Sénégal. Un catalogue complet avec gestion des commandes, paiement intégré et une expérience shopping fluide et moderne.',
  'globalairsn.png',
  'web',
  'https://www.globalairsn.com/',
  ARRAY['Next.js', 'E-commerce', 'Tailwind CSS', 'Supabase']
);

-- ANSD (ajout manuel)
INSERT INTO public.projects (name, description, image_url, category, site_url, tech_stack)
VALUES (
  'ANSD - Reproduction',
  'Reproduction du site de l''Agence Nationale de la Statistique et de la Démographie (ANSD). Projet d''apprentissage en programmation web pour mon portfolio.',
  'ansd.png',
  'web',
  'https://ansdformakhtar.netlify.app/',
  ARRAY['HTML', 'CSS', 'JavaScript']
);

-- Al Karim Vision (ajout manuel)
INSERT INTO public.projects (name, description, image_url, category, site_url, tech_stack)
VALUES (
  'Al Karim Vision',
  'Boutique en ligne de prestige spécialisée dans les lunettes de vue et de soleil, montres et parfums de marque à Touba. Une expérience e-commerce raffinée avec navigation par catégories, mode sombre et panier intégré.',
  'alkarimvision.png',
  'web',
  'https://www.alkarimvision.com/',
  ARRAY['Next.js', 'React', 'E-commerce', 'Tailwind CSS']
);
