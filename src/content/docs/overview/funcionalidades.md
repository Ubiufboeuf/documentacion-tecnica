---
title: 'Funcionalidades'
---

El sistema web de Berrutti Turismo está diseñado para ofrecer una experiencia de usuario fluida, cómoda y moderna, permitiendo la compra de boletos online, seguimiento en tiempo real de los ómnibus y la gestión de servicios de transporte. Las funcionalidades se dividen en tres categorías: **terminadas**, **en desarrollo** y **planeadas**.

---

## Funcionalidades terminadas

### Listado de servicios
Sección que muestra todos los servicios que ofrece la empresa: traslados especiales, rutas regulares, promociones, etc.

- Cada servicio tiene título, descripción, imagen y enlace para más detalles.  
- Interfaz responsiva y accesible desde cualquier dispositivo.  
- Implementación técnica: Listado dinámico desde `src/services/` y renderizado con Preact.

(imagen de ejemplo de listado de servicios)

---

## Funcionalidades en desarrollo

### Sistema de pagos
Este página permite al usuario **buscar, visualizar y comprar boletos** para viajes fijos.

- Visualización de rutas disponibles con origen, destino y horarios.  
- Posibilidad de seleccionar asientos (si aplica).  
- Confirmación de compra mediante interacción con el backend (simulado en mocks en desarrollo).  
- Implementación técnica: Componentes Preact interactivos, estado con Zustand.  

(video mostrando la búsqueda y compra de boletos)

---

### Seguimiento en tiempo real de los ómnibus
Permite al usuario ver **la ubicación de los buses en tiempo real** en un mapa interactivo.

- Implementación de WebSockets para recibir actualizaciones constantes del backend.  
- Uso de **Leaflet** para renderizar mapas y marcadores de vehículos.  
- Objetivo: dar visibilidad completa de la flota en movimiento, mejorando la experiencia del usuario.

(video de mapa interactivo con un bus moviéndose)

---

### Sección de contacto
Proporciona información sobre la empresa, misión, visión y equipo de trabajo.

- Planeado para incluir **fotos del personal** y videos institucionales.  
- Buscamos mantener un diseño corporativo y accesible.

(imagen o video del equipo / presentación institucional)

---

## Funcionalidades planeadas

### Viajes personalizados
Funcionalidad para crear rutas a medida según las necesidades del usuario.

- Permitir al usuario elegir origen, destino, horarios y cantidad de pasajeros.  
- Backend deberá calcular disponibilidad y costos automáticamente.  
- Requiere integración con sistema de pagos y generación de comprobantes.

---

### Integración completa con pasarela de pago (MercadoPago)
- Cobro seguro y confirmado de los boletos adquiridos.  
- Posibilidad de registrar pagos pendientes y confirmados en un dashboard administrativo.

---

### Generación de comprobantes con QR
- Cada compra generará un comprobante con código QR único.  
- Facilita la validación en el ingreso al transporte.  
- Integración con backend para generar y validar códigos de manera segura.

---

### Dashboard administrativo
- Gestión de reservas, pagos y rutas desde un panel centralizado.  
- Permite a administradores crear, editar y eliminar rutas y servicios.  
- Visualización de estadísticas y reportes sobre ventas y ocupación.

(imagen conceptual de dashboard administrativo)

---

## Objetivo de las funcionalidades

El objetivo principal de todas estas funcionalidades es:

- Ofrecer una **experiencia de usuario ágil y accesible**.  
- **Automatizar ventas y confirmación de pagos** de manera segura.  
- **Brindar visibilidad en tiempo real de la flota**.  
- Crear una base sólida para futuras expansiones, incluyendo viajes personalizados y herramientas administrativas avanzadas.
