/* ============================================================
   8 · PROMESAS — promesas que se revelan una a una al tocar
   ============================================================ */

(function () {
    const T = window.CONFIG.promesas;
    if (!T || !T.items || !T.items.length) return;

    const items = T.items;
    const list = util.$("#pmList");
    const nextBtn = util.$("#pmNext");

    util.$("#pmTitle").textContent = T.titulo || "Promesas";
    util.$("#pmSub").textContent = T.sub || "";
    nextBtn.textContent = T.cta || "Una cosa más...";

    const added = [];

    function build() {
        items.forEach((texto, i) => {
            const li = document.createElement("li");
            li.className = "pm-item locked";
            li.innerHTML =
                '<span class="pm-ico">🔒</span>' +
                '<span class="pm-txt">' + texto + "</span>" +
                '<span class="pm-num">' + String(i + 1).padStart(2, "0") + "</span>";
            list.appendChild(li);
            added.push(li);
        });
    }

    function allRevealed() {
        return added.every((el) => el.classList.contains("on"));
    }

    function showNextBtn() {
        nextBtn.hidden = false;
        nextBtn.classList.add("show");
    }

    function revealNext() {
        const hidden = added.find((el) => !el.classList.contains("on"));
        if (!hidden) return;
        hidden.classList.remove("locked");
        hidden.classList.add("on");
        hidden.querySelector(".pm-ico").textContent = "🌼";
        util.Sparkles.scatter(list, 6);
        if (allRevealed()) showNextBtn();
    }

    build();
    list.addEventListener("click", revealNext);

    nextBtn.addEventListener("click", () => App.next());

    Components.promesas = {
        enter() {
            if (allRevealed()) showNextBtn();
        },
    };
})();