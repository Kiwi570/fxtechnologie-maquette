/* Effets propres à FX Technologie (direction « Acier et braise »).
   Le socle gère ouverture, voile, en-tête, menu, boucles, mesures et bibliothèque d'effets (posés par attributs).
   Ici : l'intro des roues qui s'engrènent, les étincelles, la couronne à l'échelle, l'index des services,
   la roue de la méthode, le réseau des centres, la roue de l'appel, la scène HVOF, les capacités,
   le formulaire de soumission en étapes, et l'engrènement de la marge. Chaque effet porte data-effet. */
import { demarrer, boucle, versObjet } from './socle/index.js?v=2';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const etroit = () => window.matchMedia('(max-width: 760px)').matches;
const DPR = () => Math.min(window.devicePixelRatio || 1, 1.5);

/* ── Étincelles : particules de meulage, pilotées par le temps écoulé. ── */
function etincelles(canvas, { source, taux = 14, gravite = 900, vitesse = [180, 420], angle = [-2.6, -1.2], vie = [0.5, 1.2] } = {}) {
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, cumul = 0, rafale = 0, src = { x: 0, y: 0 };
  const parts = [];
  /* Mesures au chargement et au redimensionnement seulement : jamais pendant le défilement. */
  const taille = () => {
    const r = canvas.getBoundingClientRect(); w = r.width; h = r.height;
    canvas.width = Math.round(w * DPR()); canvas.height = Math.round(h * DPR());
    ctx.setTransform(DPR(), 0, 0, DPR(), 0, 0);
    try { src = source(w, h); } catch (e) { /* source indisponible */ }
  };
  taille();
  new ResizeObserver(taille).observe(canvas);
  const alea = (a, b) => a + Math.random() * (b - a);
  const emettre = (n) => {
    const s = src;
    for (let i = 0; i < n; i++) {
      const a = alea(angle[0], angle[1]), v = alea(vitesse[0], vitesse[1]);
      parts.push({ x: s.x, y: s.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t: 0, vie: alea(vie[0], vie[1]) });
    }
  };
  const b = boucle(canvas, (dt) => {
    cumul += dt * taux;
    if (rafale > 0) { emettre(Math.ceil(rafale)); rafale = 0; }
    while (cumul > 1) { emettre(1); cumul -= 1; }
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.t += dt; if (p.t > p.vie) { parts.splice(i, 1); continue; }
      const ox = p.x, oy = p.y;
      p.vy += gravite * dt; p.x += p.vx * dt; p.y += p.vy * dt;
      const k = 1 - p.t / p.vie;
      ctx.strokeStyle = `rgba(255, ${Math.round(140 + 90 * k)}, ${Math.round(60 * k)}, ${k})`;
      ctx.lineWidth = 1.6 * k + 0.4;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';
  });
  return { rafale(n) { rafale += n; }, recalculer() { try { src = source(w, h); } catch (e) { /* rien */ } }, controle: b };
}

/* Centre de la couronne de la photo d'ouverture, rapporté à l'écran (object-fit: cover). */
function centreCouronne() {
  const fig = $('.hero-media'); const img = fig && $('img', fig);
  if (!img || !img.naturalWidth) return null;
  const r = fig.getBoundingClientRect();
  const mob = etroit() && window.matchMedia('(orientation: portrait)').matches;
  const [cx, cy] = mob ? [0.5, 0.62] : [0.73, 0.5];
  const [px, py] = (getComputedStyle(img).objectPosition || '50% 50%').split(' ').map((v) => parseFloat(v) / 100);
  const iw = img.naturalWidth, ih = img.naturalHeight, k = Math.max(r.width / iw, r.height / ih);
  const dw = iw * k, dh = ih * k;
  return { x: (r.width - dw) * px + cx * dw, y: (r.height - dh) * py + cy * dh, rayon: 0.42 * dh };
}

