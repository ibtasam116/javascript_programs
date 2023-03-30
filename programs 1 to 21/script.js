


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







// function showOutput(){
// }

function autoClearInput() {
    document.getElementById("input1").value = "";
}

