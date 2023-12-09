var userId;

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
    var proyectoID = urlParams.get('proyectoID');
    //console.log('URL completa:', window.location.href);
    //proyectoID = Number(urlParams.get('proyectoID'));  
    proyectoID = Number(proyectoID);
   // Convierte proyectoID a un número
        //proyectoID = parseInt(proyectoID, 10);
        console.log('Usuario ID:', userId);
        console.log('Proyecto ID:', proyectoID);
      // Realizar una solicitud al servidor para obtener la información completa del usuario
      fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(data => {
          // Llenar el campo de foto con la información del usuario
          document.getElementById('botonprof').innerHTML =`<img src="${data.usuario.imagenPerfil}" id="userimg">`;
          let proyector= data.usuario.proyectos[proyectoID];
          //console.log('Proyectos del usuario:', data.usuario.proyectos); // solo de prueba
          renderizarproyecto(proyector);
          //limites de proyectos y contadores
          // si es cuentagratis
          
        //limites de proyectos y contadores final
    
        
          // Llenar otros campos del formulario según sea necesario
        })
        .catch(error => console.error('Error al obtener la información del usuario:', error));
    
    }

    const renderizarproyecto = (proyectosc) => {
    console.log('Proyecto recibido:', proyectosc);
    //console.log(Array.isArray(proyectosc.html));

// Accede directamente a las propiedades del objeto
  const htmlString = proyectosc.html;
  const cssString = proyectosc.css;
  const jsString = proyectosc.js;

  // Asigna los valores a los elementos del DOM
  document.getElementById('codigo-html').value = htmlString;
  document.getElementById('codigo-css').value = cssString;
  document.getElementById('codigo-js').value = jsString;
 
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