/* ── Intro et ouverture de l'accueil. ── */
let sparksHero = null;
function preparerAccueil() {
  const hero = $('.hero');
  if (!hero) return;
  const canvas = $('.hero-etincelles');
  sparksHero = etincelles(canvas, {
    taux: etroit() ? 10 : 18,
    source: () => { const c = centreCouronne() || { x: 0, y: 0, rayon: 0 }; return { x: c.x - c.rayon * 0.62, y: c.y + c.rayon * 0.78 }; },
    angle: [-2.9, -1.7], vitesse: [140, 360],
  });
  /* Souffle de la photo d'ouverture : un zoom très lent, qui ne tourne qu'à l'écran (le bord n'est jamais visible). */
  const pic = $('.hero-media picture');
  if (pic) boucle(pic, (dt, t) => { pic.style.transform = `scale(${(1.045 + 0.035 * Math.sin(t * 0.45)).toFixed(4)})`; });
  const img = $('.hero-media img');
  if (img && sparksHero) { if (img.complete) sparksHero.recalculer(); else img.addEventListener('load', () => sparksHero.recalculer(), { once: true }); }
}

/* ── Couronne à l'échelle : la couronne grandit et tourne au défilement ; les boutons changent la largeur de face. ── */
function couronneEchelle() {
  const s = $('.couronne'); if (!s || !gsap) return;
  const anneau = $('.echelle-couronne', s), cote = $$('.echelle-cote line', s), barre = $('.echelle-face-barre', s), texte = $('.echelle-face-texte', s);
  const coteL = $('.efc-l', s), coteD = $('.efc-d', s);
  const PX = 408 / 320; /* même échelle que le diamètre : 320 po = 408 unités */
  gsap.fromTo(anneau, { scale: 0.42, rotation: -70, svgOrigin: '236 236' }, { scale: 1, rotation: 0, svgOrigin: '236 236', ease: 'none', scrollTrigger: { trigger: s, start: 'top 85%', end: 'center 55%', scrub: 0.6 } });
  gsap.fromTo(cote, { scaleX: 0, svgOrigin: '236 472' }, { scaleX: 1, svgOrigin: '236 472', ease: 'none', scrollTrigger: { trigger: s, start: 'top 60%', end: 'center 55%', scrub: 0.6 } });
  const choisir = (bouton, anime = true) => {
    $$('.capacites tr', s).forEach((tr) => { const actif = tr.contains(bouton); tr.classList.toggle('actif', actif); $('button', tr)?.setAttribute('aria-pressed', String(actif)); });
    const f = parseFloat(bouton.dataset.face), w = f * PX, x2 = 496 + w;
    gsap.to(barre, { attr: { width: w }, duration: anime ? 0.7 : 0, ease: 'power3.out' });
    gsap.to(coteL, { attr: { x2 }, duration: anime ? 0.7 : 0, ease: 'power3.out' });
    gsap.to(coteD, { attr: { x1: x2, x2 }, duration: anime ? 0.7 : 0, ease: 'power3.out' });
    if (texte) texte.textContent = `${String(f).replace('.', ',')}\u00a0po`;
  };
  $$('.capacite-choix', s).forEach((b) => b.addEventListener('click', () => choisir(b)));
  choisir($('.capacite-choix', s), false);
}

