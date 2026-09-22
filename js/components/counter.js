/* ============================================================
   5 · NUESTRO TIEMPO — contador en tiempo real
   ============================================================ */

(function () {
    const T = window.CONFIG.textos;
    const P = window.CONFIG.pareja;
    const dNum = util.$("#ctDays");
    const hNum = util.$("#ctHours");
    const mNum = util.$("#ctMins");
    const sNum = util.$("#ctSecs");

    util.$("#tiTitle").textContent = T.timeTitle;
    util.$("#tiTitle2").textContent = T.timeTitle2;
    util.$("#tiFooter").textContent = T.timeFooter;

    /* fecha de inicio (local) */
    function parseStart() {
        const [y, mo, d] = String(P.fechaInicio || "").split("-").map(Number);
        const [hh, mm, ss] = String(P.horaInicio || "20:00").split(":").map(Number);
        const base = new Date(y || 2024, (mo || 1) - 1, d || 1, hh || 20, mm || 0, ss || 0);
        return Number.isNaN(base.getTime()) ? new Date() : base;
    }
    const START = parseStart();

    const pad = (n) => String(n).padStart(2, "0");
    const esc = (n) => n.toLocaleString("es-ES");

    function tick() {
        let diff = Date.now() - START.getTime();
        if (diff < 0) diff = 0;
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor(diff / 3600000) % 24;
        const mins = Math.floor(diff / 60000) % 60;
        const secs = Math.floor(diff / 1000) % 60;
        dNum.textContent = esc(days);
        hNum.textContent = pad(hours);
        mNum.textContent = pad(mins);
        sNum.textContent = pad(secs);
    }

    tick();
    setInterval(tick, 1000);

    Components.time = {
        enter() {
            tick();
            const els = [util.$("#tiTitle"), util.$("#tiTitle2"), util.$("#tiFooter")];
            const ms = [200, 900, 1800];
            els.forEach((el, i) => setTimeout(() => el.classList.add("on"), ms[i]));
        },
    };

    util.$("#tiNext").addEventListener("click", () => App.next());
})();