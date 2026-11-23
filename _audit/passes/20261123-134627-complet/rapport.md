# Rapport d’audit

Projet : `fxtechnologie-maquette` · 23/11/2026 15:09:11 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-134627-complet` · version ?v=2
- Échecs : **1**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (8), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (6), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### erreur de console ou ressource (1)

- **erreur de console ou ressource** — `/` — erreur : Failed to execute 'requestIdleCallback' on 'Window': The provided value is not of type 'IdleRequestOptions'. _(375×667 normal, 320×568 normal, 844×390 normal, 390×844 normal, 1024×768 normal, 1000×560 normal, +31)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (4)

- **section sans visuel** — `/` — section#reperes « +25 ans d'expérience en transmission de puissance  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +32)_
- **section sans visuel** — `/` — section#reperes « +0 ans d'expérience en transmission de puissance 0 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1920×1080 sansWebgl)_
- **section sans visuel** — `/expertise` — section#methode « UNE SEULE ÉQUIPE, DU BESOIN À LA LIVRAISON 01 ÉVAL » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/expertise` — section#secteurs « LES SECTEURS QUE NOUS SERVONS Les mêmes exigences  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (6.6 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/produits` — écran différent à la même position après rechargement (6.5 %), voir comparaisons/rechargement-produits-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/services` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-services-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/expertise` — section#debut.inspection.sombre — inspection : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 12 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2766 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2489 ms depuis le premier octet
- Ouverture /expertise (1366×768) : 2505 ms depuis le premier octet
- Ouverture /produits (1366×768) : 2511 ms depuis le premier octet
- film de l'ouverture /produits 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /services (1366×768) : 2533 ms depuis le premier octet
- Ouverture / (390×844) : 2710 ms depuis le premier octet
- Ouverture /contact (390×844) : 2447 ms depuis le premier octet
- Ouverture /expertise (390×844) : 2501 ms depuis le premier octet
- Ouverture /produits (390×844) : 2527 ms depuis le premier octet
- Ouverture /services (390×844) : 2531 ms depuis le premier octet
- Bords de l’écran : 394 images d’intro, 59 de voile et 140 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /expertise : aucune section épinglée ou plein écran.
- Tient dans l'écran /produits : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 529, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité /expertise 1366×768 (molette) : 0 % d'images lentes sur 301, tâche la plus longue 0 ms
- Fluidité /produits 1366×768 (molette) : 0 % d'images lentes sur 349, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 340, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1437, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /expertise 390×844 (doigt) : 0 % d'images lentes sur 1430, tâche la plus longue 0 ms
- Fluidité /produits 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1432, tâche la plus longue 0 ms
- Vitesse / : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /expertise : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /produits : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.45 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
