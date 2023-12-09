var usuarioseleccionado = null;

function registrar(){
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("contra");

    // Check validity para cada input
    var isNameValid = nameInput.checkValidity();
    var isEmailValid = emailInput.checkValidity();
    var isPasswordValid = passwordInput.checkValidity();

     // Check if all inputs are valid
     if (isNameValid && isEmailValid && isPasswordValid) {
        alert("Validation correcta!");
        agregarUsuario()
        // Redirect to another HTML file
    } else {
        alert("Por favor ingrese bien sus datos.");
       
    }
     
}



async function agregarUsuario() {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('contra').value;

    try {
      const response = await fetch('http://localhost:3000/usuarios/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();

      // Muestra el resultado en la página
      window.location.href = "/assets/html/login.html";
     // document.getElementById('resultado').innerText = data.mensaje;
      alert("Validation correcta!");

    } catch (error) {

    }

  };

