// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: "Mercedes",
    barva: "stříbrná",
    rokVyroby: 2015,
    spz: "8C1 8954"
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = "Andrea";
auto.majitel.prijmeni = "Stašková";

// Přepiš značku na Škoda
auto.znacka = "Škoda";
//auto["znacka"] = "Škoda";


// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitelka = auto.majitel.jmeno + " " + auto.majitel.prijmeni;
document.getElementById("majitelka").innerHTML = majitelka;

const znacka = auto.znacka;
document.getElementById("znacka").innerHTML = znacka;


const spz = auto.spz;
document.getElementById("spz").innerHTML = spz;

