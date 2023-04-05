
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

    document.getElementById("maxOutput").innerHTML = "<span style='color: green; font-size: 18px;'>' " + highestNumber + " '</span> is maximum";
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

    document.getElementById("maxOutputbtw3").innerHTML = "<span style='color: green; font-size: 18px;'>' " + largest + " '</span> is maximum";
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
        document.getElementById("numPosNeZe").innerHTML = "<span style='color: green; font-size: 18px;'>' " + num + " '</span> is positive number";
    }
    else if (num < 0) {
        document.getElementById("numPosNeZe").innerHTML = "<span style='color: green; font-size: 18px;'>' " + num + " '</span> is negative number";
    }
    else if (num == 0) {
        document.getElementById("numPosNeZe").innerHTML = "<span style='color: green; font-size: 18px;'>' " + num + " '</span> is zero number";
    } else {
        document.getElementById("numPosNeZe").innerHTML = "<span style='color: black; font-size: 20px;'>Invalid! Input</span>";
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
        document.getElementById('numDivisi5And11').innerHTML = "<span style='color: green; font-size: 18px;'>' " + num + " '</span> is divisible by 5 and 11"
    }
    else {
        document.getElementById('numDivisi5And11').innerHTML = "<span style='color: black; font-size: 18px;'>' " + num + " '</span> is not divisible by 5 and 11"
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
        document.getElementById("evenOddOutput").innerHTML = "<span style='color: green; font-size: 18px;'>' " + num + " '</span> is a even number";
    }
    else {
        document.getElementById("evenOddOutput").innerHTML = "<span style='color: black; font-size: 18px;'>' " + num + " '</span> is a odd number";
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
        document.getElementById("leapYearOutput").innerHTML = "<span style='color: green; font-size: 18px;'>' " + year + " '</span> is a leap year";
    }
    else {
        document.getElementById("leapYearOutput").innerHTML = "<span style='color: black; font-size: 18px;'>' " + year + " '</span> is not a leap year";
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
        document.getElementById('checkAlphaOrNot').innerHTML = "<span style='color: green; font-size: 18px;'>' " + alpha + " '</span> is a alphabet";
    }
    else {
        document.getElementById('checkAlphaOrNot').innerHTML = "<span style='color: black; font-size: 18px;'>' " + alpha + " '</span> is not alphabet";
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
        document.getElementById('vowelConsonant').innerHTML = "<span style='color: green; font-size: 18px;'>' " + alpha + " '</span> is a vowel";
    }
    else {
        document.getElementById('vowelConsonant').innerHTML = "<span style='color: green; font-size: 18px;'>' " + alpha + " '</span> is a consonant";
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
        document.getElementById('alphaDigitSpecial').innerHTML = "<span style='color: green; font-size: 18px;'>' " + anyOne + " '</span> is a alphabet"
    }
    else if (anyOne >= 1 || anyOne == 0 || anyOne <= -1) {
        document.getElementById('alphaDigitSpecial').innerHTML = "<span style='color: green; font-size: 18px;'>' " + anyOne + " '</span> is a digit"
    }
    else {
        document.getElementById('alphaDigitSpecial').innerHTML = "<span style='color: green; font-size: 20px;'>' " + anyOne + " '</span> is a special character"
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
        document.getElementById('uppercaseLowercase').innerHTML = "<span style='color: green; font-size: 20px;'>' " + alpha + " '</span> is lowercase character"
    }
    else if (alpha >= 'A' && alpha <= 'Z') {
        document.getElementById('uppercaseLowercase').innerHTML = "<span style='color: green; font-size: 18px;'>' " + alpha + " '</span> is Uppercase character"
    }
    else {
        document.getElementById('uppercaseLowercase').innerHTML = "<span style='color: black; font-size: 18px;'>' " + alpha + " '</span> is not a character"
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
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Monday</span>"
    }
    else if (num == 2) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Tuesday</span>"
    }
    else if (num == 3) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Wednesday</span>"
    }
    else if (num == 4) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Thursday</span>"
    }
    else if (num == 5) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Friday</span>"
    }
    else if (num == 6) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Saturday</span>"
    }
    else if (num == 7) {
        document.getElementById('printWeek').innerHTML = "<span style='color: green; font-size: 18px;'>Sunday</span>"
    }
    else {
        document.getElementById('printWeek').innerHTML = "<span style='color: black; font-size: 18px;'>Invalid! input</span>"
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
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>January</span>"
    }
    else if (num == 2) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>February</span>"
    }
    else if (num == 3) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>March</span>"
    }
    else if (num == 4) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>April</span>"
    }
    else if (num == 5) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>May</span>"
    }
    else if (num == 6) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>June</span>"
    }
    else if (num == 7) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>July</span>"
    }
    else if (num == 8) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>August</span>"
    }
    else if (num == 9) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>September</span>"
    }
    else if (num == 10) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>October</span>"
    }
    else if (num == 11) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>November</span>"
    }
    else if (num == 12) {
        document.getElementById('printMonth').innerHTML = "<span style='color: green; font-size: 18px;'>December</span>"
    }
    else {
        document.getElementById('printMonth').innerHTML = "<span style='color: black;'>Invalid! input"
    }
}

