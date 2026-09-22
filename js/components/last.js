/* ============================================================
   8 · EL ÚLTIMO PÉTALO — oscurecimiento y lluvia de flores
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const quotes = util.$("#lastQuotes");
    const dark = util.$("#darkFx");
    let started = false;

    const Q = [
        { t: T.lastQ1, ms: true, hold: 2800 },
        { t: T.lastQ2, ms: true, hold: 3600 },
        { t: T.lastQ3, ms: true, hold: 1700 },
        { t: T.lastQ4, ms: true, big: true, hold: 2500 },
    ];

    function build() {
        Q.forEach((q) => {
            const p = document.createElement("p");
            p.className = "q" + (q.big ? " q--big" : "");
            p.textContent = q.t;
            quotes.appendChild(p);
        });
    }

    function show(q, delay) {
        return new Promise((res) => {
            setTimeout(() => {
                q.classList.add("on");
                res();
            }, delay);
        });
    }

    async function run() {
        dark.classList.add("on");
        const els = Array.from(quotes.children);
        for (let i = 0; i < els.length; i++) {
            const q = Q[i];
            await show(els[i], 500);
            await util.sleep(q.hold);
        }
        util.Petals.burstFlowers("#burst", 16);
        await util.sleep(3300);
        App.next();
    }

    build();

    Components.last = {
        enter() {
            if (started) return;
            started = true;
            run();
        },
    };
})();