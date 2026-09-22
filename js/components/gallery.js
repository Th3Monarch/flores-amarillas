/* ============================================================
   4 · NUESTRA HISTORIA — galería con swipe y botones
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const fotos = window.CONFIG.fotos || [];
    const track = util.$("#galleryTrack");
    const dots = util.$("#galDots");
    const count = util.$("#galCount");
    const prev = util.$("#galPrev");
    const next = util.$("#galNext");
    const viewport = util.$("#galleryViewport");
    let idx = 0;

    util.$("#stTitle").textContent = T.storyTitle;
    util.$("#stSub").textContent = T.storySub;

    function makePlaceholder(i) {
        const ph = document.createElement("div");
        ph.className = "g-ph";
        ph.textContent = `[FOTO_${i + 1}]`;
        return ph;
    }

    function buildSlides() {
        if (!fotos.length) return;
        fotos.forEach((f, i) => {
            const slide = document.createElement("div");
            slide.className = "g-slide";

            const card = document.createElement("div");
            card.className = "g-card g-card--" + (f.estilo || "card");

            const media = document.createElement("div");
            media.className = "g-media";

            if (f.src) {
                const img = document.createElement("img");
                img.alt = f.descripcion || "Foto";
                img.loading = "lazy";
                img.src = f.src;
                img.addEventListener("error", () => img.replaceWith(makePlaceholder(i)));
                media.appendChild(img);
            } else {
                media.appendChild(makePlaceholder(i));
            }

            const cap = document.createElement("p");
            cap.className = "g-cap";
            cap.textContent = f.descripcion || "";

            card.appendChild(media);
            card.appendChild(cap);
            slide.appendChild(card);
            track.appendChild(slide);
        });

        // puntos
        fotos.forEach((_, i) => {
            const d = document.createElement("button");
            d.type = "button";
            d.className = "gal-dot";
            d.setAttribute("aria-label", "Foto " + (i + 1));
            d.addEventListener("click", () => setIdx(i));
            dots.appendChild(d);
        });
    }

    function setIdx(i) {
        if (!fotos.length) return;
        i = util.clamp(i, 0, fotos.length - 1);
        idx = i;
        track.style.transform = `translateX(-${idx * 100}%)`;
        Array.from(track.children).forEach((s, ix) => s.classList.toggle("on", ix === idx));
        Array.from(dots.children).forEach((d, ix) => d.classList.toggle("on", ix === idx));
        count.textContent = `${idx + 1} / ${fotos.length}`;
        prev.disabled = idx === 0;
        next.disabled = idx === fotos.length - 1;
    }

    /* navegación */
    prev.addEventListener("click", () => setIdx(idx - 1));
    next.addEventListener("click", () => setIdx(idx + 1));
    util.$("#stNext").addEventListener("click", () => App.next());
    document.addEventListener("keydown", (e) => {
        const active = util.$("#screen-story");
        if (!active.classList.contains("active")) return;
        if (e.key === "ArrowLeft") setIdx(idx - 1);
        if (e.key === "ArrowRight") setIdx(idx + 1);
    });

    /* swipe */
    let sx = null, sy = null;
    viewport.addEventListener("pointerdown", (e) => {
        sx = e.clientX; sy = e.clientY;
    });
    viewport.addEventListener("pointerup", (e) => {
        if (sx === null) return;
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        sx = null; sy = null;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
            setIdx(idx + (dx < 0 ? 1 : -1));
        }
    });
    viewport.addEventListener("pointercancel", () => { sx = null; sy = null; });

    buildSlides();
    setIdx(0);

    Components.story = {
        enter() {
            setIdx(idx);
        },
    };
})();