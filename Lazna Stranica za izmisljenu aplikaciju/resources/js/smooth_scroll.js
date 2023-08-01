document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event){
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({
                top: targetPosition - offset,
                behavior: "smooth"
            });
        }
    });
});