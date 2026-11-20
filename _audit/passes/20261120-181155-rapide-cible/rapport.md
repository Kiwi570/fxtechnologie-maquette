# Rapport d’audit

Projet : `fxtechnologie-maquette` · 20/11/2026 19:28:26 · 17 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/produits,/services,/expertise,/contact,/404

## Résumé

- Statut : **64 échec(s)**
- Passe : `20261120-181155-rapide-cible` · version ?v=1
- Échecs : **64**
- À regarder : **44**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (5), vitesse (5), captures (1)

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

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:info@fxtechnologie.com
- **lien vers le site actuel** — `contact.html` — mailto:info@fxtechnologie.com
- **lien vers le site actuel** — `expertise.html` — mailto:info@fxtechnologie.com
- **lien vers le site actuel** — `index.html` — mailto:info@fxtechnologie.com
- **lien vers le site actuel** — `produits.html` — mailto:info@fxtechnologie.com
- **lien vers le site actuel** — `services.html` — mailto:info@fxtechnologie.com

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `expertise.html` — fichier introuvable : /assets/partage/expertise-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `produits.html` — fichier introuvable : /assets/partage/produits-fr.jpg
- **image de partage** — `services.html` — fichier introuvable : /assets/partage/services-fr.jpg

### contraste insuffisant (18)

- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/expertise` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/expertise` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/expertise` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/produits` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/produits` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/produits` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/services` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales · Politique de confidentialité :  » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/services` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Maquette de démonstration : formulaires simulés, r » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/services` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © FX Technologie » — 1.91:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/expertise` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/produits` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/services` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_

### photo faible affichée en grand (10)

