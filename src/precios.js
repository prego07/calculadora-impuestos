function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(importe, porcentaje) {
  return importe - (importe * porcentaje) / 100;
}

module.exports = { calcularSubtotal, aplicarDescuento };
