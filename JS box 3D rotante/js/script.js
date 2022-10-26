//---------CLICK DESTRA E SINISTRA

const ruota = () => { //funzione con sintassi freccia

    const cubes = document.querySelectorAll(".cube");
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${pos}deg)`);
};
//querySelecotorAll e forEach mi richiamano per ogni cubo il css in cui è definita la transform (cube.style.transform) e mi fa ruotare il cubo di x gradi che verrano poi definiti con la variabile pos.
//Array in questo caso è un constructor e mi da modo di manipolarlo.


document.querySelector('.right-arrow').addEventListener('click', () => {
    pos -= 90;
    ruota();
});
//al click della freccia a destra viene fornita una pos, ovvero di quanti gradi girerà l'immagine e poi viene richiamata la funzione ruota()


document.querySelector('.left-arrow').addEventListener('click', () => {
    pos += 90;
    ruota();
});
//al click della freccia a sinistra viene fornita una pos, ovvero di quanti gradi girerà l'immagine e poi viene richiamata la funzione ruota()


let btnStart = document.querySelector('.play-pause');

let pos = 0;
//pos di partenza

//---------MUOSEOVER DESTRA

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    pos -= 30;
    ruota();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    pos += 30;
    ruota();
});

//---------MOUSEOVER SINISTRA

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    pos += 30;
    ruota();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    pos -= 30;
    ruota();
});

//---------LOOP-SPIN

var cubeInterval = setInterval(nextCube, 2000);
//setInterval mi richiama la funzione nextCube e mi fornisce il tempo in millesimi del timer


function nextCube() {
    pos -= 90;
    ruota();
};
//la function fornisce pos e richiama la funzione ruota a riga 3


var playing = true;

function pauseCube() {
    btnStart.innerHTML = '<i class="fas fa-play">';
    playing = false;
    clearInterval(cubeInterval);
};
//funzione che mette in pausa il cubo: il button diventa play, playing diventa falso e la funzione clearInterval contiene il parametro cubeInterval


function playCube() {
    btnStart.innerHTML = '<i class="fas fa-pause">';
    playing = true;
    cubeInterval = setInterval(nextCube, 2000);
};
//funzione che mette in play il cubo: il button diventa pausa, playing diventa vero e cubeInterval equivale alla function setInterval


btnStart.onclick = function () {
    if (playing) { pauseCube(); }
    else { playCube(); }
};
/*
Function onclick del button che mi dice che:
-se il cubo è playing allora al click deve eseguire la funzione pauseCube()
-altrimenti al click deve eseguire la funzione playCube()
*/