/* ── Index des services : la ligne au milieu de l'écran devient active, la photo la suit. ── */
function indexServices() {
  const s = $('.services[data-effet="index-services"]'); if (!s || !window.ScrollTrigger) return;
  const images = $$('.services-image', s), legende = $('[data-services-legende]', s);
  $$('.index-ligne', s).forEach((li) => {
    window.ScrollTrigger.create({
      trigger: li, start: 'top 58%', end: 'bottom 58%',
      onToggle: (st) => {
        li.classList.toggle('actif', st.isActive);
        if (st.isActive) {
          li.classList.add('vue');
          images.forEach((im) => im.classList.toggle('actif', im.dataset.image === li.dataset.indexImage));
          if (legende) legende.textContent = $('.index-texte', li)?.textContent || '';
        }
      },
    });
  });
  /* Photos du panneau chargées et décodées après l'ouverture, une à une : jamais de case noire en défilant vite. */
  const precharger = () => {
    const imgs = images.map((f) => $('img', f)).filter(Boolean);
    let k = 0;
    const suivante = () => {
      const im = imgs[k++]; if (!im) return;
      im.loading = 'eager';
      (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).finally(() => { if (window.requestIdleCallback) window.requestIdleCallback(suivante, { timeout: 400 }); else setTimeout(suivante, 60); });
    };
    suivante();
  };
  if (document.readyState === 'complete') setTimeout(precharger, 2500); else window.addEventListener('load', () => setTimeout(precharger, 2500), { once: true });
  const roue = $('.services-roue', s);
  if (roue && gsap) gsap.to(roue, { rotation: 360, ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
}

/* ── Méthode : la grande roue tourne d'une dent repérée par étape, le pignon suit (rapport 2:1). ── */
function denture() {
  const s = $('.methode[data-effet="denture"]'); if (!s || !gsap) return;
  const etapes = $$('.etape', s), reperes = $$('.methode-repere', s), roue = $('.methode-roue', s), pignon = $('.methode-pignon', s), compte = $('[data-methode-compte]', s), detail = $('[data-methode-detail]', s);
  const n = etapes.length, CIBLE = 41.7, PAS = 18;
  const angle = (kf) => CIBLE - (4 * kf + 0.45) * PAS;
  gsap.set(roue, { rotation: angle(0), transformOrigin: '50% 50%' });
  gsap.set(pignon, { rotation: 0, transformOrigin: '50% 50%' });
  let courant = -1;
  const activer = (k) => {
    if (k === courant) return; courant = k;
    etapes.forEach((e, i) => e.classList.toggle('actif', i === k));
    reperes.forEach((r, i) => r.classList.toggle('actif', i === k));
    if (compte) compte.textContent = String(k + 1).padStart(2, '0');
    if (detail) detail.textContent = $('p', etapes[k])?.textContent || '';
  };
  activer(0);
  window.ScrollTrigger.create({
    trigger: s, start: 'top top', end: 'bottom bottom', scrub: 0.4,
    onUpdate: (st) => {
      const p = st.progress, kf = Math.min(n - 1, p * (n - 0.6));
      const a = angle(kf);
      gsap.set(roue, { rotation: a });
      gsap.set(pignon, { rotation: -2 * (a - angle(0)) });
      activer(Math.min(n - 1, Math.round(kf)));
    },
  });
}

/* ── Réseau des centres : la ligne se trace d'ouest en est, les points s'allument à son passage. ── */
function reseau(racine = document) {
  $$('.reseau', racine).forEach((fig) => {
    const lignes = $$('.reseau-ligne', fig); if (!lignes.length || !gsap) return;
    const points = $$('.reseau-point:not(.reseau-hub)', fig);
    lignes.forEach((l) => { const L = l.getTotalLength(); gsap.set(l, { strokeDasharray: L, strokeDashoffset: L }); });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fig, start: 'top 85%', end: 'bottom 50%', scrub: 0.5,
        onUpdate: (st) => points.forEach((p, i) => p.classList.toggle('actif', st.progress >= (i + 1) / (points.length + 0.5))),
      },
    });
    lignes.forEach((l, i) => tl.to(l, { strokeDashoffset: 0, ease: 'none', duration: 1 }, i * 0.35));
    $$('.reseau-halo', fig).forEach((h, i) => gsap.fromTo(h, { scale: 0.6, opacity: 1 }, { scale: 1.6, opacity: 0, duration: 1.8, repeat: -1, ease: 'power2.out', delay: i * 0.3 }));
  });
}

/* ── Roues de l'appel final : elles tournent avec le défilement, et le visiteur peut les lancer
   (glisser à la souris ou au doigt, clic ou touche Entrée) ; l'élan retombe en douceur, les étincelles suivent la vitesse. ── */
