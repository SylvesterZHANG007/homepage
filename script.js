document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            body.classList.add('scrolled'); // 滚动时显示其他内容
        } else {
            body.classList.remove('scrolled'); // 回到顶部时只显示大字
        }
    });
});
