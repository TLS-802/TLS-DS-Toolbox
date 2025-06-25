// 导航页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 实现搜索功能（如果需要）
    const setupSearch = () => {
        const searchInput = document.getElementById('nav-search');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase().trim();
                const navLinks = document.querySelectorAll('.nav-link-card');
                
                navLinks.forEach(link => {
                    const title = link.querySelector('h3').textContent.toLowerCase();
                    const description = link.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        link.style.display = 'flex';
                    } else {
                        link.style.display = 'none';
                    }
                });
            });
        }
    };

    // 添加链接点击效果
    const setupLinkEffects = () => {
        const links = document.querySelectorAll('.nav-link-card');
        links.forEach(link => {
            link.addEventListener('click', function() {
                this.classList.add('active-link');
                // 添加点击波纹效果
                const ripple = document.createElement('span');
                ripple.classList.add('link-ripple');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };

    // 实现分类展开/收起功能
    const setupCategoryToggle = () => {
        const sectionHeaders = document.querySelectorAll('.nav-section-header');
        sectionHeaders.forEach(header => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const section = this.closest('.nav-section');
                const linksGrid = section.querySelector('.nav-links-grid');
                
                if (linksGrid.style.display === 'none') {
                    linksGrid.style.display = 'grid';
                    header.classList.remove('collapsed');
                } else {
                    linksGrid.style.display = 'none';
                    header.classList.add('collapsed');
                }
            });
        });
    };

    // 实现数据统计（可选）
    const setupAnalytics = () => {
        const trackLinks = document.querySelectorAll('a[target="_blank"]');
        trackLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // 这里可以添加埋点统计代码
                const linkUrl = this.getAttribute('href');
                const linkText = this.querySelector('h3').textContent;
                
                // 示例：记录点击统计
                console.log(`Link clicked: ${linkText} - ${linkUrl}`);
                
                // 如果有实际的统计服务，可以在这里发送数据
                // sendAnalyticsEvent('link_click', { url: linkUrl, text: linkText });
            });
        });
    };
    
    // 初始化
    setupSearch();
    setupLinkEffects();
    setupCategoryToggle();
    setupAnalytics();
    
    // 在页面加载完成后，向父页面发送加载成功信息
    if (window.parent !== window) {
        window.parent.postMessage({ type: 'navLoaded', status: 'success' }, '*');
    }
}); 