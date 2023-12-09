
function vermenunuevoproyecto(){
    location.href= "/assets/html/nuevoproyecto.html"

}

function verinfousuario(){
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

  // Realizar una solicitud al servidor para obtener la información completa del usuario
  fetch(`http://localhost:3000/usuarios/${userId}`)
    .then(response => response.json())
    .then(data => {
      // Llenar el campo de nombre con la información del usuario
      document.getElementById('botonprof').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg">`;
      let proyector=[];
      proyector= data.usuario.proyectos;
      console.log(proyector.length);
      renderizarproyectos(proyector);
      document.getElementById('proyetosusuario').innerHTML = `${data.usuario.proyectos.length}`;

      //limites de proyectos y contadores
      // si es cuentagratis
      if (`${data.usuario.tipocuenta}`=='gratis'){
        document.getElementById('proyetoslimite').innerHTML = '20';
        if (`${data.usuario.proyectos.length}`=='20'){
        console.log('no se pueden crear mas proyectos, limite alcanzado')
        document.getElementById('proyectonuevo').style.display='none';
        }else{

        }
        // si es cuenta premium
      } else if (`${data.usuario.tipocuenta}`=='premium'){
        document.getElementById('proyetoslimite').innerHTML = 'ilimitado';
      }

    //limites de proyectos y contadores final

    
      // Llenar otros campos del formulario según sea necesario
    })
    .catch(error => console.error('Error al obtener la información del usuario:', error));

}

const renderizarproyectos = (proyectosc) => {
let proyectos = [];
proyectos=proyectosc;
console.log(proyectos);
proyectos.forEach((proyecto) => {
    document.getElementById('contenedorprincipalproyectos').innerHTML +=
    `<div id="proyecto" onclick="vermenunuevoproyecto()">
                <div id="iconoproyecto">
                    <i class="fa-solid fa-cloud"></i>
                </div>
                <div id="nombreproyecto">
                    <h1>${proyecto.nombre}</h1>
                </div>
            </div>`;
});
}