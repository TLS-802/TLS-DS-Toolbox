document.addEventListener('DOMContentLoaded', function() {
    // 获取内容区域容器
    const contentArea = document.querySelector('.content-area');
    
    // 定义要加载的模块列表
    const modules = [
        { id: 'common-tools', path: 'partials/common-tools.html' },
        { id: 'shop-software', path: 'partials/shop-software.html' },
        { id: 'live-software', path: 'partials/live-software.html' },
        { id: 'ecommerce-plugins', path: 'partials/ecommerce-plugins.html' },
        { id: 'video-tools', path: 'partials/video-tools.html' },
        { id: 'design-tools', path: 'partials/design-tools.html' },
        { id: 'shop-entry', path: 'partials/shop-entry.html' },
        { id: 'ad-platforms', path: 'partials/ad-platforms.html' },
        { id: 'data-analysis', path: 'partials/data-analysis.html' }
    ];
    
    // 异步加载所有模块
    async function loadModules() {
        for (const module of modules) {
            try {
                const response = await fetch(module.path);
                if (!response.ok) {
                    throw new Error(`Failed to load module: ${module.path}`);
                }
                const html = await response.text();
                
                // 创建临时容器来解析HTML
                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = html;
                
                // 将模块内容添加到内容区域
                contentArea.appendChild(tempContainer.firstElementChild);
            } catch (error) {
                console.error(`Error loading module ${module.path}:`, error);
            }
        }
    }
    
    // 加载所有模块
    loadModules();
}); 