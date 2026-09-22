# 🌻 Nuestro pequeño jardín

Una experiencia web romántica e interactiva para el **Día de las Flores Amarillas**, hecha como un regalo digital personal.

---

## 🛠️ Cómo verla

Solo haz **doble clic** sobre `index.html` y se abrirá en tu navegador.

---

## ✏️ Cómo personalizar todo

Toda la personalización está en **`config/config.js`**. No tienes que buscar textos por el código.

### Lo que puedes cambiar

| Campo | Descripción |
|---|---|
| `pareja.novia` | Nombre de tu novia |
| `pareja.novio` | Tu nombre |
| `pareja.fechaInicio` | Fecha de inicio de la relación (`AÑO-MES-DÍA`) |
| `pareja.horaInicio` | Hora de inicio (`HH:MM`) |
| `textos.*` | Todas las frases de la historia |
| `carta.texto` | Tu carta completa (usa `\n` para saltos de línea) |
| `petalos[0..7].mensaje` | Mensaje de cada pétalo |
| `fotos[0..9].src` | Ruta de cada foto (dentro de `fotos/`) |
| `fotos[0..9].descripcion` | Leyenda debajo de la foto |
| `fotos[0..9].estilo` | `polaroid` · `card` · `round` |
| `musica.url` | Archivo o URL de tu canción |
| `musica.volumen` | Volumen de 0.05 a 1 |

### Cambiar una foto

1. Copia la imagen a la carpeta `fotos/`.
2. En `config/config.js`, busca el array `fotos`.
3. Cambia la ruta en `src`:

```js
{ src: "fotos/mi-foto.jpg", descripcion: "Un recuerdo bonito", estilo: "polaroid" }
```

### Agregar/quitar fotos

Simplemente agrega o quita filas del array `fotos`. Se recomienda entre 6 y 10.

### Agregar música

1. Coloca tu archivo `.mp3` en la carpeta raíz (junto a `index.html`) o donde quieras.
2. En `config/config.js`, pon su ruta en `musica.url`:

```js
musica: {
    url: "cancion.mp3",  // o "assets/music/mi-cancion.mp3"
    volumen: 0.25,
},
```

Si dejas la URL vacía (`""`), el botón de música no aparecerá.

> **Nota:** Debes usar una canción que tengas permiso para usar. No uses música con copyright.

---

## 📁 Estructura

```
.
├── index.html                  ← la página
├── config/
│   └── config.js               ← TODO editable aquí
├── styles/
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── core/
│   │   ├── utils.js
│   │   ├── audio.js
│   │   └── app.js
│   └── components/
│       ├── seed.js        ← Pantalla 1
│       ├── flower.js      ← Pantalla 2
│       ├── garden.js      ← Pantalla 3
│       ├── gallery.js     ← Pantalla 4
│       ├── counter.js     ← Pantalla 5
│       ├── letter.js      ← Pantalla 6
│       ├── remembrance.js ← Pantalla 7
│       ├── last.js        ← Pantalla 8
│       └── finale.js      ← Pantalla 9
├── fotos/                   ← tus fotos
└── cancion.mp3             ← tu música (opcional)
```

---

## 📱 Funciona en

- Teléfono (mobile-first)
- Tablet
- PC / portátil

Todas las animaciones y transiciones están optimizadas para móviles.