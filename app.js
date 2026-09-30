/* =====================================================================
   ANTIKVARIJAT DRUGO IZDANJE — logika stranice
   Ne trebaš dirati ovu datoteku: sve se podešava u data.js.
   ===================================================================== */

"use strict";

const $ = (sel) => document.querySelector(sel);

/* ---------- pomoćne ---------- */

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function hashString(s) {
  let h = 2166136261;
  for (const ch of s) {
    h ^= ch.codePointAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* ---------- generirane naslovnice ----------
   Dok knjiga nema svoju sliku, stranica joj nacrta tipografsku
   naslovnicu: boje i uzorak su određeni naslovom, pa je svaka
   drugačija, ali uvijek ista za isti naslov. */

const PALETE = [
  { bg: "#1a1712", fg: "#efe9dc", acc: "#c2481f" },
  { bg: "#0f3d2e", fg: "#efe9dc", acc: "#e0b64f" },
  { bg: "#23265c", fg: "#efe9dc", acc: "#e05c3a" },
  { bg: "#7a1f1f", fg: "#efe9dc", acc: "#efc98a" },
  { bg: "#efe9dc", fg: "#1a1712", acc: "#b8441d" },
  { bg: "#3d2b1f", fg: "#efe9dc", acc: "#b8973f" },
  { bg: "#efe9dc", fg: "#1a1712", acc: "#0f3d2e" },
];

function uzorakPruge(id, acc) {
  return {
    defs: `
    <pattern id="${id}" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="16" height="7" fill="${acc}"/>
    </pattern>`,
    tijelo: `<rect y="34" width="300" height="160" fill="url(#${id})"/>`,
  };
}

function uzorakSunce(id, acc) {
  return {
    defs: "",
    tijelo: `
    <circle cx="150" cy="118" r="76" fill="${acc}"/>
    <circle cx="150" cy="118" r="98" fill="none" stroke="${acc}" stroke-width="3"/>`,
  };
}

function uzorakLuk(id, acc, bg) {
  return {
    defs: "",
    tijelo: `
    <circle cx="150" cy="200" r="82" fill="${acc}"/>
    <rect y="200" width="300" height="26" fill="${bg}"/>
    <line x1="38" y1="200" x2="262" y2="200" stroke="${acc}" stroke-width="4"/>`,
  };
}

function uzorakKocke(id, acc) {
  return {
    defs: `
    <pattern id="${id}" width="46" height="46" patternUnits="userSpaceOnUse">
      <rect width="23" height="23" fill="${acc}"/>
      <rect x="23" y="23" width="23" height="23" fill="${acc}"/>
    </pattern>`,
    tijelo: `<rect y="38" width="300" height="120" fill="url(#${id})"/>`,
  };
}

function uzorakValovi(id, acc) {
  const val = (y) => `M-12,${y} Q 30,${y - 26} 75,${y} T 162,${y} T 250,${y} T 340,${y}`;
  return {
    defs: "",
    tijelo: `
    <g fill="none" stroke="${acc}" stroke-width="7" stroke-linecap="round">
      <path d="${val(84)}"/>
      <path d="${val(122)}"/>
      <path d="${val(160)}"/>
    </g>`,
  };
}

function uzorakPrstenovi(id, acc) {
  return {
    defs: "",
    tijelo: `
    <g fill="none" stroke="${acc}">
      <circle cx="150" cy="118" r="20" stroke-width="18"/>
      <circle cx="150" cy="118" r="48" stroke-width="10"/>
      <circle cx="150" cy="118" r="74" stroke-width="6"/>
      <circle cx="150" cy="118" r="98" stroke-width="3"/>
    </g>`,
  };
}

function prelomi(naslov, max) {
  const rijeci = naslov.split(" ");
  const linije = [];
  let trenutna = "";
  for (const r of rijeci) {
    if (trenutna === "") trenutna = r;
    else if ((trenutna + " " + r).length <= max) trenutna += " " + r;
    else { linije.push(trenutna); trenutna = r; }
  }
  if (trenutna !== "") linije.push(trenutna);
  return linije;
}

function naslovnica(knjiga, idx) {
  const h = hashString(knjiga.naslov + knjiga.autor);
  const pal = PALETE[h % PALETE.length];
  const idUz = "uz-" + idx + "-" + (h % 9973);

  const UZORCI = [
    () => uzorakPruge(idUz, pal.acc),
    () => uzorakSunce(idUz, pal.acc),
    () => uzorakLuk(idUz, pal.acc, pal.bg),
    () => uzorakKocke(idUz, pal.acc),
    () => uzorakValovi(idUz, pal.acc),
    () => uzorakPrstenovi(idUz, pal.acc),
  ];
  const uzorak = UZORCI[(h >>> 3) % UZORCI.length]();

  const linije = prelomi(knjiga.naslov, 13);
  const velicina = linije.length <= 2 ? 36 : linije.length === 3 ? 30 : 26;
  const razmak = Math.round(velicina * 1.14);
  const yZadnje = 386;
  const yPrve = yZadnje - (linije.length - 1) * razmak;

  const naslovTekst = linije
    .map(
      (l, i) =>
        `<tspan x="38" y="${yPrve + i * razmak}">${esc(l)}</tspan>`
    )
    .join("");

  return `
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Naslovnica: ${esc(knjiga.naslov)}">
    <defs>${uzorak.defs}</defs>
    <rect width="300" height="450" fill="${pal.bg}"/>
    ${uzorak.tijelo}
    <text x="38" y="52" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="2" fill="${pal.fg}" opacity="0.75">${esc(knjiga.autor.toUpperCase())}</text>
    <text font-family="Fraunces, Georgia, serif" font-weight="600" font-size="${velicina}" fill="${pal.fg}">${naslovTekst}</text>
    <line x1="38" y1="${yZadnje + 22}" x2="140" y2="${yZadnje + 22}" stroke="${pal.fg}" stroke-width="1.5" opacity="0.5"/>
    <text x="38" y="428" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing="3" fill="${pal.fg}" opacity="0.55">BR. ${String(idx + 1).padStart(2, "0")} · DRUGO IZDANJE</text>
    <rect width="22" height="450" fill="#1a1712" opacity="0.14"/>
    <line x1="22" y1="0" x2="22" y2="450" stroke="#1a1712" opacity="0.28"/>
  </svg>`;
}

/* ---------- boja stanja ---------- */

const BOJE_STANJA = {
  "kao novo": "#2f7d4f",
  "vrlo dobro": "#4c8b2f",
  "dobro": "#a07c22",
  "čitko": "#b8441d",
  "nošeno": "#8a2b12",
};

/* ---------- render ---------- */

let filter = "sve";
let upit = "";
let sortiranje = "redoslijed";

function slikaZa(knjiga, idx) {
  if (knjiga.slika) {
    return `<img src="${esc(knjiga.slika)}" alt="Naslovnica: ${esc(knjiga.naslov)}" loading="lazy">`;
  }
  return naslovnica(knjiga, idx);
}

function redak(knjiga, idx) {
  const tocka = BOJE_STANJA[knjiga.stanje] || "#a07c22";
  const linkovi = [];
  if (knjiga.njuskalo) {
    linkovi.push(
      `<a class="dugme" href="${esc(knjiga.njuskalo)}" target="_blank" rel="noopener noreferrer">Njuškalo <span class="strelica">&#8599;</span></a>`
    );
  }
  if (knjiga.vinted) {
    linkovi.push(
      `<a class="dugme" href="${esc(knjiga.vinted)}" target="_blank" rel="noopener noreferrer">Vinted <span class="strelica">&#8599;</span></a>`
    );
  }
  const kupnja = linkovi.length
    ? `<div class="knjiga-linkovi">${linkovi.join("")}</div>`
    : `<span class="knjiga-prodano">Oglas uskoro</span>`;

  return `
  <article class="knjiga">
    <p class="knjiga-br">&#8470; <b>${String(idx + 1).padStart(2, "0")}</b></p>
    <div class="knjiga-slika">${slikaZa(knjiga, idx)}</div>
    <div class="knjiga-info">
      <h3 class="knjiga-naslov">${esc(knjiga.naslov)}</h3>
      <p class="knjiga-autor">${esc(knjiga.autor)}</p>
      <div class="knjiga-meta">
        <span>${knjiga.godina}</span>
        <span>${esc(knjiga.izdavac)}</span>
        <span class="meta-stanje"><span class="tocka" style="background:${tocka}"></span>${esc(knjiga.stanje)}</span>
        ${(knjiga.tagovi || []).map((t) => `<span>#${esc(t)}</span>`).join("")}
      </div>
      ${knjiga.napomena ? `<p class="knjiga-napomena">${esc(knjiga.napomena)}</p>` : ""}
    </div>
    <div class="knjiga-kupnja">
      <p class="knjiga-cijena">${knjiga.cijena} <small>&euro;</small></p>
      ${kupnja}
    </div>
  </article>`;
}

function filtrirajSortiraj() {
  const q = upit.trim().toLowerCase();
  let lista = KNJIGE.map((k, i) => ({ k, i }));

  if (filter !== "sve") {
    lista = lista.filter(({ k }) => Boolean(k[filter]));
  }
  if (q) {
    lista = lista.filter(({ k }) =>
      [k.naslov, k.autor, k.izdavac, ...(k.tagovi || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }
  if (sortiranje === "cijena") {
    lista.sort((a, b) => a.k.cijena - b.k.cijena || a.i - b.i);
  } else if (sortiranje === "naslov") {
    lista.sort((a, b) => a.k.naslov.localeCompare(b.k.naslov, "hr") || a.i - b.i);
  }
  return lista;
}

const promatrac =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (ulazi) => {
          for (const u of ulazi) {
            if (u.isIntersecting) {
              u.target.classList.add("vidljivo");
              promatrac.unobserve(u.target);
            }
          }
        },
        { threshold: 0.08 }
      )
    : null;

function crtaj() {
  const popis = $("#popis");
  const lista = filtrirajSortiraj();

  if (!lista.length) {
    popis.innerHTML = `<p class="prazno">Ništa ne odgovara pretrazi — probaj drugu riječ ili makni filter.</p>`;
  } else {
    popis.innerHTML = lista.map(({ k, i }) => redak(k, i)).join("");
    if (promatrac) {
      popis.querySelectorAll(".knjiga").forEach((el) => promatrac.observe(el));
    } else {
      popis.querySelectorAll(".knjiga").forEach((el) => el.classList.add("vidljivo"));
    }
  }

  $("#broj-knjiga").textContent = String(KNJIGE.length).padStart(2, "0");
}

function osvjeziStatistiku() {
  const ukupno = KNJIGE.reduce((s, k) => s + (Number(k.cijena) || 0), 0);
  $("#stat-naslova").textContent = KNJIGE.length;
  $("#stat-vrijednost").innerHTML = `${ukupno} <small>&euro;</small>`;
}

/* ---------- događaji ---------- */

document.querySelectorAll("[data-filter]").forEach((gumb) => {
  gumb.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((g) => g.classList.remove("aktivan"));
    gumb.classList.add("aktivan");
    filter = gumb.dataset.filter;
    crtaj();
  });
});

document.querySelectorAll("[data-sort]").forEach((gumb) => {
  gumb.addEventListener("click", () => {
    document.querySelectorAll("[data-sort]").forEach((g) => g.classList.remove("aktivan"));
    gumb.classList.add("aktivan");
    sortiranje = gumb.dataset.sort;
    crtaj();
  });
});

$("#trazi").addEventListener("input", (e) => {
  upit = e.target.value;
  crtaj();
});

/* ---------- strukturirani podaci (SEO) ----------
   Gradi JSON-LD katalog iz KNJIGE pa tražilice vide naslove,
   autore i cijene čim se podatci promijene. */

function strukturiraniPodaci() {
  const items = KNJIGE.map((k, i) => {
    const url = k.njuskalo || k.vinted || "";
    const knjiga = {
      "@type": "Book",
      name: k.naslov,
      author: { "@type": "Person", name: k.autor },
      publisher: k.izdavac,
      inLanguage: "hr",
    };
    if (url) {
      knjiga.offers = {
        "@type": "Offer",
        price: String(k.cijena),
        priceCurrency: "EUR",
        url,
        availability: "https://schema.org/InStock",
      };
    }
    return { "@type": "ListItem", position: i + 1, item: knjiga };
  });

  const skripta = document.createElement("script");
  skripta.type = "application/ld+json";
  skripta.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rabljene knjige — Antikvarijat Drugo izdanje, Karlovac",
    numberOfItems: KNJIGE.length,
    itemListElement: items,
  });
  document.head.appendChild(skripta);
}

/* ---------- start ---------- */

$("#godina").textContent = String(new Date().getFullYear());
osvjeziStatistiku();
strukturiraniPodaci();
crtaj();
