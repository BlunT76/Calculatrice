//globale variables
document.getElementById('1').value = 1;
document.getElementById('2').value = 2;
document.getElementById('3').value = 3;
document.getElementById('4').value = 4;
document.getElementById('5').value = 5;
document.getElementById('6').value = 6;
document.getElementById('7').value = 7;
document.getElementById('8').value = 8;
document.getElementById('9').value = 9;
document.getElementById('0').value = 0;
document.getElementById('divide').value = "/";
document.getElementById('times').value = "*";
document.getElementById('minus').value = "-";
document.getElementById('plus').value = "+";
document.getElementById('equals').value = "&equals";
document.getElementById('dot').value = ".";
var display = document.getElementById("display");
display.innerHTML = 0;
var a = 0;
var b = 0;
var operation = null;
var calcul = null;


function reply_numbers(clicked_id) {
    if (operation == null) {

        if (a == 0) {
            //alert(clicked_id);
            a = document.getElementById(clicked_id).value;
            display.innerHTML = a;
            console.log("a:", a);
        } else {
            a = a + document.getElementById(clicked_id).value;
            display.innerHTML = a;
            console.log("a:", a);
        }
    } else if (operation != null) {
        if (b == 0) {
            //alert(clicked_id);
            b = document.getElementById(clicked_id).value;
            display.innerHTML = b;
            console.log("b:", b);
        } else {
            b = b + document.getElementById(clicked_id).value;
            display.innerHTML = b;
            console.log("b:", b);
        }
    }

}

function reply_operation(clicked_id) {
    if (operation == null) {
        operation = document.getElementById(clicked_id).value;
        //display.innerHTML = "";
        console.log("operation:", operation);
    }
}

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
    //calcul = a + operation + b;
    //= Number(calcul);
    //console.log("calcul:", calcul);
    //display.innerHTML = "";
    display.innerHTML = result;
    console.log("result:", result);
    a = 0;
    b = 0;
    operation = null;
}
//calc();