function roueAppel() {
  const s = $('.appel'); if (!s || !gsap) return;
  const bouton = $('.appel-roues', s); if (!bouton) return;
  const roue = $('.appel-roue path', s), pignon = $('.appel-pignon path', s), roueSvg = $('.appel-roue', s);
  let defil = 0, main = 0, vitesse = 0, prise = null, dernier = 0;
  window.ScrollTrigger.create({ trigger: s, start: 'top bottom', end: 'bottom top', onUpdate: (st) => { defil = -90 + 180 * st.progress; } });
  const gerbe = etincelles($('.appel-etincelles', s), {
    taux: 0, angle: [-2.4, -0.9],
    source: () => { const rs = s.getBoundingClientRect(), rz = bouton.getBoundingClientRect(); return { x: rz.left - rs.left + rz.width * 0.74, y: rz.top - rs.top + rz.height * 0.66 }; },
  });
  let centre = { x: 0, y: 0 };
  const angle = (e) => Math.atan2(e.clientY - centre.y, e.clientX - centre.x) * 180 / Math.PI;
  bouton.addEventListener('pointerdown', (e) => {
    const r = roueSvg.getBoundingClientRect(); centre = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    prise = { a: angle(e), t: performance.now() }; dernier = 0; bouton.setPointerCapture(e.pointerId);
    if (gerbe) gerbe.recalculer();
  });
  bouton.addEventListener('pointermove', (e) => {
    if (!prise) return;
    let a = angle(e), d = a - prise.a; if (d > 180) d -= 360; if (d < -180) d += 360;
    const t = performance.now(), dt = Math.max(16, t - prise.t);
    main += d; vitesse = (d / dt) * 1000; prise = { a, t }; dernier = Math.abs(d);
  });
  const lacher = () => { prise = null; };
  bouton.addEventListener('pointerup', lacher); bouton.addEventListener('pointercancel', lacher);
  /* Clic sans glisser, ou clavier : une impulsion. */
  bouton.addEventListener('click', () => { if (dernier < 2) { vitesse += 540; if (gerbe) { gerbe.recalculer(); gerbe.rafale(24); } } });
  boucle(bouton, (dt) => {
    if (!prise) { main += vitesse * dt; vitesse *= Math.pow(0.35, dt); if (Math.abs(vitesse) < 2) vitesse = 0; }
    const a = defil + main;
    roue.style.transform = `rotate(${a.toFixed(2)}deg)`;
    pignon.style.transform = `rotate(${(-2 * a + 11).toFixed(2)}deg)`;
    if (gerbe && Math.abs(vitesse) > 60 && Math.random() < Math.min(0.9, Math.abs(vitesse) / 900)) gerbe.rafale(1 + Math.round(Math.abs(vitesse) / 300));
  });
}

/* ── Simulateur de rapport (page Produits) : pignon et roue dessinés au bon nombre de dents, qui tournent
   à la proportion de vitesse du rapport choisi. ── */