// !====================== 13 ======================!
// Write a js program to count total number of notes in given amount.
// function countNotes() {
//     var amount = document.getElementById('input16').value;

//     amount = parseFloat(amount);

//     if (!amount) {
//         document.getElementById('countNotes').innerHTML = "Please enter amount";
//         alert("Please enter amount");
//     }

//     var note500, note100, note50, note20, note10, note5, note2, note1;

//     /* Initialize all notes to 0 */
//     note500 = note100 = note50 = note20 = note10 = note5 = note2 = note1 = 0;


//     if (amount >= 500) {
//         note500 = amount / 500;
//         amount -= note500 * 500;
//     }
//     if (amount >= 100) {
//         note100 = amount / 100;
//         amount -= note100 * 100;
//     }
//     if (amount >= 50) {
//         note50 = amount / 50;
//         amount -= note50 * 50;
//     }
//     if (amount >= 20) {
//         note20 = amount / 20;
//         amount -= note20 * 20;
//     }
//     if (amount >= 10) {
//         note10 = amount / 10;
//         amount -= note10 * 10;
//     }
//     if (amount >= 5) {
//         note5 = amount / 5;
//         amount -= note5 * 5;
//     }
//     if (amount >= 2) {
//         note2 = amount / 2;
//         amount -= note2 * 2;
//     }
//     if (amount >= 1) {
//         note1 = amount;
//     }

//     console.log(note500)
//     console.log(note100)
//     console.log(note50)
//     console.log(note20)
//     console.log(note10)
//     console.log(note5)
//     console.log(note2)
//     console.log(note1)
// }

// !====================== 14 ======================!
// Write a js program to input angles of a triangle and check whether triangle is valid or not.
function checkTriangleOrNot() {
    var angle1 = document.getElementById('input17').value;
    var angle2 = document.getElementById('input18').value;
    var angle3 = document.getElementById('input19').value;

    angle1 = parseInt(angle1);
    angle2 = parseInt(angle2);
    angle3 = parseInt(angle3);

    if (!angle1) {
        document.getElementById('checkTriangleOrNot').innerHTML = "Please enter first angle of triangle";
        alert("Please enter first angle of triangle");
        return;
    }

    if (!angle2) {
        document.getElementById('checkTriangleOrNot').innerHTML = "Please enter second angle of triangle";
        alert("Please enter second angle of triangle");
        return;
    }

    if (!angle3) {
        document.getElementById('checkTriangleOrNot').innerHTML = "Please enter third angle of triangle";
        alert("Please enter third angle of triangle");
        return;
    }

    // If sum of angles is equal to 180 than valid trianle.
    var sumOfAngle = angle1 + angle2 + angle3;

    if (sumOfAngle === 180) {
        document.getElementById('checkTriangleOrNot').innerHTML = "<span style='color: green;'>This triangle is valid.</span>";
    }
    else {
        document.getElementById('checkTriangleOrNot').innerHTML = "This triangle is not valid.";
    }
}

// !====================== 15 ======================!
// Write a js program to input all sides of a triangle and check whether triangle is valid or not.
function checkTriangleOrNotBySides() {
    var side1 = document.getElementById('input20').value;
    var side2 = document.getElementById('input22').value;
    var side3 = document.getElementById('input21').value;

    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);

    if (!side1) {
        document.getElementById('checkTriangleOrNotBySides').innerHTML = "Please enter first side of triangle";
        alert("Please enter first side of triangle");
        return;
    }

    if (!side2) {
        document.getElementById('checkTriangleOrNotBySides').innerHTML = "Please enter second side of triangle";
        alert("Please enter second side of triangle");
        return;
    }

    if (!side3) {
        document.getElementById('checkTriangleOrNotBySides').innerHTML = "Please enter third side of triangle";
        alert("Please enter third side of triangle");
        return;
    }

    // if sum of two sides of triangle is greater than third side and this condition for all the side 
    // of triangle is true than this is valid triangle.

    if ((side1 + side2 > side3) && (side2 + side3 > side1) && side3 + side1 > side2) {
        document.getElementById('checkTriangleOrNotBySides').innerHTML = "<span style='color: green;'>This triangle is valid.</span>";
    }
    else {
        document.getElementById('checkTriangleOrNotBySides').innerHTML = "This triangle is not valid.";
    }
}

