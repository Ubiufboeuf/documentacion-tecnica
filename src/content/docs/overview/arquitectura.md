---
title: 'Arquitectura'
---

El sistema se organiza en tres capas principales: frontend, backend y base de datos.

El **frontend**, construido con **Astro**, **Preact (TSX)**, **TypeScript** y **TailwindCSS**, se encarga de la interfaz gráfica, la generación de páginas dinámicas y el consumo de datos desde el backend.

El **backend**, desarrollado en **PHP** bajo un patrón **MVC**, gestiona la lógica del sistema. `api.php` actúa como punto de entrada y enruta a los controladores, los cuales se comunican con los modelos para acceder a la base de datos. También mantiene la integración con **MercadoPago** y la comunicación en tiempo real mediante **Ratchet (WebSockets)**.

La **base de datos** organiza la información de usuarios, boletos, rutas, ómnibus, choferes y servicios adicionales, siguiendo el modelo entidad-relación planteado en el diseño.

```mermaid
flowchart LR
  Persona((Usuario)) -->|HTTP| Frontend[Frontend (Vista)]
  Frontend -->|Peticiones| API[api.php]
  API --> Controller[Controladores]
  Controller --> Modelos[Modelos]
  Modelos --> DB[(MySQL/MariaDB)]
  API <--> WebSockets[(Ratchet PHP)]
  API <--> MercadoPago[(API externa)]
```

Para una explicación detallada de este diagrama y la justificación de cada elemento, ver la nota [Notas Generales](/study-notes/general#)