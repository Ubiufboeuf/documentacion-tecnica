---
title: "Seguimiento en Tiempo Real"
---

La web tiene una sección dedicada al seguimiento de los ómnibus de Berrutti (solo los de las rutas fijas) en la página `/track/`.

La página se divide en:

- [Barra superior](#barra-superior)
- [Lista de buses](#lista-de-buses)
- [Mapa](#mapa)

## Barra superior

Contiene información breve pero útil:

- Los ómnibus seleccionados
- Y la hora de la última actualización de las ubicaciones.

Además de un botón para volver al inicio.

## Lista de buses

Hay dos listas: la de **pantallas grandes** y **pequeñas**, que aunque usen la misma información y stores, y el mismo componente `<Aside />`, se implementan en lugares y de maneras diferentes un poco diferentes.

### Para pantallas grande (menú lateral)

Este es simplemente un menú lateral no colapsable, no se puede ocultar manualmente.

![](/assets/track-buses-list-big-screens.png)

### Para pantallas pequeñas (drawer)

Este usa un componente externo: [Vaul](https://vaul.emilkowal.ski/), que crea un drawer manejable con gestos.

![](/assets/track-buses-list-small-screens.png)

## Mapa

Para el mapa usamos [Leaflet](https://leafletjs.com/), un paquete de JavaScript de código abierto para crear mapas interactivos amigables.

![](/assets/track-map.png)

Las rutas las creamos con polígonos usando el mismo leaflet:

```js
// Crear un polígono rojo a partir de un array de puntos (Lat, Lng)
const latlngs = [
  [37, -109.05],
  [41, -109.03],
  [41, -102.05],
  [37, -102.04]
]

const polygon = L.polygon(latlngs, { color: 'red' }).addTo(map)

// Acercar el mapa al polígono
map.fitBounds(polygon.getBounds())
```

Y los buses son marcadores que cambian de posición cada que reciben la nueva ubicación que da el servidor:

```js
L.marker([50.5, 30.5]).addTo(map);

socket.on('position-change', () => {
  
})
```