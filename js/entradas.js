
const lugarSelec = document.getElementById("lugar");
const cantidadSelec = document.getElementById("cantidad");
const resultado = document.getElementById("result");
const btnCarrito = document.getElementById("agregarCarrito"); // Obtén el botón por su ID
const totCarrito = document.getElementById("totalCarrito");
const btnVaciarCarrito = document.getElementById("vaciarCarrito");

//Precios de las opciones
const precios = {
  1: 10000, // Platea RS
  2: 8000,  // Campo  RS
  3: 15000,  // Palco  RS
  4: 9000, // platea ciro
  5: 7000, // campo ciro
  6: 14000, // palco ciro
  7: 12000, // platea Taylor
  8: 10000, // campo Taylor
  9: 20000 // palco Taylor
};

// Agrega un evento change a los select para calcular y mostrar el resultado
lugarSelec.addEventListener("change", calcularTotal);
cantidadSelec.addEventListener("change", calcularTotal);

function calcularTotal() {
  const Lugar = lugarSelec.value;
  const Cantidad = cantidadSelec.value;

  if (Lugar === "Lugar" || Cantidad === "Cantidad") {
    resultado.textContent = "Seleccione una opción y cantidad";
  } else {
    const price = precios[Lugar];
    const cantidad = parseInt(Cantidad);
    const total = price * cantidad;
    resultado.textContent = `Total: $${total}`;

    
  }
}
calcularTotal();

// Agrega un evento para guardar el total en localStorage
btnCarrito.addEventListener("click", function() {
    const Lugar = lugarSelec.value;
    const Cantidad = cantidadSelec.value;
  
    if (Lugar !== "Lugar" && Cantidad !== "Cantidad") {
      const price = precios[Lugar];
      const cantidad = parseInt(Cantidad);
      const total = price * cantidad;
  
    // Recupero el total anterior del localStorage
    let totalAnterior = parseFloat(localStorage.getItem('total')) || 0;
    
    // Sumo el total de ahora al anterior
    totalAnterior += total;

    // Guarda el nuevo total en el localStorage
    localStorage.setItem('total', totalAnterior);
      
      // lo muestro en la pagina
      totCarrito.textContent = `$${totalAnterior}`;
    //   lo muestro en la consola
      console.log(`total guardado en local storage : $${totalAnterior}`);
    } else {
        // en caso de que no se elija una opcion valida para agregar al carrito
      alert('Seleccione una opción y cantidad antes de guardar el total.');
    }
});

  window.addEventListener("load", function() {
    const totalGuardado = localStorage.getItem('total');
    if (totalGuardado) {
      totCarrito.textContent = `$${totalGuardado}`;
    }
  });

  //evento para vaciar el carrito
  btnVaciarCarrito.addEventListener("click", function() {
    localStorage.removeItem('total');
  
    // Actualiza el valor que se muestra en la pagina
    totCarrito.textContent = "$0.00";
  });
 
  