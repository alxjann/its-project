document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add("bg-white/30", "backdrop-blur-lg" ,"shadow-xl");
        } else {
            navbar.classList.remove("bg-white/30", "backdrop-blur-lg", "shadow-xl");
        }
    };

    window.addEventListener("scroll", handleScroll);
});