function cheminRoue(cx, cy, z, m, decal) {
  const r = (m * z) / 2, R = r + m, rp = r - 1.25 * m, t = (2 * Math.PI) / z, f = (v) => v.toFixed(2);
  const pt = (rr, a) => `${f(cx + rr * Math.cos(a))} ${f(cy + rr * Math.sin(a))}`;
  let d = '';
  for (let i = 0; i < z; i++) {
    const a = decal + i * t, p = [a, a + 0.2 * t, a + 0.32 * t, a + 0.58 * t, a + 0.7 * t, a + t];
    d += (i === 0 ? `M${pt(rp, p[0])}` : '') + ` A${f(rp)} ${f(rp)} 0 0 1 ${pt(rp, p[1])} L${pt(R, p[2])} A${f(R)} ${f(R)} 0 0 1 ${pt(R, p[3])} L${pt(rp, p[4])} A${f(rp)} ${f(rp)} 0 0 1 ${pt(rp, p[5])}`;
  }
  const h = Math.max(4, rp * 0.28);
  return `${d}Z M${f(cx + h)} ${f(cy)} A${f(h)} ${f(h)} 0 1 0 ${f(cx - h)} ${f(cy)} A${f(h)} ${f(h)} 0 1 0 ${f(cx + h)} ${f(cy)}Z`;
}
function simulateurRapport() {
  const s = $('[data-effet="simulateur-rapport"]'); if (!s) return;
  const z1i = $('[data-z1]', s), z2i = $('[data-z2]', s), ni = $('[data-n]', s), svg = $('.rapport-svg', s);
  const gp = $('.rapport-pignon', s), gr = $('.rapport-roue', s), pp = $('path', gp), pr = $('path', gr);
  const axe1 = $('.rapport-axe-1', s), axe2 = $('.rapport-axe-2', s), lien = $('[data-rapport-lien]', s);
  const fmt = (v, d = 1) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: d, minimumFractionDigits: d }).format(v);
  let z1 = 17, z2 = 71, c1 = { x: 0, y: 0 }, c2 = { x: 0, y: 0 }, theta = 0, i = 1;
  const dessiner = () => {
    z1 = +z1i.value; z2 = +z2i.value;
    const m = Math.min(540 / (z1 + z2 + 4), 400 / (z2 + 2.5));
    const r1 = (m * z1) / 2, r2 = (m * z2) / 2, larg = 2 * r1 + 2 * r2 + 2 * m;
    const x0 = (600 - larg) / 2 + m;
    c1 = { x: x0 + r1, y: 220 }; c2 = { x: c1.x + r1 + r2, y: 220 };
    pp.setAttribute('d', cheminRoue(c1.x, c1.y, z1, m, -0.45 * (2 * Math.PI / z1)));
    pr.setAttribute('d', cheminRoue(c2.x, c2.y, z2, m, Math.PI - 0.95 * (2 * Math.PI / z2)));
    axe1.setAttribute('cx', c1.x); axe1.setAttribute('cy', c1.y); axe2.setAttribute('cx', c2.x); axe2.setAttribute('cy', c2.y);
    i = z2 / z1;
    const n = Math.max(0, +ni.value || 0);
    $('[data-z1-val]', s).textContent = z1; $('[data-z2-val]', s).textContent = z2;
    $('[data-leg-z1]', s).textContent = z1; $('[data-leg-z2]', s).textContent = z2;
    $('[data-i]', s).textContent = `1\u00a0:\u00a0${fmt(i)}`;
    $('[data-n2]', s).textContent = fmt(n / i, 0);
    $('[data-c]', s).textContent = fmt(i);
    if (lien) { const u = new URL(lien.href, location.href); u.searchParams.set('rapport', fmt(i)); lien.href = u.pathname + u.search + u.hash; }
  };
  ['input', 'change'].forEach((ev) => [z1i, z2i, ni].forEach((el) => el.addEventListener(ev, dessiner)));
  dessiner();
  boucle(svg, (dt) => {
    const n = Math.max(0, +ni.value || 0);
    theta += dt * Math.min(5, 0.9 * (n / 1750) * 2.4);
    gp.setAttribute('transform', `rotate(${(theta * 180 / Math.PI).toFixed(2)} ${c1.x.toFixed(2)} ${c1.y.toFixed(2)})`);
    gr.setAttribute('transform', `rotate(${(-theta / i * 180 / Math.PI).toFixed(2)} ${c2.x.toFixed(2)} ${c2.y.toFixed(2)})`);
  });
}

