$(function validarregistro() 
{
  $("#registro").validate({
       rules: {
              email: {
                  required: true,
                  email: true
              },
              usuario: "required",
              password: "required",
              password2: {
                  required: true,
                  equalTo: "#password"
              },
              fecha: "required" 
          }, //rules
      messages: {
          email: {
              required: 'Ingresa tu correo electrónico',
              email: 'Formato de correo no válido'
          },
          usuario: {
              required: 'Ingresa tu nombre de usuario'
          },
          password: {
              required: 'Ingresa una contraseña',
              minlength: 'Caracteres insuficientes'
          },
          password2: {
            required: 'Reingresa la contraseña',
            equalTo: 'Las contraseñas ingresadas no coinciden',
            minlength: 'Caracteres insuficientes'
          },
          fecha:{
              required: 'Ingresa tú fecha de nacimiento',
              min: 'Fecha de nacimiento no válida'
          }
      }//messages
  }); //$('registro').validate
}); //function

