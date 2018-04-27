//globale variables
var display = document.getElementById("display");
display.innerHTML = 0;
var a = 0;
var b = 0;
var operation = null;
var calcul = null;

//recupere les value des nombres cliqué et
//les assigne sur "var a" ou "var b" en fonction de la "var operation"
function reply_numbers(clicked_id) {
    if (operation == null) {

        if (a == 0) {
            a = document.getElementById(clicked_id).value;
            display.innerHTML = a;
        } else {
            a = a + document.getElementById(clicked_id).value;
            display.innerHTML = a;
        }
    } else if (operation != null) {
        if (b == 0) {
            b = document.getElementById(clicked_id).value;
            display.innerHTML = b;
        } else {
            b = b + document.getElementById(clicked_id).value;
            display.innerHTML = b;
        }
    }

}

//recupere les value des touches +-/* et modifie la "var operation"
function reply_operation(clicked_id) {
    if (operation == null) {
        operation = document.getElementById(clicked_id).value;
    } else if (operation != null) {
        reply_calc();
        operation = document.getElementById(clicked_id).value;
    }
}

//Gere la touche =, transforme var a et var b en nombres,
//Lance le calcul et met le resultat dans "var result"
//Affiche le resultat et remet "var b" a 0 et "var a" a "var result" pour pouvoir enchainer plusieurs calculs.
//Remet "var operation" a la valeur null
function reply_calc(clicked_id) {
    var result = 0;
    a = Number(a);
    b = Number(b);
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
    }
    display.innerHTML = result;
    a = result;
    b = 0;
    operation = null;
}
