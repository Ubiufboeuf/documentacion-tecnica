---
title: 'Arquitectura'
---

El sistema se organiza en cuatro partes principales: frontend, backend, base de datos y servicios externos.

El **Frontend** representa la capa de interacción directa con el usuario. Su diseño y rendimiento se gestionan con **Astro**, aprovechando **Preact (TSX)** para la lógica dinámica y **TypeScript** para la robustez del código. Todos los estilos se manejan mediante **TailwindCSS**. Esta capa consume los datos de la **API** para construir la experiencia al usuario.

El **Backend**, desarrollado en **PHP** bajo un patrón **MVC**, gestiona la lógica del sistema. `api.php` actúa como punto de entrada y enruta a los controladores, los cuales se comunican con los modelos para acceder a la base de datos. También mantiene la integración con **MercadoPago** y la comunicación en tiempo real mediante **WebSockets (Ratchet)** para el seguimiento.

La **Base de datos** organiza la información de:

- usuarios
- boletos
- rutas fijas
- ómnibus (seguimiento)
- choferes
- y servicios adicionales

siguiendo el modelo entidad-relación planteado en la imagen.

![alt text](/assets/mer.png)