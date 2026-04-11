# 🏰 Spécifications Techniques & Fonctionnelles : La Grande Vesvre

Ce document définit les exigences pour la création du site vitrine des chambres d'hôtes **La Grande Vesvre**. Le projet doit refléter l'aspect historique (ancienne ferme templière) tout en utilisant une interface moderne, prestigieux, charmant, professionnel, fluide, responsive(adaptable) et performante.

---

## 1. Stack Technique & Architecture
* **Framework :** Next.js 14+ (App Router).
* **Hébergement :** Vercel.
* **CMS Headless :** Sanity.io (Gestion sécurisée des textes, prix et photos).
* **Stylisation :** Tailwind CSS.
* **Animations :** Framer Motion (Transitions de pages et scroll) + Lenis Scroll (Smooth scroll).
* **Mails :** Intégration API (Resend ou EmailJS) pour le formulaire de contact.
* **Cartographie :** Leaflet (Composants React pour cartes OpenStreetMap).
* **Multilingue :** `next-intl` (Français 🇫🇷, Anglais 🇬🇧, Allemand 🇩🇪).

Petit recap:

## R. Architecture & Stack Technique (2026)

Le projet "La Grande Vesvre" repose sur une architecture **Headless**, séparant totalement la gestion des données (Back-end) de l'interface utilisateur (Front-end).

### 1. Synthèse des Technologies

| Composant | Technologie | Usage |
| :--- | :--- | :--- |
| **Langage** | **TypeScript** | Typage statique pour un code robuste et sans erreurs. |
| **Framework Front** | **Next.js (App Router)** | Rendu hybride (SSG/SSR) pour une vitesse de chargement éclair. |
| **Styling** | **Tailwind CSS** | Design utilitaire, responsive et haute performance. |
| **CMS Headless** | **Sanity.io** | Administration sur mesure pour les propriétaires. |
| **Hébergement** | **Vercel** | Déploiement continu lié au dépôt GitHub. |
| **Gestion de Version**| **GitHub** | Sauvegarde du code et gestion des branches. |

### 2. Écosystème de Services

