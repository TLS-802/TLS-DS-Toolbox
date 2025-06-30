// 社交媒体链接组件
document.addEventListener('DOMContentLoaded', function() {
    // 社交媒体数据
    const socialLinks = [
        {
            platform: 'GitHub',
            url: 'https://github.com/TLS-802',
            ariaLabel: '我们的GitHub',
            imgSrc: 'https://www.nodeimage.com/i/32451/fGiYmhnE3WNR5WfFsc0qc1smXGYYcST2.png'
        },
        {
            platform: '抖音',
            url: 'https://v.douyin.com/ICMNRjljVK8/',
            ariaLabel: '关注我的抖音',
            imgSrc: 'https://www.nodeimage.com/i/32451/XQtBqsnS3WNR5WcGsc0qkW8eE47qsgSj.png'
        },
        {
            platform: '微信',
            url: 'https://url.199908.top/VX2',
            ariaLabel: '关注我的微信',
            imgSrc: 'https://www.nodeimage.com/i/32451/kJesZTnD3WNR5WcGsc0qrblHJFwKHT0y.png'
        },
        {
            platform: '飞书',
            url: 'https://www.feishu.cn/invitation/page/add_contact/?token=154u7d8e-d426-4b6a-b4ec-75f7ff732522&unique_id=Lwo89tNN9CZrOi0uAwnjEw==',
            ariaLabel: '关注我的飞书',
            imgSrc: 'https://www.nodeimage.com/i/32451/IUVQmknd3WNR5WcGsc0qmYWeRVgXUxFS.png'
        }
    ];

    // 获取所有社交媒体链接容器
    const socialLinksContainers = document.querySelectorAll('.social-links');
    if (socialLinksContainers.length === 0) {
        console.warn('没有找到社交媒体链接容器');
        return;
    }

    // 创建社交媒体链接元素
    function createSocialLink(social) {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'bounce-animation';
        link.setAttribute('aria-label', social.ariaLabel);
        
        // 使用图片
        const img = document.createElement('img');
        img.src = social.imgSrc;
        img.alt = social.platform;
        img.width = 24;
        img.height = 24;
        img.loading = 'lazy';
        
        // 添加图片加载错误处理
        img.onerror = function() {
            this.onerror = null;
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>';
            console.warn(`图片加载失败: ${social.platform}`);
        };
        
        link.appendChild(img);
        return link;
    }

    // 为每个容器生成社交媒体链接
    socialLinksContainers.forEach(container => {
        // 清空容器
        container.innerHTML = '';
        
        // 添加社交媒体链接
        const fragment = document.createDocumentFragment();
        socialLinks.forEach(social => {
            fragment.appendChild(createSocialLink(social));
        });
        
        container.appendChild(fragment);
    });
}); 