/**
 * Calcula el subtotal de una línea de pedido.
 *
 * @param {number} precio - Precio unitario del producto, sin impuestos.
 * @param {number} cantidad - Número de unidades.
 * @returns {number} Importe total antes de descuentos e IVA.
 */
function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

/**
 * Aplica un descuento porcentual a un importe.
 *
 * @param {number} importe - Importe original.
 * @param {number} porcentaje - Descuento a aplicar, de 0 a 100.
 * @returns {number} Importe una vez restado el descuento.
 * @example
 * aplicarDescuento(200, 10); // 180
 */
function aplicarDescuento(importe, porcentaje) {
  return importe - (importe * porcentaje) / 100;
}

/**
 * Calcula el IVA de un importe, redondeado a dos decimales.
 * Si el importe no es positivo, el IVA es 0.
 *
 * @param {number} importe - Base imponible.
 * @param {number} tipo - Tipo de IVA en porcentaje (por ejemplo, 21).
 * @returns {number} Cuota de IVA redondeada a 2 decimales.
 * @example
 * calcularIVA(100, 21); // 21
 */
function calcularIVA(importe, tipo) {
  return importe > 0 ? Math.round(((importe * tipo) / 100) * 100) / 100 : 0;
}

/**
 * Calcula el precio final de un pedido: subtotal, descuento e IVA.
 *
 * @param {number} precio - Precio unitario sin impuestos.
 * @param {number} cantidad - Número de unidades.
 * @param {number} descuento - Descuento porcentual (0 a 100).
 * @param {number} tipoIVA - Tipo de IVA en porcentaje.
 * @returns {number} Precio final con descuento e IVA incluidos.
 */
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
