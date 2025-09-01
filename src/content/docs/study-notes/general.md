---
title: 'Notas Generales'
---

### Explicación del [diagrama de Arquitectura](/overview/arquitectura/#:~:text=flowchart)

Este diagrama de flujo  representa la arquitectura del sistema, delineando cómo los datos y las interacciones fluyen entre las distintas **capas y componentes**. El propósito de esta representación visual no es solo enumerar las partes, sino ilustrar la **separación de responsabilidades** y la **cadena de comunicación** que sigue cada solicitud.

#### Flujo de datos y comunicación
Cada elemento del diagrama cumple una función específica, creando una arquitectura modular y escalable. El flujo comienza con el **Usuario**, que inicia una solicitud (por ejemplo, cargar la página o comprar un boleto). Esta solicitud es capturada por el **Frontend (Vista)**. Su única responsabilidad es presentar la interfaz y enviar peticiones al backend.

Todas las peticiones del frontend se dirigen a un único punto de entrada: el archivo `api.php`. Esto centraliza el manejo de las solicitudes, facilitando el control de acceso y el enrutamiento. Desde `api.php`, la solicitud es delegada a un **Controlador** adecuado, que contiene la lógica para procesar la petición. El Controlador, a su vez, se comunica con uno o varios **Modelos**. Los Modelos son los encargados de interactuar con la Base de datos, encapsulando la lógica de negocio y el acceso a los datos. La comunicación con servicios externos como Ratchet (WebSockets) para notificaciones en tiempo real o MercadoPago (API externa) para transacciones de pago, también se maneja a través del backend, permitiendo que la lógica de negocio se mantenga centralizada y segura.

Por qué esta arquitectura
Esta estructura promueve la mantenibilidad y la escalabilidad. Al separar las preocupaciones, el frontend no necesita conocer la lógica de negocio o la base de datos, solo cómo pedir y mostrar la información. El backend se encarga de todo el procesamiento y la persistencia de datos, liberando al frontend de esas tareas.

También facilita el desarrollo en equipo. Los desarrolladores pueden trabajar en el frontend o el backend de forma independiente sin interferir en el trabajo de los demás, siempre que se respete el contrato de la API. Además, esta arquitectura permite la sustitución de componentes. Si en el futuro se decide cambiar la base de datos, solo se modificará el Modelo y la capa de Conexion, sin afectar el resto del sistema. Lo mismo aplica para el frontend o los servicios externos.

En resumen, el diagrama no solo muestra qué hay, sino cómo todo se conecta para funcionar como un sistema cohesivo.