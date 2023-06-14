const btn = document.getElementById('button');
const inputName = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const txtMensaje = document.getElementById('mensaje');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_sb1j19f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      limpiarCampos();
     // alert('Sent!');
      abrirVentanaModal();
    }, (err) => {
      document.getElementById("txtTitulo").innerHTML='ERROR';
      document.getElementById("txtMensaje").innerHTML = 
      '<b>¡ Tu mensaje NO se ha enviado correctamente !</b><p>' + JSON.stringify(err) + '</p>'
      abrirVentanaModal();
    });
});

document.getElementById("cerrarModal").addEventListener("click", function(){
  document.getElementsByClassName("fondo_transparente")[0].style.display="none"
})

function limpiarCampos(){
  btn.value = 'Enviar';
  inputName.value = '';
  inputEmail.value ='';
  txtMensaje.value = '';
}

function abrirVentanaModal(){
  document.getElementsByClassName("fondo_transparente")[0].style.display="block"
  return false
}