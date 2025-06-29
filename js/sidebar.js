document.addEventListener('DOMContentLoaded', function() {
    // 获取所有侧边栏链接
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    
    // 获取所有分类区域
    const sections = document.querySelectorAll('.navs-section');
    
    // 点击侧边栏链接事件
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // 添加活动状态
            sidebarLinks.forEach(function(l) {
                l.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 滚动监听，高亮当前查看的分类
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 