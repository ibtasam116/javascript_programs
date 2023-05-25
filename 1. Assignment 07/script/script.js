Meter// function checkPasswordStrength() {
//     var password = inputFieldValues("password");
//     var strengthMeter = document.getElementById('strength-meter');
//     var strengthText = document.getElementById('strength-text');

//     // Reset the strength meter and text
//     strengthMeter.value = 0;
//     strengthText.textContent = '';

//     // console.log(strengthMeter);
//     // console.log(strengthText);

//     var strength = 0;

//     if (password.length >= 8) {
//         strength += 1
//     }

//     if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
//         strength += 1
//     }

//     if (/\d/.test(password)) {
//         strength += 1
//     }

//     if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
//         strength += 1
//     }

//     // Update the strength meter and text
//     strengthMeter.value = strength;

//     switch (strength) {
//         case 0:
//             strengthText.textContent = 'Weak';
//             break;
//         case 1:
//             strengthText.textContent = 'Moderate';
//             break;
//         case 2:
//             strengthText.textContent = 'Strong';
//             break;
//         case 3:
//             strengthText.textContent = 'Very Strong';
//             break;
//         case 4:
//             strengthText.textContent = 'Extremely Strong';
//             break;
//     }
// }


function checkPasswordStrength() {
    var password = inputFieldValues('password');
    // console.log(password);
    var strengthMeter = document.getElementById("strength-meter");
    var strengthText = document.getElementById("strength-text");

    strengthMeter.value = 0;
    // console.log(strengthMeter);
    strengthText.textContent = "";
    // console.log(strengthText);

    var strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }

    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        strength += 1;
    }

    if (/\d/.test(password)) {
        strength += 1;
    }

    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
        strength += 1;
    }

    switch (strength) {
        case 0:
            strengthText.textContent = "Week"
            break;
        case 1:
            strengthText.textContent = "Moderate"
            break;
        case 2:
            strengthText.textContent = "Strong"
            break;
        case 3:
            strengthText.textContent = "Very Strong"
            break;
        case 4:
            strengthText.textContent = "Extremely Strong"
            break;
    }
    strengthMeter.value = strength;
// This is my try Done
}


function checkPalindrome() {
    var input = inputFieldValues("input")
    var result = document.getElementById('result');

    // Remove spaces and convert to lowercase for comparison
    var formattedInput = input.replace(/\s/g, '').toLowerCase();

    // Reverse the string
    var reversedInput = formattedInput.split('').reverse().join('');

    if (!input) {
        result.textContent = 'Please Enter Number'
        return;
    }

    // Check if the reversed string is equal to the original string
    if (formattedInput === reversedInput) {
        result.textContent = 'Palindrome';
    } else {
        result.textContent = 'Not a Palindrome';
    }
}











function inputFieldValues(fieldId) {
    return document.getElementById(fieldId).value;
}