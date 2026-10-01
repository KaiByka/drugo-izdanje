# ANTIKVARIJAT DRUGO IZDANJE

Izlog knjiga iz jedne osobne biblioteke. Stranica ne prodaje ništa direktno —
svaki gumb vodi na tvoj oglas na **Njuškalu** ili **Vintedu**.

Čisti statični site: nema buildanja, nema ovisnosti, nema baze.
Radi s bilo kojeg hosta (i običnog `file://`).

## Struktura

```
book/
├── index.html   — struktura stranice (rijetko treba dirati)
├── styles.css   — cijeli dizajn
├── data.js      — JEDINA datoteka za uređivanje: knjige, cijene, linkovi
└── app.js       — render, filteri, pretraga, generirane naslovnice
```

## Kako dodati knjigu

1. Otvori `data.js`.
2. Kopiraj postojeći blok `{ ... }` i promijeni vrijednosti.
3. U `njuskalo` ili `vinted` stavi poveznicu na svoj oglas (prazan string `""` ako oglas još ne postoji — tada se prikazuje "Oglas uskoro").
4. Spremi i osvježi stranicu. Gotovo — statistika i brojač se sami ažuriraju.

## Kad se knjiga proda

Ne briši je — u `data.js` dodaj `prodano: true` u njezin blok. Karta ostaje u
katalogu (dobro je za SEO i dokazuje da se prodaje), ali dobiva žig PRODANO i
gubi poveznice, a brojači "u ponudi" je više ne broje.

## Kontakt forma (upit bez platforme)

Stranica može imati vlastiti "oglasnički" kanal: posjetitelj te pita izravno
s stranice, a poruka stiže na tvoj e-mail. Bez poslužitelja — koristi besplatni
[Web3Forms](https://web3forms.com):

1. Na web3forms.com unesi svoj e-mail i kopiraj pristupni ključ (Access Key).
2. Ključ zalijepi u `data.js`, u `KONTAKT.kljuc`.
3. Osvježi stranicu — pojavljuje se sekcija "Pitaj izravno" i gumb "Pitaj"
   uz svaku knjigu u ponudi.

Ključ u kodu je javan po dizajnu (stranica je statična pa on mora biti u
kodu — Web3Forms je tako zamišljen), a botove zadržava skriveno honeypot
polje. Prazan `kljuc: ""` povlači cijelu sekciju i gumbe sa stranice.

### Slike naslovnica (opcionalno)

Bez slike stranica sama nacrta tipografsku naslovnicu (isti naslov = ista
naslovnica, uvijek). Ako želiš pravu sliku:

1. stavi fotografiju u mapu, npr. `slike/1984.jpg`
2. u `data.js` upiši `slika: "slike/1984.jpg"`

Preporuka: usko izrezana naslovnica u omjeru 2:3, do 200 KB po slici.

## Objava

Baci mapu na bilo koji statični host:

- **Netlify Drop**: otvori https://app.netlify.com/drop i povuci mapu
- **GitHub Pages**: repozitorij → Settings → Pages → granica main
- **Cloudflare Pages**: poveži repozitorij, bez ikakvih postavki builda

## SEO (tražilice)

- Meta podaci ciljaju pretrage poput "rabljene knjige Karlovac"
- `sitemap.xml` i `robots.txt` pozivaju tražilice; katalog knjiga se
  automatski objavljuje kao JSON-LD strukturirani podatak
- `preview.png` je slika koja se prikazuje pri dijeljenju linka (og:image)
- Nakon objave prijavi stranicu u [Google Search Console](https://search.google.com/search-console)
  i tamo unesi sitemap — to ubrzava indeksiranje

Napomena: URL-ovi u `robots.txt`, `sitemap.xml` i `og:image` pretpostavljaju
adresu `https://kaibyka.github.io/drugo-izdanje/`. Ako objaviš pod drugim
imenom ili domenom, promijeni te tri adrese.

## Vizualni identitet

- Boje: papir `#efe9dc`, tinta `#1a1712`, rđa `#b8441d`
- Tipografija: Fraunces (naslovi) + IBM Plex Mono (metapodaci), preko Google Fontsa
- Ako želiš druge boje, promijeni varijable na vrhu `styles.css` (`:root`)
