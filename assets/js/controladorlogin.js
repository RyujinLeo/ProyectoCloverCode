function vermenuprincipal(){
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("contra");

    // Check validity para cada input
    var isEmailValid = emailInput.checkValidity();
    var isPasswordValid = passwordInput.checkValidity();

     // Check de la validez
     if (isEmailValid && isPasswordValid) {
        alert("Validation correcta!");
        // Redirect to another HTML file
        window.location.href= "/assets/html/Menuprincipal.html"
    } else {
        alert("Por favor ingrese bien sus datos.");
       
    }
}

function verregistro(){
    location.href= "/assets/html/Registro.html"
}