import json, os
R = 'recu/'

def real(src, nom, role, alt, beaute, **k):
    assert os.path.exists(R + src), src
    d = {"source": R + src, "nom": nom, "role": role, "alt": alt, "beaute": beaute}
    d.update(k)
    return d

def grok(nom, role, page, empl, prio, scene, alt, **k):
    d = {"source": f"recu/grok/{nom}.jpg", "nom": "grok/" + nom, "role": role, "page": page, "emplacement": empl,
         "priorite": prio, "consigne_scene": scene, "alt": alt, "beaute": 4}
    d.update(k)
    return d

P = []
P.append({"source": R + "logo-sombre.png", "nom": "logo", "role": "logo", "alt": "FX Technologie"})
# --- Grok
P.append(grok("accueil-ouverture", "ouverture", "accueil", "Ouverture de l'accueil, version ordinateur, texte à gauche", "Indispensable",
  "Wide low-angle shot inside a large heavy-industry machine shop at night: a giant segmented steel ring gear, much taller than a person, standing upright on timber blocks in the right half of the frame, its freshly cut teeth catching warm orange sodium light, an overhead crane hook and chains hanging above it, the left half of the frame falling into calm deep graphite shadow, a few faint sparks far in the background, empty scene, nobody in the frame",
  "Grande couronne d'engrenage dressée dans un atelier de mécanique lourde, la nuit",
  zone_texte="gauche", mobile=True, source_mobile="recu/grok/accueil-ouverture-mobile.jpg"))
P.append(grok("accueil-ouverture-mobile", "ouverture", "accueil", "Ouverture de l'accueil, version téléphone (portrait), texte en haut", "Indispensable",
  "Vertical portrait composition inside a large heavy-industry machine shop at night: a giant steel ring gear seen slightly from below, filling the lower two thirds of the frame, its freshly cut teeth catching warm orange sodium light, crane chains rising out of frame, the top third calm and dark graphite for a title, empty scene, nobody in the frame",
  "Grande couronne d'engrenage dans un atelier, la nuit", ratio="9:16", zone_texte="haut"))
P.append(grok("accueil-atelier", "section-fond", "accueil", "Grande photo pleine largeur au milieu de l'accueil (« Dans nos ateliers ou chez vous »)", "Indispensable",
  "Wide shot of a heavy machine shop: an overhead crane lifting a large industrial gearbox housing with chains, one technician seen from behind in full protective equipment guiding the load with a gloved hand, warm work lights, worn concrete floor, steel columns, depth and haze, face never visible",
  "Un pont roulant soulève un carter de réducteur dans un atelier, un technicien guide la charge", zone_texte="bas"))
P.append(grok("carte-engrenages", "produit", "accueil", "Carte produit « Engrenages » (accueil et page Produits)", "Indispensable",
  "Macro photograph of a freshly ground helical steel gear, the slanted teeth in razor-sharp focus, thin oil film, warm raking light from the side, background falling into dark graphite shadow",
  "Gros plan sur la denture d'un engrenage hélicoïdal rectifié", ratio="4:5"))
P.append(grok("carte-couronne", "produit", "accueil", "Carte produit « Grande couronne » (accueil et page Produits)", "Indispensable",
  "A very large segmented steel ring gear made of several curved segments with bolted flanges, laid flat on timber blocks on a workshop floor, seen from above at a steep angle, warm work light, machined teeth catching highlights, empty scene",
  "Couronne segmentée posée sur des cales dans un atelier", ratio="4:5"))
P.append(grok("produits-ouverture", "ouverture", "produits", "Ouverture de la page Produits, version ordinateur, image à droite", "Indispensable",
  "Close-up three-quarter view of a large double helical herringbone gear standing on a workshop stand, the chevron teeth gleaming with oil, warm orange rim light, dark machine shop softly blurred behind, the left third of the frame calm and dark",
  "Engrenage à double hélice en chevrons sur un support d'atelier", zone_texte="gauche", mobile=True, source_mobile="recu/grok/produits-ouverture-mobile.jpg"))
