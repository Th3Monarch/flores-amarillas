/* ============================================================
   6 · LA CARTA — sobre que se abre y carta progresiva
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const C = window.CONFIG.carta;
    const P = window.CONFIG.pareja;
    const envelope = util.$("#envelope");
    const wrap = util.$(".envelope-wrap");
    const card = util.$("#letterCard");
    const body = util.$("#letterBody");
    const screen = util.$("#screen-letter");
    const btn = util.$("#btnLetter");
    const leNext = util.$("#leNext");
    let opened = false;

    util.$("#leLead").textContent = T.letterLead;
    btn.textContent = T.letterCta;

    function showNext() {
        leNext.classList.add("on");
    }

    function buildLetter() {
        let text = C.texto || "";
        text = text.replace(/\{novia\}/g, P.novia).replace(/\{novio\}/g, P.novio);
        const paragraphs = text.split(/\n\s*\n/);
        const frag = document.createDocumentFragment();
        paragraphs.forEach((par) => {
            const p = document.createElement("p");
            const lines = par.split("\n");
            const parts = lines.map((ln) => ln || "&nbsp;").join("<br>");
            p.innerHTML = parts;
            frag.appendChild(p);
        });
        // último párrafo = firma
        const last = frag.lastChild;
        if (last) last.className = "l-sign";
        body.appendChild(frag);
    }

    function open() {
        if (opened) return;
        opened = true;
        envelope.classList.add("open");
        btn.disabled = true;
        screen.classList.add("letter-open");

        setTimeout(() => {
            wrap.classList.add("gone");
            card.classList.add("show");
            const ps = Array.from(body.children);
            ps.forEach((p, i) => setTimeout(() => p.classList.add("on"), 260 + i * 420));
            setTimeout(showNext, 800 + ps.length * 420);
        }, 1000);

        // permitir volver a cerrar no: mantenemos la carta abierta
    }

    btn.addEventListener("click", open);
    leNext.addEventListener("click", () => App.next());
    buildLetter();

    Components.letter = {
        enter() {
            util.$("#leLead").classList.add("on");
            if (opened) {
                card.classList.add("show");
                showNext();
            }
        },
    };
})();