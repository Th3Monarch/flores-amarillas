/* ============================================================
   CORE · app.js — router de la historia, transiciones y progreso
   ============================================================ */

window.Components = {};

(function () {
    const META = [
        { k: "seed",        i: "🌱", l: "La semilla" },
        { k: "flower",      i: "🌻", l: "La flor" },
        { k: "garden",      i: "💛", l: "El jardín" },
        { k: "story",       i: "📸", l: "Nuestra historia" },
        { k: "time",        i: "❤️", l: "Nuestro tiempo" },
        { k: "razones",     i: "🌼", l: "Las razones" },
        { k: "cancion",     i: "🎵", l: "Nuestra canción" },
        { k: "promesas",    i: "🤝", l: "Las promesas" },
        { k: "letter",      i: "💌", l: "La carta" },
        { k: "remembrance", i: "🌻", l: "Los recuerdos" },
        { k: "last",        i: "✨", l: "El último pétalo" },
        { k: "finale",      i: "💛", l: "Para ti" },
    ];

    const TONE = [
        "#0a130d", // seed (oscuro)
        "#fff6dd", // flor (claro)
        "#ffe2a8", // jardín (atardecer)
        "#f6e7c3", // historia
        "#ffe9b8", // tiempo
        "#fff5df", // razones (crema soleado)
        "#23352a", // canción (oscuro, foco de vinilo)
        "#f3d9a8", // promesas (ámbar)
        "#f3e3c0", // carta
        "#f7dd94", // recuerdos
        "#07090a", // último pétalo (oscuro)
        "#1d3a29", // final (atardecer)
    ];

    const screens = Array.from(document.querySelectorAll(".screen"));
    const N = META.length;
    let cur = 0;
    let maxReached = 0;

    const veil = document.getElementById("veil");

    function progressItem(m, ix) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "p-item";
        b.innerHTML = m.i;
        b.title = m.l;
        b.setAttribute("aria-label", m.l);
        b.dataset.ix = ix;
        return b;
    }

    function buildProgress() {
        const nav = document.getElementById("progress");
        const frag = document.createDocumentFragment();
        META.forEach((m, ix) => frag.appendChild(progressItem(m, ix)));
        nav.appendChild(frag);
        nav.addEventListener("click", (e) => {
            const t = e.target.closest(".p-item");
            if (!t || !t.classList.contains("visited")) return;
            const ix = +t.dataset.ix;
            if (ix === cur) return;
            App.goTo(ix, { back: ix < cur });
        });
    }

    function updateProgress() {
        const items = document.querySelectorAll(".p-item");
        items.forEach((it, ix) => {
            it.classList.toggle("current", ix === cur);
            it.classList.toggle("visited", ix <= maxReached);
        });
    }

    function setActive(i) {
        const oldComp = Components[META[cur].k];
        if (oldComp && oldComp.exit) oldComp.exit();
        cur = i;
        if (i > maxReached) maxReached = i;
        screens.forEach((s, ix) => {
            s.classList.toggle("active", ix === i);
            if (ix === i) { s.scrollTop = 0; s.classList.remove("letter-open"); }
        });
        updateProgress();
        try { screens[i].focus({ preventScroll: true }); } catch (e) {}
        const comp = Components[META[i].k];
        if (comp && comp.enter) comp.enter();
    }

    const App = {
        get index() { return cur; },
        get meta() { return META; },

        goTo(i, opts) {
            opts = opts || {};
            if (i === cur) return;
            if (i < 0 || i >= N) return;
            if (!opts.back && i > cur + 1) return; // solo avance paso a paso

            const forward = i > cur;
            veil.style.background = TONE[i];
            veil.classList.add("on");
            if (opts.petals) util.Petals.sweep(20);

            setTimeout(() => setActive(i), opts.silent ? 0 : (forward ? 300 : 140));
            setTimeout(() => veil.classList.remove("on"), opts.silent ? 0 : (forward ? 620 : 480));
        },

        next(opts) { App.goTo(cur + 1, opts || {}); },
        back() { App.goTo(cur - 1, { back: true }); },

        boot() {
            buildProgress();
            setActive(0);
        },
    };

    window.App = App;
})();