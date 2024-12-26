document.addEventListener('DOMContentLoaded', () => {
    // 获取页面元素
    const body = document.body;

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        // 检查滚动距离
        if (window.scrollY > 100) {
            // 添加 'scrolled' 类以触发 CSS 动画效果
            body.classList.add('scrolled');
        } else {
            // 如果回到顶部，移除 'scrolled' 类
            body.classList.remove('scrolled');
        }
    });
});
