const test = require('node:test');
const assert = require('node:assert');
const {
  calcularSubtotal,
  aplicarDescuento,
  calcularIVA,
  calcularPrecioFinal,
} = require('../src/precios');

test('calcularSubtotal multiplica precio por cantidad', () => {
  assert.strictEqual(calcularSubtotal(10, 3), 30);
});

test('aplicarDescuento resta el porcentaje indicado', () => {
  assert.strictEqual(aplicarDescuento(30, 10), 27);
});

test('calcularIVA devuelve el impuesto del importe', () => {
  assert.strictEqual(calcularIVA(30, 21), 6.3);
});

test('calcularPrecioFinal combina subtotal, descuento e IVA', () => {
  assert.strictEqual(calcularPrecioFinal(10, 3, 10, 21), 32.67);
});
