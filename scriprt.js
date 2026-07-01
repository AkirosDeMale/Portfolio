const popup = document.getElementById("popup");
const frame = popup.querySelector("iframe");
const close = document.getElementById("close");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const url = card.dataset.demo;

        if (!url) return;

        frame.src = url;
        popup.classList.add("active");
    });
});

close.addEventListener("click", () => {
    popup.classList.remove("active");
    frame.src = "";
});