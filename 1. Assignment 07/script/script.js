function checkPasswordStrength() {
    var password = inputFieldValues("password");
    var strengthMeter = document.getElementById('strength-meter');
    var strengthText = document.getElementById('strength-text');

    // Reset the strength meter and text
    strengthMeter.value = 0;
    strengthText.textContent = '';

    // console.log(strengthMeter);
    // console.log(strengthText);

    var strength = 0;

    if (password.length >= 8) {
        strength += 1
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength += 1
    }

    if (/\d/.test(password)) {
        strength += 1
    }

    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
        strength += 1
    }

    // Update the strength meter and text
    strengthMeter.value = strength;

    switch (strength) {
        case 0:
            strengthText.textContent = 'Weak';
            break;
        case 1:
            strengthText.textContent = 'Moderate';
            break;
        case 2:
            strengthText.textContent = 'Strong';
            break;
        case 3:
            strengthText.textContent = 'Very Strong';
            break;
        case 4:
            strengthText.textContent = 'Extremely Strong';
            break;
    }
}












function inputFieldValues(fieldId) {
    return document.getElementById(fieldId).value;
}