/* ============================================================
   2 · LA FLOR — flor grande con brisa
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const big = util.$("#bigFlower");
    const title = util.$("#flTitle");
    const L1 = util.$("#flL1");
    const L2 = util.$("#flL2");
    const btn = util.$("#btnFlower");
    const screen = util.$("#screen-flower");
    let started = false;

    // textos
    title.textContent = T.flowerTitle;
    L1.textContent = T.flowerL1;
    L2.textContent = T.flowerL2;
    btn.textContent = T.flowerCta;
    btn.addEventListener("click", () => App.next({ petals: true }));

    function build() {
        big.innerHTML = util.sunflower("f1", { petales: 14, len: 0.62 });
        return true;
    }

    function reveal() {
        const steps = [
            [title, 350],
            [L1, 1350],
            [L2, 2350],
            [btn, 3400],
        ];
        steps.forEach(([el, ms]) => setTimeout(() => el.classList.add("on"), ms));
        setTimeout(() => util.Sparkles.scatter(screen, 12), 900);
    }

    Components.flower = {
        enter() {
            if (!started) {
                started = true;
                build();
                reveal();
            } else {
                [title, L1, L2, btn].forEach((el) => el.classList.add("on"));
            }
        },
    };
})();