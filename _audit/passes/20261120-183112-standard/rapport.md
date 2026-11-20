# Rapport d’audit

Projet : `fxtechnologie-maquette` · 20/11/2026 19:49:26 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261120-183112-standard` · version ?v=1
- Échecs : **16**
- À regarder : **47**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-181155-rapide-cible | rapide | /,/produits,/services,/expertise,/contact,/404 | toutes | 64 | 44 | 1 | échecs |
| **20261120-183112-standard** (celle-ci) | standard | toutes | toutes | 16 | 47 | 1 | échecs |

## Échecs

### texte coupé (4)

- **texte coupé** — `/` — ol.etapes > li.etape.actif:nth-of-type(1) > div > p « On part de votre pièce, de votre machine et de vos » — le contenu dépasse de son cadre _(320×568 normal)_
- **texte coupé** — `/` — div.methode-texte:nth-of-type(1) > ol.etapes > li.etape:nth-of-type(5) > span.etape-num « 05 » — coupé par section#methode > div.methode-cadre « MÉTHODE CINQ TEMPS, UNE DENT À LA FOIS 01 ÉVALUER  » _(320×568 normal)_
- **texte coupé** — `/` — ol.etapes > li.etape:nth-of-type(5) > div > h3 « LIVRER VITE » — coupé par section#methode > div.methode-cadre « MÉTHODE CINQ TEMPS, UNE DENT À LA FOIS 01 ÉVALUER  » _(320×568 normal)_
- **texte coupé** — `/` — ol.etapes > li.etape:nth-of-type(5) > div > p « Livraison rapide et délais tenus, pour que votre p » — le contenu dépasse de son cadre _(1366×768 normal, 1920×1080 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte.conteneur > p.surtitre.hero-sur:nth-of-type(1) « ENGRENAGES · TRANSMISSION DE PUISSANCE · QUÉBEC » — avec div.hero-texte.conteneur > h1.hero-titre > span.hero-masque:nth-of-type(1) > span.hero-ligne « LE SPÉCIALISTE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/expertise` — section#debut > div.conteneur.inspection-grille > div.inspection-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « EXPERTISE » — avec section#debut > div.conteneur.inspection-grille > div.inspection-texte:nth-of-type(1) > h1.tete-titre.tete-titre--geant « TROUVER LA CAUSE » _(1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > div.hero-actions > a.bouton:nth-of-type(1) « Demander une soumission » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/services` — section#debut > div.conteneur.tete-plein-texte > div.tete-actions > a.bouton:nth-of-type(1) « Demander une soumission » _(768×1024 normal, 1920×1080 normal, 1366×768 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > div.hero-actions > a.hero-urgence:nth-of-type(2) « Urgence 24 h · 514-805-6350 » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/services` — section#debut > div.conteneur.tete-plein-texte > div.tete-actions > a.hero-urgence:nth-of-type(2) « Urgence 24 h · 514-805-6350 » _(768×1024 normal, 1920×1080 normal, 1366×768 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — div.conteneur.tete-contact-grille > div > p.tete-actions:nth-of-type(3) > a.bouton « Demander une soumission » — par section#debut > div.conteneur.tete-contact-grille > a.cadran > svg.urgence-roue _(390×844 normal)_

### débordement horizontal (2)

- **débordement horizontal** — `/contact` — page large de 835 px pour un écran de 832 px _(768×1024 normal)_
- **débordement horizontal** — `/contact` — page large de 358 px — largeurs : 320 à 880 px (15 largeurs) _(balayage 320–1920 normal)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (3)

- **section sans visuel** — `/` — section#reperes « +25 ans d'expérience en transmission de puissance  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/expertise` — section#methode « UNE SEULE ÉQUIPE, DU BESOIN À LA LIVRAISON 01 ÉVAL » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/expertise` — section#secteurs « LES SECTEURS QUE NOUS SERVONS Les mêmes exigences  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (36)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte.conteneur > p.surtitre.hero-sur:nth-of-type(1) « ENGRENAGES · TRANSMISSION DE PUISSANCE · QUÉBEC » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(1) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(2) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(2) « DIAMÈTRE MAX » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(3) « LARGEUR DE FACE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(2) > h3.services-famille-titre « RÉPARER ET REMETTRE À NEUF » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(3) > h3.services-famille-titre « USINER ET FABRIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(4) > h3.services-famille-titre « TRAITER LES SURFACES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(5) > h3.services-famille-titre « INTERVENIR SUR PLACE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#atelier > div > figure.media.atelier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pannes > div.conteneur.pannes-grille > div > p.surtitre:nth-of-type(1) « ANALYSE DES ENGRENAGES ET DES PANNES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#centres > div.conteneur > div.tete-section > p.surtitre:nth-of-type(1) « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.tete-contact-grille > a.cadran > span.cadran-texte > span.cadran-titre:nth-of-type(1) « LIGNE D'URGENCE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#soumission > div.conteneur.soumission-grille > aside.recap > p.surtitre:nth-of-type(1) « VOTRE DEMANDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(1) > dt « ADRESSE PRINCIPALE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(2) > dt « URGENCE 24 H » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#coordonnees > div.conteneur.coord-grille > div > p.surtitre.surtitre--petit « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste > div:nth-of-type(1) > dt « ADRESSE PRINCIPALE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste > div:nth-of-type(2) > dt « URGENCE 24 H » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#debut > figure.media.tete-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#engrenages > div.conteneur.fiche-grille > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « 01 · PRODUITS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — div.conteneur.fiche-grille > div.mosaique.fx-fini:nth-of-type(2) > figure.media.mosaique-grande:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > figure.media.fiche-media-haute > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 11 autres (rapport.json)

### typographie française (1)

- **typographie française** — `/services` — div.famille-tete > div:nth-of-type(2) > p.specs-ligne:nth-of-type(2) > strong « Réducteurs remis à neuf : » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (6.6 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/services` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-services-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 13 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /expertise, /produits, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2700 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2423 ms depuis le premier octet
- Ouverture /expertise (1366×768) : 2438 ms depuis le premier octet
- film de l'ouverture /expertise 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /produits (1366×768) : 2493 ms depuis le premier octet
- film de l'ouverture /produits 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /services (1366×768) : 2474 ms depuis le premier octet
- Ouverture / (390×844) : 2609 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2419 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /expertise (390×844) : 2444 ms depuis le premier octet
- Ouverture /produits (390×844) : 2456 ms depuis le premier octet
- Ouverture /services (390×844) : 2450 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /expertise 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 488 images d’intro, 54 de voile et 146 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /expertise : aucune section épinglée ou plein écran.
- Tient dans l'écran /produits : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 604, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 133, tâche la plus longue 0 ms
- Fluidité /expertise 1366×768 (molette) : 0 % d'images lentes sur 288, tâche la plus longue 0 ms
- Fluidité /produits 1366×768 (molette) : 0 % d'images lentes sur 297, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 344, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1430, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms
- Fluidité /expertise 390×844 (doigt) : 0 % d'images lentes sur 1423, tâche la plus longue 0 ms
- Fluidité /produits 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms
- Vitesse / : 0.57 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /expertise : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /produits : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.39 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact,/expertise,/services --seulement=fichiers,mesures,ecran
```
