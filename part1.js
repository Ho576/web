// Your code
// Part 1:

//Function of the phone number
function validatePhone() {
    const phoneInput = document.getElementById("user-phone");
    const errorMsg = phoneInput.nextElementSibling;
    const phonePattern = /^(059|056)\d{7}$/;
    
    if (!phonePattern.test(phoneInput.value)) {
        errorMsg.textContent = "Invalid phone number";
        return false;
    }
    
    errorMsg.textContent = "";
    return true;
}

//Functions of password
function generatePassword() {
    const passwordInput = document.getElementById("user-pass");
    const errorMsg = passwordInput.nextElementSibling;
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedPassword = "_";
    
    for (let i = 0; i < 14; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters.charAt(randomIndex);
    }
    
    passwordInput.value = generatedPassword;
    errorMsg.textContent = "";
}
function validatePassword() {
    const passwordInput = document.getElementById("user-pass");
    const errorMsg = passwordInput.nextElementSibling;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_).{8,16}$/;
    
    if (!passwordPattern.test(passwordInput.value)) {
        errorMsg.textContent = "Password must contain capital letters, small letters, numbers, and underscore `_` and length between 8 and 16 digits.";
        return false;
    }
    
    errorMsg.textContent = "";
    return true;
}

//Function of date of birth
function validateDOB() {
    const dobInput = document.getElementById("user-dob");
    const errorMsg = dobInput.nextElementSibling;
    const dobValue = new Date(dobInput.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobValue.getFullYear();
    
    if (age < 18) {
        errorMsg.textContent = "You must be 18 years old or older to sign-up.";
        return false;
    }
    
    errorMsg.textContent = "";
    return true;
}

//Check if input successful
function checkFormValidity() {
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isDOBValid = validateDOB();
    
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

