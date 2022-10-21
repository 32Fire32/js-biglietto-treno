'strict mode'

function wait(){
    let testo = document.querySelector(".wait");
    testo.style.display = "none";
    }
    setTimeout("wait();", 5000);

function change(){
    let testo = document.querySelector(".apologies");
    testo.style.display = "block";
    }
    setTimeout("change();", 5000);


// chiedere lunghezza del tragitto
const traveLenght = Number(prompt("Inserisci la lunghezza del tragitto in Km"));
//chiedere età
const userAge = Number(prompt("Inserisci la tua età"));
//prezzo totale del viaggio 0.21€ x km
let totalPrice = traveLenght * 0.21;
console.log(traveLenght, userAge, totalPrice);
//se minorenni sconto del 20% se over 65 scontro del 40%
if (userAge < 18) {
    totalPrice = totalPrice - totalPrice * 0.2;
    console.log(totalPrice);
    document.querySelector("span").innerHTML = totalPrice.toFixed(2); 
} else if (userAge >= 65) {
    totalPrice = totalPrice - totalPrice * 0.4;
    console.log(totalPrice);
    document.querySelector("span").innerHTML = totalPrice.toFixed(2); 
} else {
    //output 2 cifre decimali
    document.querySelector("span").innerHTML = totalPrice.toFixed(2); 
} 








