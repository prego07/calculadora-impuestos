function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(importe, porcentaje) {
  return importe - (importe * porcentaje) / 100;
}

function calcularIVA(importe, tipo) {
  return importe > 0 ? Math.round(((importe * tipo) / 100) * 100) / 100 : 0;
}

function calcularPrecioFinal(precio, cantidad, descuento, tipoIVA) {
  const base = aplicarDescuento(calcularSubtotal(precio, cantidad), descuento);
  return base + calcularIVA(base, tipoIVA);
}

module.exports = {
  calcularSubtotal,
  aplicarDescuento,
  calcularIVA,
  calcularPrecioFinal,
};
