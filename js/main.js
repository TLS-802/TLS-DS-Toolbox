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
