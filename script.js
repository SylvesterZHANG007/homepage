document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
});
