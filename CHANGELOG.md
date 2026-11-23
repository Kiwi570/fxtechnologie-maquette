# Ce qui a changé

Chaque version ajoute sa partie en tête de ce fichier, construite en comparant l'archive précédente et la nouvelle, jamais de mémoire.

## v2 : analyse complète et version enrichie (23 novembre 2026)

Construit en relisant chaque page sur ordinateur et téléphone et en comparant aux fichiers de la v1.

**Nouveau, ludique et utile**
- **Simulateur de rapport de réduction** (Produits, nouvelle section « Simulateur » dans le sommaire) : on règle les dents du pignon et de la roue et la vitesse d'entrée ; les deux engrenages sont redessinés au bon nombre de dents et tournent à leur vraie proportion de vitesse ; rapport, vitesse de sortie et couple s'affichent en direct ; le bouton ouvre la soumission avec le rapport déjà écrit dans la description.
- **Roues de l'appel final à lancer** (accueil) : on attrape la grande roue et on la lance (souris ou doigt), le pignon suit au double, l'élan retombe en douceur et les étincelles suivent la vitesse ; un clic ou la touche Entrée donne une impulsion.
- **Loupe d'inspection** (Expertise) : sur la photo du carter, une loupe grossit la zone sous la souris, ou là où l'on touche sur téléphone.
- **Schéma HVOF animé** (Services) : chambre de combustion, buse, injection de poudre et dépôt sur l'arbre s'allument étape par étape pendant le défilement ; sur téléphone, le schéma reste en haut de l'écran pendant qu'on lit les étapes.

**Corrigé**
- Chiffres de l'accueil : pendant le comptage, les nombres s'affichaient en petit (« +24 », « 306 po ») ; ils restent maintenant à leur taille.
- Couronne à l'échelle : la largeur de face est dessinée en vrai profil denté, à la même échelle que le diamètre, avec sa cote, et change avec le type choisi.
- Scène HVOF : la photo ne restait pas à l'écran pendant les étapes sur ordinateur ; elle reste maintenant collée avec le schéma.
- Index des services : les photos du panneau sont préchargées après l'ouverture (plus de case noire en défilant vite).
- Photo d'inspection : même cadrage sur téléphone que sur ordinateur, l'anneau tombe sur la trappe de visite.

**Harmonie et rythme**
- En-têtes de section sur deux colonnes (titre à gauche, chapô en face) pour les produits et les centres : plus de grand vide à droite.
- Accueil plus court : méthode et photo d'atelier resserrées, lignes de l'index plus compactes.
- Téléphone : cartes de services en rangées à faire glisser, secteurs sur deux colonnes, simulateur réordonné (engrenages juste au-dessus des réglages).
- Libellés techniques passés à 13 px.

## v1 : la base (20 novembre 2026)

**Pages** : accueil, Produits, Services, Expertise, Contact (soumission en 4 étapes) et 404, en français.

**Direction « Acier et braise »** : graphite et béton clair en alternance, orange de forge pour les boutons et un mot par titre ; titres Big Shoulders Display en capitales, texte IBM Plex Sans, cotes IBM Plex Mono ; logo du client en version claire dans l'en-tête graphite.

**Animations**
- Intro : la grande roue entre en tournant, s'engrène avec le pignon braise, gerbe d'étincelles, puis le pignon glisse vers la couronne de la photo et la page s'ouvre en cercle ; voile de transition en iris avec une roue qui tourne.
- Accueil : étincelles et souffle de la photo d'ouverture, chiffres en compteurs, cartes produits en cascade, couronne de 320 po dessinée à l'échelle d'une silhouette (largeur de face au choix du type), index des 12 services dont la photo suit la ligne active, photo d'atelier qui s'ouvre en plein écran, méthode en 5 temps sur une roue qui tourne d'une dent par étape, secteurs en mots géants, réseau des centres qui se trace, roues de l'appel final.
- Pages intérieures : chacune son ouverture (scindée pour Produits, plein cadre pour Services, inspection avec anneau tracé pour Expertise, cadran d'urgence pour Contact) ; barres de capacités, scène HVOF en 4 temps avec particules, frise de la méthode, roues qui tournent au défilement en fin de page.
- Engrènement de la marge sur grand écran : deux roues qui tournent avec le défilement.

**Fonctionnalités** : demande de soumission en 4 étapes (besoin, pièce, délai, coordonnées) avec récapitulatif en direct, préremplie depuis les boutons des pages (`?besoin=…`), mention Loi 25 ; ligne d'urgence 24 h dans l'en-tête de chaque ouverture, le menu, le pied et la barre du téléphone ; sommaires collants sur Produits et Services.

**Images** : 11 illustrations générées (Grok) pour les ouvertures et grandes scènes, avec la mention « Illustration générée » ; 34 vraies photos du site actuel en vignettes et fiches ; images de partage 1200×630 par page.

**Mise en ligne** : site statique pour Vercel (cleanUrls, noindex, sans Cache-Control), affichable dans le module Wix.
