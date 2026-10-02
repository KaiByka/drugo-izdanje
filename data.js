/* =====================================================================
   ANTIKVARIJAT DRUGO IZDANJE — podaci
   =====================================================================
   Ovo je JEDINA datoteka koju trebaš mijenjati da bi dodao/uklonio knjigu.
   Za svaku knjigu kopiraj blok u uglatim zagradama { ... } i promijeni
   vrijednosti. Polja:

     naslov     — naslov knjige
     autor      — autorica ili autor
     godina     — godina izdanja (broj)
     izdavac    — nakladnik
     stanje     — jedno od: "kao novo", "vrlo dobro", "dobro", "čitko", "nošeno"
     cijena     — cijena u eurima (samo broj)
     tagovi     — do tri kratke oznake, npr. ["klasik", "SF"]
     napomena   — kratka poštena opaska o stanju ili izdanju (može biti i "")
     njuskalo   — poveznica na tvoj oglas na Njuškalu ("" ako ga nema)
     vinted     — poveznica na tvoj oglas na Vintedu ("" ako ga nema)
     slika      — putanja do slike naslovnice, npr. "slike/1984.jpg" ("" =
                  stranica će sama nacrtati tipografsku naslovnicu)
     prodano    — true kad je knjiga prodana: karta ostaje u katalogu s
                  žigom PRODANO, bez poveznica, i ne broji se u statistici
                  (polje nije obavezno; bez njega knjiga je u ponudi)
   ===================================================================== */

const SITE = {
  naziv: "Antikvarijat Drugo izdanje",
  podnaslov: "knjige iz jedne osobne biblioteke",
};

const KONTAKT = {
  /* Pristupni ključ za Web3Forms (https://web3forms.com) — besplatno:
     unesi svoj e-mail na stranici i ključ ti stiče na mail.
     Prazan string = kontakt forma i gumbi "Pitaj" su skriveni sa stranice.
     Ključ je javan po dizajnu (stranica je statična) — ne diraj ga. */
  kljuc: "c035b1cf-81f4-4cc3-b6b2-6d5481a2817e",
};

const KNJIGE = [
  {
    naslov: "Beskonačni itinerer kroz svet Strip albuma - knjiga 3",
    autor: "Vladimir Topolovački",
    godina: 2018,
    izdavac: "Strip-agent",
    stanje: "kao novo",
    cijena: 7,
    tagovi: ["Strip"],
    napomena: "Stanje je kao novo, bez ikakvih oštećenja",
    njuskalo: "",
    vinted: "https://www.vinted.com/items/10215749393-beskonacni-itinerer-kroz-svet-strip-albuma-knjiga-3",
    slika: "https://www.stripovi.hr/BinaryLibrary/629ee181-e9c0-4e48-bd0f-5ba54f9ca927/Resized_c05d8569-b4b0-43ed-a1f3-c58c6137a60c/1200_1200.jpg",
  },
  {
    naslov: "Beskonačni itinerer kroz svet Strip albuma - knjiga 4",
    autor: "Vladimir Topolovački",
    godina: 2018,
    izdavac: "Strip-agent",
    stanje: "kao novo",
    cijena: 7,
    tagovi: ["Strip"],
    napomena: "Stanje je kao novo, bez ikakvih oštećenja",
    njuskalo: "",
    vinted: "https://www.vinted.com/items/10215775193-beskonacni-itinerer-kroz-svet-strip-albuma-knjiga-4",
    slika: "https://znanje.hr/product-images/24825989-8c43-47c6-9be2-813cae0bfaae.jpg",
  }
];
