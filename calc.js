//globale variables
var display = document.getElementById("display");
display.innerHTML = 0;
var a = 0;
var b = 0;
var operation = null;
var calcul = null;


function reply_numbers(clicked_id) {
    if (operation == null) {

        if (a == 0) {
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
    } 
    else if(operation != null){
        reply_calc();
        operation = document.getElementById(clicked_id).value;
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
    display.innerHTML = result;
    console.log("result:", result);
    a = result;
    b = 0;
    operation = null;
}

