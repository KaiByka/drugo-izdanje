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
   ===================================================================== */

const SITE = {
  naziv: "Antikvarijat Drugo izdanje",
  podnaslov: "knjige iz jedne osobne biblioteke",
};

const KNJIGE = [
  {
    naslov: "Zločin i kazna",
    autor: "Fjodor M. Dostojevski",
    godina: 2011,
    izdavac: "Školska knjiga",
    stanje: "vrlo dobro",
    cijena: 9,
    tagovi: ["klasik", "ruska književnost"],
    napomena: "Tvrdi uvez, dvaput pročitan. Trag starog pečata na naslovnoj.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/zlocin-i-kazna",
    vinted: "",
    slika: "",
  },
  {
    naslov: "Tisuću devetsto osamdeset četiri",
    autor: "George Orwell",
    godina: 2016,
    izdavac: "Znanje",
    stanje: "kao novo",
    cijena: 6,
    tagovi: ["klasik", "distopija"],
    napomena: "Meki uvez, bez ikakvih oštećenja — kupljena pa nikad ne otvorena.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/1984-orwell",
    vinted: "https://www.vinted.hr/items/1984-orwell",
    slika: "",
  },
  {
    naslov: "Vodič kroz galaksiju za autostopere",
    autor: "Douglas Adams",
    godina: 2019,
    izdavac: "Algoritam",
    stanje: "dobro",
    cijena: 7,
    tagovi: ["SF", "humor"],
    napomena: "Zagriženo čitano; uvojci na koricama, uvez još posve čvrst.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/vodic-kroz-galaksiju",
    vinted: "",
    slika: "",
  },
  {
    naslov: "Stranac",
    autor: "Albert Camus",
    godina: 2014,
    izdavac: "Fokus",
    stanje: "kao novo",
    cijena: 5,
    tagovi: ["egzistencijalizam", "klasik"],
    napomena: "Mali džepni format, tiskano izdanje s dvojezičnom naslovnom.",
    njuskalo: "",
    vinted: "https://www.vinted.hr/items/stranac-camus",
    slika: "",
  },
  {
    naslov: "Boja magije",
    autor: "Terry Pratchett",
    godina: 2018,
    izdavac: "Znanje",
    stanje: "vrlo dobro",
    cijena: 6,
    tagovi: ["fantastika", "humor"],
    napomena: "Prvi dio Disksvijeta — korice bez pukotina, blago požutjeli rub.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/boja-magije-pratchett",
    vinted: "https://www.vinted.hr/items/boja-magije-pratchett",
    slika: "",
  },
  {
    naslov: "Norveška šuma",
    autor: "Haruki Murakami",
    godina: 2010,
    izdavac: "Vuković & Runjić",
    stanje: "čitko",
    cijena: 7,
    tagovi: ["japanska književnost", "roman"],
    napomena: "Džepno izdanje, donji rub blago natopljen — čitljivo bez problema.",
    njuskalo: "",
    vinted: "https://www.vinted.hr/items/norveska-suma-murakami",
    slika: "",
  },
  {
    naslov: "Sapiens",
    autor: "Yuval Noah Harari",
    godina: 2021,
    izdavac: "Znanje",
    stanje: "kao novo",
    cijena: 10,
    tagovi: ["povijest", "popularna znanost"],
    napomena: "Novije izdanje s dopunjenim poglavljem o današnjici.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/sapiens-harari",
    vinted: "",
    slika: "",
  },
  {
    naslov: "Sto godina samoće",
    autor: "Gabriel García Márquez",
    godina: 2008,
    izdavac: "Profil",
    stanje: "dobro",
    cijena: 9,
    tagovi: ["klasik", "magični realizam"],
    napomena: "Starije izdanje s urednim zapisima olovkom na par stranica.",
    njuskalo: "https://www.njuskalo.hr/ostale-knjige/sto-godina-samoce",
    vinted: "",
    slika: "",
  },
  {
    naslov: "Mali princ",
    autor: "Antoine de Saint-Exupéry",
    godina: 2015,
    izdavac: "Mozaik knjiga",
    stanje: "kao novo",
    cijena: 4,
    tagovi: ["klasik", "dječja književnost"],
    napomena: "Ilustrirano darovno izdanje — kao iz knjižare.",
    njuskalo: "",
    vinted: "https://www.vinted.hr/items/mali-princ",
    slika: "",
  },
];
