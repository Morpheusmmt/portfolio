// Destacar a seção ativa no menu de navegação
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste de deslocamento
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
