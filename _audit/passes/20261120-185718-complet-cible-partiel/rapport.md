# Rapport d’audit

Projet : `fxtechnologie-maquette` · 20/11/2026 20:03:03 · 6 min · 5 page(s) · audit complet ciblé sur /,/contact,/expertise,/produits,/services (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-185718-complet-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **40**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (195), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-181155-rapide-cible | rapide | /,/produits,/services,/expertise,/contact,/404 | toutes | 64 | 44 | 1 | échecs |
| 20261120-183112-standard | standard | toutes | toutes | 16 | 47 | 1 | échecs |
| 20261120-184927-complet-partiel | complet | toutes | mesures, ecran | 22 | 40 | 0 | échecs |
| **20261120-185718-complet-cible-partiel** (celle-ci) | complet | /,/contact,/expertise,/produits,/services | fichiers, mesures, ecran | 1 | 40 | 0 | échecs |

## Échecs

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 358 px — largeurs : 320 à 900 px (30 largeurs) _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (3)

- **section sans visuel** — `/` — section#reperes « +25 ans d'expérience en transmission de puissance  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/expertise` — section#methode « UNE SEULE ÉQUIPE, DU BESOIN À LA LIVRAISON 01 ÉVAL » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/expertise` — section#secteurs « LES SECTEURS QUE NOUS SERVONS Les mêmes exigences  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (35)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte.conteneur > p.surtitre.hero-sur:nth-of-type(1) « ENGRENAGES · TRANSMISSION DE PUISSANCE · QUÉBEC » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(1) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(2) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(2) « DIAMÈTRE MAX » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(3) « LARGEUR DE FACE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(2) > h3.services-famille-titre « RÉPARER ET REMETTRE À NEUF » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(3) > h3.services-famille-titre « USINER ET FABRIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(4) > h3.services-famille-titre « TRAITER LES SURFACES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(5) > h3.services-famille-titre « INTERVENIR SUR PLACE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#atelier > div > figure.media.atelier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pannes > div.conteneur.pannes-grille > div > p.surtitre:nth-of-type(1) « ANALYSE DES ENGRENAGES ET DES PANNES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#centres > div.conteneur > div.tete-section > p.surtitre:nth-of-type(1) « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.tete-contact-grille > a.cadran > span.cadran-texte > span.cadran-titre:nth-of-type(1) « LIGNE D'URGENCE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#soumission > div.conteneur.soumission-grille > aside.recap > p.surtitre:nth-of-type(1) « VOTRE DEMANDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(1) > dt « ADRESSE PRINCIPALE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(2) > dt « URGENCE 24 H » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#coordonnees > div.conteneur.coord-grille > div > p.surtitre.surtitre--petit « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste > div:nth-of-type(1) > dt « ADRESSE PRINCIPALE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste > div:nth-of-type(2) > dt « URGENCE 24 H » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#debut > figure.media.tete-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#engrenages > div.conteneur.fiche-grille > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « 01 · PRODUITS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — div.conteneur.fiche-grille > div.mosaique.fx-fini:nth-of-type(2) > figure.media.mosaique-grande:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > figure.media.fiche-media-haute > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > div > p.surtitre:nth-of-type(1) « 02 · PRODUITS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 10 autres (rapport.json)

### typographie française (1)

- **typographie française** — `/services` — div.famille-tete > div:nth-of-type(2) > p.specs-ligne:nth-of-type(2) > strong « Réducteurs remis à neuf : » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 13 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /expertise : aucune section épinglée ou plein écran.
- Tient dans l'écran /produits : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact --seulement=fichiers,mesures
```
