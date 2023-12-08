function registrar(){
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("contra");

    // Check validity para cada input
    var isNameValid = nameInput.checkValidity();
    var isEmailValid = emailInput.checkValidity();
    var isPasswordValid = passwordInput.checkValidity();

    // Check if all inputs are valid
     // Check if all inputs are valid
     if (isNameValid && isEmailValid && isPasswordValid) {
        alert("Validation correcta!");
        // Redirect to another HTML file
        window.location.href = "/assets/html/login.html";
    } else {
        alert("Por favor ingrese bien sus datos.");
       
    }
     
}