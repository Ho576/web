// Your code
// Part 1:

//Function of the phone number
function validatePhone() {
    const phoneInput = document.getElementById("user-phone");
    const errorMsg = phoneInput.nextElementSibling;
    const phonePattern = /^(059|056)\d{7}$/;
    errorMsg.textContent = "";
    if (!phonePattern.test(phoneInput.value)) {
        //errorMsg.textContent = "Invalid phone number";
        return false;
    }
    
   
    return true;
}

//Functions of password
function generatePassword() {
    const passwordInput = document.getElementById("user-pass");
    const errorMsg = document.querySelector(".mb-3 .error-msg");
    errorMsg.textContent = "";
    const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallCharacters ="abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789"
    let generatedPassword = "";
    
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * capitalCharacters.length);
        generatedPassword += capitalCharacters.charAt(randomIndex);
    }
    generatedPassword+="_";
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * smallCharacters.length);
        generatedPassword += smallCharacters.charAt(randomIndex);
    }
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        generatedPassword += numbers.charAt(randomIndex);
    }
    
    passwordInput.value = generatedPassword;
    
}
function validatePassword() {
    const passwordInput = document.getElementById("user-pass");
    const errorMsg = document.querySelector(".mb-3 .error-msg");
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_).{8,16}$/;
    errorMsg.textContent = "";
    if (!passwordPattern.test(passwordInput.value)) {
        //errorMsg.textContent = "Password must contain capital letters, small letters, numbers, and underscore `_` and length between 8 and 16 digits.";
        return false;
    }
    
    
    return true;
}

//Function of date of birth
function validateDOB() {
    const dobInput = document.getElementById("user-dob");
    const errorMsg = dobInput.nextElementSibling;
    const dobValue = new Date(dobInput.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobValue.getFullYear();
    errorMsg.textContent = "";
    if (age < 18) {
       // errorMsg.textContent = "You must be 18 years old or older to sign-up.";
        return false;
    }
    
    
    return true;
}

//Check if input successful
function checkFormValidity() {

    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isDOBValid = validateDOB();

    if(!isPhoneValid)
    {
        const phoneInput = document.getElementById("user-phone");
       const errorMsg = phoneInput.nextElementSibling;
        errorMsg.textContent = "Invalid phone number";
    }
    if(!isPasswordValid)
    {
       const errorMsg = document.querySelector(".mb-3 .error-msg");
        errorMsg.textContent = "Password must contain capital letters, small letters, numbers, and underscore `_` and length between 8 and 16 digits.";
    }
    if(!isDOBValid)
    {
        const dobInput = document.getElementById("user-dob");
        const errorMsg = dobInput.nextElementSibling;
        errorMsg.textContent = "You must be 18 years old or older to sign-up.";
    }
    
    if (isPhoneValid && isPasswordValid && isDOBValid) {
        alert("Successful");
    }
}

//Listeners
document.getElementById("user-phone").addEventListener("input", validatePhone);
document.getElementById("gen-pass").addEventListener("click", generatePassword);
document.getElementById("user-pass").addEventListener("input", validatePassword);
document.getElementById("user-dob").addEventListener("input", validateDOB);
document.getElementById("register-user").addEventListener("click", checkFormValidity);




