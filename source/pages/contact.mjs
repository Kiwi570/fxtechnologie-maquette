/* Contact : ouverture courte (titre + cadran d'urgence), soumission en quatre étapes avec récapitulatif
   collant, puis coordonnées, centres et réseau. */
import { html, brut } from '../../outils/gabarit.mjs';
import { roue } from '../gabarits/roue.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'enseigne-800.webp' };

export default (c) => {
  const k = c.site.contact;
  const alt = (n) => c.donnees.images?.[n]?.alt || '';
  const choix = (nom, valeurs, cle, requis = true) => html`${valeurs.map(([v, l]) => html`<label class="choix"><input type="radio" name="${nom}" value="${v}"${requis ? brut(' required') : ''} data-recap-cle="${cle}"><span>${c.t(l)}</span></label>`)}`;
  return html`
<section class="tete-contact sombre" id="debut">
  <div class="conteneur tete-contact-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('contact.tete.surtitre')}</p>
      <h1 class="tete-titre" data-anime="lignes">${c.t('contact.tete.titre')}</h1>
      <p class="chapo" data-anime>${c.t('contact.tete.texte')}</p>
      <p class="tete-actions" data-anime><a class="bouton" href="#soumission" data-action-principale data-sans-transition>${c.t('commun.actionEntete')}</a></p>
    </div>
    <a class="cadran" href="tel:${k.urgenceLien}" data-info-cle data-iris-centre="disque" data-effet="cadran-urgence">
      <svg class="urgence-roue" viewBox="0 0 300 300" aria-hidden="true"><path d="${brut(roue(300, 36, 148, 134, 0))}"/></svg>
      <span class="cadran-texte"><span class="cadran-titre">${c.t('contact.tete.urgenceTitre')}</span><strong>${k.urgence}</strong><span>${c.t('contact.tete.urgenceTexte')}</span></span>
    </a>
  </div>
</section>

<section class="soumission clair" id="soumission">
  <div class="conteneur soumission-grille">
    <form class="formulaire etapes-form" data-formulaire data-etapes action="#" novalidate>
      <div class="etapes-tete">
        <h2 class="titre-section" data-anime="lignes">${c.t('contact.form.titre')}</h2>
        <p class="note">${c.t('contact.form.simule')}</p>
        <p class="etapes-compte" aria-live="polite">${c.t('contact.form.etape')} <span data-etape-num>1</span> ${c.t('contact.form.sur')} 4 · <span data-etape-titre>${c.t('contact.form.e1')}</span></p>
        <div class="etapes-barre" aria-hidden="true"><span></span></div>
      </div>
      <fieldset data-etape-form data-titre="${c.s('contact.form.e1')}">
        <legend tabindex="-1">${c.t('contact.form.besoin')}</legend>
        <div class="choix-grille">${choix('besoin', [['fabrication', 'contact.form.bFabrication'], ['reparation', 'contact.form.bReparation'], ['sur-place', 'contact.form.bSurPlace'], ['analyse', 'contact.form.bAnalyse']], c.s('contact.form.e1'))}</div>
        <p class="erreur" data-etape-erreur role="alert" hidden>${c.t('contact.form.err1')}</p>
      </fieldset>
      <fieldset data-etape-form data-titre="${c.s('contact.form.e2')}" hidden>
        <legend tabindex="-1">${c.t('contact.form.e2')}</legend>
        <div class="champ"><label for="f-piece">${c.t('contact.form.piece')}</label>
          <select id="f-piece" name="piece" data-recap-cle="${c.s('contact.form.piece')}"><option value="">${c.t('contact.form.choisir')}</option>
            <option value="engrenage">${c.t('contact.form.pEngrenage')}</option>
            <option value="couronne">${c.t('contact.form.pCouronne')}</option>
            <option value="sechage">${c.t('contact.form.pSechage')}</option>
            <option value="reducteur">${c.t('contact.form.pReducteur')}</option>
            <option value="pompe">${c.t('contact.form.pPompe')}</option>
            <option value="moteur">${c.t('contact.form.pMoteur')}</option>
            <option value="autre">${c.t('contact.form.pAutre')}</option>
          </select></div>
        <div class="champ-ligne">
          <div class="champ"><label for="f-dim">${c.t('contact.form.dimensions')}</label><input id="f-dim" name="dimensions" placeholder="${c.s('contact.form.dimensionsAide')}" data-recap-cle="${c.s('contact.form.dimensions')}"></div>
          <div class="champ champ--court"><label for="f-qte">${c.t('contact.form.quantite')}</label><input id="f-qte" name="quantite" type="number" min="1" inputmode="numeric" value="1" data-recap-cle="${c.s('contact.form.quantite')}"></div>
        </div>
        <div class="champ"><label for="f-desc">${c.t('contact.form.description')}</label><textarea id="f-desc" name="description" rows="4" required data-recap-cle="${c.s('contact.form.description')}"></textarea></div>
        <p class="erreur" data-etape-erreur role="alert" hidden>${c.t('contact.form.err2')}</p>
      </fieldset>
      <fieldset data-etape-form data-titre="${c.s('contact.form.e3')}" hidden>
        <legend tabindex="-1">${c.t('contact.form.delai')}</legend>
        <div class="choix-grille">${choix('delai', [['urgent', 'contact.form.dUrgent'], ['planifie', 'contact.form.dPlanifie'], ['souple', 'contact.form.dSouple']], c.s('contact.form.e3'))}</div>
        <p class="note-urgente" data-note-urgent hidden>${c.t('contact.form.urgentNote')} <a href="tel:${k.urgenceLien}">${k.urgence}</a></p>
        <div class="champ-ligne">
          <div class="champ"><label for="f-date">${c.t('contact.form.dateArret')}</label><input id="f-date" name="date" type="date" data-recap-cle="${c.s('contact.form.dateArret')}"></div>
          <div class="champ"><label for="f-secteur">${c.t('contact.form.secteur')}</label><select id="f-secteur" name="secteur" data-recap-cle="${c.s('contact.form.secteur')}"><option value="">—</option>${c.donnees.secteurs.map((s) => html`<option>${s}</option>`)}</select></div>
        </div>
        <p class="erreur" data-etape-erreur role="alert" hidden>${c.t('contact.form.err3')}</p>
      </fieldset>
      <fieldset data-etape-form data-titre="${c.s('contact.form.e4')}" hidden>
        <legend tabindex="-1">${c.t('contact.form.e4')}</legend>
        <div class="champ-ligne">
          <div class="champ"><label for="f-nom">${c.t('contact.form.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required data-recap-cle="${c.s('contact.form.nom')}"></div>
          <div class="champ"><label for="f-ent">${c.t('contact.form.entreprise')}</label><input id="f-ent" name="entreprise" autocomplete="organization" data-recap-cle="${c.s('contact.form.entreprise')}"></div>
        </div>
        <div class="champ-ligne">
          <div class="champ"><label for="f-mail">${c.t('contact.form.courriel')}</label><input id="f-mail" name="email" type="email" autocomplete="email" required data-recap-cle="${c.s('contact.form.courriel')}"></div>
          <div class="champ"><label for="f-tel">${c.t('contact.form.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" data-recap-cle="${c.s('contact.form.tel')}"></div>
        </div>
        <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
        <p class="erreur" data-etape-erreur role="alert" hidden>${c.t('contact.form.err4')}</p>
      </fieldset>
      <div class="etapes-nav">
        <button type="button" class="bouton bouton--contour" data-precedent hidden>${c.t('contact.form.precedent')}</button>
        <button type="button" class="bouton" data-suivant>${c.t('contact.form.suivant')}</button>
        <button type="submit" class="bouton" data-envoyer hidden>${c.t('contact.form.envoyer')}</button>
      </div>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
    <aside class="recap" aria-label="${c.s('contact.form.recap')}">
      <p class="surtitre">${c.t('contact.form.recap')}</p>
      <p class="recap-vide" data-recap-vide>${c.t('contact.form.recapVide')}</p>
      <dl data-recap></dl>
      <svg class="recap-roue" viewBox="0 0 120 120" aria-hidden="true" data-roue-defilement><path d="${brut(roue(120, 18, 58, 48, 16))}" fill-rule="evenodd"/></svg>
    </aside>
  </div>
</section>

<section class="coordonnees sombre" id="coordonnees">
  <div class="conteneur coord-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('contact.coord.titre')}</h2>
      <dl class="coord-liste" data-anime="cascade">
        <div><dt>${c.t('contact.coord.adresse')}</dt><dd>${k.adresse}</dd></div>
        <div><dt>${c.t('commun.urgence')}</dt><dd><a href="tel:${k.urgenceLien}">${k.urgence}</a></dd></div>
        <div><dt>${c.t('contact.coord.courriel')}</dt><dd><a href="mailto:${k.email}">${k.email}</a></dd></div>
        <div><dt>${c.t('contact.coord.telecopieur')}</dt><dd>${k.telecopieur}</dd></div>
      </dl>
      <p class="surtitre surtitre--petit">${c.t('contact.coord.centres')}</p>
      <ul class="centres-mini" data-anime="cascade">${c.donnees.centres.filter((x) => x.tel).map((x) => html`<li><strong>${x.nom}</strong> <a href="tel:${x.lien}">${x.tel}</a></li>`)}</ul>
    </div>
    ${c.media({ nom: 'enseigne', alt: alt('enseigne'), ratio: '4 / 3', classe: 'coord-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>
`;
};
