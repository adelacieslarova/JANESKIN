// =============================================================
//  Změkčení švu v hero koláži
// =============================================================
//
//  Hero na úvodní stránce je koláž dvou fotek slepených natvrdo
//  přesně v polovině šířky (x = 1080 z 2160). Ten spoj byl vidět
//  jako svislý řez — nejvíc mezi 769 a 1280 px šířky okna, kde se
//  krémový závoj vypíná a fotka je syrová.
//
//  Skript rozmaže úzké pásmo kolem švu vodorovně, nejsilněji přímo
//  na spoji a k okrajům pásma do ztracena. Obě fotky tak do sebe
//  přejdou měkce.
//
//  Proč zrovna 170/70: širší pásmo rozmazává krb na stěně do
//  vodorovných šmouh. Užší zase spoj neschová. Ověřeno porovnáním
//  variant 170/70, 300/120 a 440/170.
//
//  Zdroj se nikdy nepřepisuje, takže se úprava nedá aplikovat
//  dvakrát — výsledek je vždy stejný.
//
//  Použití:  node tools/hero-prolnuti.mjs
// =============================================================

import sharp from 'sharp';

const ZDROJ = 'public/images/hero-salon-zdroj.webp';
const CIL = 'public/images/hero-salon.webp';
const PASMO = 170;   // poloviční šířka pásma kolem švu
const MAX_R = 70;    // poloměr rozostření přímo na švu

const { width: W, height: H } = await sharp(ZDROJ).metadata();
const SEV = Math.round(W / 2);
const { data } = await sharp(ZDROJ).removeAlpha().raw().toBuffer({ resolveWithObject: true });

const out = Buffer.from(data);
for (let x = SEV - PASMO; x <= SEV + PASMO; x++) {
  if (x < 0 || x >= W) continue;
  const r = Math.round(MAX_R * (1 - Math.abs(x - SEV) / PASMO));
  if (r < 1) continue;
  for (let y = 0; y < H; y++) {
    let s0 = 0, s1 = 0, s2 = 0, n = 0;
    for (let d = -r; d <= r; d++) {
      const xx = Math.max(0, Math.min(W - 1, x + d));
      const i = (y * W + xx) * 3;
      s0 += data[i]; s1 += data[i + 1]; s2 += data[i + 2]; n++;
    }
    const o = (y * W + x) * 3;
    out[o] = s0 / n; out[o + 1] = s1 / n; out[o + 2] = s2 / n;
  }
}

await sharp(out, { raw: { width: W, height: H, channels: 3 } })
  .webp({ quality: 82 })
  .toFile(CIL);

console.log(`${CIL} — ${W}x${H}, šev na x=${SEV} změkčen pásmem ${PASMO} px`);
