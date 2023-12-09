var userId ;
var proyectos = [];


function verinfousuario(){
const urlParams = new URLSearchParams(window.location.search);
userId = urlParams.get('userId');
document.getElementById('contenedorprincipalproyectos').innerHTML ='';


  // Realizar una solicitud al servidor para obtener la información completa del usuario
  fetch(`http://localhost:3000/usuarios/${userId}`)
    .then(response => response.json())
    .then(data => {
      // Llenar el campo de nombre con la información del usuario
      document.getElementById('botonprof').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg">`;
      let proyector=[];
      proyector= data.usuario.proyectos;
      console.log(proyector.length);
      document.getElementById('proyetosusuario').innerHTML = `${data.usuario.proyectos.length}`;

      //limites de proyectos y contadores
      // si es cuentagratis
      if (`${data.usuario.tipocuenta}`=='gratis'){
        document.getElementById('proyetoslimite').innerHTML = '20';
        if (`${data.usuario.proyectos.length}`=='20'){
        console.log('no se pueden crear mas proyectos, limite alcanzado')
        renderizarproyectos(proyector);
        //document.getElementById('proyectonuevo').style.display='none';
        }else{
            renderizarproyectos(proyector);
            renderizarbotonnuevo ();
        }
        // si es cuenta premium
      } else if (`${data.usuario.tipocuenta}`=='premium'){
        document.getElementById('proyetoslimite').innerHTML = 'ilimitado';
        renderizarproyectos(proyector);
        renderizarbotonnuevo();
      }

    //limites de proyectos y contadores final

    
      // Llenar otros campos del formulario según sea necesario
    })
    .catch(error => console.error('Error al obtener la información del usuario:', error));

}

const renderizarproyectos = (proyectosc) => {
proyectos = [];
proyectos=proyectosc;
console.log(proyectos);
let index=0;
proyectos.forEach((proyecto) => {
    document.getElementById('contenedorprincipalproyectos').innerHTML +=
    `<div id="proyecto" onclick="vermenunuevoproyecto(${index})">
                <div id="iconoproyecto">
                    <i class="fa-solid fa-cloud"></i>
                </div>
                <div id="nombreproyecto">
                    <h1>${proyecto.nombre}</h1>
                </div>
            </div>`;
            index++;
});
}


function renderizarbotonnuevo () {
    document.getElementById('contenedorprincipalproyectos').innerHTML +=
    `<div id="proyectonuevo" onclick="vermenunuevoproyecto()">
        <div id="iconoproyectonuevo">
        <i class="fa-solid fa-plus"></i>
     </div>
        <div id="nombreproyectonuevo">
        <h1>Crear nuevo</h1>
         </div>
    </div>`;
}

function vermenunuevoproyecto(index){
    location.href= `/assets/html/nuevoproyecto.html?userId=${userId}?proyectoID=${index}`
}

function vermenupremium(){
    location.href= `/assets/html/premium.html?userId=${userId}`
}
function vermenuperfil(){
    location.href= `/assets/html/perfil.html?userId=${userId}`
}