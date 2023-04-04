
// !====================== 1 ======================! 
// Write a js program to find maximum between two numbers.
function maxMin() {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let highestNumber;    /* This variable used for storing highest number */

    if (!num1) {
        document.getElementById("maxOutput").innerHTML = "Please enter first number";
        alert("Please enter first number");
        return;
    }

    if (!num2) {
        document.getElementById("maxOutput").innerHTML = "Please enter second number";
        alert("Please enter second number");
        return;
    }

    if (num1 > num2) {
        highestNumber = num1
    }
    else {
        highestNumber = num2
    }

    document.getElementById("maxOutput").innerHTML = highestNumber + " is maximum";
}

// !====================== 2 ======================!
// Write a js program to find maximum between three numbers.
function maxMinBtw3() {
    var num1 = document.getElementById("input3").value;
    var num2 = document.getElementById("input4").value;
    var num3 = document.getElementById("input5").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let largest;

    if (!num1) {
        document.getElementById("maxOutputbtw3").innerHTML = "Please enter first number";
        alert("Please enter first number");
        return;
    }

    if (!num2) {
        document.getElementById("maxOutputbtw3").innerHTML = "Please enter second number";
        alert("Please enter second number");
        return;
    }

    if (!num3) {
        document.getElementById("maxOutputbtw3").innerHTML = "Please enter third number";
        alert("Please enter third number");
        return;
    }

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }

    document.getElementById("maxOutputbtw3").innerHTML = largest + " is maximum";
}

// !====================== 3 ======================!
// Write a js program to check whether a number is negative, positive or zero.
function numPosNeZe() {
    var num = document.getElementById('input6').value;

    if (!num) {
        document.getElementById("numPosNeZe").innerHTML = "Please enter number";
        alert("Please enter number");
        return;
    }

    if (num > 0) {
        document.getElementById("numPosNeZe").innerHTML = num + " is positive number";
    }
    else if (num < 0) {
        document.getElementById("numPosNeZe").innerHTML = num + " is negative number";
    }
    else if (num == 0) {
        document.getElementById("numPosNeZe").innerHTML = num + " is zero number";
    } else {
        document.getElementById("numPosNeZe").innerHTML = "Invalid! Input";
    }
}

// !====================== 4 ======================!
// Write a js program to check whether a number is divisible by 5 and 11 or not.
function numDivisi5And11() {
    var num = document.getElementById('input7').value;


    if (!num) {
        document.getElementById('numDivisi5And11').innerHTML = "Please enter number";
        alert("Please enter number");
        return;
    }

    if (num % 5 == 0 && num % 11 == 0) {
        document.getElementById('numDivisi5And11').innerHTML = num + " is divisible by 5 and 11"
    }
    else {
        document.getElementById('numDivisi5And11').innerHTML = num + " is not divisible by 5 and 11"
    }
}

// !====================== 5 ======================!
// Write a js program to check whether a number is even or odd.
function evenOdd() {
    var num = document.getElementById("input8").value;

    if (!num) {
        document.getElementById("evenOddOutput").innerHTML = "Please enter number";
        alert("Please enter number");
        return;
    }

    if (num % 2 == 0) {
        document.getElementById("evenOddOutput").innerHTML = num + " is a even number";
    }
    else {
        document.getElementById("evenOddOutput").innerHTML = num + " is a even number";
    }
}

// !====================== 6 ======================!
// Write a js program to check whether a year is leap year or not.
function leapYear() {
    var year = document.getElementById("input9").value;

    if (!year) {
        document.getElementById("leapYearOutput").innerHTML = "Please enter year";
        alert("Please enter year");
        return;
    }

    if (year % 4 == 0) {
        document.getElementById("leapYearOutput").innerHTML = year + " is a leap year";
    }
    else {
        document.getElementById("leapYearOutput").innerHTML = year + " is not a leap year";
    }
}

// !====================== 7 ======================!
// Write a js program to check whether a character is alphabet or not.
function checkAlphaOrNot() {
    var alpha = document.getElementById("input10").value;

    if (!alpha) {
        document.getElementById('checkAlphaOrNot').innerHTML = "Please enter character";
        alert("Please enter character");
        return;
    }

    if ((alpha >= "a" && alpha <= "z") || (alpha >= "A" && alpha <= "Z")) {
        document.getElementById('checkAlphaOrNot').innerHTML = alpha + " is a alphabet";
    }
    else {
        document.getElementById('checkAlphaOrNot').innerHTML = alpha + " is not alphabet";
    }
}

// !====================== 8 ======================!
// Write a js program to input any alphabet and check whether it is vowel or consonant.
function vowelConsonant() {
    var alpha = document.getElementById('input11').value;

    if (!alpha) {
        document.getElementById('vowelConsonant').innerHTML = "Please enter character";
        alert("Please enter character");
        return;
    }

    if (alpha === "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u" && alpha == "A" || alpha == "E" || alpha == "I" || alpha == "O" || alpha == "U") {
        document.getElementById('vowelConsonant').innerHTML = alpha + " is a vowel";
    }
    else {
        document.getElementById('vowelConsonant').innerHTML = alpha + " is a consonant";
    }
}

// !====================== 9 ======================!
// Write a js program to input any character and check whether it is alphabet, digit or special character.
function alphaDigitSpecial() {
    var anyOne = document.getElementById('input12').value;

    if (!anyOne) {
        document.getElementById('alphaDigitSpecial').innerHTML = "Please enter character";
        alert("Please enter character");
        return;
    }

    if ((anyOne >= 'a' && anyOne <= 'z') || (anyOne >= 'A' && anyOne <= 'Z')) {
        document.getElementById('alphaDigitSpecial').innerHTML = anyOne + " is a alphabet"
    }
    else if (anyOne >= 1 || anyOne == 0 || anyOne <= -1) {
        document.getElementById('alphaDigitSpecial').innerHTML = anyOne + " is a digit"
    }
    else {
        document.getElementById('alphaDigitSpecial').innerHTML = anyOne + " is a special character"
    }
}