* **Gestion des Médias :** Sanity Asset Pipeline (Optimisation automatique des images en WebP/AVIF).
* **Icônes :** **Lucide-React** (Bibliothèque d'icônes vectorielles légères).
* **Cartographie :** **Leaflet** (Alternative open-source légère à Google Maps).
* **Communication :** **EmailJS** ou **Resend** pour le routage des formulaires de contact.
* **Sécurité :** **Cloudflare Turnstile** (Protection anti-spam invisible).

### 3. Workflow de Déploiement

1.  **Développement :** Création de fonctionnalités sur des branches `feat/`.
2.  **Commit :** Suivi de la norme *Conventional Commits* (`feat:`, `fix:`, `docs:`).
3.  **Validation :** Pull Request sur GitHub.
4.  **Déploiement :** Fusion sur la branche `main` déclenchant un build automatique sur **Vercel**.
5.  **Direct-Update :** Toute modification de texte/photo dans **Sanity** est répercutée sur le site en temps réel via les *Webhooks* de Vercel (Revalidation on-demand).

### 4. Philosophie du Code

* **Mobile-First :** Le design est pensé d'abord pour les smartphones (clientèle touristique en déplacement).
* **Accessibilité (A11y) :** Respect des contrastes et sémantique HTML5 pour les lecteurs d'écran.
* **SEO Natif :** Génération automatique de métadonnées, sitemap.xml et balises OpenGraph pour le partage social.

---

## 2. Architecture des Composants (Qualité Exceptionnelle)
Le site doit être construit via des composants React réutilisables, typés et optimisés :
* **`HeroParallax` :** Composant gérant l'image fixe avec l'effet de recouvrement au scroll.
* **`RoomCard` :** Carte interactive affichant le prix, la galerie photo (Carousel) et les spécifications techniques de chaque chambre.
* **`ServiceIconGrid` :** Grille de pictogrammes modernes pour les équipements de l'établissement.
* **`NearbyPlaceCard` :** Composant pour les restaurants et lieux touristiques avec badges de distance et boutons d'itinéraire.
* **`LanguageSelector` :** Switcher flottant élégant utilisant les drapeaux.
* **`ContactForm` :** Formulaire avec validation client/serveur et feedback visuel "smooth".

---

## 3. Structure des Pages & Contenus

### 🏠 Accueil (Landing Page)
* **Effet Visuel :** Image de la ferme vue du ciel en `fixed`. Le contenu remonte sur l'image avec une ombre portée élégante.
* **Accroche :** "Ancienne ferme templière - Un séjour hors du temps".
* **Photo :** Photo à coté de chaque paragraphe, à gauche ou à droite alterné
### 📖 Histoire (La Commanderie)
* **L'Empreinte des Templiers (XIIe siècle) :** L'histoire de la Grande Vesvre puise ses racines dans l'épopée médiévale. Fondée en 1193, cette ancienne commanderie templière fut une pièce maîtresse du réseau de l'Ordre du Temple dans la région, rattachée à la commanderie de Saint-Marc. Témoin d'une époque où le Tonnerrois et la Champagne étaient des carrefours stratégiques, le site a traversé les siècles, changeant de visage au gré de l'Histoire.
* **Un Manoir Fortifié (XVIe - XVIIe siècles) :** Si l'âme des lieux est médiévale, l'architecture que vous découvrirez aujourd'hui nous conte l'élégance du XVIIe siècle. L'ancien manoir fortifié a conservé sa superbe : un grand corps de logis flanqué de deux tours carrées majestueuses, protégé par des douves. Le pont-levis d'antan a laissé place à un pont de pierre accueillant, mais le bâtiment garde ses secrets, notamment une charpente exceptionnelle dont les quelque 800 chevilles témoignent du savoir-faire des bâtisseurs d'autrefois.
* **La Renaissance :** Après avoir été une ferme, la Grande Vesvre a connu une véritable renaissance à partir de 1993. Grâce à des chantiers de restauration passionnés (notamment avec l'association Rempart), le site a été sauvé, consolidé et transformé en un lieu de vie et de création artistique.
* **Aujourd’hui :** Désormais, c'est une nouvelle page qui s'écrit, et nous vous invitons à en faire partie. Nous avons transformé ce lieu chargé de mémoire en chambres d'hôtes, avec une volonté simple : faire vivre et partager ce patrimoine exceptionnel. En séjournant à la Grande Vesvre, vous ne faites pas que dormir dans une chambre confortable ; vous plongez dans 800 ans d'histoire, profitez du calme des douves et contribuez à la pérennité de ce monument."Plongez dans 800 ans d'histoire, profitez du calme des douves."

### 🛌 Service : Chambres d'hôtes (Page Unique)
| Chambre | Tarif | Détails |
| :--- | :--- | :--- |
| **Triple avec douche** | 128€ | 26m², 1 lit simple & 1 lit double. Cuisine/SdB privatives, vue jardin, lave-vaisselle, machine à café. |
| **Triple avec baignoire** | 128€ | 29m², 1 lit simple & 1 grand lit double. Cuisine/SdB privatives, baignoire, vue jardin. |
| **Quadruple avec douche** | 146€ | 36m², 2 lits simples & 1 grand lit double. Cuisine/SdB privatives, vue cour intérieure. |

### 🧺 Service : Équipements de l'établissement
* **Bien-être :** Salle de bains privative, sèche-cheveux, serviettes fournies.
* **Cuisine :** Cuisine commune ultra-équipée (Four, Micro-ondes, Lave-vaisselle, Plaques, Machine à café, Grille-pain).
* **Extérieur :** Jardin, aire de pique-nique, mobilier extérieur, terrasse ensoleillée.
* **Services + :** Parking privé gratuit, Wi-Fi gratuit partout, chambres non-fumeurs, accueil vélo/randonnée.

### 👤 À Propos
* **Récit :**Une nouvelle vie pour la Grande Vesvre. Originaires de Sainte-Colombe-sur-Seine et parents de trois enfants, c’est en 2024 que Sylvie Guirado et son époux ont décidé d’écrire un nouveau chapitre de leur vie à la Grande Vesvre. Tombés sous le charme de cette ferme templière endormie, ils en font l'acquisition en septembre avec une ambition claire : redonner vie à ce patrimoine d'exception. Ce projet est né d'une envie profonde de retour à l'essentiel : se rapprocher de la nature, ralentir le rythme et créer un espace dédié au ressourcement. Après plusieurs mois de travaux intenses pour rénover et moderniser les lieux tout en respectant leur âme, ils ont ouvert leurs trois premières chambres d'hôtes en mai 2024. Aujourd'hui, leur mission est double : vous offrir une parenthèse de calme hors du temps, et poursuivre passionnément la restauration de ce lieu historique pour qu'il continue de traverser les siècles.
* **Mission :** Retour à l'essentiel, nature, et sauvegarde du patrimoine historique.
* **Média :** Intégration de l'article de presse et photo du couple d'hôtes.

### 📍 À Proximité (Menu Dropdown)

#### 🍽️ Restaurants
1.  **Le Magny** (Priorité).
2.  **L’Imprévu** (Laignes) : Cuisine traditionnelle. 🚗 5km (7 min).
3.  **Bistrot La Basse Cour** (Tanlay) : 🚗 19km (16 min).
4.  **L'Étape** (Châtillon) : Grillades, burgers, pizzas. 🚗 22km (21 min).
5.  **Autres :** Restaurant du port (Pizzeria), Les vieux volets (Tonnerre), Le mille pates (Châtillon).

#### 🏰 Patrimoine & Terroir
* **Châteaux :** Ancy-le-Franc (Renaissance), Tanlay (Canal et douves), Maulnes (Pentagonal).
* **Vignobles :** Épineuil (Rouges et rosés), Chablis (Blancs minéraux).
* **Cités :** Tonnerre (Fosse Dionne), Les Riceys (3 AOC, Rosé préféré de Louis XIV), Noyers-sur-Serein (Plus beaux villages de France), Châtillon-sur-Seine (Vase de Vix), Montbard (Abbaye de Fontenay - UNESCO).
* **Loisirs :** Parc de l'Auxois, MuséoParc Alésia (Venarey), Chat Ours.

### 📩 Contact & Footer
* **Footer Permanent :** Contact direct, liens réseaux sociaux, bouton de réservation Booking.
* **Formulaire :** Champs Nom, Email, Objet, Message avec envoi automatique aux propriétaires.

---

## 4. Performance & Administration
* **Responsive :** Design adaptatif fluide de l'iPhone SE au Desktop 4K.
* **SEO :** Optimisation des balises Meta, Alt images et structure Hn pour le référencement local.
* **Back-office :** Sanity Studio accessible aux parents pour modifier les tarifs, ajouter un restaurant ou changer une photo sans connaissances techniques.
* **Images :** Hébergement externe pour garantir une vitesse de chargement optimale (WebP).

## 5. Workflow GitHub & CI/CD
Le code source est versionné sur **GitHub**. L'intégration native avec **Vercel** permet un déploiement continu (CI/CD) :
* **Branche `main` :** C'est la branche de production. Chaque "Push" ou "Merge" sur cette branche déclenche automatiquement une mise à jour du site en ligne.
* **Branche `develop` :** Utilisée pour le développement des nouvelles fonctionnalités. Elle permet de prévisualiser les changements sur une URL temporaire fournie par Vercel avant de les valider.
* **Pull Requests :** Chaque modification doit passer par une PR pour être revue, garantissant que le code envoyé en production est stable et ne casse pas le responsive.
* **.gitignore : Attention a bien le faire, surtout .env* 

## 6. Gestion des Environnements (Dev vs Prod)
Pour séparer proprement le travail de développement de la version publique, deux environnements sont configurés :

### A. Environnement de Développement (`.env.local`)
Utilisé localement sur ton PC. Il permet de tester les fonctionnalités sans impacter les données réelles.
* **Variables :** Clés API de test (Sanity dataset "development", mode test de EmailJS).
* **Accès :** `http://localhost:3000`.

### B. Environnement de Production (`Vercel Dashboard`)
C'est l'environnement final accessible par les clients. 
* **Variables :** Les clés secrètes et variables d'environnement sont renseignées directement dans l'interface de Vercel (ne jamais les commiter dans GitHub !).
* **Données :** Connexion au dataset "production" de Sanity pour afficher les vrais tarifs et textes validés par tes parents.
* **Sécurité :** Utilisation de variables d'environnement préfixées `NEXT_PUBLIC_` uniquement pour les données devant être accessibles côté client.

---

## 7. Gestion des Médias & Assets (Sanity.io)
Le site utilise **Sanity.io** comme source de vérité pour tous les médias. Cela permet une mise à jour dynamique sans redéploiement du code.

### A. Schéma de la Galerie (`photoGallery`)
Toutes les images sont centralisées via un modèle de données structuré :
* **Champs :**
    * `title` : Nom interne (ex: "Vue drone façade").
    * `image` : Fichier binaire avec support du format WebP et métadonnées.
    * `category` : Système de tags (Chambres, Extérieur, Histoire, Restaurants).
    * `alt` : Texte descriptif pour l'accessibilité et le SEO.
* **Fonctionnalité Hotspot :** Activation du recadrage intelligent. L'utilisateur définit le point focal (ex: la tour carrée) pour garantir que le sujet reste visible quel que soit le format de l'écran (mobile/desktop).

### B. Optimisation des Images (Next.js + Sanity CDN)
Pour garantir un design exceptionnel sans sacrifier la vitesse (crucial pour le référencement) :
1.  **Génération d'URLs à la volée :** Le site ne télécharge pas l'image originale. Il demande au CDN de Sanity une version redimensionnée et compressée en temps réel.
2.  **Composant `next/image` :** Utilisation du composant natif de Next.js pour le *Lazy Loading* (l'image ne charge que lorsqu'elle arrive à l'écran) et le *Blur-up* (affichage d'un flou léger pendant le chargement).
3.  **Responsive Images :** Le code génère automatiquement un `srcset` pour envoyer une image de 400px à un téléphone et de 2000px à un écran 4K.

### C. Flux de travail (Workflow)
1.  **Upload :** Les propriétaires ajoutent les photos via le Studio (`localhost:3333` en dev, URL Vercel en prod).
2.  **Traitement :** Sanity extrait les palettes de couleurs dominantes de l'image (pourrait être utilisé pour adapter les couleurs du site dynamiquement).
3.  **Diffusion :** Le site Next.js récupère les images via une requête GROQ filtrée par catégorie.

### D. Modèle de Données : Chambres (`room`)
Chaque chambre propose deux options tarifaires distinctes pour offrir de la flexibilité aux clients :

* **Tarif 1 (Standard) :**
    * Prix fixe réduit.
    * Conditions : Non remboursable, paiement immédiat en ligne.
    * Inclus : Petit-déjeuner compris.
* **Tarif 2 (Flexible) :**
    * Prix supérieur.
    * Conditions : Annulation gratuite (jusqu'à J-2 avant l'arrivée), paiement sur place ou différé.
    * Inclus : Petit-déjeuner compris.

*Note technique : Le site affichera dynamiquement ces deux options dans la carte de chaque chambre avec les badges "Non remboursable" ou "Annulation gratuite".*

### E. Identité Visuelle par Chambre (Theming)
Le site utilise un système de "Theming" dynamique. Chaque chambre possède une identité propre qui modifie l'interface utilisateur (UI) :

* **Chambre Forêt (Vert) :** Ambiance nature, icônes boisées, tons émeraudes et terreux.
* **Chambre Bateau (Bleu) :** Ambiance évasion, tons bleus profonds, rappels maritimes.
* **Chambre Hirondelle (Rouge) :** Ambiance traditionnelle, tons rouges bordeaux et dorés.

**Impact technique :** La valeur du champ `colorTheme` injecte des classes CSS spécifiques dans les composants React, modifiant les boutons, les titres et les arrière-plans pour une immersion totale.

### F. Intégration Cartographique & Localisation
Le site propose une expérience interactive pour localiser les points d'intérêt autour de la Grande Vesvre.

* **Composant `InteractiveMap` :** * Utilisation de **React-Leaflet** ou **Google Maps React**.
    * Affichage d'un marqueur personnalisé (Icône de la ferme) pour le point de départ.
    * Affichage de marqueurs pour chaque restaurant sélectionné dans le CMS.
* **Composant `DistanceBadge` :** * Badge visuel calculant ou affichant dynamiquement la distance et le temps de trajet depuis la ferme.
* **Composant `DirectionsButton` :** * Un bouton "Itinéraire" qui ouvre automatiquement l'application de navigation du téléphone (Google Maps ou Apple Maps) avec les coordonnées du restaurant déjà remplies.

### G. Fiches Restaurants & Partenaires (Composants Avancés)

Le site propose un annuaire dynamique des restaurants partenaires. Chaque fiche est un composant React complexe regroupant les fonctionnalités suivantes :

* **Identité & Galerie :**
    * Système multi-images (Carrousel) pour présenter le cadre et les plats.
    * Badge "Hôtel + Restauration" (activable via CMS) pour identifier les établissements complets.
    * Distinction du style (Bistrot, Traditionnel, Pizzeria, etc.).

* **Localisation & Itinéraire (Composant Maps) :**
    * **Calcul de distance :** Affichage en KM et temps de trajet estimé depuis la Grande Vesvre.
    * **Interaction Maps :** Intégration de marqueurs sur une carte interactive (Leaflet) et bouton "Itinéraire" ouvrant nativement Google Maps/Apple Maps.

* **Disponibilité en Temps Réel (Smart Status) :**
    * **Logique d'ouverture :** Le site compare l'heure actuelle avec les données du CMS. 
    * **Gestion des flux :** Supporte le service continu (ex: 12h-22h) ou le service coupé (midi/soir).
    * **Badge Dynamique :** Affiche "Ouvert", "Fermé", ou "Ferme bientôt" selon la proximité de l'horaire de fin.

* **Composant Timeline Visuelle :**
    * Une barre de progression horizontale représentant les 24h d'une journée.
    * Les zones d'ouverture sont colorées selon le thème de la page.
    * Un curseur "Live" se déplace sur la timeline pour montrer visuellement la situation actuelle (ex: "On est en plein milieu du service de midi").

* **Actions & Contact :**
    * Bouton "Visiter le site web" (uniquement si renseigné, composant conditionnel).
    * Boutons d'appel (`tel:`) et d'email (`mailto:`) directs.
    
Chaque restaurant dispose d'une fiche enrichie avec les services disponibles :
* **Services disponibles :** Affichage d'icônes pour :
    * Repas sur place (Dine-in).
    * Vente à emporter (Takeaway).
    * Livraison (Delivery).
* **Smart Status :** Intégration de la Timeline d'ouverture dynamique (service continu ou coupé).

* **Indicateur de Budget :** * Système de notation par symboles (€, €€, €€€).
    * Permet au client de filtrer ou d'identifier rapidement le type d'établissement (économique vs gastronomique).

    
* **Badges :** Indicateur "Hôtel" et distance en KM.

### H. Patrimoine & Lieux Emblématiques (`attraction`)
Le site propose un guide touristique structuré par thématiques :
* **Filtrage par catégorie :** Châteaux, Vignobles, Cités Médiévales, Nature.
* **Composant `AttractionCard` :** * Galerie photo immersive.
    * Bouton "Visiter le site officiel" pour la préparation des visites.
    * Bouton "Itinéraire" lié à Google Maps.
* **Horaires de visite :** Affichage du statut d'ouverture en temps réel basé sur la même logique que les restaurants, permettant de savoir si le musée ou le château est actuellement ouvert au public.


### I. Preuve Sociale & Avis Clients
Le site intègre un système d'évaluation visuelle pour les restaurants et lieux de visite afin de renforcer la confiance des utilisateurs.

* **Composant `GoogleRating` :**
    * **Affichage des étoiles :** Système de 5 étoiles généré en SVG (étoiles pleines, demi-étoiles ou vides selon la note du CMS).
    * **Score numérique :** Affichage de la note précise (ex: 4.8/5).
    * **Compteur d'avis :** Affichage du nombre total de témoignages pour souligner la popularité du lieu.
* **Style visuel :** Utilisation du code couleur "Or Google" pour les étoiles afin d'être immédiatement reconnu par les visiteurs.

Pour tous ce qui est restaurant et lieu "a proximité", mettre une mini carte en composant, zoomé sur la régions avec une fleche indiquant ou ca se trouve, et rajouter si on clique dessus ca nous emmene sur maps.

### J. Storytelling & Page "À Propos"
Cette page est conçue pour humaniser l'établissement et valoriser le travail de restauration patrimoniale.

* **Contenu narratif (Portable Text) :**
    * Gestion de la mise en forme riche (paragraphes, citations, mises en gras).
    * Récit de l'acquisition (septembre 2024) et de l'ouverture (mai 2024).
* **Section Presse & Médias :**
    * Mise en avant de la légitimité via un article de journal local.
    * Composant interactif permettant de cliquer sur l'image de l'article pour ouvrir la source originale.
* **Composant `PhilosophyQuote` :**
    * Affichage d'une citation stylisée en milieu de page pour aérer la lecture, utilisant la police médiévale manuscrite.

    ### K. Contact, Réservations & Saisonnalité

Cette section est le point de conversion final du site. Elle doit inspirer confiance et faciliter la prise de contact.

* **Gestion de la Saison (Composant `SeasonCalendar`) :**
    * **Affichage Visuel :** Un calendrier indiquant les dates d'ouverture (ex: du 1er mai au 15 octobre). Composant react ou autre pour le calendrier, pour que ca soit propre. les dates ouvertes auront à patch de couleurs sobre différenciant l'ouverture et les jours ou on est hors saison donc fermé.
    * **Statut Dynamique :** Si la date actuelle est hors saison, le site affiche un message informatif : "Nous préparons la saison prochaine, réouverture le [Date]".
    * **Disponibilité :** Lien direct vers Booking pour vérifier les disponibilités réelles en temps réel.

* **Formulaire de Contact "Direct Propriétaire" :**
    * **Composants du formulaire :** * Champ Nom / Prénom.
        * Champ Email (avec validation de format).
        * Sélecteur d'objet (Renseignement, Réservation groupe, Autre).
        * Zone de texte pour le message.
    * **Technologie d'envoi :** Intégration de **EmailJS** ou **Resend** pour un envoi sans serveur intermédiaire. Le mail arrive instantanément sur la boîte mail de Sylvie Guirado.
    * **Feedback Utilisateur :** Animation de chargement lors de l'envoi et message de succès "smooth" après expédition.

* **Coordonnées & Accessibilité :**
    * **Click-to-Call :** Le numéro de téléphone déclenche l'appel directement sur mobile.
    * **Localisation :** Intégration d'une carte Leaflet centrée sur la Grande Vesvre avec un marqueur personnalisé.
    * **Photo d'accueil :** Portrait des hôtes pour humaniser la demande de contact.

    * **Preuve Sociale Globale (Trust Signals) :**
    * Le score global (ex: 4.9/5) et le nombre d'avis sont récupérés depuis le CMS.
    * Affichage stratégique dans le `Header` (en haut) et le `Footer` (en bas) pour maximiser la confiance dès l'arrivée sur le site.
* **Politique d'Accueil (Check-in / Check-out) :**
    * Affichage clair des horaires d'arrivée et de départ.
    * Intégration dans le composant de réservation pour éviter toute confusion lors de l'organisation du voyage.

    ### L. Points Forts Dynamiques (Amenities)
Au-delà des services standards, l'établissement peut mettre en avant ses atouts spécifiques via un système de "Badges Iconographiques".

* **Composant `FeatureIcon` :** * Duo **Icône + Texte** aligné horizontalement.
    * Utilisation de la bibliothèque **Lucide-React** pour garantir des icônes épurées et modernes, avec un thème commun.
    * **Gestion CMS :** Possibilité d'ajouter à l'infini de nouveaux points forts (ex: "Douche pluie", "Espace énorme", "Calme extrême").

### M. Système de Témoignages (Preuve Sociale)
Intégration d'un module d'avis calqué sur les standards de Booking.com pour une transparence totale.

* **Fiche Témoignage (Composant `ReviewCard`) :**
    * **Header :** Identité du client, drapeau du pays, date du séjour et note sur 10 (badge bleu distinctif).
    * **Contenu :** Titre en gras suivi des deux blocs de texte obligatoires.
    * **Structure "Pros/Cons" :** * Bloc Vert (Icône `Smile`) : Ce que le client a aimé (ex: "Douche pluie géniale", "Confort et modernité").
        * Bloc Noir (Icône `Frown`) : Remarques constructives ou changements (ex: "Animaux non tolérés").
    * **Attention, pas toujours tout les element, car cela rassemble les avis de plusieurs plateforme (par exemple pas toujours de pros/cons) 
* **Affichage :** Carousel interactif sur la page d'accueil et section dédiée en bas de page "Chambres".

* **Contextualisation de l'avis :**
    * **Lien Chambre :** Chaque avis est rattaché à une chambre spécifique via une référence croisée dans le CMS.
    * **Affichage ciblé :** Possibilité d'afficher les avis "spécialisés" directement sur la page de la chambre concernée (ex: sur la page de la Chambre Forêt, on affiche en priorité les avis des clients ayant séjourné dans cette chambre).

* **Segmentation des Avis (Metadata) :**
    * **Durée du séjour :** Affichage du nombre de nuits pour donner du contexte à l'expérience (ex: "Séjour de 3 nuits").
    * **Profil Voyageur :** Badge indiquant le type de groupe (Couple, Famille, Amis, Solo). 
    * **Objectif :** Permettre aux prospects de s'identifier au profil du rédacteur (ex: une famille cherchera en priorité les avis "En famille").

* ** Il faudra trouvé un moyen d'affiché les avis de manières modern, avec un "affiché plus" s'il y en a trop et des pagination sur un container.

### N. Soumission d'Avis & Flux de Modération
Afin de dynamiser la preuve sociale sans intervention manuelle constante, le site propose un système de récolte d'avis en libre-service.

* **Le Formulaire de Dépôt (`SubmitReviewForm`) :**
    * Accessible via un bouton "Laisser un avis" sur la page de l'établissement ou après un séjour.
    * Champs : Nom, Pays, Type de voyageur, Note (slider de 1 à 10), Points positifs/négatifs.
    * Sécurisation par **hCaptcha** ou **Cloudflare Turnstile** pour bloquer les robots.

* **Flux Technique (Write API) :**
    * Les données sont envoyées à une **Route API Next.js** sécurisée.
    * Utilisation du `Sanity Client` avec un **Write Token** (clé secrète) pour créer un nouveau document de type `review`.
    * Le document est créé avec le statut `approved: false` par défaut.

* **Processus de Validation :**
    * Notification automatique par email aux propriétaires lors d'une nouvelle soumission.
    * Validation manuelle dans le Studio Sanity. 
    * **Revalidation On-Demand :** Dès que l'avis est publié, Next.js met à jour la page concernée en quelques millisecondes sans recharger tout le site.

### O. Interaction & Gestion des Contenus Vides
Pour garantir une interface propre et professionnelle, le système gère les interactions hôtes/clients.

* **Droit de réponse de l'Hôte :**
    * Dans le Back-Office (Sanity), un champ dédié permet aux propriétaires de rédiger une réponse officielle.
    * **Affichage :** La réponse apparaît sous l'avis client dans un bloc visuel distinct (ex: fond légèrement grisé avec mention "Réponse du propriétaire").
* **Gestion des "No-Comment" :**
    * Si un utilisateur soumet une note sans remplir les champs textuels (positifs/négatifs), le front-end Next.js applique une règle de fallback.
    * **Affichage automatique :** "L'utilisateur n'a pas laissé de commentaire." s'affichera à la place des champs vides pour éviter les trous dans le design.
* ** Pour le "L'utilisateur n'a pas laissé de commentaire", on peut même le rendre un peu plus élégant en CSS en le mettant en italique ou légèrement grisé. Ça montre que c'est une information système et pas le client qui a écrit ça.

* ** Lors de l'ajout d'un avis, la date remontera toute seul dans sanity etc..., Et il se peut qu'il y ai un titre uniquement sur l'avis, ou que la partie positif, ou que negatif, ou tout en meme temps, faudra s'adapter, On calculera une moyenne des avis pour une note global, mais attention, que avec les avis qui seront approuvé!
On devra aussi pouvoir repondre sur sanity, et si on a pas de reponse, ne pas laissé vide, juste ne rien mettre en reponse.

### P. Storytelling Immersif (Page Histoire)
La mise en page de la section Histoire suit une structure éditoriale "Magazine" pour faciliter la lecture de longs récits.

* **Layout Alterné (Zig-Zag) :** * Les paragraphes alternent dynamiquement entre `Texte à gauche | Image à droite` et vice-versa pour briser la monotonie visuelle.
    * **Typographie :** Le texte est **justifié** (alignement étendu type Word) pour un rendu académique et prestigieux. Les titres de paragraphes sont en **Gras accentué**.
* **Éléments de Respiration (Breaking Elements) :**
    * **Citations :** Mise en exergue de phrases historiques ou de témoignages anciens au milieu du récit. en italique avec un style ecriture manuscrite legere
    * **Images Pleine Largeur :** Insertion d'iconographies d'archives ou de photos de paysages pour aérer le texte.

---

### Q. Architecture du Menu & Navigation
L'ordre du menu est pensé pour accompagner le visiteur de la découverte à l'action (réservation).

1. **Accueil** (Page Pilote)
2. **Nos Chambres** (Le produit principal)
3. **Histoire & Domaine** (Le récit et l'âme du lieu)
4. **Tables & Saveurs** (Restaurants à proximité)
5. **Explorer la Région** (Patrimoine & Activités)
6. **Contact & Accès** (Conversion finale)

### R. Configuration de la Page d'Accueil
La **Page d'Accueil** fait office de vitrine dynamique (Landing Page). Elle ne se contente pas de présenter l'établissement, elle "pioche" des éléments dans tous les autres modules :
* Un résumé des **Chambres**.
* Le badge des **Notes Google**.
* La **Timeline "Live"** d'ouverture.
* Les **Points Forts** (Wi-Fi, Parking, etc.).
* Un extrait de la **Page Histoire** incitant à en lire plus.

---

## Z. Protocole de Développement & Git Workflow (Standard Pro)

Afin de garantir la stabilité du projet et la sécurité des données, tout contributeur doit respecter ce flux de travail.

### 1. Structure des Branches
* **`main` :** Branche sacrée. Ne jamais coder directement dessus. Elle contient uniquement le code prêt pour la production (Vercel).
* **`feat/` :** Pour toute nouvelle fonctionnalité (ex: `feat/header`, `feat/sanity-review`).
* **`fix/` :** Pour les corrections de bugs.
* **`docs/` :** Pour les mises à jour de la documentation ou de la spec.

### 2. Routine de Travail (Terminal)
Avant chaque session de travail :
1. S'assurer d'être sur la base propre : `git checkout main` puis `git pull origin main`.
2. Créer une branche dédiée : `git checkout -b feat/nom-de-la-tache`.

Pendant le travail :
1. Vérifier l'état : `git status`.
2. Indexer : `git add .` (uniquement si le `.gitignore` est bien configuré).
3. Sauvegarder localement : `git commit -m "type: description claire"`.
   * *Ex: `feat: add star rating system to attractions`*

### 3. Livraison & Sécurité
* **Push :** Envoyer la branche sur GitHub : `git push origin feat/nom-de-la-tache`.
* **Pull Request (PR) :** La fusion vers `main` doit se faire via l'interface GitHub.
* **Zéro Secret :** Il est formellement interdit de committer des fichiers `.env`. Toute clé API doit être déclarée dans le tableau de bord Vercel uniquement.

### 4. Warning "Anti-perte"
Si vous devez changer de branche mais que votre travail actuel n'est pas fini :
* **Option A (Recommandée) :** Faire un commit temporaire `git commit -m "work in progress"`.
* **Option B (Avancée) :** Utiliser `git stash` pour mettre les modifs "au garage" et les ressortir plus tard avec `git stash pop`.