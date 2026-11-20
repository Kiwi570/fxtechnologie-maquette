/* Réseau des centres de services : rayons tracés depuis Montréal vers chaque centre, noms en SVG (masqués sur
   téléphone, où la liste qui suit les donne), liste des centres avec leurs numéros. */
import { html, brut } from '../../outils/gabarit.mjs';

export function reseau(c) {
  const centres = c.donnees.centres;
  const hub = centres.find((x) => x.id === 'montreal');
  const P = (x) => [x.x * 10, x.y * 3];
  const [hx, hy] = P(hub);
  const rayons = centres.filter((x) => x !== hub).map((x) => {
    const [px, py] = P(x); const mx = (hx + px) / 2, my = Math.min(hy, py) - 40 - Math.abs(px - hx) * 0.12;
    return `M${hx} ${hy} Q${mx.toFixed(0)} ${my.toFixed(0)} ${px} ${py}`;
  });
  return html`<figure class="reseau" data-visuel>
      <svg viewBox="0 0 1000 300" class="reseau-svg" role="img" aria-label="${c.s('accueil.centres.alt')}">
        <path class="reseau-ocean" d="M800 30 C 840 120, 840 200, 800 280"/>
        <text class="reseau-ocean-texte" x="842" y="270">${c.t('accueil.centres.ocean')}</text>
        ${rayons.map((d) => html`<path class="reseau-ligne" d="${d}"/>`)}
        ${centres.map((x) => { const [px, py] = P(x); return html`<g class="reseau-point${x === hub ? ' reseau-hub' : ''}" transform="translate(${px} ${py})"><circle r="14" class="reseau-halo"/><circle r="${x === hub ? 9 : 6}"/></g><text class="reseau-nom" x="${px + (x.id === 'st-jerome' ? -14 : 14)}" y="${py - 14}" text-anchor="${x.id === 'st-jerome' ? 'end' : 'start'}">${x.nom}</text>`; })}
      </svg>
    </figure>
    <ul class="centres-liste" data-anime="cascade">${centres.map((x) => html`<li><strong>${x.nom}</strong><span>${x.region}</span>${x.tel ? html`<a href="tel:${x.lien}">${x.tel}</a>` : ''}</li>`)}</ul>`;
}
