# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.0.0] - 2026-11-26

### Added

- Funciones de cálculo de precios: `calcularSubtotal`, `aplicarDescuento`, `calcularIVA` y `calcularPrecioFinal`.
- Tests automáticos con el ejecutor integrado de Node.js.
- Documentación del código con JSDoc, generada en `docs/api`.
- Configuración de ESLint y script `npm run lint`.
- Pipeline de integración continua con GitHub Actions: instalación, linter, tests y documentación como artefacto.
- Protección de la rama `main`: solo admite cambios mediante pull request con el pipeline en verde.

### Changed

- El IVA se redondea a dos decimales.
- El IVA devuelve 0 cuando el importe no es positivo.

[Unreleased]: https://github.com/prego07/calculadora-impuestos/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/prego07/calculadora-impuestos/releases/tag/v1.0.0
