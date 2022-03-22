//con Jquery ($) reemplazo valores para simplificar a la hora de validar el formulario estableciendo...
//...el: si(if) sucede x entonces(else) ó alerta para que se rellene el campo o retorna para que continue dejando el valor anterior completo.

$('#formulario').on('submit', function() {
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();
    var ciudad = $('#ciudad').val();
    var provincia = $('#provincia').val();
    var mensaje = $('#mensaje').val();
    //si formulario esta vacio//
    var nombreEstaVacio = nombre === '';
    var apellidoEstaVacio = apellido === '';
    var emailEstaVacio = email === '';
    var ciudadEstaVacio = ciudad === '';
    var provinciaEstaVacio = provincia === null;
    var mensajeEstaVacio = mensaje === '';

    if (nombreEstaVacio && apellidoEstaVacio && emailEstaVacio && ciudadEstaVacio && provinciaEstaVacio && mensajeEstaVacio) {
        alert('Por favor, completa el formulario');
        return false;
    } else if (nombreEstaVacio) {
        alert('Por favor, ingresa tu Nombre');
        return false;
    } else if (apellidoEstaVacio) {
        alert('Por favor, ingresa tu Apellido');
        return false;
    } else if (emailEstaVacio) {
        alert('Por favor, ingresa tu E-mail');
        return false;
    } else if (ciudadEstaVacio) {
        alert('Por favor, ingresa la Ciudad en la que vives');
        return false;
    } else if (provinciaEstaVacio) {
        alert('Por favor, ingresa la Provincia en la que vives');
        return false;
    } else if (mensajeEstaVacio) {
        alert('Por favor, dejanos tu comentario');
        return false;
    } else {
        alert('Gracias por completar el formulario')
    }

})