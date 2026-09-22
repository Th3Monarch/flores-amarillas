/* ============================================================
   9 · FINAL — atardecer con campos de flores amarillas
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const flowers = util.$("#finaleFlowers");
    const title = util.$("#fiTitle");
    const thanks = util.$("#fiThanks");
    const love = util.$("#fiLove");
    const sign = util.$("#fiSign");
    let started = false;

    title.textContent = T.finalTitle;
    thanks.textContent = T.finalThanks;
    love.textContent = T.finalLove;
    sign.textContent = T.finalSign;

    function buildField() {
        if (flowers.querySelector(".final-flower")) return;

        // fila lejana (pequeñas)
        for (let i = 0; i < 16; i++) {
            const f = document.createElement("div");
            f.className = "final-flower far";
            const s = util.randInt(18, 30);
            f.style.setProperty("--s", s + "px");
            f.style.left = util.rand(0, 98) + "%";
            f.style.bottom = util.rand(7, 20) + "%";
            f.style.animationDelay = util.rand(0, 6).toFixed(2) + "s";
            f.innerHTML = util.sunflower("ff" + i, { petales: util.randInt(10, 12), len: 0.58 });
            flowers.appendChild(f);
        }
        // fila delantera (grandes)
        for (let i = 0; i < 9; i++) {
            const f = document.createElement("div");
            f.className = "final-flower near";
            const s = util.randInt(48, 86);
            f.style.setProperty("--s", s + "px");
            f.style.left = util.rand(0, 96) + "%";
            f.style.bottom = util.rand(-8, 4) + "%";
            f.style.animationDelay = util.rand(0, 4).toFixed(2) + "s";
            f.innerHTML = util.sunflower("fn" + i, { petales: util.randInt(11, 14), len: 0.62 });
            flowers.appendChild(f);
        }
    }

    function reveal() {
        const steps = [
            [title, 400],
            [thanks, 1700],
            [love, 3000],
            [sign, 4200],
        ];
        steps.forEach(([el, ms]) => setTimeout(() => el.classList.add("on"), ms));
    }

    Components.finale = {
        enter() {
            if (!started) {
                started = true;
                buildField();
                reveal();
            } else {
                [title, thanks, love, sign].forEach((el) => el.classList.add("on"));
            }
            util.Petals.rain("#finalePetals", 1000, 16);
            util.Petals.drop("#finalePetals", 10);
        },
        exit() {
            util.Petals.stopRain("#finalePetals");
        },
    };
})();