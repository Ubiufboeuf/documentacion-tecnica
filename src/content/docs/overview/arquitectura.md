---
title: 'Arquitectura'
---

El sistema se organiza en cuatro partes principales: frontend, backend, base de datos y servicios externos.

## Frontend

Representa la capa de interacción directa con el usuario. Su diseño y rendimiento se gestionan con **Astro**, aprovechando **Preact (TSX)** para la lógica dinámica y **TypeScript** para la robustez del código. Todos los estilos se manejan mediante **TailwindCSS**. Esta capa consume los datos de la **API** para construir la experiencia al usuario.

## Backend

Desarrollado en **PHP** bajo un patrón **MVC**, gestiona la lógica del sistema. Hay dos entrypoints principales:

- `http.php`: actúa como punto de entrada para el servidor HTTP (:8080). Para los usuarios, información de las rutas, etc.
- `websockets.php`: actúa como punto de entrada para el servidor WebSocket (:8000). Para el seguimiento y la ubicación del chofer.

 y y enruta a los controladores, los cuales se comunican con los modelos para acceder a la base de datos. También mantiene la integración con **MercadoPago** y la comunicación en tiempo real mediante **WebSockets (Ratchet)** para el seguimiento.

## Base de datos

Organiza la información de:

- usuarios
- boletos
- rutas fijas
- ómnibus (seguimiento)
- choferes
- y servicios adicionales

siguiendo el modelo entidad-relación planteado en la imagen.

![alt text](/assets/mer.png)

## Servicios externos

### MercadoPago

Se integra en la **pasarela de pagos** para asegurar que el manejo del dinero de los usuarios se realiza de **manera segura**.

Se comunica directamente con el servidor, porque es mucho más seguro que hacer la validación del lado del cliente, y además para validar la compra y crear el comprobante QR.