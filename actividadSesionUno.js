// Variables
const previsto = 80;
const ordenes = 90;
const diaMes = 6;
const total = resultados(ordenes, previsto, diaMes);

// Función para manejar las órdenes
function resultados(ordenes, previsto, diaMes) {
  let mensaje = '';

  // ¿Incrementar capacidad para mañana? ¡supera monto previsto?
  if (previsto < ordenes) {
    mensaje = '\n El numero de ordenes fue mayor que las previstas, hay que incrementar la capacidad para mañana.'
  } else {
    mensaje = '\n El numero de ordenes fue menor o igual a las previstas, mantener la misma capacidad.'
  }

  // ¿Par o impar? (movido fuera de la condición anterior)
  if (diaMes % 2 !== 0 && ordenes > previsto) {
    mensaje += '\n Hoy es un dia impar. Las ordenes reales superaron las previstas.';
  }

  // Ordenes cumplidas vs monto previsto.
  const vs = (ordenes / previsto) * 100;
  mensaje += `\n El porcentaje de ordenes cumplidas vs el monto previsto fue de ${vs.toFixed(2)}%`;
  
  return mensaje;
}

console.log(total);

  
  