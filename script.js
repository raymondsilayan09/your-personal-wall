const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {

    // Fade out animation
    welcome.style.opacity = "0";
    welcome.style.pointerEvents = "none";

    setTimeout(() => {
        welcome.style.display = "none";
        mainContent.classList.remove("hidden");

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});