/* ============================================================
   7 · LA FLOR DE LOS RECUERDOS — 8 pétalos interactivos
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const petalos = window.CONFIG.petalos || [];
    const flower = util.$("#rfFlower");
    const foundEl = util.$("#rfFound");
    const card = util.$("#rfCard");
    const tag = util.$("#rfCardTag");
    const msg = util.$("#rfMsg");
    const banner = util.$("#rfMsgBanner");
    const last = util.$("#rfLast");

    const state = petalos.map(() => false);
    let opened = 0;
    let finished = false;

    util.$("#reTitle").textContent = T.rememberTitle;
    util.$("#reSub").textContent = T.rememberSub;

    last.addEventListener("click", () => App.next());

    /* ---------- geometría de los pétalos ---------- */
    function placePetal(p, a) {
        const box = flower.clientWidth || 300;
        const ph = p.offsetHeight || box * 0.24;
        const d = box * 0.46 - ph / 2;
        p.style.transform = `translate(-50%, -50%) rotate(${a}deg) translateY(${d.toFixed(1)}px)`;
    }

    function build() {
        petalos.forEach((pet, i) => {
            const p = document.createElement("button");
            p.type = "button";
            p.className = "rf-petal";
            p.dataset.i = i;
            p.setAttribute("aria-label", `Pétalo de ${pet.titulo}`);
            p.innerHTML = `<span class="ico">${pet.emoji}</span>`;
            const a = -90 + i * (360 / petalos.length);
            p.style.transform = `translate(-50%, -50%) rotate(${a}deg) translateY(${a + 90 > 180 ? "80" : "90"}px)`;
            p.addEventListener("click", () => tapPetal(i));
            flower.appendChild(p);
        });
        updateFound();
    }

    function relayout() {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                Array.from(flower.children).forEach((p) => {
                    const i = +p.dataset.i;
                    if (!Number.isFinite(i)) return;
                    const a = -90 + i * (360 / petalos.length);
                    placePetal(p, a);
                });
            });
        });
    }

    let lastTap = -1;
    function tapPetal(i) {
        if (!state[i]) {
            state[i] = true;
            opened += 1;
            Array.from(flower.children)
                .find((el) => +el.dataset.i === i)
                .classList.add("found");
            updateFound();
        }
        tag.textContent = (petalos[i].titulo || "").toUpperCase();
        msg.textContent = petalos[i].mensaje;
        card.classList.add("show");
        lastTap = i;
        if (opened === petalos.length) finish();
    }

    function updateFound() {
        foundEl.textContent = `${opened} / ${petalos.length}`;
    }

    function finish() {
        if (finished) return;
        finished = true;
        banner.textContent = T.rememberAll;
        banner.classList.add("on");
        setTimeout(() => {
            if (!banner.classList.contains("on")) return;
            banner.textContent = T.rememberMissing;
        }, 1700);
        setTimeout(() => {
            last.hidden = false;
            last.classList.add("show");
            banner.classList.remove("on");
        }, 3400);
    }

    /* reposicionar al cambiar de tamaño */
    let rTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(rTimer);
        rTimer = setTimeout(relayout, 160);
    });

    build();

    Components.remembrance = {
        enter() {
            relayout();
            updateFound();
            if (finished) last.hidden = false;
            if (lastTap >= 0 && petalos[lastTap]) {
                tag.textContent = (petalos[lastTap].titulo || "").toUpperCase();
                msg.textContent = petalos[lastTap].mensaje;
                card.classList.add("show");
            }
        },
        exit() {
            if (!finished) card.classList.remove("show");
        },
    };
})();