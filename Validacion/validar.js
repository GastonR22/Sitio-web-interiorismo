function validacion() {

    let nombre;
    let apellido;
    let email;
    let telefono;
    let mensaje;
    let mailExpReg;
    let textoExpReg;


    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    mailExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    textoExpReg = /[a-zA-Z]+/;

    if (nombre.length == 0 || email.length == 0 || mensaje.length == 0) {
        alert('[Error] Los campos marcados con un asterisco (*) a su lado son obligatorios');
        return false;
    } else if (nombre.length > 30) {
        alert('[Error] El Nombre ingresado es demasiado largo, por favor ingréselo nuevamente');
        return false;

    } else if (apellido.length > 30) {
        ingréselo
        alert('[Error] El Apellido ingresado es demasiado largo, por favor ingréselo nuevamente');
        return false;

    } else if (telefono.length > 30) {
        alert('[Error] El Telefono ingresado es demasiado largo, por favor ingréselo nuevamente');
        return false;

    } else if (email.length > 100) {
        alert('[Error] El Correo ingresado es demasiado largo, por favor ingréselo nuevamente');
        return false;

    } else if (nombre.length < 3) {
        alert('[Error] El Nombre ingresado es demasiado corto, por favor ingréselo nuevamente');
        return false;
    } else if (mensaje.length < 15) {
        alert('[Error] El mensaje ingresado es demasiado corto, por favor ingréselo nuevamente');
        return false;

    } else if (isNaN(telefono)) {
        alert('[Error] El Teléfono ingresado no es un número o contiene caracteres no numéricos, por favor ingréselo nuevamente');
        return false;

    } else if (!mailExpReg.test(email)) {
        alert('[Error] El Email ingresado no es valido, por favor ingréselo nuevamente');
        return false;

    } else if (!textoExpReg.test(nombre)) {
        alert('[Error] El Nombre ingresado no es valido, solo se permite texto, por favor ingréselo nuevamente');
        return false;

    }


}