


function maxMin() {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;

    if(num1 > num2){
        document.getElementById("maxOutput").innerHTML = num1 + " is maximum";
    }
    else if ( num1 < num2){
        document.getElementById("maxOutput").innerHTML = num2 + " is maximum";
    }
    else{
        document.getElementById("maxOutput").innerHTML = "Error";
    }
}


function maxMinBtw3() {
    var num1 = document.getElementById("input3").value;
    var num2 = document.getElementById("input4").value;
    var num3 = document.getElementById("input5").value;

    if (num1 > num2) {
        if (num1 > num3) {
            document.getElementById("maxOutputbtw3").innerHTML = num1 + " is maximum";
        }
        else{
            document.getElementById("maxOutputbtw3").innerHTML = num3 + " is maximum";
        }
    }
    else{
        if (num2 > num3) {
            document.getElementById("maxOutputbtw3").innerHTML = num2 + " is maximum";
        }
        else{
            document.getElementById("maxOutputbtw3").innerHTML = num3 + " is maximum";
        }
    }
}







// function showOutput(){
// }

function autoClearInput() {
    document.getElementById("input1").value = "";
}

