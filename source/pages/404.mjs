/* Page 404 : l'engrenage auquel il manque une dent. Une seule version (langue par défaut). */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

/* Roue de 18 dents dont une manque : le chemin de la roue complète, la dent 0 retirée par un masque. */
export default (c) => html`
<section class="introuvable sombre" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="parallaxe"' })}
  <div class="conteneur introuvable-texte">
    <svg class="introuvable-roue" viewBox="0 0 200 200" data-iris-centre="disque" data-effet="dent-manquante" aria-hidden="true">
      <defs><mask id="sans-dent"><rect width="200" height="200" fill="#fff"/><rect x="186" y="88" width="16" height="24" fill="#000"/></mask></defs>
      <path d="${brut(roue(200, 18, 96, 80, 26, -Math.PI / 18 * 0.64))}" fill-rule="evenodd" mask="url(#sans-dent)"/>
    </svg>
    <h1 class="tete-titre" data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p class="chapo" data-anime>${c.t('introuvable.texte')}</p>
    <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
</section>
`;