P.append(grok("produits-ouverture-mobile", "ouverture", "produits", "Ouverture de la page Produits, version téléphone (portrait)", "Conseillée",
  "Vertical portrait close-up of a large double helical herringbone gear seen from slightly below, chevron teeth gleaming with oil in the lower two thirds of the frame, warm orange rim light, top third calm and dark",
  "Engrenage à double hélice en chevrons", ratio="9:16", zone_texte="haut"))
P.append(grok("services-ouverture", "ouverture", "services", "Ouverture de la page Services, plein cadre, texte en bas à gauche", "Indispensable",
  "A large vertical turning lathe machining the inside of a huge steel ring, long metal chips curling off the cutting tool, a light coolant mist, warm orange work light against a dark shop, the lower left of the frame calm and dark, empty scene, nobody in the frame",
  "Un tour vertical usine l'intérieur d'une grande bague d'acier", zone_texte="bas", mobile=True, source_mobile="recu/grok/services-ouverture-mobile.jpg"))
P.append(grok("services-ouverture-mobile", "ouverture", "services", "Ouverture de la page Services, version téléphone (portrait)", "Conseillée",
  "Vertical portrait shot of a large vertical turning lathe machining a huge steel ring, metal chips curling off the cutting tool in the lower half, warm orange work light, top third calm and dark, empty scene",
  "Un tour vertical usine une grande bague d'acier", ratio="9:16", zone_texte="haut"))
P.append(grok("services-hvof", "section-fond", "services", "Grande scène du chapitre « Traiter les surfaces » (métallisation HVOF)", "Indispensable",
  "Thermal spray coating inside a dark spray booth: a bright narrow supersonic flame jet hitting a rotating steel shaft held in a lathe, a fan of glowing orange particles bouncing off the surface, the spray gun mounted on a robotic arm, the operator out of frame, deep shadows around",
  "Projection thermique à haute vitesse sur un arbre en rotation", zone_texte="gauche"))
P.append(grok("page-404", "404", "404", "Image de la page 404", "Conseillée",
  "A single steel spur gear lying flat on a dark oiled workbench with exactly one tooth missing, the broken tooth lying a little apart beside it, warm side light, calm dark background on the left",
  "Un engrenage auquel il manque une dent", zone_texte="gauche"))