// !====================== 16 ======================!
// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
function triEquiIsosScal() {
    var side1 = document.getElementById('input23').value;
    var side2 = document.getElementById('input24').value;
    var side3 = document.getElementById('input25').value;

    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);

    if (!side1) {
        document.getElementById('triEquiIsosScal').innerHTML = "Please enter first side of triangle";
        alert("Please enter first side of triangle");
        return;
    }

    if (!side2) {
        document.getElementById('triEquiIsosScal').innerHTML = "Please enter second side of triangle";
        alert("Please enter second side of triangle");
        return;
    }

    if (!side3) {
        document.getElementById('triEquiIsosScal').innerHTML = "Please enter third side of triangle";
        alert("Please enter third side of triangle");
        return;
    }

    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        if (side1 === side2 && side2 === side3) {
            document.getElementById('triEquiIsosScal').innerHTML = "<span style='color: green;'>The triangle is equilateral.</span>";
        }
        else if (side1 === side2 || side2 === side3 || side1 === side3) {
            document.getElementById('triEquiIsosScal').innerHTML = "<span style='color: green;'>The triangle is isosceles.</span>";
        }
        else {
            document.getElementById('triEquiIsosScal').innerHTML = "<span style='color: green;'>The triangle is scalene.</span>";
        }
    }
    else {
        document.getElementById('triEquiIsosScal').innerHTML = "The sides cannot form a triangle.";
    }
}


// !====================== 17 ======================!
// Write a js program to find all roots of a quadratic equation.
function quadraticEquation() {
    let a = parseFloat(document.getElementById('input26').value);
    let b = parseFloat(document.getElementById('input27').value);
    let c = parseFloat(document.getElementById('input28').value);

    if (!a) {
        document.getElementById('quadraticEquation').innerHTML = "Please enter coefficient of x^2";
        alert("Please enter coefficient of x^2");
        return;
    }

    if (!b) {
        document.getElementById('quadraticEquation').innerHTML = "Please enter coefficient of x";
        alert("Please enter coefficient of x");
        return;
    }

    if (!c) {
        document.getElementById('quadraticEquation').innerHTML = "Please enter constant term";
        alert("Please enter constant term");
        return;
    }

    const discriminant = b * b - 4 * a * c;
    // const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('quadraticEquation').innerHTML = "The roots of the quadratic equation are <span style='color: green; font-size: 18px;'>" + root1 + " </span> and <span style='color: green; font-size: 18px;'>" + root2 + "</span>.";
        // console.log(`The roots of the quadratic equation are ${root1} and ${root2}.`);
    }
    else if (discriminant === 0) {
        const root = -b / (2 * a);
        document.getElementById('quadraticEquation').innerHTML = "The root of the quadratic equation is <span style='color: green; font-size: 18px;'>" + root + "</span>.";
        // console.log(`The root of the quadratic equation is ${root}.`);
    }
    else {
        console.log("The quadratic equation has no real roots.");
    }

}

// !====================== 18 ======================!
// Write a js program to calculate profit or loss.
function profitLoss() {
    let costPrice = parseFloat(document.getElementById('input29').value);
    let sellingPrice = parseFloat(document.getElementById('input30').value);

    if (!costPrice) {
        document.getElementById("profitLoss").innerHTML = "Please enter cost price";
        alert("Please enter cost price");
        return;
    }

    if (!sellingPrice) {
        document.getElementById("profitLoss").innerHTML = "Please enter selling price";
        alert("Please enter selling price");
        return;
    }

    const profitOrLoss = sellingPrice - costPrice;

    if (profitOrLoss > 0) {
        document.getElementById("profitLoss").innerHTML = "The item has a profit of: <span style='color: green; font-size: 18px;'>" + profitOrLoss.toFixed(2) + "</span>";
        // document.getElementById("profitLoss").innerHTML = `The item has a profit of ${profitOrLoss.toFixed(2)}.`;
    }
    else if (profitOrLoss === 0) {
        document.getElementById("profitLoss").innerHTML = "<span style='color: green;'>The item has neither a profit nor a loss.</span>";
    }
    else {
        // Math.abs method/function is used to remove the negative sign from the integer or floating values.
        document.getElementById("profitLoss").innerHTML = "<span style='color: black;'>The item has a loss of: </span> <span style='font-size: 18px;'>" + Math.abs(profitOrLoss).toFixed(2) + "</span>";
        // document.getElementById("profitLoss").innerHTML = `The item has a loss of ${Math.abs(profitOrLoss).toFixed(2)}.`;
        // console.log(`The item has a loss of ${Math.abs(profitOrLoss).toFixed(2)}.`);
    }
}

