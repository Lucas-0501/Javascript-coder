# Repositorio Javascript ----> Lucas Aguero
Sitio en Github pages: https://lucas-0501.github.io/Javascript-coder/

# Pre entrega 3
* En esta entrega se usaron eventos para manejar interacciones del usuario, como clics, cambios de estado, etc.
* Los usuarios pueden ingresar información a través de campos de entrada (inputs) en la interfaz en login.html.
* Los datos se almacenan y transmiten en formato JSON, lo que facilita la estructuración y manipulación de datos.
* La información se almacena localmente en el navegador utilizando el almacenamiento local (localStorage) para mantener datos y preferencias.
* Se realiza manipulación y actualización del DOM para modificar la interfaz de usuario de manera dinámica.

Usuarios guardados en usuarios.json
* usuario:juan password:321
* usuario:pepe password:hola

## Pre entrega 2 
* En esta entrega se añadio un objeto donde se almacena el tipo de entrada y el precio
* Se reemplazo el switch para determinar cuanto vale el ticket dependiendo de cada entrada por un while donde usa el objeto "entradas", para calcular el precio
* Una vez que se calcule el precio de la entrada y se guarde en la variable precioTickets, se lo va a pushear en un array que sera donde se almacenen los tickets agregados al carrito
* Cuando el usuario decide terminar la compra, se utiliza el metodo reduce para el array "carrito[]", donde sumara todos los elementos del array y los almacenara en la variable "precioTotal"
* Por ultimo utilizando "document.getElementById('totalCarrito').textContent" se podra mostrar en el html el valor total del carrito.


## Pre entrega 1
En esta entrega se utilizaron condicionales SWITCH e IF, ciclos WHILE y DO WHILE

El primer algoritmo pide iniciar sesion con un prompt y con un condicional SWITCH verifica si existe en los diferentes casos del switch el usuario creado, en caso de que exista, se le pide al usuario que ingrese la contraseña dentro de un ciiclo while para asegurarse de que ingrese bien la contraseña.

Una vez ingresado correctamente los datos,se sale del ciclo do while y comienza el segundo algoritmo donde se pueden comprar entradas de un recital. Primero se pide al usuario que tipo de entrada quiere comprar, luego la cantidad y se hace la cuenta de 
Tipo de entrada x cantidad, esta cuenta se guarda en la variable precioParcial(para mostrar en consola) y ademas se le suma al Precio total, ya que en caso de que se quiera comprar mas de un tipo de entrada, se acumulará en la variable precioTotal.

Tambien se agregó una funcion para saber si el usuario quiere seguir comprando otras entradas o finalizar la operacion, contemplando que el usuario igrese una opcion incorrecta y vuelva a ejecutarse la funcion.


Usuarios creados para ingresar mediante el switch:
* usuario:juan password:321
* usuario:pepe password:hola
 