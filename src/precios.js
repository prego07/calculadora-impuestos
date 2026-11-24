function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(importe, porcentaje) {
  return importe - (importe * porcentaje) / 100;
}

function calcularIVA(importe, tipo) {
  return (importe * tipo) / 100;
}

module.exports = { calcularSubtotal, aplicarDescuento, calcularIVA };
