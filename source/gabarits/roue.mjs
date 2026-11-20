/* Roue dentée en SVG : chemin d'une roue de n dents (rayon de tête R, de pied r), centrée dans un carré de côté taille,
   percée d'un alésage de rayon trou (fill-rule evenodd). Profil simplifié : flancs droits, têtes et pieds en arc. */
export function roue(taille, n, R, r, trou = 0, decal = 0) {
  const c = taille / 2, t = (2 * Math.PI) / n, f = (v) => v.toFixed(2);
  const pt = (rr, a) => `${f(c + rr * Math.cos(a))} ${f(c + rr * Math.sin(a))}`;
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = decal + i * t;
    const p = [a, a + 0.2 * t, a + 0.32 * t, a + 0.58 * t, a + 0.7 * t, a + t];
    d += (i === 0 ? `M${pt(r, p[0])}` : '') + ` A${f(r)} ${f(r)} 0 0 1 ${pt(r, p[1])} L${pt(R, p[2])} A${f(R)} ${f(R)} 0 0 1 ${pt(R, p[3])} L${pt(r, p[4])} A${f(r)} ${f(r)} 0 0 1 ${pt(r, p[5])}`;
  }
  d += 'Z';
  if (trou) d += ` M${f(c + trou)} ${f(c)} A${f(trou)} ${f(trou)} 0 1 0 ${f(c - trou)} ${f(c)} A${f(trou)} ${f(trou)} 0 1 0 ${f(c + trou)} ${f(c)}Z`;
  return d;
}
