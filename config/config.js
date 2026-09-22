/* ============================================================
   🌻 "Nuestro pequeño jardín"
   ------------------------------------------------------------
   TODA la personalización está aquí. No tienes que buscar
   textos por el código: cambia TODO desde este archivo.

   ⚠️ Guárdalo con codificación UTF-8 (por defecto en editores
   como VS Code / Bloc de notas con "Guardar como").
   ============================================================ */

window.CONFIG = {

  /* ----------------------------------------------------------
   ❤️ PAREJA
   Cambia los nombres y la fecha/hora de inicio de la relación.
   El contador de la pantalla 5 usará esta fecha.
   ---------------------------------------------------------- */
  pareja: {
    novia: "Crystal",            // [NOMBRE_DE_MI_NOVIA]
    novio: "Manuel",             // mi nombre (= el que firma la carta)
    fechaInicio: "2026-4-23",   // [FECHA_DE_INICIO] formato: AÑO-MES-DÍA
    horaInicio: "23:31",         // [HORA_INICIO] formato: HH:MM
  },

  /* ----------------------------------------------------------
   📝 TEXTOS DE LA HISTORIA
   Todas las frases de la experiencia. Éditalas libremente.
   ---------------------------------------------------------- */
  textos: {
    seedIntro: "Tengo algo que darte...",
    seedIntro2: "Pero primero tienes que descubrirlo.",
    seedCta: "🌱 Comenzar",

    flowerTitle: "Feliz Día de las Flores Amarillas, mi amor 💛",
    flowerL1: "Quizás una flor pueda parecer un regalo pequeño...",
    flowerL2: "pero esta tiene algo que quiero decirte.",
    flowerCta: "Descubrir 🌻",

    gardenL1: "Dicen que las flores amarillas representan amor, alegría, esperanza y nuevos comienzos.",
    gardenL2: "Pero cuando pienso en ellas...",
    gardenL2b: "pienso en ti. 💛",
    gardenL3: "Porque desde que llegaste a mi vida, hay momentos que simplemente se sienten más bonitos.",
    gardenCta: "Hay algo más...",

    storyTitle: "Nuestra historia",
    storySub: "Desliza para descubrir más",

    timeTitle: "Y mientras pasa el tiempo...",
    timeTitle2: "Nuestro tiempo juntos ❤️",
    timeFooter: "Y espero seguir viendo cómo este contador crece contigo.",

    letterLead: "Hay algo que quiero decirte...",
    letterCta: "💌 Abrir carta",

    rememberTitle: "La flor de los recuerdos",
    rememberSub: "Toca cada pétalo para descubrir un recuerdo",
    rememberAll: "Has encontrado todos...",
    rememberMissing: "Pero todavía falta uno.",

    lastQ1: "¿Sabes qué es lo más bonito de regalarte flores?",
    lastQ2: "Que ninguna flor podría explicar todo lo que siento por ti.",
    lastQ3: "Así que...",
    lastQ4: "Te regalo todas. 🌻",

    finalTitle: "Feliz Día de las Flores Amarillas, mi amor. 🌻💛",
    finalThanks: "Gracias por existir.",
    finalLove: "Te quiero.",
    finalSign: "— " + "Manuel",  // se firma con pareja.novio
  },

  /* ----------------------------------------------------------
   🌼 LAS RAZONES (pantalla 6)
   Un círculo de flores; cada una guarda una razón.
   Tócalas todas para descubrir el ramo completo.
   ---------------------------------------------------------- */
  razones: {
    titulo: "Las razones",
    sub: "Toca cada flor para descubrir por qué te quiero",
    items: [
      "Por cómo me miras, como si yo fuera el lugar más seguro.",
      "Por tu risa, que convierte mi peor día en el mejor.",
      "Por cómo cuidas de mí sin que te lo pida.",
      "Por tu forma de pensar y de ver el mundo.",
      "Porque contigo el silencio también es conversación.",
      "Por los sueños que quiero construir contigo.",
      "Por tu forma de ser tú, sin pedir permiso.",
      "Porque al final del día, siempre quiero volver a ti.",
    ],
    foundAll: "Las encontraste todas. Y cada una es verdad. 💛",
  },

  /* ----------------------------------------------------------
   🎵 NUESTRA CANCIÓN (pantalla 7)
   Pantalla de la canción especial. Si dejas "musica.url" vacío,
   mostrará "sinCancion" y el disco quedará callado.
   ---------------------------------------------------------- */
  cancion: {
    titulo: "Nuestra canción",
    sub: "Hay una melodía que siempre me hace pensarte",
    nombre: "Que hay de malo",
    artista: "Jerry Rivera",
    motivo: "Cada vez que suena, no puedo evitar sonreír pensando en ti.",
    nota: "Pulsa play, cierra los ojos y escúchala. 🌻",
    sinCancion: "Aún no he elegido una canción... pero esta pantalla espera la nuestra. Por ahora, imagina esa melodía que siempre nos arranca una sonrisa.",
    play: "▶ Escucharla",
    stop: "❚❚ Pausar",
  },

  /* ----------------------------------------------------------
   🤝 PROMESAS (pantalla 8)
   Promesas que se van descubriendo al tocarlas.
   Escribe las que quieras aquí.
   ---------------------------------------------------------- */
  promesas: {
    titulo: "Lo que te prometo",
    sub: "Toca para ir descubriendo cada promesa",
    items: [
      "Prometo escucharte, incluso cuando prefieras callar.",
      "Prometo reír contigo en los días grises.",
      "Prometo estar a tu lado en cada florecer.",
      "Prometo cuidar de ti y de nosotros.",
      "Prometo celebrar tus sueños como si fueran míos.",
      "Prometo volver a elegirte todos los días.",
      "Prometo cultivar este pequeño jardín, siempre.",
    ],
    cta: "Hay una carta que te espera...",
  },

  /* ----------------------------------------------------------
   💌 CARTA
   Escribe aquí tu propia carta. Cada "enter" blanco separa los
   párrafos. Puedes usar {novia} y {novio} y se reemplazan solos.
   ---------------------------------------------------------- */
  carta: {
    texto:
      "Mi amor:\n\n" +
      "Hoy quería regalarte flores amarillas, pero pensé que había una pequeña dificultad...\n\n" +
      "Una flor se marchita.\n\n" +
      "Así que decidí regalarte algo que pudiera durar un poquito más.\n\n" +
      "Un pequeño lugar donde pudiera dejarte unas palabras, nuestros recuerdos y todo aquello que muchas veces no sé cómo decirte.\n\n" +
      "Gracias por cada momento, por cada sonrisa y por formar parte de mi vida.\n\n" +
      "Quizás no pueda estar físicamente a tu lado en este momento, pero quería encontrar una forma de hacerte sentir un poquito más cerca de mí.\n\n" +
      "Te quiero muchísimo.\n\n" +
      "Y espero que este pequeño jardín siempre te recuerde que hay alguien que piensa en ti.\n\n" +
      "Con todo mi amor,\n" +
      "{novio} 💛",
  },

  /* ----------------------------------------------------------
   🌻 FLOR DE LOS RECUERDOS
   8 pétalos → cada uno con su emoji, su título y su mensaje.
   El mensaje aparece al tocar el pétalo.
   ---------------------------------------------------------- */
  petalos: [
    { emoji: "❤️", titulo: "Amor",      mensaje: "Gracias por todas las veces que lograste hacerme sonreír incluso cuando no estaba teniendo un buen día." },
    { emoji: "😂", titulo: "Risas",     mensaje: "Nuestras conversaciones y tus ocurrencias son de lo que más me gusta del día." },
    { emoji: "🤝", titulo: "Confianza", mensaje: "Contigo siempre me he sentido yo mismo, sin miedo a ser juzgado." },
    { emoji: "✨", titulo: "Sueños",    mensaje: "Quiero seguir soñando contigo y construyendo todo lo que imaginamos." },
    { emoji: "🌻", titulo: "Recuerdos", mensaje: "Cada momento a tu lado se queda guardado para siempre en mi memoria." },
    { emoji: "🥰", titulo: "Cariño",    mensaje: "Tu forma de cuidarme y preocuparte por mí no tiene precio." },
    { emoji: "🌙", titulo: "Noches",    mensaje: "Las noches hablando contigo son mi lugar favorito." },
    { emoji: "💛", titulo: "Tú",        mensaje: "Solo tú. No cabe duda: mi persona favorita en todo el mundo." },
  ],

  /* ----------------------------------------------------------
   📸 FOTOS (pantalla 4 — Nuestra historia)
   - src: ruta del archivo dentro de la carpeta "fotos/".
     PARA CAMBIAR UNA FOTO: solo cambia el nombre de archivo.
   - descripcion: leyenda que aparece debajo de la foto.
   - estilo: cómo se ve la tarjeta → "polaroid" | "card" | "round"
   Puedes agregar más fotos copiando una fila entera
   (se permite de 6 a 10 fotos; si quieres más, simplemente
   añade otra línea y el carrusel crece solo).
   ---------------------------------------------------------- */
  fotos: [
    { src: "fotos/Recuerdo favorito.JPG", descripcion: "Uno de mis recuerdos favoritos.", estilo: "polaroid" },
    { src: "fotos/Sonrisa que ilunima.JPG", descripcion: "Esa sonrisa que ilumina cualquier día gris.", estilo: "round" },
    { src: "fotos/comenzo algo muy bonito.JPG", descripcion: "El día que empezó algo muy bonito.", estilo: "card" },
    { src: "fotos/forma de pensar.JPG", descripcion: "Tu forma de pensar, que me fascina cada día.", estilo: "polaroid" },
    { src: "fotos/foto mas linda.JPG", descripcion: "Una de las fotos más lindas que tienes.", estilo: "round" },
    { src: "fotos/Asi me gusta recordarnos.PNG", descripcion: "Juntos. Así me gusta recordarnos.", estilo: "card" },
    { src: "fotos/Otra que me hace sonreir.JPG", descripcion: "Otra que siempre me hace sonreír.", estilo: "polaroid" },
    { src: "fotos/momento para siempre.JPG", descripcion: "Un momento que quiero guardar para siempre.", estilo: "card" },
    { src: "fotos/ojos dicen todo sin hablar.JPG", descripcion: "Esos ojos que dicen todo sin hablar.", estilo: "round" },
    { src: "fotos/tu y nada mas tu.JPG", descripcion: "Tú y nada más. 💛", estilo: "polaroid" },
  ],

  /* ----------------------------------------------------------
   🎵 MÚSICA
   - url: ruta o URL de tu canción (sin copyright).
     Por defecto usa tu archivo "cancion.mp3" que ya está en la
     carpeta. Si cambias de canción, copia el archivo aquí y
     pon su ruta (ej: "assets/music/micancion.mp3").
     Deja "" si no quieres música por ahora.
   - volumen: nivel de salida (0.05 a 1). Se recomienda bajo.
   ---------------------------------------------------------- */
  musica: {
    url: "cancion.mp3",
    volumen: 0.25,
  },
};