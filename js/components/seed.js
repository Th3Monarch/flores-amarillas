/* ============================================================
   1 · LA SEMILLA — crecimiento y presentación
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const stage = util.$(".seed-stage");
    const l1 = util.$("#seedLine1");
    const l2 = util.$("#seedLine2");
    const btn = util.$("#btnSeed");
    let started = false;

    util.$("#btnSeed").textContent = T.seedCta;
    util.$(".seed-stage .bloom").innerHTML = util.sunflower("s1", { petales: 12, len: 0.58 });

    btn.addEventListener("click", () => App.next());

    function grow() {
        started = true;
        stage.classList.add("grown");

        setTimeout(() => {
            l1.closest(".line").classList.add("show");
            util.typeWriter(l1, T.seedIntro, { speed: 46 });
        }, 300);

        setTimeout(() => {
            l2.closest(".line").classList.add("show");
            util.typeWriter(l2, T.seedIntro2, { speed: 46 });
        }, 2150);

        setTimeout(() => btn.classList.add("show"), 3300);
        setTimeout(() => util.Petals.drop("#seedPetals", 14), 2300);
    }

    Components.seed = {
        enter() {
            if (!started) {
                grow();
            } else {
                l1.closest(".line").classList.add("show");
                l2.closest(".line").classList.add("show");
                btn.classList.add("show");
                util.Petals.drop("#seedPetals", 6);
            }
        },
    };
})();