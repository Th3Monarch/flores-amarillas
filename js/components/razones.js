/* ============================================================
   6 · LAS RAZONES — ramo de flores, una razón por cada flor
   ============================================================ */

(function () {
    const T = window.CONFIG.razones;
    if (!T || !T.items || !T.items.length) return;

    const items = T.items;
    const stage = util.$("#rzStage");
    const counter = util.$("#rzCounter");
    const card = util.$("#rzCard");
    const cardNum = util.$("#rzCardNum");
    const msg = util.$("#rzMsg");
    const done = util.$("#rzDone");
    const next = util.$("#rzNext");

    util.$("#rzTitle").textContent = T.titulo || "Las razones";
    util.$("#rzSub").textContent = T.sub || "";

    const found = new Array(items.length).fill(false);
    let foundCount = 0;
    let shown = -1;

    /* vector de posiciones del ramo (left %, top %) */
    const POS = [
        { x: 14, y: 22, r: -16 },
        { x: 36, y: 12, r: -7 },
        { x: 50, y: 9, r: 0 },
        { x: 64, y: 12, r: 7 },
        { x: 86, y: 22, r: 16 },
        { x: 26, y: 46, r: -10 },
        { x: 50, y: 44, r: 0 },
        { x: 74, y: 46, r: 10 },
    ];

    function renderCount() {
        counter.textContent = foundCount + " / " + items.length;
    }

    function hit(i) {
        found[i] = true;
        foundCount = found.filter(Boolean).length;
        renderCount();
        if (foundCount === items.length) {
            done.textContent = T.foundAll || "Has descubierto todas las razones. 💛";
            done.classList.add("on");
            next.hidden = false;
            next.classList.add("show");
        }
    }

    function show(i) {
        shown = i;
        cardNum.textContent = "Razón " + (i + 1);
        msg.textContent = items[i];
        card.classList.add("show");
    }

    function build() {
        items.forEach((texto, i) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "rz-fl" + (found[i] ? " found" : "");
            const p = POS[i] || { x: 50, y: 50, r: 0 };
            b.style.left = p.x + "%";
            b.style.top = p.y + "%";
            b.style.setProperty("--r", p.r + "deg");
            b.setAttribute("aria-label", "Razón " + (i + 1));
            b.innerHTML =
                '<span class="fl-svg">' +
                util.sunflower("rz" + i + "_" + Date.now(), { petales: 12, len: 0.58 }) +
                '</span><span class="rz-num">' + (i + 1) + "</span>";

            b.addEventListener("click", () => {
                if (!found[i]) {
                    hit(i);
                    b.classList.add("found");
                    util.Sparkles.scatter(stage, 6);
                }
                show(i);
                b.classList.add("lit");
                stage.querySelectorAll(".rz-fl.lit").forEach((el) => {
                    if (el !== b) el.classList.remove("lit");
                });
            });

            stage.appendChild(b);
        });
        renderCount();
    }

    build();

    next.addEventListener("click", () => App.next());

    Components.razones = {
        enter() {
            if (foundCount === items.length) {
                done.classList.add("on");
                next.hidden = false;
                next.classList.add("show");
            }
        },
    };
})();