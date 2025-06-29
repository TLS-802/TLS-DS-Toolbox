// 社交媒体链接组件
document.addEventListener('DOMContentLoaded', function() {
    // 社交媒体数据
    const socialLinks = [
        {
            platform: 'GitHub',
            url: 'https://github.com/TLS-802',
            ariaLabel: '我们的GitHub',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=='
        },
        {
            platform: '抖音',
            url: 'https://v.douyin.com/ICMNRjljVK8/',
            ariaLabel: '关注我的抖音',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIuNTMuMDJDMTMuMDUgMCAxMy41OCAwIDE0LjExIDBjLjE4IDIuMDQuOTcgMy41OSAyLjA2IDQuNzdjMS4wNyAxLjE2IDIuNiAxLjk2IDQuMzEgMi4xN3YzLjgzYy0xLjY3LS4yLTMuMi0uNzYtNC40NS0xLjU1djYuODVjMCAzLjA3LTEuNjQgNi4wNS00LjUgNy4wMS0xLjQzLjQ4LTMuMDUuNDgtNC41IDAtMi40NC0uODItNC4xOC0yLjkxLTQuNS01LjVDMi4zNiAxNS4wMyAyLjM2IDEzLjMyIDMgMTEuNzdjMS4wMS0yLjQ5IDMuNDUtNC4xIDYuMTktNC4xVjExLjZjLS4yNSAwLS41LS4wMS0uNzQgMC0zLjA1LjI2LTUuMDYgMy40MS00LjA3IDYuMjkuNSAxLjQ0IDEuNjUgMi42NiAzLjE5IDMuMTkgMS4wMS4zNSAyLjE0LjM1IDMuMTYgMCAxLjk0LS42NiAzLjExLTIuMzUgMy4zNy00LjM0LjA2LS41LjA2LTEgLjA2LTEuNVYzLjE3YzAtLjA2IDAtLjEyIDAtLjE4IDAtLjk5IDAtMS45NyAwLTIuOTdaIi8+PC9zdmc+'
        },
        {
            platform: '微信',
            url: 'https://url.199908.top/VX2',
            ariaLabel: '关注我的微信',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuMjkgMTAuNDVjLjM5IDAgLjc4LjAzIDEuMTYuMDhhNy4yMiA3LjIyIDAgMCAwLTcuNTItNi43MmMtNC4xMiAwLTcuNDcgMi43OS03LjQ3IDYuMjMgMCAxLjc2LjkgMy4zOCAyLjQyIDQuNTRsLS42MiAxLjg1IDIuMTgtMS4zYTguNjggOC42OCAwIDAgMCAzLjUuNzJjLjMxIDAgLjYzLS4wMi45My0uMDRhNS4zIDUuMyAwIDAgMS0uMjIgMS41MiA3LjU2IDcuNTYgMCAwIDEtMS42Ni0uMThsLTIuNDIgMS40NS43Ny0yLjNhNy43OCA3Ljc4IDAgMCAxLTIuNzMtMS45NSA1LjMgNS4zIDAgMCAxLTEuNjYtMy44MWMwLTMuODkgMy44LTcuMDUgOC40OC03LjA1IDQuMTcgMCA3LjggMi41NCA4LjQgNS45OC0uNTUtLjA3LTEuMS0uMTItMS42Ni0uMTItNC4xMiAwLTcuNDcgMi43OS03LjQ3IDYuMjMgMCAuNTcuMS0xLjEyLjI3IDEuNjQtLjE3LjAxLS4zNS4wMi0uNTMuMDJhOC42OCA4LjY4IDAgMCAxLTMuNS0uNzJsLTIuMTggMS4zLjYyLTEuODVhNi42IDYuNiAwIDAgMS0yLjQyLTQuNTRjMC0zLjQ0IDMuMzUtNi4yMyA3LjQ3LTYuMjMgMy43MiAwIDYuOSAyLjI4IDcuNDcgNS4zeiIvPjwvc3ZnPg=='
        },
        {
            platform: '飞书',
            url: 'https://www.feishu.cn/invitation/page/add_contact/?token=154u7d8e-d426-4b6a-b4ec-75f7ff732522&amp;unique_id=Lwo89tNN9CZrOi0uAwnjEw==',
            ariaLabel: '关注我的飞书',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuMjkgOS45YzAgMi4zLTEuNTYgNC4xNS0zLjQ4IDQuOVY4LjI2aDMuNDh2MS42NHptLTYuMjkgMGMwIDIuMy0xLjU2IDQuMTUtMy40OCA0LjlWOC4yNmgzLjQ4djEuNjR6bTEwLTEuNjR2MS42NGMxLjkyLjc0IDMuNDggMi42IDMuNDggNC45VjguMjZoLTMuNDh6bS0xMy40OCAwdjEuNjRjMS45Mi43NCAzLjQ4IDIuNiAzLjQ4IDQuOVY4LjI2aC0zLjQ4eiIvPjwvc3ZnPg=='
        }
    ];

    // 获取所有社交媒体链接容器
    const socialLinksContainers = document.querySelectorAll('.social-links');

    // 为每个容器生成社交媒体链接
    socialLinksContainers.forEach(container => {
        // 清空容器
        container.innerHTML = '';
        
        // 添加社交媒体链接
        socialLinks.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.className = 'bounce-animation';
            link.setAttribute('aria-label', social.ariaLabel);
            
            // 使用图片而不是SVG
            const img = document.createElement('img');
            img.src = social.imgSrc;
            img.alt = social.platform;
            
            // 添加图片加载错误处理
            img.onerror = function() {
                this.onerror = null;
                console.log(`图片加载失败: ${social.platform}`);
            };
            
            link.appendChild(img);
            container.appendChild(link);
        });
    });
}); 