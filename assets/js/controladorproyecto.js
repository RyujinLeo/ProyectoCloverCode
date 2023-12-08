function corrercodigo(){
let codigohtml = document.getElementById("codigo-html").value;
let codigocss = document.getElementById("codigo-css").value;
let codigojavas = document.getElementById("codigo-js").value;
let resultado = document.getElementById("resultado");

resultado.contentDocument.body.innerHTML = codigohtml + "<style>" +codigocss + "</style>";
resultado.contentWindow.eval(codigojavas);

}