/* Accueil FX Technologie : direction « Acier et braise ».
   Graphite (ouverture, chiffres, couronne, méthode, appel) et béton clair (produits, services, pannes, secteurs, centres). */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';
import { reseau } from '../gabarits/reseau.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

const PO = 2.54 / 100;
const metres = (po) => (po * PO).toFixed(2).replace('.', ',');

export default (c) => {
  const contact = c.site.contact;
  const services = c.donnees.services;
  let n = 0;
  return html`
<section class="hero sombre" id="debut">
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '70% 47%', cadrageMobile: '50% 60%', priorite: true, classe: 'hero-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
  <canvas class="etincelles hero-etincelles" data-etincelles="hero" data-effet="etincelles" data-audit-ignorer aria-hidden="true"></canvas>
  <div class="hero-texte conteneur">
    <p class="surtitre hero-sur" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="hero-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2a')}<em>${c.t('accueil.hero.titre2b')}</em></span></span></h1>
    <p class="hero-intro" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'soumission', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="hero-urgence" href="tel:${contact.urgenceLien}" data-info-cle><span class="pastille" aria-hidden="true"></span>${c.t('commun.urgence')} · <strong>${contact.urgence}</strong></a>
    </div>
  </div>
</section>

<section class="chiffres sombre" id="reperes" aria-label="${c.s('accueil.chiffres.titre')}">
  <ul class="conteneur chiffres-liste" data-anime="cascade">${c.donnees.chiffres.map((x) => html`<li>
    <strong class="chiffre">${x.avant}<span data-compteur="${x.valeur}">${x.valeur}</span>${x.apres ? brut(x.apres.replace(' ', '&nbsp;')) : ''}</strong>
    <span>${c.t('accueil.chiffres.' + x.cle)}</span></li>`)}</ul>
  <p class="conteneur chiffres-norme" data-anime>${c.t('accueil.chiffres.norme')}</p>
</section>

<section class="produits clair" id="produits">
  <div class="conteneur">
    <div class="tete-section tete-section--duo">
      <div>
        <p class="surtitre" data-anime>${c.t('accueil.produits.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('accueil.produits.titre')}</h2>
      </div>
      <p class="chapo" data-anime>${c.t('accueil.produits.texte')}</p>
    </div>
    <p class="produits-glisser" aria-hidden="true">${c.t('accueil.produits.glisser')}</p>
    <div class="produits-defile" tabindex="0" role="region" aria-label="${c.s('accueil.produits.surtitre')}">
    <ul class="produits-grille" data-anime="cascade">${c.donnees.produits.map((p) => html`<li class="produit-carte">
      <a href="${c.url('produits', p.id)}" data-libelle="${c.libelle('produits')}" class="produit-lien" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: p.image, alt: c.donnees.images?.[p.image]?.alt || p.titre, classe: 'produit-media', ratio: '4 / 5', sizes: '(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 25vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
        <span class="produit-num">${p.num}</span>
        <h3>${p.titre}</h3>
        <p>${p.accroche}</p>
        <span class="lien-fleche">${c.t('accueil.produits.fiche')}</span>
      </a>
    </li>`)}</ul>
    </div>
  </div>
</section>

<section class="couronne sombre" id="capacites" data-effet="couronne-echelle">
  <div class="conteneur couronne-grille">
    <div class="couronne-texte">
      <p class="surtitre" data-anime>${c.t('accueil.couronne.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.couronne.titre')}</h2>
      <p data-anime>${c.t('accueil.couronne.texte')}</p>
      <table class="capacites" data-anime>
        <caption class="visuellement-cache">${c.t('accueil.couronne.tableau')}</caption>
        <thead><tr><th scope="col">${c.t('accueil.couronne.type')}</th><th scope="col">${c.t('accueil.couronne.diametre')}</th><th scope="col">${c.t('accueil.couronne.face')}</th></tr></thead>
        <tbody>
          ${[['droit', 320, 50.4], ['helicoidal', null, 43.5], ['double', 320, 86]].map(([cle, d, f], i) => html`<tr data-type="${cle}"${i === 0 ? brut(' class="actif"') : ''}>
            <th scope="row"><button type="button" class="capacite-choix" data-face="${f}" aria-pressed="${i === 0 ? 'true' : 'false'}">${c.t('accueil.couronne.' + cle)}</button></th>
            <td>${d ? html`${brut(String(d))}&nbsp;po <small>${metres(d)}&nbsp;m</small>` : html`<small>${c.t('accueil.couronne.selonProjet')}</small>`}</td>
            <td>${brut(String(f).replace('.', ','))}&nbsp;po${cle === 'double' ? html` <small>${c.t('accueil.couronne.totale')}</small>` : ''} <small>${metres(f)}&nbsp;m</small></td>
          </tr>`)}
        </tbody>
      </table>
      <p class="note" data-anime>${c.t('accueil.couronne.note')}</p>
    </div>
    <figure class="echelle" data-visuel aria-labelledby="echelle-legende">
      <svg viewBox="0 0 660 500" class="echelle-svg" role="img" aria-label="${c.s('accueil.couronne.alt')}">
        <line class="echelle-sol" x1="0" y1="452" x2="660" y2="452"/>
        <g transform="translate(0 12)"><g class="echelle-couronne"><path d="${brut(roue(472, 96, 204, 192, 160))}" fill-rule="evenodd"/></g></g>
        <g class="echelle-cote"><line x1="32" y1="472" x2="440" y2="472"/><line x1="32" y1="464" x2="32" y2="480"/><line x1="440" y1="464" x2="440" y2="480"/></g>
        <text class="echelle-texte" x="236" y="498" text-anchor="middle">320 po · 8,13 m</text>
        <defs><pattern id="denture" width="12" height="9" patternUnits="userSpaceOnUse"><rect width="12" height="9" class="denture-fond"/><line x1="0" y1="8.5" x2="12" y2="8.5" class="denture-trait"/></pattern></defs>
        <text class="echelle-texte echelle-profil-titre" x="496" y="30">${c.t('accueil.couronne.profil')}</text>
        <rect class="echelle-face-barre" x="496" y="44" width="64" height="408" fill="url(#denture)"/>
        <g class="echelle-face-cote"><line class="efc-l" x1="496" y1="472" x2="560" y2="472"/><line x1="496" y1="464" x2="496" y2="480"/><line class="efc-d" x1="560" y1="464" x2="560" y2="480"/></g>
        <text class="echelle-texte echelle-face-texte" x="496" y="498">50,4 po</text>
        <g class="echelle-humain" transform="translate(632 364)"><circle cx="0" cy="8" r="7.5"/><path d="M-8 19h16l3 32h-5l-2 37h-4l-2-30-2 30h-4l-2-37h-5z"/></g>
      </svg>
      <figcaption id="echelle-legende">${c.t('accueil.couronne.legende')}</figcaption>
    </figure>
  </div>
</section>

<section class="services clair" id="services" data-effet="index-services">
  <div class="conteneur services-grille">
    <div class="services-liste">
      <div class="tete-section">
        <p class="surtitre" data-anime>${c.t('accueil.services.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('accueil.services.titre')}</h2>
      </div>
      ${services.map((f) => html`<div class="services-famille">
        <h3 class="services-famille-titre">${f.famille}</h3>
        <ol class="index">${f.services.map((s) => { n += 1; return html`<li class="index-ligne" data-index-image="${s.image}">
          <a href="${c.url('services', f.id)}" data-libelle="${c.libelle('services')}">
            <span class="index-num">${brut(String(n).padStart(2, '0'))}</span>
            <span class="index-titre">${s.titre}</span>
            <span class="index-texte">${s.texte}</span>
            ${c.media({ nom: s.image, alt: '', classe: 'index-vignette', ratio: '3 / 2', sizes: '120px' })}
          </a></li>`; })}</ol>
      </div>`)}
      <p class="services-suite">${c.lien('services', { classe: 'bouton bouton--contour', texte: c.t('accueil.services.tous') })}</p>
    </div>
    <div class="services-visuel" aria-hidden="true">
      <div class="services-cadre">
        ${services.flatMap((f) => f.services).map((s, i) => c.media({ nom: s.image, alt: '', classe: 'services-image' + (i === 0 ? ' actif' : ''), sizes: '(max-width: 1100px) 40vw, 480px', attrs: `data-image="${s.image}"` }))}
        <p class="services-legende" data-services-legende>${services[0].services[0].texte}</p>
        <svg class="services-roue" viewBox="0 0 120 120"><path d="${brut(roue(120, 18, 58, 48, 16))}" fill-rule="evenodd"/></svg>
      </div>
    </div>
  </div>
</section>

<section class="atelier" id="atelier" style="--fx-longueur: 190svh" data-fx="plein-ecran" data-fx-depart="inset(22% 28% 22% 28% round 16px)">
  <div data-collant>
    ${c.media({ nom: 'grok/accueil-atelier', alt: c.s('accueil.atelier.alt'), classe: 'atelier-media', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="atelier-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.atelier.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.atelier.mot2')}</span></p>
    <div class="atelier-legende" data-fx-apres>
      <h2>${c.t('accueil.atelier.titre')}</h2>
      <p>${c.t('accueil.atelier.texte')}</p>
      <p class="atelier-actions"><a class="bouton" href="tel:${contact.urgenceLien}">${c.t('commun.urgence')} · ${contact.urgence}</a>${c.lien('services', { ancre: 'sur-place', classe: 'lien-fleche lien-clair', texte: c.t('accueil.atelier.lien') })}</p>
    </div>
  </div>
</section>

<section class="methode sombre" id="methode" data-scene data-effet="denture" style="--etapes:${c.donnees.etapes.length}">
  <div class="methode-cadre" data-collant>
    <div class="conteneur methode-grille">
      <div class="methode-texte">
        <p class="surtitre">${c.t('accueil.methode.surtitre')}</p>
        <h2 class="titre-section">${c.t('accueil.methode.titre')}</h2>
        <ol class="etapes">${c.donnees.etapes.map((e, i) => html`<li class="etape${i === 0 ? ' actif' : ''}" data-etape="${i}">
          <span class="etape-num">${brut(String(i + 1).padStart(2, '0'))}</span>
          <div><h3>${e.titre}</h3><p>${e.texte}</p></div>
        </li>`)}</ol>
        <p class="methode-detail" data-methode-detail aria-live="polite">${c.donnees.etapes[0].texte}</p>
      </div>
      <div class="methode-visuel" data-visuel aria-hidden="true">
        <svg class="methode-roue" viewBox="0 0 400 400">
          <path class="methode-roue-corps" d="${brut(roue(400, 20, 190, 158, 46))}" fill-rule="evenodd"/>
          ${c.donnees.etapes.map((e, i) => { const a = (i * 4 + 0.45) * (2 * Math.PI / 20); return html`<circle class="methode-repere${i === 0 ? ' actif' : ''}" data-repere-etape="${i}" cx="${(200 + 172 * Math.cos(a)).toFixed(1)}" cy="${(200 + 172 * Math.sin(a)).toFixed(1)}" r="9"/>`; })}
          <circle class="methode-moyeu" cx="200" cy="200" r="70"/>
        </svg>
        <svg class="methode-pignon" viewBox="0 0 200 200"><path d="${brut(roue(200, 10, 96, 66, 26, Math.PI / 10))}" fill-rule="evenodd"/></svg>
        <p class="methode-compte"><span data-methode-compte>01</span> / ${brut(String(c.donnees.etapes.length).padStart(2, '0'))}</p>
      </div>
    </div>
  </div>
</section>

<section class="pannes clair" id="pannes">
  <div class="conteneur pannes-grille">
    ${c.media({ nom: 'expertise-ouverture', alt: c.s('accueil.pannes.alt'), classe: 'pannes-media', ratio: '4 / 3', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.pannes.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.pannes.titre')}</h2>
      <p data-anime>${c.t('accueil.pannes.texte')}</p>
      <ul class="coches" data-anime="cascade">
        <li>${c.t('accueil.pannes.p1')}</li><li>${c.t('accueil.pannes.p2')}</li><li>${c.t('accueil.pannes.p3')}</li>
      </ul>
      <p data-anime>${c.lien('expertise', { classe: 'lien-fleche', texte: c.t('accueil.pannes.lien') })}</p>
    </div>
  </div>
</section>

<section class="secteurs clair" id="secteurs">
  <div class="mots-geants" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${c.donnees.secteurs.slice(0, 7).concat(c.donnees.secteurs.slice(0, 7)).map((s) => html`<span>${s}</span>`)}</p>
    <p data-fx-rangee data-sens="-1">${c.donnees.secteurs.slice(7).concat(c.donnees.secteurs.slice(7)).map((s) => html`<span>${s}</span>`)}</p>
  </div>
  <div class="conteneur secteurs-bas">
    <h2 class="secteurs-titre" data-anime="lignes">${c.t('accueil.secteurs.titre')}</h2>
    <p class="secteurs-ligne" data-anime>${c.donnees.secteurs.join(' · ')}</p>
  </div>
</section>

<section class="centres clair" id="centres" data-effet="carte-centres">
  <div class="conteneur">
    <div class="tete-section tete-section--duo">
      <div>
        <p class="surtitre" data-anime>${c.t('accueil.centres.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('accueil.centres.titre')}</h2>
      </div>
      <p class="chapo" data-anime>${c.t('accueil.centres.texte')}</p>
    </div>
    ${reseau(c)}
  </div>
</section>

<section class="appel sombre" id="appel">
  <canvas class="etincelles appel-etincelles" data-etincelles="appel" data-audit-ignorer aria-hidden="true"></canvas>
  <div class="conteneur appel-grille">
    <div class="appel-jeu">
      <button type="button" class="appel-roues" data-effet="roue-appel" data-grille="manipuler retour" data-visuel aria-label="${c.s('accueil.appel.tourner')}">
        <svg class="appel-roue" viewBox="0 0 300 300" aria-hidden="true"><path d="${brut(roue(300, 32, 146, 132, 40))}" fill-rule="evenodd"/></svg>
        <svg class="appel-pignon" viewBox="0 0 150 150" aria-hidden="true"><path d="${brut(roue(150, 16, 72, 58, 20))}" fill-rule="evenodd"/></svg>
      </button>
      <p class="appel-indice" aria-hidden="true"><span class="indice-souris">${c.t('accueil.appel.indiceSouris')}</span><span class="indice-doigt">${c.t('accueil.appel.indiceDoigt')}</span></p>
    </div>
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.appel.titre')}</h2>
      <p data-anime>${c.t('accueil.appel.texte')}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('contact', { ancre: 'soumission', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${contact.urgenceLien}">${c.t('commun.urgence')} · ${contact.urgence}</a>
      </p>
    </div>
  </div>
</section>
`;
};
