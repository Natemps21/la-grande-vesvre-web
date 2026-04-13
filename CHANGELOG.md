# Journal des modifications — La Grande Vesvre

Fichier mis à jour à chaque session de travail. Format simple : date, ce qui a été fait, pourquoi.

---

## 2026-04-12 — Session 1 : Fondations + Intégration Sanity

### Problème corrigé
- **`web/package.json`** : conflit de merge Git non résolu (bloquait `npm install`). Résolu et toutes les dépendances ajoutées.
- **`web/.npmrc`** : ajout de `legacy-peer-deps=true` pour permettre l'installation avec Next.js 16 (les peer deps de certains packages ne déclarent pas encore la compatibilité).
- **`web/next.config.ts`** : correction du warning "multiple lockfiles" via `turbopack.root`. Ajout du CDN Sanity (`cdn.sanity.io`) dans `remotePatterns` pour autoriser les images.

### Design system
- **`web/app/globals.css`** : palette complète (parchemin, forêt, or, pierre, encre, bordeaux) + 3 fonts (Cinzel, Cormorant Garamond, Raleway) via Tailwind v4 `@theme`. Classes utilitaires : `.btn-primary`, `.btn-outline`, `.btn-gold`, `.quote-manuscrite`, `.label-section`, `.container-site`.
- **`web/app/layout.tsx`** : chargement Google Fonts (Cinzel + Cormorant Garamond + Raleway) via `next/font`, métadonnées SEO de base.

### Composants créés
- **`web/components/layout/Header.tsx`** : navigation fixe responsive. Transparent sur le hero, fond parchemin opaque au scroll. Burger + menu mobile animé.
- **`web/components/layout/Footer.tsx`** : 3 colonnes (marque, navigation, contact). Coordonnées réelles (tél `06 45 51 09 47`, adresse `89160 Gigny`). Lien Booking réel.

### Intégration Sanity
- **CORS ajoutés** sur le projet Sanity `kv14c93x` : `localhost:3000`, `*.vercel.app`, `lagrandevesvre.com`.
- **`web/lib/sanity.ts`** : client Sanity (lecture CDN + preview), builder d'URLs d'images, helper `sanityFetch`.
- **`web/lib/queries.ts`** : toutes les requêtes GROQ du projet (hero, chambres, histoire, restaurants, attractions, avis, à propos, contact).
- **`web/types/sanity.ts`** : types TypeScript pour tous les documents Sanity.
- **`web/.env.local`** : variables d'environnement locales (project ID + dataset déjà remplis, tokens à compléter plus tard).
- **`web/.env.local.example`** : template documenté pour les autres environnements.

### Page d'accueil
- **`web/app/page.tsx`** : Server Component qui fetch Sanity. Photo drone de la ferme en `position: fixed` derrière le contenu. Hero avec titre/CTA. Section intro avec citation. Grille équipements. Cartes des 3 chambres avec prix et lien Booking.

---

## 2026-04-12 — Session 2 : Sanity reconnecté à la page d'accueil

### Problème corrigé
- **`web/lib/sanity.ts`** : `sanityFetch()` utilise désormais `revalidate: 0` en développement (chaque refresh = données fraîches depuis Sanity) et `revalidate: 3600` en production (cache 1h).

### Page d'accueil
- **`web/app/page.tsx`** : Sanity rebranché en Server Component async.
  - Hero : photo drone (`photoGallery` catégorie "exterieur") via `next/image` avec `fill` + `object-cover`. Voile sombre pour la lisibilité. Fallback couleur forêt si pas d'image.
  - Chambres : 3 cartes dynamiques depuis Sanity (`roomsPreviewQuery`). Photo de chaque chambre via `urlFor()`. Fallback "Photo à venir" si pas d'image.
  - Tout fonctionne : modifier une chambre ou une photo dans Sanity Studio → un refresh de la page locale suffit.

---

## À venir

- [ ] Déploiement Vercel + domaine `lagrandevesvre.com`
- [ ] Page `/chambres` (détail des 3 chambres)
- [ ] Page `/histoire` (layout magazine zig-zag)
- [ ] Page `/restaurants` (fiches avec horaires live)
- [ ] Page `/explorer` (patrimoine & activités)
- [ ] Page `/contact` (formulaire + carte Leaflet + calendrier saison)
- [ ] Animations Framer Motion + Lenis smooth scroll
- [ ] Multilingue FR/EN/DE avec next-intl
- [ ] Système d'avis clients (soumission + modération Sanity)
- [ ] SEO avancé (sitemap, OpenGraph, structured data)
