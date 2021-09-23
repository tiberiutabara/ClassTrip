const form = document.querySelector("#contactForm");
const userName = document.querySelector("#userName");
const userNameError = document.querySelector("#userNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const success = document.querySelector(".form-success"); 

function validateForm(event) {
    event.preventDefault();

    var allCheckPass = 0;

        if (checkLength(userName.value, 4) === true) {
            userNameError.style.display = "none";
            allCheckPass++;
        } else {
            userNameError.style.display = "block";
        }

        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
            allCheckPass++;
        } else {
            emailError.style.display = "block";
        }
    
        if (checkLength(subject.value, 14) === true) {
            subjectError.style.display = "none";
            allCheckPass++;
        } else {
            subjectError.style.display = "block";
        }
    
        if (checkLength(message.value, 24) === true) {
            messageError.style.display = "none";
            allCheckPass++;
        } else {
            messageError.style.display = "block";
        }

    if(allCheckPass === 4){
        success.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}