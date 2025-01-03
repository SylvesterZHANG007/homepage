document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // 设置切换导航栏和正文的滚动阈值
            body.classList.add('scrolled'); // 滚动后切换到导航栏模式
        } else {
            body.classList.remove('scrolled'); // 初始模式
        }
    });
});
