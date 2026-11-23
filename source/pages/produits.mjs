/* Produits : ouverture scindée (texte à gauche, engrenage à double hélice à droite), sommaire collant,
   puis les quatre familles, chacune sur sa propre composition. */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';

export const page = { cle: 'produits', fichier: 'produits', imagePartage: 'grok/produits-ouverture-1280.webp' };

const metres = (po) => (po * 0.0254).toFixed(2).replace('.', ',');

export default (c) => {
  const alt = (n) => c.donnees.images?.[n]?.alt || '';
  const p = Object.fromEntries(c.donnees.produits.map((x) => [x.id, x]));
  const contact = c.site.contact;
  return html`
<section class="tete-scindee sombre" id="debut">
  <div class="tete-scindee-texte">
    <p class="surtitre" data-anime>${c.t('produits.tete.surtitre')}</p>
    <h1 class="tete-titre" data-anime="lignes">${c.t('produits.tete.titre1')} <em>${c.t('produits.tete.titre2')}</em></h1>
    <p class="chapo" data-anime>${c.t('produits.tete.texte')}</p>
    <div class="tete-actions" data-anime>
      ${c.lien('contact', { ancre: 'soumission', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="tete-info" data-info-cle>${c.t('produits.tete.info')}</span>
    </div>
  </div>
  ${c.media({ nom: 'grok/produits-ouverture', alt: c.s('produits.tete.alt'), priorite: true, classe: 'tete-scindee-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
</section>

<nav class="sommaire-produits" aria-label="${c.s('produits.tete.sommaire')}" data-sommaire>
  <ul class="conteneur">${c.donnees.produits.map((x) => html`<li><a href="#${x.id}" data-sans-transition><span>${x.num}</span>${x.titre}</a></li>`)}<li><a href="#rapport" data-sans-transition><span>05</span>${c.t('produits.rapport.surtitre')}</a></li></ul>
</nav>

<section class="fiche clair" id="engrenages">
  <div class="conteneur fiche-grille">
    <div>
      <p class="surtitre" data-anime>${p.engrenages.num} · ${c.t('produits.tete.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${p.engrenages.titre}</h2>
      <p class="chapo" data-anime>${c.t('produits.engrenages.texte')}</p>
      <dl class="specs" data-anime="cascade">
        <div><dt>${c.t('produits.engrenages.types')}</dt><dd>${c.t('produits.engrenages.typesListe')}</dd></div>
        <div><dt>${c.t('produits.engrenages.materiaux')}</dt><dd>${c.t('produits.engrenages.materiauxListe')}</dd></div>
        <div><dt>AGMA</dt><dd>${c.t('accueil.chiffres.norme')}</dd></div>
      </dl>
    </div>
    <div class="mosaique" data-anime="cascade">
      ${c.media({ nom: 'grok/carte-engrenages', alt: alt('grok/carte-engrenages'), classe: 'mosaique-grande', sizes: '(max-width: 760px) 100vw, 30vw' })}
      ${c.media({ nom: 'engrenage-helicoidal', alt: alt('engrenage-helicoidal'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 20vw' })}
      ${c.media({ nom: 'engrenage-spiro', alt: alt('engrenage-spiro'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 20vw' })}
      ${c.media({ nom: 'couronne-bronze', alt: alt('couronne-bronze'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 20vw' })}
      ${c.media({ nom: 'pignon', alt: alt('pignon'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 20vw' })}
    </div>
  </div>
</section>

<section class="fiche fiche-couronne sombre" id="grande-couronne">
  <div class="conteneur fiche-grille fiche-grille--inverse">
    ${c.media({ nom: 'grok/carte-couronne', alt: alt('grok/carte-couronne'), classe: 'fiche-media-haute', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${p['grande-couronne'].num} · ${c.t('produits.tete.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${p['grande-couronne'].titre}</h2>
      <p data-anime>${c.t('produits.couronne.texte')}</p>
      <div class="cap" data-effet="capacites">
        ${[['droit', 320, 50.4], ['helicoidal', null, 43.5], ['double', 320, 86]].map(([k, d, f]) => html`<div class="cap-ligne">
          <p class="cap-type">${c.t('accueil.couronne.' + k)}</p>
          <p class="cap-val">${c.t('accueil.couronne.diametre')} <strong>${d ? html`${brut(String(d))}&nbsp;po · ${metres(d)}&nbsp;m` : c.t('accueil.couronne.selonProjet')}</strong></p>
          <p class="cap-val">${c.t('accueil.couronne.face')} <strong>${brut(String(f).replace('.', ','))}&nbsp;po · ${metres(f)}&nbsp;m</strong></p>
          <div class="cap-barre" aria-hidden="true"><span style="--f:${(f / 86).toFixed(3)}"></span></div>
        </div>`)}
      </div>
      <p class="surtitre surtitre--petit">${c.t('produits.couronne.avantages')}</p>
      <ul class="coches coches--deux" data-anime="cascade">${['a1', 'a2', 'a3', 'a4', 'a5'].map((k) => html`<li>${c.t('produits.couronne.' + k)}</li>`)}</ul>
      <div class="vignettes" data-anime="cascade">
        ${c.media({ nom: 'couronne-segments', alt: alt('couronne-segments'), ratio: '3 / 2', sizes: '200px' })}
        ${c.media({ nom: 'engrenage-grand', alt: alt('engrenage-grand'), ratio: '3 / 2', sizes: '200px' })}
      </div>
    </div>
  </div>
</section>

<section class="fiche clair" id="sechage">
  <div class="conteneur fiche-sechage">
    ${c.media({ nom: 'produit-secherie', alt: alt('produit-secherie'), classe: 'sechage-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre" data-anime>${p.sechage.num} · ${c.t('produits.tete.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${p.sechage.titre}</h2>
      <p class="chapo" data-anime>${c.t('produits.sechage.texte')}</p>
      <ul class="coches" data-anime="cascade">${p.sechage.points.map((x) => html`<li>${x}</li>`)}</ul>
      <div class="vignettes" data-anime="cascade">
        ${c.media({ nom: 'secherie-nylon', alt: c.s('produits.sechage.legende'), ratio: '3 / 2', sizes: '220px' })}
        ${c.media({ nom: 'sechage-machine', alt: alt('sechage-machine'), ratio: '3 / 2', sizes: '220px' })}
      </div>
    </div>
  </div>
</section>

<section class="fiche fiche-reducteur clair" id="reducteur">
  <div class="conteneur fiche-grille">
    <div>
      <p class="surtitre" data-anime>${p.reducteur.num} · ${c.t('produits.tete.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${p.reducteur.titre}</h2>
      <p class="chapo" data-anime>${c.t('produits.reducteur.texte')}</p>
      <ul class="coches" data-anime="cascade"><li>${c.t('produits.reducteur.p1')}</li><li>${c.t('produits.reducteur.p2')}</li><li>${c.t('produits.reducteur.p3')}</li></ul>
      <p class="encart" data-anime>${c.t('produits.reducteur.reparer')} ${c.lien('services', { ancre: 'reparer', classe: 'lien-fleche', texte: c.t('produits.reducteur.lienReparer') })}</p>
    </div>
    <div class="duo" data-anime="cascade">
      ${c.media({ nom: 'reducteur-portrait', alt: alt('reducteur-portrait'), ratio: '2 / 3', sizes: '(max-width: 760px) 50vw, 22vw', attrs: 'data-fx="zoom"' })}
      ${c.media({ nom: 'drop-in', alt: alt('drop-in'), ratio: '3 / 4', sizes: '(max-width: 760px) 50vw, 22vw' })}
    </div>
  </div>
</section>

<section class="rapport sombre" id="rapport" data-effet="simulateur-rapport">
  <div class="conteneur rapport-grille">
    <div class="rapport-texte">
      <p class="surtitre" data-anime>${c.t('produits.rapport.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('produits.rapport.titre')}</h2>
      <p class="chapo" data-anime>${c.t('produits.rapport.texte')}</p>
      <form class="rapport-reglages" data-rapport action="#" onsubmit="return false">
        <div class="reglage"><label for="r-z1">${c.t('produits.rapport.pignon')}</label><input id="r-z1" type="range" min="8" max="40" step="1" value="17" data-z1><output for="r-z1" data-z1-val>17</output></div>
        <div class="reglage"><label for="r-z2">${c.t('produits.rapport.roue')}</label><input id="r-z2" type="range" min="20" max="120" step="1" value="71" data-z2><output for="r-z2" data-z2-val>71</output></div>
        <div class="reglage reglage--nombre"><label for="r-n">${c.t('produits.rapport.entree')}</label><input id="r-n" type="number" min="100" max="3600" step="50" value="1750" inputmode="numeric" data-n></div>
      </form>
      <dl class="rapport-resultats" aria-live="polite">
        <div><dt>${c.t('produits.rapport.rapport')}</dt><dd><span class="rapport-valeur" data-i>1 : 4,2</span></dd></div>
        <div><dt>${c.t('produits.rapport.sortie')}</dt><dd><span class="rapport-valeur" data-n2>419</span> ${c.t('produits.rapport.unite')}</dd></div>
        <div><dt>${c.t('produits.rapport.couple')}</dt><dd><span class="rapport-valeur" data-c>4,2</span></dd></div>
      </dl>
      <p class="note">${c.t('produits.rapport.note')}</p>
      <p>${c.lien('contact', { ancre: 'soumission', params: 'besoin=fabrication&piece=reducteur&rapport=4,2', classe: 'bouton', texte: c.t('produits.rapport.action'), attrs: 'data-rapport-lien data-survol="magnetique"' })}</p>
    </div>
    <figure class="rapport-visuel" data-visuel>
      <svg viewBox="0 0 600 440" class="rapport-svg" role="img" aria-label="${c.s('produits.rapport.alt')}">
        <g class="rapport-roue"><path d="" fill-rule="evenodd"/></g>
        <g class="rapport-pignon"><path d="" fill-rule="evenodd"/></g>
        <circle class="rapport-axe rapport-axe-1" r="5"/><circle class="rapport-axe rapport-axe-2" r="5"/>
      </svg>
      <figcaption class="rapport-legende"><span data-leg-z1>17</span> ${c.t('produits.rapport.legPignon')} · <span data-leg-z2>71</span> ${c.t('produits.rapport.legRoue')}</figcaption>
    </figure>
  </div>
</section>

<section class="appel appel--court sombre" id="appel">
  <div class="conteneur appel-ligne">
    <svg class="appel-roue-court" viewBox="0 0 200 200" data-roue-defilement data-effet="roue-appel" aria-hidden="true"><path d="${brut(roue(200, 24, 96, 84, 30))}" fill-rule="evenodd"/></svg>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.appel.titre')}</h2>
    <p class="appel-actions" data-anime>
      ${c.lien('contact', { ancre: 'soumission', params: 'besoin=fabrication', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${contact.urgenceLien}">${c.t('commun.urgence')} · ${contact.urgence}</a>
    </p>
  </div>
</section>
`;
};
