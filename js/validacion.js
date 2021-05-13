function validacion() {

    mail = document.getElementById('correo').value;
    user = document.getElementById('usuario').value;
    p1 = document.getElementById('clave').value;
    p2 = document.getElementById('clave2').value;
    nac = document.getElementById('fechanac').value;

    /*Correo*/
    if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail))) {
        alert("Debe ingresar un correo electronico valido");
        document.getElementById('correo').focus();
        return false;
    }

    /*Usuario*/
    if(user.length==0) {
        alert('Debe ingresar un nombre de usuario');
        document.getElementById('usuario').focus();
        return false;
    }

    /*Contraseña*/
    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
    }
        
    if (espacios) {
        alert ("La contraseña no puede contener espacios en blanco");
        document.getElementById('clave').focus();
        return false;
    }
    
    if (p1.length == 0) {
        alert("Los campos de contraseña no pueden quedar vacios");
        document.getElementById('clave').focus();
        return false;
    }

    if (p2.length == 0) {
        alert("Debe verificar la contraseña");
        document.getElementById('clave2').focus();
        return false;
    }

      if (p1 != p2) {
        alert("Las contraseñas deben de coincidir");
        document.getElementById('clave2').focus();
        return false;
    }
    
    return true;
}