// !====================== 10 ======================!
// Write a js program to check whether a character is uppercase or lowercase alphabet.
function uppercaseLowercase() {
    var alpha = document.getElementById('input13').value;

    if (!alpha) {
        document.getElementById('uppercaseLowercase').innerHTML = "Please enter character";
        alert("Please enter character");
        return;
    }

    if (alpha >= 'a' && alpha <= 'z') {
        document.getElementById('uppercaseLowercase').innerHTML = alpha + " is lowercase character"
    }
    else if (alpha >= 'A' && alpha <= 'Z') {
        document.getElementById('uppercaseLowercase').innerHTML = alpha + " is Uppercase character"
    }
    else {
        document.getElementById('uppercaseLowercase').innerHTML = alpha + " is not a character"
    }
}

// !====================== 11 ======================!
// Write a js program to input week number and print week day.
function printWeek() {
    var num = document.getElementById('input14').value;

    if (!num) {
        document.getElementById('printWeek').innerHTML = "Please enter week number";
        alert("Please enter week number");
        return;
    }

    if (num == 1) {
        document.getElementById('printWeek').innerHTML = "Monday"
    }
    else if (num == 2) {
        document.getElementById('printWeek').innerHTML = "Tuesday"
    }
    else if (num == 3) {
        document.getElementById('printWeek').innerHTML = "Wednesday"
    }
    else if (num == 4) {
        document.getElementById('printWeek').innerHTML = "Thursday"
    }
    else if (num == 5) {
        document.getElementById('printWeek').innerHTML = "Friday"
    }
    else if (num == 6) {
        document.getElementById('printWeek').innerHTML = "Saturday"
    }
    else if (num == 7) {
        document.getElementById('printWeek').innerHTML = "Sunday"
    }
    else {
        document.getElementById('printWeek').innerHTML = "Invalid! input"
    }
}

// !====================== 12 ======================!
// Write a js program to input month number and print number of days in that month.
function printMonth() {
    var num = document.getElementById('input15').value;

    if (!num) {
        document.getElementById('printMonth').innerHTML = "Please enter month number";
        alert("Please enter month number");
        return;
    }

    if (num == 1) {
        document.getElementById('printMonth').innerHTML = "January"
    }
    else if (num == 2) {
        document.getElementById('printMonth').innerHTML = "February"
    }
    else if (num == 3) {
        document.getElementById('printMonth').innerHTML = "March"
    }
    else if (num == 4) {
        document.getElementById('printMonth').innerHTML = "April"
    }
    else if (num == 5) {
        document.getElementById('printMonth').innerHTML = "May"
    }
    else if (num == 6) {
        document.getElementById('printMonth').innerHTML = "June"
    }
    else if (num == 7) {
        document.getElementById('printMonth').innerHTML = "July"
    }
    else if (num == 8) {
        document.getElementById('printMonth').innerHTML = "August"
    }
    else if (num == 9) {
        document.getElementById('printMonth').innerHTML = "September"
    }
    else if (num == 10) {
        document.getElementById('printMonth').innerHTML = "October"
    }
    else if (num == 11) {
        document.getElementById('printMonth').innerHTML = "November"
    }
    else if (num == 12) {
        document.getElementById('printMonth').innerHTML = "December"
    }
    else {
        document.getElementById('printMonth').innerHTML = "Invalid! input"
    }
}

// !====================== 13 ======================!
// Write a js program to count total number of notes in given amount.
function countNotes() {
    var amount = document.getElementById('input16').value;

    amount = parseFloat(amount);

    // if (!note) {
    //     document.getElementById('countNotes').innerHTML = "Please enter amount";
    //     alert("Please enter amount");
    // }

    var note5000, note1000, note500, note100, note50, note20, note10, coin5, coin2, coin1;

    note5000 = note1000 = note500 = note100 = note50 = note20 = note10 = coin5 = coin2 = coin1 = 0;

    if (amount >= 5000) {
        note5000 = amount / 5000
        amount -= note5000 * 5000
    }

    // if (amount >= 1000) {
    //     note1000 = amount/1000
    //     amount -= note1000 * 1000
    // }

    console.log(parseFloat(note5000));
    // console.log(parseFloat(note1000));
    // console.log(amount);

}

// !====================== 14 ======================!
// Write a js program to input angles of a triangle and check whether triangle is valid or not.
function checkTriangleOrNot() {
    var angle1 = document.getElementById('input17').value;
    var angle2 = document.getElementById('input18').value;
    var angle3 = document.getElementById('input19').value;

    angle1 = parseFloat(angle1);
    angle2 = parseFloat(angle2);
    angle3 = parseFloat(angle3);

    if (!angle1) {
        document.getElementById('checkTriangleOrNot').innerHTML = "please enter first angle of triangle";
        alert("please enter first angle of triangle");
        return;
    }
    if (!angle2) {
        document.getElementById('checkTriangleOrNot').innerHTML = "please enter second angle of triangle";
        alert("please enter second angle of triangle");
        return;
    }

    if (!angle3) {
        document.getElementById('checkTriangleOrNot').innerHTML = "please enter third angle of triangle";
        alert("please enter third angle of triangle");
        return;
    }
}










function autoClearInput() {
    document.getElementById("input1").value = "";
}