/* ── Loupe d'inspection (page Expertise) : un cercle grossit la photo sous la souris ; au toucher, là où l'on touche. ── */
function loupeInspection() {
  const zone = $('[data-effet="loupe-inspection"]'); if (!zone) return;
  const loupe = $('.loupe', zone), img = $('.inspection-media img', zone); if (!loupe || !img) return;
  const K = 2.4; let rect = null, minuterie = 0;
  const mesurer = () => { rect = img.getBoundingClientRect(); };
  const placer = (x, y) => {
    if (!rect) mesurer();
    const lx = x - rect.left, ly = y - rect.top;
    loupe.style.backgroundImage = `url("${img.currentSrc || img.src}")`;
    loupe.style.backgroundSize = `${rect.width * K}px ${rect.height * K}px`;
    loupe.style.backgroundPosition = `${-(lx * K - 80)}px ${-(ly * K - 80)}px`;
    loupe.style.transform = `translate(${lx - 80}px, ${ly - 80}px)`;
    zone.classList.add('loupe-active');
  };
  zone.addEventListener('pointerenter', mesurer);
  window.addEventListener('resize', () => { rect = null; });
  zone.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.pointerType === 'pen') placer(e.clientX, e.clientY); });
  zone.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') zone.classList.remove('loupe-active'); });
  zone.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    mesurer(); placer(e.clientX, e.clientY);
    clearTimeout(minuterie); minuterie = setTimeout(() => zone.classList.remove('loupe-active'), 2600);
  });
}

