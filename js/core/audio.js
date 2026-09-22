/* ============================================================
   CORE · audio.js — música opcional con preferencia de sesión
   ============================================================ */

(function () {
    const cfg = window.CONFIG.musica;
    const btn = document.getElementById("musicBtn");
    const KEY = "jardin:musica";

    if (!cfg || !cfg.url) {
        if (btn) btn.hidden = true;
        window.Music = { enabled: false, toggle: function () {} };
        return;
    }

    let audio;
    try { audio = new Audio(cfg.url); } catch (e) { audio = null; }
    if (!audio) {
        if (btn) btn.hidden = true;
        window.Music = { enabled: false, toggle: function () {} };
        return;
    }

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = Math.max(0.02, Math.min(1, cfg.volumen || 0.25));

    let on = false;
    try { on = localStorage.getItem(KEY) === "1"; } catch (e) { on = false; }

    const playing = () => audio && !audio.paused && !audio.ended;

    function render() {
        btn.classList.toggle("playing", playing());
        const ic = btn.querySelector(".mi");
        if (ic) ic.textContent = playing() ? "🎵" : "🔇";
        btn.setAttribute("aria-pressed", String(on));
        btn.setAttribute("aria-label", playing() ? "Pausar música" : "Activar música");
    }

    function play() {
        const p = audio.play();
        if (p && p.catch) p.catch(() => { on = false; render(); });
    }

    function toggle() {
        if (playing()) {
            audio.pause();
            on = false;
        } else {
            on = true;
            play();
        }
        try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
        render();
    }

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggle();
    });

    audio.addEventListener("play", render);
    audio.addEventListener("pause", render);

    /* Si la usuaria dejó la música activada antes, se reanuda con
       el primer gesto (los navegadores exigen una interacción). */
    if (on) {
        const resume = () => { play(); document.removeEventListener("pointerdown", resume); };
        document.addEventListener("pointerdown", resume, { once: true });
    }

    render();

    window.Music = { enabled: true, toggle };
})();