const closed = document.getElementById("envelope-closed");
const openEnv = document.getElementById("envelope-open");
const letter = document.getElementById("final-letter");

let stage = 1;

closed.addEventListener("click", () => {
    if (stage !== 1) return;

    closed.classList.remove("active");
    openEnv.classList.add("active");

    stage = 2;

    setTimeout(() => {
        openEnv.classList.remove("active");
        letter.classList.add("active");
        stage = 3;
    }, 1000);
});
