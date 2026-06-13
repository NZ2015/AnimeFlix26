const search = document.getElementById("search");

search.addEventListener("input", () => {
    const filter = search.value.toLowerCase();
    const cards = document.querySelectorAll(".anime-card");

    cards.forEach(card => {
        const title = card.querySelector("h3");
        const text = title ? title.textContent.toLowerCase() : "";

        card.style.display = text.includes(filter) ? "flex" : "none";
    });
});
