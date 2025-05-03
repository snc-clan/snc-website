fetch('save_ip.php');

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