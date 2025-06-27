// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('驼铃电商工具箱已加载');
    
    // 深色模式切换功能可以在这里实现
    // 全局分析功能可以在这里实现
    // 全局共享状态可以在这里管理

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
    
    // 响应式导航
    const cardGrid = document.querySelector('.card-grid');
    if (cardGrid) {
        const updateGridColumns = () => {
            const width = window.innerWidth;
            if (width < 640) {
                cardGrid.style.gridTemplateColumns = 'repeat(1, 1fr)';
            } else if (width < 768) {
                cardGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                cardGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            }
        };
        
        updateGridColumns();
        window.addEventListener('resize', updateGridColumns);
    }

    // 页面加载后更新分类卡片UI样式
    // 更新所有部分容器为category-card样式
    document.querySelectorAll('.sec-panel').forEach(function(panel) {
        panel.classList.add('category-card');
    });
    
    // 更新所有头部为category-card-head样式
    document.querySelectorAll('.sec-panel-head').forEach(function(head) {
        head.classList.add('category-card-head');
    });
    
    // 更新所有内容区域为category-card-body样式
    document.querySelectorAll('.sec-panel-body').forEach(function(body) {
        body.classList.add('category-card-body');
    });
    
    // 更新所有网格为category-grid样式
    document.querySelectorAll('.list.list-navs').forEach(function(grid) {
        grid.classList.add('category-grid');
    });
    
    // 更新所有卡片项目为category-item样式
    document.querySelectorAll('.navs-link').forEach(function(item) {
        item.classList.add('category-item');
        
        // 更新图标容器
        const iconContainer = item.querySelector('.navs-link-logo');
        if (iconContainer) {
            iconContainer.classList.add('category-item-icon');
        }
        
        // 更新信息容器
        const infoContainer = item.querySelector('.navs-link-info');
        if (infoContainer) {
            infoContainer.classList.add('category-item-info');
        }
    });
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