/* ── Roues qui tournent avec le défilement (appels courts, récapitulatif). ── */
function rouesDefilement() {
  if (!gsap) return;
  $$('[data-roue-defilement]').forEach((r) => {
    const s = r.closest('section') || r;
    gsap.fromTo(r, { rotation: -120 }, { rotation: 120, transformOrigin: '50% 50%', ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ── Engrènement de la marge (grands écrans) : deux roues qui tournent avec le défilement, rapport 2:1. ── */
function engrenement() {
  const e = $('.engrenement'); if (!e) return;
  const g = $('.eg-grande', e), p = $('.eg-petite', e);
  let attente = false;
  const maj = () => { attente = false; const a = window.scrollY * 0.18; g.style.transform = `rotate(${a}deg)`; p.style.transform = `rotate(${-a * 2 + 11}deg)`; };
  window.addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(maj); } }, { passive: true });
  maj();
}

/* ── Capacités (page Produits) : les barres de largeur de face se dessinent au défilement. ── */
function capacites() {
  $$('[data-effet="capacites"]').forEach((t) => {
    if (!gsap) return;
    gsap.fromTo($$('.cap-barre span', t), { scaleX: 0 }, { scaleX: 1, transformOrigin: '0 50%', stagger: 0.12, ease: 'none', scrollTrigger: { trigger: t, start: 'top 85%', end: 'bottom 60%', scrub: 0.5 } });
  });
}

/* ── Scène HVOF (page Services) : l'étape au milieu de l'écran s'allume, la flamme projette plus de particules. ── */
function hvof() {
  const s = $('[data-effet="hvof"]'); if (!s || !window.ScrollTrigger) return;
  const etapes = $$('.hvof-etape', s), canvas = $('.hvof-particules', s);
  let niveau = 0;
  const jet = etincelles(canvas, {
    taux: 8, gravite: 120, vitesse: [260, 520], angle: [-0.35, 0.25], vie: [0.25, 0.6],
    source: (w, h) => ({ x: w * 0.42, y: h * 0.5 }),
  });
  etapes.forEach((e, i) => window.ScrollTrigger.create({
    trigger: e, start: 'top 60%', end: 'bottom 60%',
    onToggle: (st) => {
      e.classList.toggle('actif', st.isActive);
      if (st.isActive) { niveau = i; s.style.setProperty('--hvof', String(i)); const sch = $('.hvof-schema', s); if (sch) sch.dataset.etape = String(i + 1); if (jet) { jet.rafale(6 + i * 10); } }
    },
  }));
  if (jet) boucle(canvas, () => { if (Math.random() < 0.05 * (niveau + 1)) jet.rafale(1 + niveau); });
  /* Le jet du schéma file d'autant plus vite que l'étape avance. */
  const jetSchema = $('.hs-jet', s); let off = 0;
  if (jetSchema) boucle(jetSchema, (dt) => { off = (off - dt * (40 + niveau * 70)) % 1000; jetSchema.style.strokeDashoffset = off.toFixed(1); });
}

/* ── Inspection (page Expertise) : un anneau se trace autour de la trappe de visite. ── */
function inspection() {
  const s = $('[data-effet="inspection"]'); if (!s || !gsap) return;
  const anneau = $('.inspection-anneau circle', s);
  if (anneau) {
    const L = anneau.getTotalLength();
    gsap.set(anneau, { strokeDasharray: L, strokeDashoffset: L });
    window.__inspection = () => gsap.to(anneau, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' });
    gsap.to($('.inspection-anneau', s), { rotation: 30, transformOrigin: '50% 50%', ease: 'none', scrollTrigger: { trigger: s, start: 'top top', end: 'bottom top', scrub: 0.5 } });
  }
}

/* ── Cadran d'urgence (page Contact) : la couronne autour du numéro tourne doucement. ── */
function cadranUrgence() {
  const r = $('.urgence-roue'); if (!r) return;
  const p = $('path', r); let a = 0;
  boucle(r, (dt) => { a = (a + dt * 12) % 360; p.style.transform = `rotate(${a}deg)`; });
}

/* ── Page 404 : la roue tourne, la dent manquante passe en haut. ── */
function denteManquante() {
  const r = $('.introuvable-roue'); if (!r) return;
  const p = $('path', r); let a = 0;
  boucle(r, (dt) => { a = (a + dt * 20) % 360; p.style.transform = `rotate(${a}deg)`; });
}

/* ── Soumission en étapes (page Contact) : une étape à la fois, récapitulatif en direct. ── */
function soumission() {
  const f = $('[data-etapes]'); if (!f) return;
  const etapes = $$('[data-etape-form]', f), prec = $('[data-precedent]', f), suiv = $('[data-suivant]', f), env = $('[data-envoyer]', f);
  const num = $('[data-etape-num]', f), barre = $('.etapes-barre span', f), titre = $('[data-etape-titre]', f);
  const recap = $('[data-recap]'), vide = $('[data-recap-vide]');
  let i = 0;
  const montrer = (k, focus = true) => {
    i = Math.max(0, Math.min(etapes.length - 1, k));
    etapes.forEach((e, j) => { e.hidden = j !== i; });
    prec.hidden = i === 0; suiv.hidden = i === etapes.length - 1; env.hidden = i !== etapes.length - 1;
    if (num) num.textContent = String(i + 1);
    if (titre) titre.textContent = etapes[i].dataset.titre;
    if (barre) barre.style.transform = `scaleX(${(i + 1) / etapes.length})`;
    if (focus) etapes[i].querySelector('legend, h3')?.focus?.();
    window.ScrollTrigger?.refresh();
  };
  const valide = () => {
    let ok = true;
    $$('input, select, textarea', etapes[i]).forEach((c) => {
      if (c.type === 'radio') return;
      if (!c.checkValidity()) { ok = false; c.setAttribute('aria-invalid', 'true'); } else c.removeAttribute('aria-invalid');
    });
    const radios = $$('input[type="radio"][required]', etapes[i]);
    if (radios.length && !radios.some((r) => r.checked)) { ok = false; radios[0].closest('fieldset')?.setAttribute('aria-invalid', 'true'); }
    const msg = $('[data-etape-erreur]', etapes[i]);
    if (msg) msg.hidden = ok;
    if (!ok) $('[aria-invalid="true"]', etapes[i])?.focus?.();
    return ok;
  };
  suiv.addEventListener('click', () => { if (valide()) montrer(i + 1); });
  prec.addEventListener('click', () => montrer(i - 1));
  const majRecap = () => {
    const lignes = [];
    $$('[data-recap-cle]', f).forEach((c) => {
      let v = '';
      if (c.type === 'radio') { if (!c.checked) return; v = c.closest('label')?.textContent.trim(); }
      else if (c.tagName === 'SELECT') v = c.value ? c.selectedOptions[0]?.textContent.trim() : '';
      else v = c.value.trim();
      if (v) lignes.push([c.dataset.recapCle, v]);
    });
    recap.innerHTML = '';
    lignes.forEach(([k, v]) => { const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); dd.textContent = v; recap.append(dt, dd); });
    if (vide) vide.hidden = lignes.length > 0;
    const urgent = $('input[value="urgent"]', f)?.checked;
    $('[data-note-urgent]')?.toggleAttribute('hidden', !urgent);
  };
  f.addEventListener('input', majRecap); f.addEventListener('change', majRecap);
  /* Préremplissage par l'adresse (?besoin=reparation&piece=couronne). */
  const q = new URLSearchParams(location.search);
  ['besoin', 'piece', 'delai'].forEach((k) => { const v = q.get(k); if (!v) return; const c = $(`[name="${k}"][value="${CSS.escape(v)}"]`, f) || $(`select[name="${k}"]`, f); if (c) { if (c.tagName === 'SELECT') c.value = v; else c.checked = true; } });
  const rapport = q.get('rapport');
  const desc = $('textarea[name="description"]', f);
  if (rapport && desc && !desc.value) desc.value = `Rapport de réduction visé : 1 : ${rapport}`;
  majRecap();
  montrer(0, false);
}

demarrer({
  preparer() {
    preparerAccueil();
    couronneEchelle();
    indexServices();
    denture();
    reseau();
    roueAppel();
    engrenement();
    rouesDefilement();
    capacites();
    hvof();
    inspection();
    cadranUrgence();
    denteManquante();
    simulateurRapport();
    loupeInspection();
    soumission();
  },
  /* Intro (environ 2,3 s) : la grande roue entre en tournant, s'engrène avec le pignon braise, une gerbe d'étincelles,
     puis le pignon glisse jusqu'à l'objet d'ouverture de la page et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const panneau = $('[data-ouverture]');
    const roue = $('.ouverture-roue'), pignon = $('.ouverture-pignon');
    const gerbe = etincelles($('.ouverture-etincelles'), {
      taux: 0, gravite: 1100, vitesse: [220, 620], angle: [-2.8, -0.4], vie: [0.4, 0.9],
      source: (w, h) => { const r = pignon.getBoundingClientRect(), rc = panneau.getBoundingClientRect(); return { x: r.left - rc.left + r.width * 0.12, y: r.top - rc.top + r.height * 0.2 }; },
    });
    tl.fromTo(roue, { x: () => -window.innerWidth * 0.6, rotation: -200 }, { x: 0, rotation: 0, duration: 0.95, ease: 'power3.out' }, 0)
      .fromTo(pignon, { rotation: 0 }, { rotation: 500, duration: 0.95, ease: 'power3.out' }, 0)
      .fromTo('.ouverture-logo, .ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.25)
      .call(() => { if (gerbe) { gerbe.recalculer(); gerbe.rafale(46); } }, null, 0.8)
      .to('.ouverture-logo, .ouverture-ligne, .ouverture-roue', { opacity: 0, duration: 0.3 }, 1.0);
    versObjet(tl, { a: 1.0 });
    if ($('.hero-ligne')) {
      tl.set('.hero-titre', { opacity: 1 }, 1.5).fromTo('.hero-ligne', { yPercent: 130, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.12 }, 1.5)
        .fromTo('.hero-sur, .hero-intro, .hero-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, 1.65)
        .call(() => sparksHero && sparksHero.rafale(30), null, 1.7);
    }
    if (window.__inspection) tl.call(window.__inspection, null, 1.7);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-ligne', { yPercent: 0, y: 0 });
    gsap.set('.hero-titre', { opacity: 1 });
    gsap.set('.hero-sur, .hero-intro, .hero-actions', { y: 0, opacity: 1 });
    const a = $('.inspection-anneau circle'); if (a) gsap.set(a, { strokeDashoffset: 0 });
  },
  arrivee() {
    if (!gsap) return;
    if ($('.hero-ligne')) {
      gsap.set('.hero-titre', { opacity: 1 });
      gsap.fromTo('.hero-ligne', { yPercent: 130, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out', delay: 0.15 });
      gsap.fromTo('.hero-sur, .hero-intro, .hero-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.3 });
    }
    if (window.__inspection) gsap.delayedCall(0.3, window.__inspection);
  },
});
