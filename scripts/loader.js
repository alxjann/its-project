document.addEventListener("DOMContentLoaded", function () {
    const tailwindScript = document.createElement("script");
    tailwindScript.src = "https://unpkg.com/@tailwindcss/browser@4";
    tailwindScript.onload = () => {
        document.body.style.visibility = "visible";
    };
    
    document.body.style.visibility = "hidden";
    document.head.appendChild(tailwindScript);
});
