/* Services : ouverture plein cadre (tour vertical), texte en bas à gauche ; puis les quatre familles,
   dont la scène HVOF en quatre temps. */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';

export const page = { cle: 'services', fichier: 'services', imagePartage: 'grok/services-ouverture-1280.webp' };

export default (c) => {
  const alt = (n) => c.donnees.images?.[n]?.alt || '';
  const F = Object.fromEntries(c.donnees.services.map((f) => [f.id, f]));
  const contact = c.site.contact;
  const carte = (s, i) => html`<li class="service-carte">
    ${c.media({ nom: s.image, alt: s.titre, ratio: '3 / 2', classe: 'service-media', sizes: '(max-width: 560px) 90vw, (max-width: 1100px) 45vw, 30vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
    <span class="service-num">${brut(String(i + 1).padStart(2, '0'))}</span>
    <h3>${s.titre}</h3><p>${s.texte}</p></li>`;
  return html`
<section class="tete-plein sombre" id="debut">
  ${c.media({ nom: 'grok/services-ouverture', alt: c.s('services.tete.alt'), priorite: true, classe: 'tete-plein-media', sizes: '100vw', cadrageMobile: '50% 60%', attrs: 'data-iris-centre data-fx="zoom" data-fx-force="8"' })}
  <div class="conteneur tete-plein-texte">
    <p class="surtitre" data-anime>${c.t('services.tete.surtitre')}</p>
    <h1 class="tete-titre" data-anime="lignes">${c.t('services.tete.titre1')} <em>${c.t('services.tete.titre2')}</em></h1>
    <p class="chapo" data-anime>${c.t('services.tete.texte')}</p>
    <div class="tete-actions">
      ${c.lien('contact', { ancre: 'soumission', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="hero-urgence" href="tel:${contact.urgenceLien}" data-info-cle><span class="pastille" aria-hidden="true"></span>${c.t('commun.urgence')} · <strong>${contact.urgence}</strong></a>
    </div>
  </div>
</section>

<nav class="sommaire-produits" aria-label="${c.s('produits.tete.sommaire')}" data-sommaire>
  <ul class="conteneur">${c.donnees.services.map((f, i) => html`<li><a href="#${f.id}" data-sans-transition><span>${brut(String(i + 1).padStart(2, '0'))}</span>${f.famille}</a></li>`)}</ul>
</nav>

<section class="famille clair" id="reparer">
  <div class="conteneur">
    <div class="famille-tete">
      <div>
        <p class="surtitre" data-anime>01 · ${c.t('services.tete.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${F.reparer.famille}</h2>
      </div>
      <div>
        <p class="chapo" data-anime>${c.t('services.reparer.texte')}</p>
        <p class="specs-ligne" data-anime><strong>${c.t('services.reparer.types')}&nbsp;:</strong> ${c.t('services.reparer.typesListe')}</p>
      </div>
    </div>
    <p class="services-glisser" aria-hidden="true">${c.t('accueil.produits.glisser')}</p>
    <div class="services-cartes-defile" tabindex="0" role="region" aria-label="${F.reparer.famille}"><ul class="services-cartes" data-anime="cascade">${F.reparer.services.map(carte)}</ul></div>
  </div>
</section>

<section class="famille sombre" id="usiner">
  <div class="ruban-mat" aria-hidden="true" data-ruban data-audit-ignorer data-fx="mots-geants" data-fx-force="18">
    <p data-fx-rangee>${c.t('services.usiner.materiaux')} ${c.t('services.usiner.materiaux')} ${c.t('services.usiner.materiaux')}</p>
  </div>
  <div class="conteneur">
    <div class="famille-tete">
      <div>
        <p class="surtitre" data-anime>02 · ${c.t('services.tete.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${F.usiner.famille}</h2>
      </div>
      <p class="chapo" data-anime>${c.t('services.usiner.texte')}</p>
    </div>
    <p class="services-glisser" aria-hidden="true">${c.t('accueil.produits.glisser')}</p>
    <div class="services-cartes-defile" tabindex="0" role="region" aria-label="${F.usiner.famille}"><ul class="services-cartes services-cartes--trois" data-anime="cascade">${F.usiner.services.map(carte)}</ul></div>
  </div>
</section>

<section class="famille hvof clair" id="surfaces" data-effet="hvof">
  <div class="conteneur hvof-grille">
    <div class="hvof-visuel">
      <div class="hvof-cadre">
        ${c.media({ nom: 'grok/services-hvof', alt: c.s('services.hvof.alt'), classe: 'hvof-media', sizes: '(max-width: 860px) 100vw, 50vw' })}
        <canvas class="hvof-particules" data-audit-ignorer aria-hidden="true"></canvas>
      </div>
      <figure class="hvof-schema" data-etape="0" data-visuel>
        <svg viewBox="0 0 600 200" role="img" aria-label="${c.s('services.hvof.schema')}">
          <g class="hs-gaz"><path d="M8 62 H58" class="hs-fleche"/><path d="M8 138 H58" class="hs-fleche"/></g>
          <rect class="hs-chambre" x="60" y="52" width="120" height="96" rx="8"/>
          <path class="hs-flamme" d="M78 100 C 100 70, 140 82, 172 100 C 140 118, 100 130, 78 100 Z"/>
          <path class="hs-buse" d="M180 58 L 250 88 L 352 90 L 352 110 L 250 112 L 180 142 Z"/>
          <g class="hs-poudre"><path d="M248 18 L 278 18 L 268 44 L 258 44 Z"/><path d="M263 44 V 88" class="hs-fleche"/></g>
          <path class="hs-jet" d="M352 100 H 486"/>
          <circle class="hs-arbre" cx="540" cy="100" r="48"/>
          <path class="hs-depot" d="M 494 74 A 54 54 0 0 0 494 126"/>
          <g class="hs-num">${[[120, 36], [216, 36], [318, 36], [516, 36]].map(([x, y], i) => html`<circle cx="${x}" cy="${y - 7}" r="15"/><text x="${x}" y="${y}" text-anchor="middle">${brut(String(i + 1))}</text>`)}</g>
        </svg>
        <figcaption>${c.t('services.hvof.schemaNote')}</figcaption>
      </figure>
    </div>
    <div class="hvof-texte">
      <p class="surtitre" data-anime>03 · ${F.surfaces.famille}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('services.hvof.titre')}</h2>
      <p class="chapo" data-anime>${c.t('services.hvof.texte')}</p>
      <ol class="hvof-etapes">${[1, 2, 3, 4].map((k) => html`<li class="hvof-etape">
        <span class="etape-num">${brut('0' + k)}</span><div><h3>${c.t(`services.hvof.e${k}t`)}</h3><p>${c.t(`services.hvof.e${k}`)}</p></div></li>`)}</ol>
      <ul class="services-cartes services-cartes--deux" data-anime="cascade">${F.surfaces.services.map(carte)}</ul>
    </div>
  </div>
</section>

<section class="famille sur-place sombre" id="sur-place">
  <div class="conteneur sur-place-grille">
    <div>
      <p class="surtitre" data-anime>04 · ${c.t('services.tete.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${F['sur-place'].famille}</h2>
      <p class="chapo" data-anime>${c.t('services.surPlace.texte')}</p>
      <p class="encart encart--sombre" data-anime>${c.t('services.surPlace.urgence')} <a class="bouton" href="tel:${contact.urgenceLien}">${contact.urgence}</a></p>
    </div>
    <div class="trio" data-anime="cascade">
      ${c.media({ nom: 'service-sur-place', alt: alt('service-sur-place'), ratio: '16 / 10', classe: 'trio-grande', sizes: '(max-width: 760px) 100vw, 45vw' })}
      ${c.media({ nom: 'technicien', alt: alt('technicien'), ratio: '4 / 5', sizes: '(max-width: 760px) 50vw, 22vw' })}
      ${c.media({ nom: 'sur-place-2', alt: alt('sur-place-2'), ratio: '4 / 5', sizes: '(max-width: 760px) 50vw, 22vw' })}
    </div>
  </div>
</section>

<section class="appel appel--court sombre" id="appel">
  <div class="conteneur appel-ligne">
    <svg class="appel-roue-court" viewBox="0 0 200 200" data-roue-defilement data-effet="roue-appel" aria-hidden="true"><path d="${brut(roue(200, 24, 96, 84, 30))}" fill-rule="evenodd"/></svg>
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('services.appel.titre')}</h2>
      <p data-anime>${c.t('services.appel.texte')}</p>
    </div>
    <p class="appel-actions" data-anime>
      ${c.lien('contact', { ancre: 'soumission', params: 'besoin=reparation', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${contact.urgenceLien}">${c.t('commun.urgence')} · ${contact.urgence}</a>
    </p>
  </div>
</section>
`;
};
