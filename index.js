var emailError = document.getElementById('email-error');
var cPassError = document.getElemetById('pass-error');
var submitError = document.getElementById('btn');

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email or username is required'
        emailError.style.display = "2px solid red"
        return false;
    } 
    if(email.length < 6) {
        emailError.innerHTML ="Email or Username should be 11 digits";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid'
        return false;
     }
    
     
     emailError.innerHTML = 'valid';
     return true;
    }


function validatePass() {
    var password = document.getElementById("confirm-pass").value; 
    if(password.length == ""){
        cPassError.innerHTML = "Password is required";
        return false;
    } 
    if(password.length < 8 ) {
        cPassError.innerHTML = "add atleast 8 digits allowed";
        return false;
    }
    if(password.length < 15 ) {
        cPassError.innerHTML = "password must not exceed 15 characters";
        return false;
    }
    if(!cPassError.match(/^[A-Za-z]\w{7,15}$/)) {
        cPassError.innerHTML = "atleast 8 digits allowed";
        return false;
     } 
     cPassError.innerHTML = "valid"
     return true;
     
    
}

function validateForm() {
    if(!validateEmail() || !validatePass){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill out the required form";
        setTimeout(function(){submitError.style.display = "none";}, 3000)
        return false;
    }

}