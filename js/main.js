// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('驼铃电商工具箱已加载');
    
    // 深色模式切换功能可以在这里实现
    // 全局分析功能可以在这里实现
    // 全局共享状态可以在这里管理
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
