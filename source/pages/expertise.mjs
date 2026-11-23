/* Expertise : ouverture « inspection » (grand titre, vraie photo du carter annoté, anneau qui se trace autour
   de la trappe de visite), puis analyse des pannes, méthode en frise, normes, centres et secteurs. */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';
import { reseau } from '../gabarits/reseau.mjs';

export const page = { cle: 'expertise', fichier: 'expertise', imagePartage: 'expertise-ouverture-1280.webp' };

export default (c) => {
  const contact = c.site.contact;
  return html`
<section class="inspection sombre" id="debut" data-effet="inspection">
  <div class="conteneur inspection-grille">
    <div class="inspection-texte">
      <p class="surtitre" data-anime>${c.t('expertise.tete.surtitre')}</p>
      <h1 class="tete-titre tete-titre--geant" data-anime="lignes">${c.t('expertise.tete.titre1')} <em>${c.t('expertise.tete.titre2')}</em></h1>
      <p class="chapo" data-anime>${c.t('expertise.tete.texte')}</p>
      <div class="tete-actions" data-anime>
        ${c.lien('contact', { ancre: 'soumission', params: 'besoin=analyse', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="hero-urgence" href="tel:${contact.urgenceLien}" data-info-cle><span class="pastille" aria-hidden="true"></span>${c.t('commun.urgence')} · <strong>${contact.urgence}</strong></a>
      </div>
    </div>
    <div class="inspection-visuel" data-iris-centre data-effet="loupe-inspection" data-souris>
      ${c.media({ nom: 'expertise-ouverture', alt: c.s('expertise.tete.alt'), priorite: true, classe: 'inspection-media', ratio: '4 / 3', sizes: '(max-width: 860px) 100vw, 55vw' })}
      <svg class="inspection-anneau" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/><circle class="anneau-pointille" cx="50" cy="50" r="49.5"/></svg>
      <span class="loupe" aria-hidden="true" data-audit-ignorer></span>
      <p class="loupe-indice" aria-hidden="true"><span class="indice-souris">${c.t('expertise.tete.loupeSouris')}</span><span class="indice-doigt">${c.t('expertise.tete.loupeDoigt')}</span></p>
    </div>
  </div>
</section>

<section class="analyse clair" id="analyse">
  <div class="conteneur">
    <div class="famille-tete">
      <h2 class="titre-section" data-anime="lignes">${c.t('expertise.analyse.titre')}</h2>
      <p class="chapo" data-anime>${c.t('expertise.analyse.texte')}</p>
    </div>
    <ol class="apports" data-anime="cascade">${[1, 2, 3].map((k) => html`<li>
      <span class="etape-num">${brut('0' + k)}</span><h3>${c.t(`expertise.analyse.a${k}t`)}</h3><p>${c.t(`expertise.analyse.a${k}`)}</p></li>`)}</ol>
    <div class="vignettes vignettes--larges" data-anime="cascade">
      ${c.media({ nom: 'pannes-macro', alt: c.s('expertise.analyse.legende1'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 30vw', legende: c.t('expertise.analyse.legende1') })}
      ${c.media({ nom: 'pannes-carter', alt: c.s('expertise.analyse.legende2'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 30vw', legende: c.t('expertise.analyse.legende2') })}
      ${c.media({ nom: 'reducteur-arbres', alt: c.s('commun.reducteurArbres'), ratio: '3 / 2', sizes: '(max-width: 760px) 50vw, 30vw', legende: c.t('commun.reducteurArbres') })}
    </div>
  </div>
</section>

<section class="frise sombre" id="methode">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('expertise.methode.titre')}</h2>
    <div class="frise-piste">
      <svg class="frise-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="${brut(Array.from({ length: 40 }, (_, i) => `${i ? 'L' : 'M'}${i * 25} ${i % 2 ? 8 : 20} L${i * 25 + 12.5} ${i % 2 ? 20 : 8}`).join(' '))}" fill="none" stroke-width="2"/></svg>
      <ol class="frise-etapes" data-anime="cascade">${c.donnees.etapes.map((e, i) => html`<li>
        <span class="frise-dent" aria-hidden="true"></span>
        <span class="etape-num">${brut(String(i + 1).padStart(2, '0'))}</span><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="normes clair" id="normes">
  <div class="conteneur normes-grille">
    ${c.media({ nom: 'atlas', alt: c.s('expertise.normes.legende'), ratio: '4 / 3', classe: 'normes-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"', legende: c.t('expertise.normes.legende') })}
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('expertise.normes.titre')}</h2>
      <ul class="coches" data-anime="cascade"><li>${c.t('expertise.normes.agma')}</li><li>${c.t('expertise.normes.atlas')}</li><li>${c.t('expertise.normes.annees')}</li></ul>
    </div>
  </div>
</section>

<section class="centres clair" id="centres" data-effet="carte-centres">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('expertise.centres.titre')}</h2>
    ${reseau(c)}
  </div>
</section>

<section class="secteurs-grille-section sombre" id="secteurs">
  <div class="conteneur">
    <div class="famille-tete">
      <h2 class="titre-section" data-anime="lignes">${c.t('expertise.secteurs.titre')}</h2>
      <p class="chapo" data-anime>${c.t('expertise.secteurs.texte')}</p>
    </div>
    <ol class="secteurs-tableau" data-anime="cascade">${c.donnees.secteurs.map((s, i) => html`<li><span>${brut(String(i + 1).padStart(2, '0'))}</span>${s}<svg viewBox="0 0 40 40" aria-hidden="true"><path d="${brut(roue(40, 10, 19, 14, 5, i * 0.3))}" fill-rule="evenodd"/></svg></li>`)}</ol>
  </div>
</section>

<section class="appel appel--court sombre" id="appel">
  <div class="conteneur appel-ligne">
    <svg class="appel-roue-court" viewBox="0 0 200 200" data-roue-defilement data-effet="roue-appel" aria-hidden="true"><path d="${brut(roue(200, 24, 96, 84, 30))}" fill-rule="evenodd"/></svg>
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('expertise.appel.titre')}</h2>
      <p data-anime>${c.t('expertise.appel.texte')}</p>
    </div>
    <p class="appel-actions" data-anime>
      ${c.lien('contact', { ancre: 'soumission', params: 'besoin=analyse', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${contact.urgenceLien}">${c.t('commun.urgence')} · ${contact.urgence}</a>
    </p>
  </div>
</section>
`;
};
