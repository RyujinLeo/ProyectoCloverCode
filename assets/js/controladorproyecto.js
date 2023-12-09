var userId;
var proyectoID;

function corrercodigo(){
let codigohtml = document.getElementById("codigo-html").value;
let codigocss = document.getElementById("codigo-css").value;
let codigojavas = document.getElementById("codigo-js").value;
let resultado = document.getElementById("resultado");

resultado.contentDocument.body.innerHTML = codigohtml + "<style>" +codigocss + "</style>";
resultado.contentWindow.eval(codigojavas);

}




function verinfousuario(){
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId');
    proyectoID = urlParams.get('proyectoID');
    
      // Realizar una solicitud al servidor para obtener la información completa del usuario
      fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(data => {
          // Llenar el campo de foto con la información del usuario
          document.getElementById('botonprof').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg">`;
          let proyector=[];
          proyector= data.usuario.proyectos;
          console.log(`${proyector[proyectoID].css}`);
          renderizarproyecto(proyector);
          //limites de proyectos y contadores
          // si es cuentagratis
          
        //limites de proyectos y contadores final
    
        
          // Llenar otros campos del formulario según sea necesario
        })
        .catch(error => console.error('Error al obtener la información del usuario:', error));
    
    }

    const renderizarproyecto = (proyectosc) => {
        let proyectar = [];
        proyectar = proyectosc;
        console.log(`${proyectar[0]}`);
        //document.getElementById('codigo-html').value =`${proyectar[proyectoID]}`;
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