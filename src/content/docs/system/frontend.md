---
title: "Frontend"
---

## Instalación y comandos

Requisitos: [Node.js (>= 20.6.0)](https://nodejs.org/), se recomienda [pnpm (>= 8)](https://pnpm.io/) pero también funciona con `npm` o `bun`.

```sh
# Clonar repositorio
git clone --depth 1 https://github.com/Ubiufboeuf/proyecto-final-frontend

# Entrar al proyecto
cd proyecto-final-frontend

# Instalar dependencias
pnpm install

# Iniciar en modo desarrollo (http://localhost:4321 o el puerto disponible)
pnpm dev

# O también const --host, para hacerla accesible en la red local
pnpm dev --host

# Compilar para producción
pnpm build

# Previsualizar la build
pnpm preview
```

Variables de entorno:

```sh
# Solo para los mocks de datos en desarrollo
PUBLIC_ORIGIN="http://localhost:4321"
```

---

## Navegación

(El sitio ya está desplegado en [Cloudflare Pages](https://proyecto-final-frontend.pages.dev)).

* `/` – Página principal, acceso directo a **comprar boleto** o **seguir ómnibus**, y al final para **explorar servicios**.
* `/services/` – Los servicios para los viajes, encomiendas, giros, trámites, etc.
* `/routes/` – Lista de rutas fijas, con detalles de cada viaje y compra de pasajes.
* `/track/` – Seguimiento en tiempo real de los ómnibus en el mapa (Leaflet y OSM).
* `/contact/` – Información de contacto y teléfonos de emergencia.
* `/about/` – Próximamente.
* `/custom-trips/` – Viajes personalizados (en progreso).
* `/buy-ticket/` – Compra de boleto de las rutas fijas.
* `/qr/` – Comprobante de compra con código QR.

![Página de inicio](/assets/inicio.png)
![Rutas](/assets/rutas.png)
![Seguimiento](/assets/seguimiento.png)

---

## Funcionalidades principales

**Compra de boletos online**

  * Selección de cantidad de pasajeros y asientos.
  * Formulario de datos del pasajero principal y acompañantes.
  * Integración con **MercadoPago** (en desarrollo).
  * Resumen claro de la compra y estado de pago.
  * Generación de comprobante QR descargable o compartible.

**Seguimiento de ómnibus**

  * Visualización de rutas en mapa interactivo con [Leaflet](https://leafletjs.com/).
  * Información del bus: modelo, año, capacidad, chofer, horarios, duración y servicios (A/C, baño, TV, etc.).
  * Ubicación en tiempo real del vehículo.
  * Progreso de la ruta (planificado para implementar).

**QR y validación**

  * Cada boleto genera un **código QR único**.
  * Lo validas con el lector QR del chofer.
  * El estado cambia según uso: pendiente, usado, vencido (si se vence se te devuelve el dinero).

**Diseño moderno y accesible**

  * Tema oscuro en prácticamente todas de páginas.
  * Totalmente responsivo (desktop, tablet, móvil).
  * Navegación intuitiva con header en pantallas grandes y sidebar en celulares y tablets.

---

## Estado actual

✅ Terminado
* Inicio
* Servicios
* Rutas
* Seguimiento
* Contacto (visualmente)

➖ En proceso
* Contacto (el formulario de contacto)

⚠️ Pendiente:

* Página de login y registro
* Página del chofer con seguimiento de su ómnibus.
* Integración completa con MercadoPago.
* Página de comprobante QR.
* Páginas *about/* y *custom-trips/*.

---

## Licencia

Este proyecto es académico y no cuenta con licencia formal.
