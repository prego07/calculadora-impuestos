# Calculadora de impuestos

Pequeña librería en JavaScript para calcular precios de pedidos: subtotales, descuentos e impuestos.

## Requisitos

- Node.js 22 o superior
- npm 9 o superior

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd calculadora-impuestos
npm install
```

## Uso

```javascript
const { calcularSubtotal, aplicarDescuento } = require('./src/precios');

const subtotal = calcularSubtotal(10, 3);      // 30
const total = aplicarDescuento(subtotal, 10);  // 27
```
