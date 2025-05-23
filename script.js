fetch('save_ip.php');

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const body = document.body;
    body.style.opacity = "1";
    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
