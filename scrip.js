document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado correctamente');

    // Limpiar los campos del formulario después del envío
    document.querySelector('#contact-form').reset();
});