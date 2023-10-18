// un algoritmo que pida usuario y contraseña , y con un do while no entre hasta que se cumpla
//luego comprar entradas de diferentes precios y cantidad, para arrojar el monto final en un alert y consola


let password;
let login = false;
let tipoEntrada;
let cantEntrada;
let precioTotal; 
let precioTickets;
let terminar = false;
let continuar;
let carrito = [];// array para despues sumar los precios de los tickets

const entradas = {  //uso objeto para el tipo de entradas y su precio
    1: { nombre: "Campo General", precio: 10000 },
    2: { nombre: "Campo Vip", precio: 15000 },
    3: { nombre: "Platea", precio: 18000 },
};

do{ 
    let usuario = prompt("Ingresar usuario");
    switch (usuario) { // uso un switch para que cada usuario tenga una validacion con contraseñas diferentes
        case "pepe":
            password = prompt("Ingresar contraseña");
            while (password !="hola"){
                password = prompt("Contraseña incorrecta, intente nuevamente");
            }
            console.log("Contraseña correcta, bienvenido!");
            login = true;
            break;
        case "juan":
            password = prompt("Ingresar contraseña");
            while (password !="321"){
                password = prompt("Contraseña incorrecta, intente nuevamente");
            }
            console.log("Contraseña correcta, bienvenido!");
            login = true;
            break;   
        default:
            console.log("No existe ese nombre de usuario");
            alert("No existe ese nombre de usuario, intentelo de nuevo");
    }
}while (login == false);

alert("Bienvenido, elija cuantas entradas quiere comprar")

function continuarValidacion(){ //funcion que voy a usar para seguir comprando o terminar la operacion, en caso de que se elija mal la opcion, se volvera a repetir la funcion
    continuar = prompt("Ingrese 1 si desea comprar más entradas o 2 para ir a finalizar la compra.");
if (continuar === "1") {
    terminar = false;
} else if (continuar === "2") {
    terminar = true;
} else {
    alert("Opcion Invalida");
    continuarValidacion();
}
}
while(terminar != true){
    tipoEntrada = prompt("Presione 1 si quiere comprar Campo general: 10000$ \nPresione 2 si quiere comprar Campo Vip: 15000$ \nPresione 3 si quiere comprar Platea: Platea: 18000$");
    precioTickets = 0;
    if (entradas[tipoEntrada]) {
        cantEntrada = parseInt(prompt(`Cuantas entradas ${entradas[tipoEntrada].nombre} quieres comprar?`));
        while (cantEntrada <= 0 || isNaN(cantEntrada)) {
          alert("Ingrese una cantidad válida de entradas que desea comprar");
          cantEntrada = parseInt(prompt(`Cuantas entradas ${entradas[tipoEntrada].nombre} quieres comprar?`));
        }
    
        precioTickets = cantEntrada * entradas[tipoEntrada].precio;
        carrito.push(precioTickets); //agrego al array de carrito el valor de la compra actual.
        alert(`Has agregado ${cantEntrada} entradas de ${entradas[tipoEntrada].nombre} al carrito por un total de ${cantEntrada * entradas[tipoEntrada].precio}$`);
        console.log(`Se agrego ${cantEntrada} entradas de ${entradas[tipoEntrada].nombre} al carrito por un total de ${cantEntrada * entradas[tipoEntrada].precio}$`);
        continuarValidacion();
      } else {
        alert("ELIJA UNA OPCION VALIDA");
      }
}
console.log(carrito);
precioTotal = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0); //sumo los elementos que hay en el array carrito y guardo el resultado en precioTotal

alert(`Precio total de las entradas ${precioTotal}`)
console.log(`Precio final: $${precioTotal} pesos`);

document.getElementById('totalCarrito').textContent = `Carrito - Total: $${precioTotal}`; //muestro en el html el precioTotal del carrito



