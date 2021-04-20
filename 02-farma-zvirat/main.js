let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};

let husa = {
    jmeno: 'Husa',
    foto: 'obrazky/husa.jpg'
};

let kocka = {
    jmeno: 'Kočka',
    foto: 'obrazky/kocka.jpg'
};

let kun = {
    jmeno: 'Kůň',
    foto: 'obrazky/kun.jpg'
};

let pes = {
    jmeno: 'Pes',
    foto: 'obrazky/pes.jpg'
};

let poleZvirat = [krava, ovecka, husa, kocka, kun, pes];

let farma = document.querySelector(".farma");

for (let i = 0; i <= poleZvirat.length; i++) {
    let jednoZvire = poleZvirat[i];
    let fotoZvirete = document.createElement("img");
    fotoZvirete.className = "foto";
    fotoZvirete.src = jednoZvire.foto;
    let jmenoZvirete = document.createElement("span");
    jmenoZvirete.className = "jmeno";
    jmenoZvirete.innerHTML = jednoZvire.jmeno;
    let zvire = document.createElement("div");
    zvire.className = "zvire";
    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete); 
    farma.appendChild(zvire);
}

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.


    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.


    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?