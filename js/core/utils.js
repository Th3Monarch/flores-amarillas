/* ============================================================
   CORE · utils.js — helpers, pétalos, flores y destellos
   ============================================================ */

window.util = (() => {
    const $ = (s, c) => (c || document).querySelector(s);
    const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
    const rand = (a, b) => a + Math.random() * (b - a);
    const randInt = (a, b) => Math.floor(rand(a, b + 1));
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    /* ---------- constructor de flores (girasol SVG) ---------- */
    function sunflower(uid, opts) {
        opts = opts || {};
        const n = opts.petales || 12;
        const R = 44;                      // radio del viewBox (50)
        const len = R * (opts.len || 0.62); // largo del pétalo
        const wid = len * 0.42;             // ancho del pétalo
        const cy = -(R * 0.5);
        let pet = "";
        for (let i = 0; i < n; i++) {
            const a = -90 + i * (360 / n);
            pet += `<ellipse cx="0" cy="${cy.toFixed(1)}" rx="${(wid / 2).toFixed(1)}" ry="${(len / 2).toFixed(1)}" transform="rotate(${a})" fill="url(#pg-${uid})" stroke="rgba(122,74,33,0.14)" stroke-width="2"/>`;
        }
        let dots = "";
        for (let i = 0; i < 7; i++) {
            const a = i * (360 / 7);
            const d = R * 0.26;
            dots += `<circle cx="${(Math.cos(a * Math.PI / 180) * d).toFixed(1)}" cy="${(Math.sin(a * Math.PI / 180) * d).toFixed(1)}" r="1.6" fill="rgba(255,224,138,0.8)"/>`;
        }
        return `<svg viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">
            <defs>
                <radialGradient id="pg-${uid}" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ffe08a"/>
                    <stop offset="55%" stop-color="#f7c948"/>
                    <stop offset="100%" stop-color="#eda83a"/>
                </radialGradient>
                <radialGradient id="pc-${uid}" cx="46%" cy="38%" r="60%">
                    <stop offset="0%" stop-color="#8a5a26"/>
                    <stop offset="60%" stop-color="#5a3416"/>
                    <stop offset="100%" stop-color="#3f220e"/>
                </radialGradient>
            </defs>
            ${pet}
            <circle cx="0" cy="0" r="${(R * 0.34).toFixed(1)}" fill="url(#pc-${uid})"/>
            <circle cx="0" cy="0" r="${(R * 0.27).toFixed(1)}" fill="none" stroke="rgba(255,224,138,0.65)" stroke-width="2"/>
            ${dots}
        </svg>`;
    }

    /* ---------- pétalos que caen ---------- */
    const PETAL_SVG = `<svg viewBox="0 0 26 32" width="100%" height="100%"><path d="M13 2C17.5 8 21 13 21 18.5c0 5.2-3.3 9.5-8 9.5s-8-4.3-8-9.5C5 13 8.5 8 13 2Z" fill="currentColor"/></svg>`;

    const PETAL_COLORS = ["var(--yellow-2)", "var(--yellow-1)", "#f4e3b8", "#eda83a", "#fff3d6", "#ffd97a"];

    const Petals = {
        make(palette) {
            const el = document.createElement("span");
            el.className = "petal";
            el.innerHTML = PETAL_SVG;
            const s = util.rand(9, 18);
            el.style.width = s + "px";
            el.style.height = (s * 1.2).toFixed(1) + "px";
            el.style.left = util.rand(0, 96) + "%";
            el.style.setProperty("--dur", util.rand(6.5, 12).toFixed(2) + "s");
            el.style.setProperty("--delay", util.rand(0, 6).toFixed(2) + "s");
            el.style.setProperty("--drift", util.rand(-70, 70).toFixed(0) + "px");
            el.style.setProperty("--spin", util.rand(180, 480).toFixed(0) + "deg");
            if (palette) el.classList.add(palette);
            return el;
        },
        drop(container, n, palette) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (!c) return;
            for (let i = 0; i < n; i++) {
                const p = Petals.make(palette);
                c.appendChild(p);
                p.addEventListener("animationend", () => p.remove(), { once: true });
            }
        },
        rain(container, n, every, maxAlive, palette) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (!c || c.dataset.raining === "1") return;
            c.dataset.raining = "1";
            const timer = window.setInterval(() => {
                if (c.children.length >= (maxAlive || 14)) return;
                const p = Petals.make(palette);
                p.style.setProperty("--delay", "0s");
                c.appendChild(p);
                p.addEventListener("animationend", () => p.remove(), { once: true });
            }, every || 1100);
            c._rainTimer = timer;
        },
        stopRain(container) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (c) {
                if (c._rainTimer) { clearInterval(c._rainTimer); delete c._rainTimer; }
                c.dataset.raining = "0";
            }
        },
        /* barrido de pétalos para transiciones */
        sweep(n) {
            const fx = document.getElementById("petalFx");
            for (let i = 0; i < (n || 16); i++) {
                const el = document.createElement("span");
                el.className = "p-sweep";
                el.innerHTML = PETAL_SVG;
                const s = util.rand(16, 34);
                el.style.width = s + "px";
                el.style.height = (s * 1.25).toFixed(1) + "px";
                el.style.setProperty("--top", util.rand(4, 92) + "%");
                el.style.setProperty("--size", s + "px");
                el.style.setProperty("--dur", util.rand(0.7, 1.15).toFixed(2) + "s");
                el.style.setProperty("--delay", (i * 0.045).toFixed(2) + "s");
                el.style.setProperty("--drop", util.rand(-60, 120) + "px");
                el.style.setProperty("--rot", util.rand(120, 420) + "deg");
                el.style.setProperty("--petal-color", util.pick(PETAL_COLORS));
                el.style.animationDelay = el.style.getPropertyValue("--delay");
                fx.appendChild(el);
                el.addEventListener("animationend", () => el.remove(), { once: true });
            }
        },
        /* ráfaga de flores (pantalla 8) */
        burstFlowers(container, n) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (!c) return;
            const W = window.innerWidth, H = window.innerHeight;
            for (let i = 0; i < (n || 15); i++) {
                const wrap = document.createElement("span");
                wrap.className = "sv";
                const s = util.rand(60, 150);
                wrap.style.setProperty("--s", s + "px");
                wrap.style.setProperty("--x", util.rand(-0.5, 0.5) * W + "px");
                wrap.style.setProperty("--y", util.rand(-0.35, 0.55) * H + "px");
                wrap.style.setProperty("--d", util.rand(2, 3.2).toFixed(2) + "s");
                wrap.style.setProperty("--e", util.rand(0, 0.5).toFixed(2) + "s");
                wrap.style.setProperty("--rot", util.rand(120, 300) + "deg");
                const x = util.rand(0, 100), y = util.rand(0, 100);
                wrap.style.left = x + "%";
                wrap.style.top = y + "%";
                wrap.innerHTML = util.sunflower("b" + i + "_" + Date.now(), { petales: util.randInt(10, 14), len: 0.6 });
                c.appendChild(wrap);
                wrap.addEventListener("animationend", () => wrap.remove(), { once: false });
            }
        },
        clearBurst(container) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (c) c.innerHTML = "";
        },
    };

    /* ---------- destellos ---------- */
    const Sparkles = {
        scatter(container, n) {
            const c = typeof container === "string" ? document.querySelector(container) : container;
            if (!c) return;
            for (let i = 0; i < (n || 8); i++) {
                const s = document.createElement("span");
                s.className = "sparkle";
                const size = util.rand(4, 11);
                s.style.width = size + "px";
                s.style.height = size + "px";
                s.style.left = util.rand(2, 96) + "%";
                s.style.top = util.rand(2, 88) + "%";
                s.style.setProperty("--d", util.rand(2.2, 5).toFixed(2) + "s");
                s.style.setProperty("--o", util.rand(0.5, 1).toFixed(2));
                s.style.animationDelay = util.rand(0, 3).toFixed(2) + "s";
                c.appendChild(s);
            }
        },
    };

    /* ---------- escritura progresiva ---------- */
    async function typeWriter(el, text, opts) {
        opts = opts || {};
        const speed = opts.speed || 42;
        if (opts.before) await util.sleep(opts.before);
        el.classList.add("tw-caret");
        el.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            el.textContent += text[i];
            const pause = /[.,;:…!?]/.test(text[i]) ? speed * 7 : speed;
            await util.sleep(pause);
        }
        el.classList.remove("tw-caret");
    }

    return { $, $$, rand, randInt, pick, sleep, clamp, sunflower, Petals, Sparkles, typeWriter };
})();