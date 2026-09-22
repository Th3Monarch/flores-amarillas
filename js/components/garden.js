/* ============================================================
   3 · EL JARDÍN — campo digital con flores, brisa y parallax
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const stage = util.$("#gardenStage");
    const sparkles = util.$("#gardenSparkles");
    const l1 = util.$("#gaL1");
    const l2 = util.$("#gaL2");
    const l2b = util.$("#gaL2b");
    const l3 = util.$("#gaL3");
    const btn = util.$("#btnGarden");
    let started = false;
    let parHandler = null;

    l1.textContent = T.gardenL1;
    l2.textContent = T.gardenL2;
    l2b.textContent = T.gardenL2b;
    l3.textContent = T.gardenL3;
    btn.textContent = T.gardenCta;
    btn.addEventListener("click", () => App.next());

    function genFlowers() {
        if (stage.querySelector(".garden-flower")) return;
        const n = window.innerWidth < 640 ? 16 : 22;
        for (let i = 0; i < n; i++) {
            const s = util.randInt(20, 78);
            const fh = Math.round(s * (util.rand(1.7, 2.3)));
            const el = document.createElement("div");
            el.className = "garden-flower";
            const depth = util.rand(0, 1);
            if (depth < 0.3) el.classList.add("back");
            if (depth > 0.75) el.classList.add("front");
            el.style.left = util.rand(0.5, 99) + "%";
            el.style.setProperty("--s", s + "px");
            el.style.setProperty("--fh", fh + "px");
            el.style.animationDelay = util.rand(0, 5).toFixed(2) + "s";
            el.innerHTML =
                '<div class="stem-dot"></div><div class="hd">' +
                util.sunflower("g" + i, { petales: util.randInt(10, 14), len: 0.6 }) +
                "</div>";
            stage.appendChild(el);
        }
        util.Sparkles.scatter(sparkles, 10);
    }

    function attachParallax() {
        if (parHandler || window.matchMedia("(hover: none)").matches) return;
        let raf = 0;
        const W = window.innerWidth, H = window.innerHeight;
        parHandler = (e) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const dx = (e.clientX / W - 0.5) * 18;
                const dy = (e.clientY / H - 0.5) * 8;
                stage.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
            });
        };
        window.addEventListener("pointermove", parHandler, { passive: true });
    }
    function detachParallax() {
        if (parHandler) {
            window.removeEventListener("pointermove", parHandler);
            parHandler = null;
            stage.style.transform = "";
        }
    }

    function reveal() {
        const steps = [
            [l1, 400],
            [l2, 1400],
            [l2b, 2400],
            [l3, 3400],
            [btn, 4500],
        ];
        steps.forEach(([el, ms]) => setTimeout(() => el.classList.add("on"), ms));
    }

    Components.garden = {
        enter() {
            if (!started) {
                started = true;
                genFlowers();
                reveal();
            } else {
                [l1, l2, l2b, l3, btn].forEach((el) => el.classList.add("on"));
            }
            util.Petals.rain("#gardenPetals", 1300, 20);
            attachParallax();
        },
        exit() {
            util.Petals.stopRain("#gardenPetals");
            detachParallax();
        },
    };
})();