// !====================== 19 ======================!
// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
function perGraFiveSubjects() {
    let physicsMarks = parseFloat(document.getElementById('physics').value);
    let chemistryMarks = parseFloat(document.getElementById('chemistry').value);
    let biologyMarks = parseFloat(document.getElementById('biology').value);
    let mathematicsMarks = parseFloat(document.getElementById('mathematics').value);
    let computerMarks = parseFloat(document.getElementById('computer').value);

    if (!physicsMarks) {
        document.getElementById('perGraFiveSubjects').innerHTML = "Please enter marks obtained in Physics";
        alert("Please enter marks obtained in Physics");
        return;
    }

    if (!chemistryMarks) {
        document.getElementById('perGraFiveSubjects').innerHTML = "Please enter marks obtained in Chemistry";
        alert("Please enter marks obtained in Chemistry");
        return;
    }

    if (!biologyMarks) {
        document.getElementById('perGraFiveSubjects').innerHTML = "Please enter marks obtained in Biology";
        alert("Please enter marks obtained in Biology");
        return;
    }

    if (!mathematicsMarks) {
        document.getElementById('perGraFiveSubjects').innerHTML = "Please enter marks obtained in Mathematics";
        alert("Please enter marks obtained in Mathematics");
        return;
    }

    if (!computerMarks) {
        document.getElementById('perGraFiveSubjects').innerHTML = "Please enter marks obtained in Computer";
        alert("Please enter marks obtained in Computer");
        return;
    }

    const totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathematicsMarks + computerMarks;
    const percentage = (totalMarks / 500) * 100;
    console.log(percentage);

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else if (percentage >= 33) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    document.getElementById("perGraFiveSubjects").innerHTML = "Total marks obtained: <span style='color: green; font-size: 18px;'>" + totalMarks + "</span><span style='color: black; font-size: 18px;'>/500 </span><br> Percentage obtained: <span style='color: green; font-size: 18px;'>" + percentage + "% </span><br> Grade: <span style='color: green; font-size: 18px;'>" + grade + "</span>";
    // document.getElementById('perGraFiveSubjects').innerHTML = `Total marks obtained: ${totalMarks}/500 <br> Percentage obtained: ${percentage.toFixed(2)}% <br> Grade: ${grade}`
}

// !====================== 20 ======================!
// Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
function calGrossSalary() {
    let basicSalary = parseFloat(document.getElementById('basicSalary').value);

    if (!basicSalary) {
        document.getElementById('calGrossSalary').innerHTML = `Please enter basic salary of an employee`;
        alert(`Please enter basic salary of an employee`);
        return;
    }

    let HRA, DA;

    if (basicSalary <= 10000) {
        HRA = 0.2 * basicSalary;
        DA = 0.8 * basicSalary;
    }
    else if (basicSalary <= 20000) {
        HRA = 0.25 * basicSalary;
        DA = 0.9 * basicSalary;
    }
    else {
        HRA = 0.3 * basicSalary;
        DA = 0.95 * basicSalary;
    }

    let grossSalary = basicSalary + HRA + DA;

    document.getElementById("calGrossSalary").innerHTML = "Basic Salary: <span style='color: green; font-size: 18px;'>" + basicSalary + "</span><br> HRA: <span style='color: green; font-size: 18px;'>" + HRA + "</span><br> DA: <span style='color: green; font-size: 18px;'>" + DA + "</span><br> Gross Salary: <span style='color: green; font-size: 18px;'>" + grossSalary + "</span>";
}

// !====================== 21 ======================!
// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
function electricityBill() {
    let unitCharges = parseFloat(document.getElementById('unitCharges').value);

    if (!unitCharges) {
        document.getElementById('electricityBill').innerHTML = "Please enter electricity unit charges";
        alert("Please enter electricity unit charges");
        return;
    }

    let totalBill;

    if (unitCharges <= 50) {
        totalBill = unitCharges * 0.5;
    }
    else if (unitCharges <= 150) {
        totalBill = 25 + (unitCharges - 50) * 0.75;
    }
    else if (unitCharges <= 250) {
        totalBill = 100 + (unitCharges - 150) * 1.20;
    }
    else {
        totalBill = 220 + (unitCharges - 250) * 1.50;
    }

    // add 20% surcharge to the bill
    totalBill *= 1.2;

    document.getElementById('electricityBill').innerHTML = "Total Electricity Bill: <span style='color: green; font-size: 18px;'>" + totalBill + "</span>";
}


function autoClearInput() {
    document.getElementById("input1").value = "";
}

