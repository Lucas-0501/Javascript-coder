// un algoritmo que pida usuario y contraseña , y con un do while no entre hasta que se cumpla
//luego comprar entradas de diferentes precios y cantidad, para arrojar el monto final en un alert y consola


let password;
let login = false;
let tipoEntrada;
let cantEntrada;
let precioTotal = 0; //uso variables PrecioTotal y PrecioParcial, en caso de que quiera comprar 2 tipos de entradas diferentes, entonces precioTotal acumula los precios parciales
let terminar = false;
let continuar;

do{ //hago un do while para que si elige un usuario que no existe vuelva a empezar el ciclo y le pida otra vez que ingrese un usuario
    // en caso de que ingrese un usuario correcto el login pasa a ser TRUE y puede salir del ciclo
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
    let precioParcial = 0;
    tipoEntrada = prompt("Presione 1 si quiere comprar Campo general: 10000$ \nPresione 2 si quiere comprar Campo Vip: 15000$ \nPresione 3 si quiere comprar Platea: Platea: 18000$");
    switch(tipoEntrada){
        case "1": 
            cantEntrada = parseInt(prompt(`Cuantas entradas Campo General quieres comprar?`)); // uso parseint para que sea un numero entero y no una cadena
            while(cantEntrada<=0 || isNaN(cantEntrada)){ //verifico que la cantidad sea mayor a cero y que sea un numero
                alert("Ingrese una cantidad valida de entradas que desea comprar");
                cantEntrada = parseInt(prompt(`Cuantas entradas Campo General quieres comprar?`));
            }
            precioParcial = cantEntrada * 10000;
            precioTotal += precioParcial;
            console.log(`Has agregado ${cantEntrada} entradas de Campo general al carrito por un total de ${precioParcial}$`);
            continuarValidacion();
            break;

        case "2": 
            cantEntrada = parseInt(prompt(`Cuantas entradas Campo Vip quieres comprar?`)); 
            while(cantEntrada<=0 || isNaN(cantEntrada)){ //verifico que la cantidad sea mayor a cero y que sea un numero
                alert("Ingrese una cantidad valida de entradas que desea comprar");
                cantEntrada = parseInt(prompt(`Cuantas entradas Campo General quieres comprar?`));
            }
            precioParcial = cantEntrada * 15000;
            precioTotal += precioParcial;
            console.log(`Has agregado ${cantEntrada} entradas de Campo Vip al carrito por un total de ${precioParcial}$`);
            continuarValidacion();
            break;

        case "3": 
            cantEntrada = parseInt(prompt(`Cuantas entradas Platea quieres comprar?`));
            while(cantEntrada<=0 || isNaN(cantEntrada)){ //verifico que la cantidad sea mayor a cero y que sea un numero
                alert("Ingrese una cantidad valida de entradas que desea comprar");
                cantEntrada = parseInt(prompt(`Cuantas entradas Campo General quieres comprar?`));
            }
            precioParcial = cantEntrada * 18000;
            precioTotal += precioParcial;
            console.log(`Has agregado ${cantEntrada} entradas de Platea al carrito por un total de $${precioParcial}`);
            continuarValidacion();
            break;
        default:
            alert("ELIJA UNA OPCION VALIDA");    
    }
}
alert(`Precio total de las entradas ${precioTotal}`)
console.log(`Precio final: $${precioTotal} pesos`);