- **photo faible affichée en grand** — `/` — a.produit-lien > figure.media.produit-media > picture > img « Gros plan sur la denture d'un engrenage hélicoïdal » — grok/carte-engrenages (4/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a.produit-lien > figure.media.produit-media > picture > img « Couronne segmentée posée sur des cales dans un ate » — grok/carte-couronne (4/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a.produit-lien > figure.media.produit-media > picture > img « Réducteur remis à neuf, peint en blanc, à l'atelie » — produit-reducteur (4/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — div.services-cadre > figure.media.services-image:nth-of-type(1) > picture > img — produit-reducteur (4/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.services-cadre > figure.media.services-image:nth-of-type(2) > picture > img — reparation-engrenage (3/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.services-cadre > figure.media.services-image:nth-of-type(5) > picture > img — service-hydraulique (2/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.services-cadre > figure.media.services-image:nth-of-type(10) > picture > img — service-hvof (2/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.services-cadre > figure.media.services-image:nth-of-type(11) > picture > img — service-rouleaux (2/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/produits` — div.conteneur.fiche-grille > figure.media.fiche-media-haute > picture > img « Couronne segmentée posée sur des cales dans un ate » — grok/carte-couronne (4/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/produits` — div.conteneur.fiche-grille > figure.media.fiche-media-haute > picture > img « Couronne segmentée posée sur des cales dans un ate » — grok/carte-couronne (4/5, faible, 42 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte.conteneur > div.hero-actions > a.hero-urgence:nth-of-type(2) « Urgence 24 h · 514-805-6350 » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.tete-contact-grille > a.cadran « LIGNE D'URGENCE 514-805-6350 24 h sur 24, 7 jours  » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/expertise` — div.conteneur.inspection-grille > div.inspection-texte:nth-of-type(1) > div.tete-actions > a.hero-urgence:nth-of-type(2) « Urgence 24 h · 514-805-6350 » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/services` — section#debut > div.conteneur.tete-plein-texte > div.tete-actions > a.hero-urgence:nth-of-type(2) « Urgence 24 h · 514-805-6350 » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/` — div.hero-texte.conteneur > div.hero-actions > a.hero-urgence:nth-of-type(2) > strong « 514-805-6350 » — 3.56:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.hero-texte.conteneur > div.hero-actions > a.hero-urgence:nth-of-type(2) > strong « 514-805-6350 » — 4.17:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (6)

- **accessibilité (axe) : color-contrast** — `/` — li[data-etape="1"] > .etape-num ; li[data-etape="2"] > .etape-num ; li[data-etape="3"] > .etape-num — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/expertise` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/produits` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — .hvof-etape:nth-child(1) > .etape-num ; .hvof-etape:nth-child(1) > div > h3 ; .hvof-etape:nth-child(1) > div > p — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(2) > a.bouton « Revenir à l'accueil » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/services` — section#debut > div.conteneur.tete-plein-texte > div.tete-actions > a.bouton:nth-of-type(1) « Demander une soumission » _(390×844 sansJs, 320×568 sansJs)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 908 px pour un écran de 904 px _(844×390 normal)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#atelier > div > p.atelier-mots « DANS NOS ATELIERS OU CHEZ VOUS » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_

### stabilité pendant le défilement (CLS) (1)

- **stabilité pendant le défilement (CLS)** — `/` — li.index-ligne ; li.index-ligne.actif ; li.index-ligne — 0.082 (0,05 au plus) _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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

- **section sans visuel** — `/` — section#reperes « +25 ans d'expérience en transmission de puissance  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/expertise` — section#methode « UNE SEULE ÉQUIPE, DU BESOIN À LA LIVRAISON 01 ÉVAL » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/expertise` — section#secteurs « LES SECTEURS QUE NOUS SERVONS Les mêmes exigences  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (33)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte.conteneur > p.surtitre.hero-sur:nth-of-type(1) « ENGRENAGES · TRANSMISSION DE PUISSANCE · QUÉBEC » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(1) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.produit-carte:nth-of-type(2) > a.produit-lien > figure.media.produit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(2) « DIAMÈTRE MAX » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — table.capacites > thead > tr > th:nth-of-type(3) « LARGEUR DE FACE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(2) > h3.services-famille-titre « RÉPARER ET REMETTRE À NEUF » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(3) > h3.services-famille-titre « USINER ET FABRIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(4) > h3.services-famille-titre « TRAITER LES SURFACES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.services-grille > div.services-liste:nth-of-type(1) > div.services-famille:nth-of-type(5) > h3.services-famille-titre « INTERVENIR SUR PLACE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#atelier > div > figure.media.atelier-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pannes > div.conteneur.pannes-grille > div > p.surtitre:nth-of-type(1) « ANALYSE DES ENGRENAGES ET DES PANNES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#centres > div.conteneur > div.tete-section > p.surtitre:nth-of-type(1) « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.tete-contact-grille > a.cadran > span.cadran-texte > span.cadran-titre:nth-of-type(1) « LIGNE D'URGENCE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#soumission > div.conteneur.soumission-grille > aside.recap > p.surtitre:nth-of-type(1) « VOTRE DEMANDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(1) > dt « ADRESSE PRINCIPALE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.coord-liste.fx-fini > div:nth-of-type(2) > dt « URGENCE 24 H » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#coordonnees > div.conteneur.coord-grille > div > p.surtitre.surtitre--petit « CENTRES DE SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#debut > figure.media.tete-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#engrenages > div.conteneur.fiche-grille > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « 01 · PRODUITS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — div.conteneur.fiche-grille > div.mosaique.fx-fini:nth-of-type(2) > figure.media.mosaique-grande:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > figure.media.fiche-media-haute > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > div > p.surtitre:nth-of-type(1) « 02 · PRODUITS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/produits` — section#grande-couronne > div.conteneur.fiche-grille > div > p.surtitre.surtitre--petit:nth-of-type(3) « POURQUOI SEGMENTÉE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 8 autres (rapport.json)

### typographie française (1)

- **typographie française** — `/services` — div.famille-tete > div:nth-of-type(2) > p.specs-ligne:nth-of-type(2) > strong « Réducteurs remis à neuf : » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (6.6 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/services` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-services-*.png _(1366×768)_

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
- Audit rapide : étapes lourdes sur /, /contact, /expertise, /produits, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2677 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2417 ms depuis le premier octet
- Ouverture /expertise (1366×768) : 2487 ms depuis le premier octet
- Ouverture /produits (1366×768) : 2469 ms depuis le premier octet
- Ouverture /services (1366×768) : 2475 ms depuis le premier octet
- Ouverture / (390×844) : 2651 ms depuis le premier octet
- Ouverture /contact (390×844) : 2430 ms depuis le premier octet
- Ouverture /expertise (390×844) : 2418 ms depuis le premier octet
- Ouverture /produits (390×844) : 2439 ms depuis le premier octet
- film de l'ouverture /produits 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /services (390×844) : 2453 ms depuis le premier octet
- bords de l’écran /services 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 418 images d’intro, 37 de voile et 123 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /expertise : aucune section épinglée ou plein écran.
- Tient dans l'écran /produits : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 580, tâche la plus longue 54 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité /expertise 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /produits 1366×768 (molette) : 0 % d'images lentes sur 285, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1417, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1406, tâche la plus longue 0 ms
- Fluidité /expertise 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Fluidité /produits 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1409, tâche la plus longue 0 ms
- Vitesse / : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /expertise : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /produits : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.27 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,ecran,fluidite
```
