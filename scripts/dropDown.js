document.addEventListener("click", (event) => {
    document.querySelectorAll("details").forEach((dropdown) => {
        if (!dropdown.contains(event.target)) 
            dropdown.removeAttribute("open");
    });
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("details").forEach((dropdown) => dropdown.removeAttribute("open"));
});