# --- vraies photos
P += [
  real("verification-specifications-boite.jpg", "expertise-ouverture", "ouverture", "Inspection d'un carter de réducteur par sa trappe de visite, annotations à la craie", 4, mobile=False),
  real("engrenage-secherie-fonte-6.jpg", "produit-secherie", "produit", "Engrenage de sécherie en fonte, moyeu usiné", 4, ratio="4:5"),
  real("reparation-boite-reduction.jpg", "produit-reducteur", "produit", "Réducteur remis à neuf, peint en blanc, à l'atelier", 4, ratio="4:5", cadrage=[70, 52], largeurs=[480, 640, 1000]),
  real("remise-neuf-boite-reduction.jpg", "reducteur-portrait", "carte-service", "Carter de réducteur remis à neuf", 3),
  real("exact-drop-unit.jpg", "drop-in", "produit", "Réducteur de remplacement exact, prêt à poser", 3),
  real("reparation-ventilateur.jpg", "service-soufflante", "produit", "Soufflante réparée et repeinte", 4, cadrage=[52, 45]),
  real("site-jobs.jpg", "service-sur-place", "galerie", "Technicien au travail à l'intérieur d'une installation, chez le client", 3),
  real("nouvelles.jpg", "technicien", "portrait", "Technicien en combinaison au travail sur une machine", 3),
  real("service-mecanique-place.jpg", "sur-place-2", "vignette", "Intervention mécanique sur place", 3),
  real("reparation-pompes.jpg", "service-pompe", "vignette", "Pompe centrifuge réparée", 3),
  real("reparation-moteur-electrique.jpg", "service-moteur", "vignette", "Moteurs électriques", 3),
  real("coupe-metal.jpg", "service-coupe", "vignette", "Coupe de métal", 3),
  real("recherche-excellence.jpg", "service-soudure", "vignette", "Atelier de soudure", 3, cadrage=[55, 50]),
  real("usinage-precision.jpg", "service-usinage", "vignette", "Usinage de précision", 3),
  real("metalisation-small.jpg", "service-hvof", "vignette", "Métallisation, gerbe d'étincelles", 2),
  real("metalisation-hvof-3.jpg", "hvof-flamme", "vignette", "Métallisation HVOF d'une pièce", 2),
  real("roll-welding.jpg", "service-rouleaux", "vignette", "Rechargement d'un rouleau", 2),
  real("reparation-hydraulique.jpg", "service-hydraulique", "vignette", "Composant hydraulique réparé", 2),
  real("reparation-engrenage-tout-genre.jpg", "reparation-engrenage", "vignette", "Grand engrenage réparé, à côté d'un technicien", 3),
  real("engrenage-helicoidale.jpg", "engrenage-helicoidal", "vignette", "Engrenages hélicoïdaux dans un carter ouvert", 3),
  real("engrenage-spiro-conique.jpg", "engrenage-spiro", "vignette", "Engrenage spiro-conique", 2),
  real("couronne-bronze.jpg", "couronne-bronze", "vignette", "Couronne en bronze pour vis sans fin", 2),
  real("pignon.jpg", "pignon", "vignette", "Arbres-pignons usinés", 2),
  real("fabricant-engrenage-grande-taille.jpg", "couronne-segments", "vignette", "Segments de grande couronne", 2),
  real("engrenage-grande-taille.jpg", "engrenage-grand", "vignette", "Engrenages de grande taille à l'atelier", 2),
  real("engrenage-secherie-nylon-2.jpg", "secherie-nylon", "vignette", "Engrenages de sécherie en nylon", 3),
  real("engrenages-sechage-engrenages-sechage.jpg", "sechage-machine", "vignette", "Entraînement par engrenages d'une section de sécherie", 3),
  real("atlas-steel-22-t.jpg", "atlas", "vignette", "Usinage d'une boîte de réduction de 22 tonnes", 2),
  real("analyse-engrenages-pannes-2.png", "pannes-macro", "vignette", "Denture usée vue de près", 2),
  real("analyse-engrenages-pannes.jpg", "pannes-carter", "vignette", "Analyse d'un réducteur ouvert", 2),
  real("remise-neuf-reducteur-arbres-2.jpg", "reducteur-arbres", "vignette", "Réducteur à arbres parallèles remis à neuf", 2),
  real("reparation-reducteur-vis-sans.jpg", "reducteur-vis", "vignette", "Réducteur à vis sans fin", 2),
  real("jet-sable.jpg", "jet-sable", "vignette", "Carter après jet de sable", 2),
  real("montreal.jpg", "enseigne", "vignette", "Enseigne d'un centre de services FX Technologie", 3, cadrage=[50, 30]),
]
import sys
if 'grok' in sys.argv:
    G = []
    for e in P:
        e = dict(e)
        if e['nom'].endswith('-mobile'):
            G.append(e); continue
        if 'source_mobile' in e and e['source'].startswith('recu/grok/'):
            e.pop('source_mobile'); e.pop('mobile', None)
        G.append(e)
    json.dump(G, open('_suivi/plan-grok.json', 'w'), ensure_ascii=False, indent=1)
else:
    P = [e for e in P if not e['nom'].endswith('-mobile')]
    json.dump(P, open('plan-images.json', 'w'), ensure_ascii=False, indent=1)
print(len(P), 'entrées')
