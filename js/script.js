"use strict";

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Il biglietto andrà stampato in pagina!

x chiedere all'utente quanti km vuole percorrere
x chidere all'utente quanti ha
x calcolare il prezzo del biglietto
    costo biglietto 0.21 € al km
    sconto del 20% < 18
    sconto del 40% > 65
*/

// informazini utente
let kmUtente = parseInt(prompt('Inserisci km da percorrere'));
let etaUtente = parseInt(prompt('Quanti anni hai?'));

console.log(kmUtente,etaUtente);

console.log(isNaN(kmUtente), isNaN(etaUtente));
if(isNaN(kmUtente) || isNaN(etaUtente)){
    alert('devi inserire numeri e non lettere');
    window.location.reload();
} 

// costo biglietto
let costoKm = 0.21;
let costoBiglietto =parseFloat(costoKm * kmUtente).toFixed(2);

console.log(costoBiglietto)

// calcolo sconto
let costoFinale;
if(etaUtente < 18){
    costoFinale = parseFloat(costoBiglietto * 0.8).toFixed(2);
    console.log(costoFinale);
} else if (etaUtente > 65){
    costoFinale = parseFloat(costoBiglietto * 0.6).toFixed(2);
    console.log(costoFinale);
} else {
    costoFinale = costoBiglietto;
    console.log(costoFinale);
}

console.log(costoFinale);

// inserimento in html
document.getElementById("distanza").innerHTML = kmUtente;
document.getElementById("eta").innerHTML = etaUtente;
document.getElementById("prezzofinale").innerHTML = costoFinale;


