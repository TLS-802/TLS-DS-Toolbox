// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('驼铃电商工具箱已加载');
    
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 响应式布局处理
    function initResponsiveLayout() {
        // 检测设备类型 - 与CSS断点保持一致
        const isMobile = window.innerWidth <= 650;
        const isTablet = window.innerWidth > 650 && window.innerWidth <= 1024;
        const isDesktop = window.innerWidth > 1024;
        
        // 为body添加设备类
        document.body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');
        if (isMobile) document.body.classList.add('is-mobile');
        if (isTablet) document.body.classList.add('is-tablet');
        if (isDesktop) document.body.classList.add('is-desktop');
        
        // 针对不同设备优化图标大小
        document.querySelectorAll('.category-item-icon img').forEach(img => {
            if (isMobile) {
                img.style.maxWidth = '24px';
                img.style.maxHeight = '24px';
            } else if (isTablet) {
                img.style.maxWidth = '28px';
                img.style.maxHeight = '28px';
            } else {
                img.style.maxWidth = '32px';
                img.style.maxHeight = '32px';
            }
        });
        
        // 控制网格布局 - 确保与CSS媒体查询一致
        document.querySelectorAll('.category-grid').forEach(grid => {
            if (isMobile) {
                // 手机显示2列
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                // 平板和PC显示5列
                grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
            }
        });
    }
    
    // 初始化响应式布局
    initResponsiveLayout();
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        initResponsiveLayout();
    });

    // 检查是否已定义CSS变量，如果未定义则添加默认值
    const root = document.documentElement;
    const style = getComputedStyle(root);
    
    // 检查并设置间距变量
    if (!style.getPropertyValue('--spacing-xs').trim()) {
        root.style.setProperty('--spacing-xs', '4px');
        root.style.setProperty('--spacing-sm', '8px');
        root.style.setProperty('--spacing-md', '12px');
        root.style.setProperty('--spacing-base', '16px');
        root.style.setProperty('--spacing-lg', '20px');
        root.style.setProperty('--spacing-xl', '24px');
        root.style.setProperty('--spacing-2xl', '32px');
        
        // 卡片样式变量
        root.style.setProperty('--card-padding', '16px');
        root.style.setProperty('--card-border-radius', '8px');
        root.style.setProperty('--card-gap', '16px');
        root.style.setProperty('--card-shadow', '0 1px 3px rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--card-border', '1px solid #f0f0f0');
    }
    
    // 加载工具数据
    loadToolData();

    // 确保界面间距一致
    ensureUniformSpacing();
});

// 工具函数
const utils = {
    // 格式化数字为货币格式
    formatCurrency: function(value) {
        return parseFloat(value).toFixed(2) + '元';
    },
    
    // 格式化百分比
    formatPercentage: function(value) {
        return parseFloat(value).toFixed(2) + '%';
    },
    
    // 数值校验
    validateNumber: function(value, min = null, max = null) {
        const num = parseFloat(value);
        if (isNaN(num)) return false;
        if (min !== null && num < min) return false;
        if (max !== null && num > max) return false;
        return true;
    }
}; 

// 导出 utils 对象，使其可以在其他文件中使用
if (typeof window !== 'undefined') {
    window.dsToolboxUtils = utils;
} 

// 加载工具数据
function loadToolData() {
    // 使用fetch API请求数据
    fetch('data/tools.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应不正常');
            }
            return response.json();
        })
        .then(data => {
            // 处理数据
            renderTools(data);
        })
        .catch(error => {
            console.error('获取工具数据时出错:', error);
            document.querySelector('.content-area').innerHTML = `
                <div class="error-message" style="text-align: center; padding: 40px;">
                    <h3>数据加载失败</h3>
                    <p>抱歉，工具数据加载失败，请刷新页面重试。</p>
                    <p>错误详情: ${error.message}</p>
                </div>
            `;
        });
}

