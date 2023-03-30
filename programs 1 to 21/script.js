

// Write a js program to find maximum between two numbers.
function maxMin() {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;

    if (num1 > num2) {
        document.getElementById("maxOutput").innerHTML = num1 + " is maximum";
    }
    else if (num1 < num2) {
        document.getElementById("maxOutput").innerHTML = num2 + " is maximum";
    }
    else {
        document.getElementById("maxOutput").innerHTML = "Error";
    }
}

// Write a js program to find maximum between three numbers.
function maxMinBtw3() {
    var num1 = document.getElementById("input3").value;
    var num2 = document.getElementById("input4").value;
    var num3 = document.getElementById("input5").value;

    if (num1 > num2) {
        if (num1 > num3) {
            document.getElementById("maxOutputbtw3").innerHTML = num1 + " is maximum";
        }
        else {
            document.getElementById("maxOutputbtw3").innerHTML = num3 + " is maximum";
        }
    }
    else {
        if (num2 > num3) {
            document.getElementById("maxOutputbtw3").innerHTML = num2 + " is maximum";
        }
        else {
            document.getElementById("maxOutputbtw3").innerHTML = num3 + " is maximum";
        }
    }
}

// Write a js program to check whether a number is negative, positive or zero.
function numPosNeZe() {
    var num = document.getElementById('input6').value;

    if (num > 0) {
        document.getElementById("numPosNeZe").innerHTML = num + " is positive number";
    }
    else if (num < 0) {
        document.getElementById("numPosNeZe").innerHTML = num + " is negative number";
    }
    else {
        document.getElementById("numPosNeZe").innerHTML = num + " is zero number";
    }
}

// Write a js program to check whether a number is divisible by 5 and 11 or not.









// Write a js program to check whether a number is even or odd.
function evenOdd() {
    var num = document.getElementById("input8").value;

    if (num % 2 == 0) {
        document.getElementById("evenOddOutput").innerHTML = num + " is a even number"
    }
    else{
        document.getElementById("evenOddOutput").innerHTML = num + " is a even number"
    }
}




















function autoClearInput() {
    document.getElementById("input1").value = "";
}

