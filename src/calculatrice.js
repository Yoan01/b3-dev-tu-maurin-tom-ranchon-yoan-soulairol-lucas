class Calculatrice {

    constructor( num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    // fonctions opérations

    addition() {
        return this.num1 + this.num2;
    }

    soustraction() {
        return this.num1 - this.num2;
    }

    multiplication() {
        return this.num1 * this.num2;
    }

    division() {
        return this.num1 / this.num2;
    }

    puissance() {
        return this.num1 ** this.num2;
    }

    racineCarre() {
        return Math.sqrt(this.num1);
    }

    pourcentage() {
    return this.num1/this.num2 *100;
    }
}

var num1 = parseFloat(prompt("Entrer le 1er nombre"))
var num2 = parseFloat(prompt("Entrer le 2eme nombre (cliquer sur OK pour le calcul d'une racine carrée)"))
const calcul = new Calculatrice(num1,num2)

document.getElementById(btnPuissance).addEventListener("click", console.log(calcul.puissance()));
document.getElementById(btnRacineCarre).addEventListener("click", console.log(calcul.racineCarre()));
document.getElementById(btnAddition).addEventListener("click", console.log(calcul.addition()));
document.getElementById(btnSoustraction).addEventListener("click", console.log(calcul.soustraction()));
document.getElementById(btnMultiplication).addEventListener("click", console.log(calcul.multiplication()));
document.getElementById(btnDivision).addEventListener("click", console.log(calcul.division()));
document.getElementById(btnPourcentage).addEventListener("click", console.log(calcul.pourcentage()));


module.exports = {
    Calculatrice:Calculatrice
}