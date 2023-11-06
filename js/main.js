function actualizarVisualizacionCarrito() {
    const totalGuardado = localStorage.getItem('total');
    const totalCarrito = document.getElementById('totalCarrito');
  
    //si hay algo en el local storage lo muestro
    if (totalGuardado) {
      totalCarrito.textContent = `$${totalGuardado}`;
    } else {
      totalCarrito.textContent = "$0.00";
    }
  }
  
  // Llama a la función para actualizar la visualización del carrito en la página que muestra el carrito
  actualizarVisualizacionCarrito();
  
  const vaciarCarritoButton = document.getElementById('vaciarCarrito');
  vaciarCarritoButton.addEventListener('click', function() {
    // Elimina el valor almacenado en el 'localStorage' con la clave 'total'
    localStorage.removeItem('total');
  
    // Actualiza la visualización del carrito (puedes llamar a tu función actualizarVisualizacionCarrito)
    actualizarVisualizacionCarrito();
  });