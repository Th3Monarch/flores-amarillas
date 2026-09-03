# 💜 Para Ti, Crystal

Una página web romántica y animada creada para Crystal (Ysmel), con sus colores favoritos (morado, azul cielo y rosa), un poema que aparece mientras bajas, fotos enmarcadas y efectos especiales.

---

## 📸 Las fotos ya están puestas

Tus fotos están en la carpeta `fotos/` y ya fueron insertadas en la página, repartidas en las 8 secciones (3 fotos por sección, cada una con su marco brillante):

```
Novia/
├── index.html    ← la página
├── fotos/        ← todas tus fotos
└── README.md
```

### Cómo reorganizar las fotos

Cada sección muestra las fotos en un bloque de **galería** así:

```html
<div class="gallery">
    <div class="photo-frame tall"><img src="fotos/BDWH6931.JPG" alt="Crystal"></div>
    <div class="photo-frame"><img src="fotos/IMG_0851.PNG" alt="Crystal"></div>
    <div class="photo-frame"><img src="fotos/IMG_1961.JPG" alt="Crystal"></div>
</div>
```

- **Para cambiar una foto**: solo cambia el nombre del archivo dentro de `src="fotos/..."` por otro que tengas en la carpeta `fotos/`.
- **Para cambiarlas de sección**: corta y pega toda la línea `<div class="photo-frame">...</div>` a otra galería.
- **La clase `tall`** hace que esa foto ocupe el doble de alto (destacada a la izquierda).

> ⚠️ Los nombres de archivo distinguen entre mayúsculas y minúsculas, y deben coincidir exactamente con los de la carpeta `fotos/` (ej: `IMG_0851.PNG` y no `img_0851.png`).

---

## 🎵 Música y letra

### Música de fondo

- El archivo `cancion.mp3` suena de fondo en bucle.
- **Botón flotante 🎵** (abajo a la derecha): reproduce/pausa la música.
- La música inicia al abrir la página, pero el navegador exige **un primer clic** para activar el sonido (regla de seguridad). Al hacer el primer clic en cualquier parte, el sonido se activa.

> Si tu canción no se llama `cancion.mp3`, cambia el atributo `src` del `<audio>` en `index.html`.

### Control de volumen

- **Botón flotante 🔊** (abajo a la izquierda): abre un panel para ajustar el volumen de 0% a 100% con un deslizador.
- El nivel de volumen se **guarda** en el navegador, así que la próxima vez que se abra la página mantiene el mismo volumen.
- Haz clic en cualquier otra parte de la página para cerrar el panel de volumen.

---

## 🏷️ Las 8 secciones

1. **Tus ojos** → tus ojos, belleza
2. **Tu sonrisa** → tu sonrisa
3. **Tu cara** → tu cara/retratos
4. **Eres hermosa** → tu belleza
5. **Inteligente** → tu mente
6. **Cariñosa** → tu cariño
7. **Siempre juntos** → nosotros juntos
8. **Para siempre** → nosotros para siempre

> 💜 El poema está adaptado a una relación a distancia: habla de verte a través de la pantalla, de que la distancia no apaga el amor, y de la promesa de cruzarla algún día para estar juntos.

---

## ✏️ Cómo cambiar el poema

Cada verso está dentro de etiquetas así:

```html
<p class="poem-line">Aquí va el verso</p>
<p class="poem-line highlight">Aquí va un verso especial (rosa, más grande)</p>
<p class="poem-line accent-purple">Verso en morado</p>
<p class="poem-line accent-blue">Verso en azul cielo</p>
```

Solo cambia el texto entre las etiquetas `<p>` y `</p>`. El `highlight` lo muestra en grande y roro; `accent-purple` y `accent-blue` lo colorean.

---

## 🧡 Sí gustas

Vuelve a esta misma carpeta y coméntame qué quieres cambiar. Puedo:

- Modificar o agregar versos al poema
- Agregar o quitar fotos/secciones
- Cambiar los textos del título y el mensaje final
- Subir la página a internet para compartir el enlace con ella
- Cambiar el diseño (claro/oscuro, pastel, etc.)

---

## 🚀 Cómo verla

Solo haz **doble clic** sobre `index.html` y se abrirá en tu navegador.
