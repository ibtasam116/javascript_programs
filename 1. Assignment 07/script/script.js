// function checkPasswordStrength() {
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


// function checkPalindrome() {
//     var input = inputFieldValues("input")
//     var result = document.getElementById('result');

//     // Remove spaces and convert to lowercase for comparison
//     var formattedInput = input.replace(/\s/g, '').toLowerCase();

//     // Reverse the string
//     var reversedInput = formattedInput.split('').reverse().join('');

//     if (!input) {
//         result.textContent = 'Please Enter Number'
//         return;
//     }

//     // Check if the reversed string is equal to the original string
//     if (formattedInput === reversedInput) {
//         result.textContent = 'Palindrome';
//     } else {
//         result.textContent = 'Not a Palindrome';
//     }
// }

function checkPalindrome() {
    let input = inputFieldValues("input");

    if (!input) {
        result.textContent = "Please Enter Number";
        return;
    }

    let result = document.getElementById('result');

    var formattedInput = input.replace(/\s/g, '').toLowerCase();
    // console.log(formattedInput);

    var reversedInput = formattedInput.split('').reverse().join("");
    // console.log(reversedInput);

    if (formattedInput === reversedInput) {
        result.textContent = "Palindrome";
    }
    else {
        result.textContent = "Not a Palindrome";
    }

    // const sentence = 'Hello,     world!    ';
    // const result = sentence.replace(/\s/g, '');
    // console.log(result);
}



// var input = prompt("Enter password");


// var password = ["test", "test@1234", "test1234", "Test@1234"]

// password.push(input)

// console.log("Updated password array:", password);


// var newPassword = password.map((element) => {
//     console.log(element);

//     var isLength = false;
//     var isDigit = false;
//     var isSmall = false;
//     var isCapital = false;
//     var isSepcial = false;

//     for (let index = 0; index < element.length; index++) {
//         const char = element[index];
//         console.log(char);

//         if (element.length > 8) {
//             isLength = true;
//         }

//         if (char >= 0 && char <= 9) {
//             isDigit = true
//         }

//         if (char <= 'z' && char >= 'a') {
//             isSmall = true
//         }

//         if (char <= 'Z' && char >= 'A') {
//             isCapital = true
//         }

//         if (char === "@" || char === "#") {
//             isSepcial = true
//         }
//     }

//     if (isLength && isDigit && isSmall && isCapital && isSepcial) {
//         return true;
//     }

//     return false;

// })

// console.log(newPassword)



// Flashcard App: Create a flashcard app that displays a question and answer pair and allows the user to flip the card to see the answer. You can use an array of objects to store the question and answer pairs and a variable to keep track of the current card being displayed.

const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    // Add more question and answer pairs here
];

let currentCardIndex = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const flipButton = document.getElementById("flipButton");
const nextButton = document.getElementById("nextButton");

// Function to display the current flashcard
function displayFlashcard() {
    const currentCard = flashcards[currentCardIndex];
    console.log(currentCard);
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    answerElement.classList.add("hidden");
}

// Function to flip the flashcard and show the answer
function flipCard() {
    answerElement.classList.toggle("hidden");
}

// Function to go to the next flashcard
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0; // Loop back to the first card
    }
    displayFlashcard();
}

// Add event listeners to the buttons
flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);

// Initial display of the first flashcard
displayFlashcard();

// Today Commit








function inputFieldValues(fieldId) {
    return document.getElementById(fieldId).value;
}