// 渲染工具数据到页面
function renderTools(data) {
    const contentArea = document.querySelector('.content-area');
    let html = '';
    
    // 遍历数据中的每个分类
    data.categories.forEach(category => {
        html += `
        <div id="${category.id}" class="navs-section">
            <div class="sec-panel">
                <div class="sec-panel-head">
                    <h2>${category.name} <small>${category.description || ''}</small></h2>
                </div>
                <div class="sec-panel-body">
                    <div class="list-navs category-grid">
        `;
        
        // 遍历分类中的所有工具
        category.tools.forEach(tool => {
            html += `
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="category-item">
                <div class="category-item-icon">
                    <img src="${tool.icon}" alt="${tool.name}" loading="lazy">
                </div>
                <div class="category-item-info">
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                </div>
            </a>
            `;
        });
        
        html += `
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    // 将生成的HTML插入到内容区域
    contentArea.innerHTML = html;
    
    // 应用统一间距样式
    applyUniformSpacing();
}

// 应用统一间距
function applyUniformSpacing() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.sec-panel');
    const items = document.querySelectorAll('.category-item');
    
    // 统一卡片间距
    cards.forEach(card => {
        card.style.marginBottom = 'var(--spacing-lg)';
    });
    
    // 统一项目间距和对齐
    items.forEach(item => {
        item.style.padding = 'var(--spacing-sm)';
    });
    
    // 响应式处理
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.sec-panel-body').forEach(body => {
            body.style.padding = 'var(--spacing-sm)';
        });
    }
}

/**
 * 确保所有元素的间距一致性
 * 在页面加载后应用统一间距样式
 */
function ensureUniformSpacing() {
    // 统一卡片间距
    document.querySelectorAll('.sec-panel, .category-card').forEach(card => {
        card.style.marginBottom = 'var(--spacing-lg)';
    });
    
    // 统一卡片头部
    document.querySelectorAll('.sec-panel-head, .category-card-head').forEach(head => {
        head.style.padding = window.innerWidth <= 768 
            ? 'var(--spacing-sm) var(--spacing-base)' 
            : 'var(--spacing-base) var(--spacing-lg)';
    });
    
    // 统一卡片内容区域
    document.querySelectorAll('.sec-panel-body').forEach(body => {
        body.style.padding = window.innerWidth <= 768 
            ? 'var(--spacing-sm)' 
            : 'var(--spacing-base)';
    });
    
    // 统一网格间距
    document.querySelectorAll('.list-navs').forEach(grid => {
        grid.style.gridGap = window.innerWidth <= 768 
            ? 'var(--spacing-sm)' 
            : 'var(--spacing-md)';
    });
    
    // 统一链接和项目间距
    document.querySelectorAll('.navs-link, .category-item').forEach(item => {
        item.style.padding = window.innerWidth <= 576 
            ? 'var(--spacing-xs) var(--spacing-sm)' 
            : 'var(--spacing-sm) var(--spacing-base)';
        item.style.borderRight = 'var(--card-border)';
        item.style.borderBottom = 'var(--card-border)';
    });
    
    // 统一图标和文本间距
    document.querySelectorAll('.navs-link-logo, .category-item-icon').forEach(icon => {
        icon.style.marginRight = window.innerWidth <= 576 
            ? 'var(--spacing-xs)' 
            : 'var(--spacing-sm)';
    });
    
    // 统一标题和描述间距
    document.querySelectorAll('.navs-link-info h3, .category-item-info h3').forEach(title => {
        title.style.marginBottom = 'var(--spacing-xs)';
    });
    
    // 统一页脚和标题页间距
    document.querySelectorAll('.site-footer .footer-content, .page-title .footer-content').forEach(content => {
        content.style.padding = window.innerWidth <= 768 
            ? 'var(--spacing-sm) 0' 
            : 'var(--spacing-base) 0';
    });
    
    // 统一社交链接间距
    document.querySelectorAll('.social-links a').forEach(link => {
        link.style.margin = `0 var(--spacing-xs)`;
    });
}

// 监听窗口大小变化，重新应用统一间距
window.addEventListener('resize', function() {
    ensureUniformSpacing();
}); 
