# FX Technologie · maquette

Maquette du nouveau site de FX Technologie (engrenages et transmission de puissance, Sainte-Sophie, Québec).
Direction « Acier et braise » : graphite, béton clair et orange de forge ; titres Big Shoulders Display, texte IBM Plex Sans, cotes IBM Plex Mono.

- Adresse de la maquette : https://fxtechnologie-maquette.vercel.app
- Site actuel : https://www.fxtechnologie.com
- Pages : accueil, Produits, Services, Expertise, Contact (soumission en 4 étapes), 404.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; données (produits, services, secteurs, centres, étapes, chiffres) : `donnees/*.json`.
- Pages : `source/pages/*.mjs` ; gabarit commun : `source/gabarits/commun.mjs` ; style : `assets/css/site.css` ; effets : `assets/js/site.js`.
- Générer les pages après toute modification : `node outils/generer.mjs` (ne jamais modifier les fichiers `.html` à la main).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`produire.mjs`) ; fichiers de travail dans `_suivi/`.
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).

## Fiche à fournir par le client (à compléter)

| Élément | État |
|---|---|
| Mentions légales : raison sociale, NEQ, adresse du siège, responsable de la publication | à compléter |
| Politique de confidentialité (Loi 25 : responsable de la protection des renseignements personnels, finalités, conservation, droits) | à compléter |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse à revérifier sur vercel.com au moment de la mise en ligne) | à confirmer |
| Logo en haute définition (vectoriel SVG ou PDF) : le fichier du site actuel fait 210 × 79 px et il est coupé en haut et à droite | à fournir |
| Assurances et certifications éventuelles (aucune n'est affichée) | à compléter |
| Crédits des photographies du site actuel | à compléter |
| Crédits des illustrations générées (Grok) : mention « Illustration générée » à garder sur le site final | à garder |

### Points à confirmer (incohérences du site actuel)

- **Adresse** : le site affiche Sainte-Sophie (267, rue de la Rivière) et Repentigny (58, rue Rimbaud). La maquette retient Sainte-Sophie comme adresse principale.
- **Expérience** : « plus de 25 ans » dans les textes, « over 30 years » dans les métadonnées. La maquette affiche « plus de 25 ans ».
- **Réseaux sociaux** : le lien Facebook mène à un profil personnel et le lien Flickr est générique ; seuls Twitter @fxtechnologie est repris. Fournir les vraies pages si elles existent.
- **Centres de services** : Montréal, Saint-Jérôme, Toronto, Colombie-Britannique, États-Unis (Plattsburgh) et Allemagne sont repris de la page « Centre de services ». Adresses et numéros des centres sans téléphone (Saint-Jérôme, Colombie-Britannique, Allemagne) à fournir.

### Retiré ou remplacé faute d'information

| Ce qui manque | Où | Ce que fait la maquette |
|---|---|---|
| Horaires d'ouverture | partout | aucune heure ni statut « ouvert maintenant » ; seule la ligne d'urgence 24 h est mise en avant |
| Prix, délais chiffrés, garanties | Produits, Services | non affichés ; la soumission sert de point d'entrée |
| Diamètre maximal des couronnes hélicoïdales simples | Accueil, Produits | « selon le projet » |
| Équipe, noms, photos d'équipe | — | section non créée |
| Témoignages, logos clients | — | non créés ; seule la référence Atlas Steel (22 t), citée sur le site actuel, est reprise |
| Fiches détaillées des 14 secteurs | Expertise | liste des secteurs seulement (fiches possibles en v2) |
| Liste des machines et capacités d'usinage | Services | non affichées (à fournir pour une v2) |
| Photos des secteurs | — | les photos de banque d'images du site actuel n'ont pas été reprises |

## À la mise en ligne définitive

À retirer :
- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json` ;
- formulaire de soumission simulé (le brancher sur un vrai service d'envoi) et les mentions « rien n'est envoyé » ;
- les mentions « à compléter » du pied de page (remplacées par les vraies pages légales) ;
- les phrases d'attente listées plus haut, remplacées par les vraies informations.

À garder : la mention « Illustration générée » sur les images créées par IA.
