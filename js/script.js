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

let kmUtente = parseInt(prompt('Inserisci km da percorrere'));
let etaUtente = parseInt(prompt('Quanti anni hai?'));

console.log(kmUtente,etaUtente);

console.log(isNaN(kmUtente), isNaN(etaUtente));
if(isNaN(kmUtente) || isNaN(etaUtente)){
    alert('devi inserire numeri e non lettere');
    window.location.reload();
} 

let costoBiglietto = 0.21;
let costoViaggio =parseFloat(costoBiglietto * kmUtente).toFixed(2);

console.log(costoViaggio)

if(etaUtente < 18){
    let costoFinale = parseFloat(costoViaggio * 0.8).toFixed(2);
    console.log(costoFinale);
} else if (etaUtente > 65){
    let costoFinale = parseFloat(costoViaggio * 0.6).toFixed(2);
    console.log(costoFinale);
} else {
    let costoFinale = costoViaggio;
    console.log(costoFinale);
}


