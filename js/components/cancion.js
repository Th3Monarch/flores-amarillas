/* ============================================================
   7 · NUESTRA CANCIÓN — vinilo con la melodía de la pareja
   ============================================================ */

(function () {
    const T = window.CONFIG.cancion;
    if (!T) return;

    const musicOn = window.Music && window.Music.enabled;
    const btn = util.$("#cnPlay");
    const nextBtn = util.$("#cnNext");

    util.$("#cnTitle").textContent = T.titulo || "Nuestra canción";
    util.$("#cnSub").textContent = T.sub || "";
    util.$("#cnName").textContent = T.nombre || "";
    util.$("#cnArtist").textContent = T.artista || "";
    util.$("#cnWhy").textContent = T.motivo || "";
    util.$("#cnNote").textContent = musicOn ? (T.nota || "") : (T.sinCancion || "");
    nextBtn.textContent = "Seguir 💛";

    const vinyl = util.$("#vinyl");
    const disc = util.$("#vinylDisc");
    if (disc) disc.innerHTML = '<span class="vin-label">' + util.sunflower("vin_" + Date.now(), { petales: 12, len: 1.1 }) + "</span>";

    const playing = () => {
        const mb = util.$("#musicBtn");
        return !!mb && mb.classList.contains("playing");
    };

    function render() {
        const p = playing();
        if (btn) btn.textContent = p ? (T.stop || "❚❚ Pausar") : (T.play || "▶ Reproducir");
        if (vinyl) vinyl.classList.toggle("playing", p);
    }

    if (btn) {
        btn.addEventListener("click", () => {
            if (window.Music && window.Music.enabled) window.Music.toggle();
            setTimeout(render, 120);
        });
    } else if (musicOn) {
        /* sin botón (pantalla actual no lo pide); nada */
    }

    if (musicOn) {
        const mb = util.$("#musicBtn");
        if (mb) mb.addEventListener("click", () => setTimeout(render, 120));
    }

    nextBtn.addEventListener("click", () => App.next());

    Components.cancion = {
        enter() {
            render();
        },
    };
})();