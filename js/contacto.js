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
      btn.value = 'Enviar';
      inputName.value = '';
      inputEmail.value ='';
      txtMensaje.value = '';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Enviado';
      alert(JSON.stringify(err));
    });
});