const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
      // Obtener los valores de usuario y contraseña ingresados por el usuario
      const usuarioInput = document.getElementById("usuario").value;
      const contraseniaInput = document.getElementById("contrasenia").value;
  
      // Cargar el archivo JSON con los usuarios y contraseñas
      fetch("../usuarios.json")
        .then((response) => response.json())
        .then((data) => {
          const usuarios = data.usuarios;
  
          // Verificar si las credenciales coinciden con algún usuario en el JSON
          const usuarioValido = usuarios.find((user) => user.usuario === usuarioInput && user.contrasenia === contraseniaInput);
  
          if (usuarioValido) {
            // Si las credenciales son válidas, redirigir al usuario a la página "index"
            window.location.href = "../index.html";
          } else {
            // Si las credenciales no son válidas, mostrar un mensaje de error o realizar alguna otra acción
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
          }
        })
        .catch((error) => console.error(error));
    }); 
