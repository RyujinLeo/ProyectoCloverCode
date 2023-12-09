var userId;


function verinfousuario(){
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId');
    
      // Realizar una solicitud al servidor para obtener la información completa del usuario
      fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(data => {
          // Llenar el campo de nombre con la información del usuario
          document.getElementById('botonprof').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg">`;
          document.getElementById('imagenpri').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg1">`;
          document.getElementById('nombre1').innerHTML=`${data.usuario.nombre}`;
          document.getElementById('email1').innerHTML=`${data.usuario.email}`;
          document.getElementById('tipocuenta').innerHTML=`${data.usuario.tipocuenta}`;

          let proyector=[];
          proyector= data.usuario.proyectos;
          console.log(proyector.length);
          document.getElementById('proyectos1').innerHTML=`${proyector.length}`;

          //limites de proyectos y contadores
          // si es cuentagratis
          
        //limites de proyectos y contadores final
    
        
          // Llenar otros campos del formulario según sea necesario
        })
        .catch(error => console.error('Error al obtener la información del usuario:', error));
    
    }
    

function vermenupremium(){
    location.href= `/assets/html/premium.html?userId=${userId}`
}

function vermenuprin(){
    location.href= `/assets/html/Menuprincipal.html?userId=${userId}`
}

function vermenuperfil(){
    location.href= `/assets/html/perfil.html?userId=${userId}`
}