document.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.querySelector('.intro-container'); // 获取标题容器
    const body = document.body;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY; // 获取滚动距离
        const fadeOutPoint = 200; // 设置标题开始淡出的滚动距离

        // 根据滚动距离调整标题的透明度
        if (scrollY < fadeOutPoint) {
            const opacity = 1 - scrollY / fadeOutPoint; // 计算透明度
            introContainer.style.opacity = opacity;
        } else {
            introContainer.style.opacity = 0; // 完全滚动后隐藏标题
            body.classList.add('scrolled'); // 显示正文
        }
    });
});
