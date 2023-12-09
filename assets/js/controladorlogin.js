var usuarioseleccionado = null;

function vermenuprincipal(){
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("contra");

    // Check validity para cada input
    var isEmailValid = emailInput.checkValidity();
    var isPasswordValid = passwordInput.checkValidity();

     // Check de la validez
     if (isEmailValid && isPasswordValid) {
        alert("Validation correcta!");
        agregarUsuario()
        // Redirect to another HTML file
        window.location.href= "/assets/html/Menuprincipal.html"
    } else {
        alert("Por favor ingrese bien sus datos.");
       
    }
}

async function verificarUsuario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contra').value;

    try {
      const response = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      // Muestra el resultado en la página
      console.log(data);
      window.location.href= "/assets/html/Menuprincipal.html"
      usuarioseleccionado=data;
    } catch (error) {
      console.error('Error al verificar usuario:', error);
      document.getElementById('resultado').innerText = 'Error al verificar usuario';
    }
  }



  function cargausuario(){
    document.getElementById("botonprof").innerHTML =`
    <img src="${usuarioseleccionado.imagenPerfil}" id="userimg">
    `;
}







function verregistro(){
    location.href= "/assets/html/Registro.html"
}


