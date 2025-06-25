// 导航页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在主页
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' || 
                       window.location.pathname.endsWith('/');
    
    // 如果是主页并且存在导航容器，则初始化导航链接
    if (isHomePage && document.getElementById('nav-links-container')) {
        initializeNavLinks();
    }
    
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
                const linkText = this.querySelector('h3') ? this.querySelector('h3').textContent : '';
                
                // 示例：记录点击统计
                console.log(`Link clicked: ${linkText} - ${linkUrl}`);
                
                // 如果有实际的统计服务，可以在这里发送数据
                // sendAnalyticsEvent('link_click', { url: linkUrl, text: linkText });
            });
        });
    };
    
    // 初始化导航链接
    function initializeNavLinks() {
        const navLinksContainer = document.getElementById('nav-links-container');
        
        // 定义导航栏的分类和链接
        const navSections = [
            {
                title: "后台管理", 
                description: "各大平台官方后台", 
                links: [
                    {
                        title: "抖音电商", 
                        description: "店铺、达人、机构等登录", 
                        url: "http://www.douyinec.com",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100203213470.png"
                    },
                    {
                        title: "视频号助手", 
                        description: "橱窗、直播、团长登录", 
                        url: "https://channels.weixin.qq.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100203502628.png"
                    },
                    {
                        title: "快手电商", 
                        description: "快手电商登陆后台", 
                        url: "https://login.kwaixiaodian.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100303111365.png"
                    },
                    {
                        title: "小红书千帆", 
                        description: "小红书商家管理后台", 
                        url: "https://customer.xiaohongshu.com/login?service=https://ark.xiaohongshu.com/app-system/home",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696302928-91489918d79ef6b585acc0308df392cf542c3bfe-e1696302949514.png"
                    },
                    {
                        title: "抖音企业号", 
                        description: "抖音企业号数据管理", 
                        url: "https://e.douyin.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100303065669-e1696302451107.png"
                    }
                ]
            },
            {
                title: "广告投放", 
                description: "广告投放后台", 
                links: [
                    {
                        title: "巨量引擎", 
                        description: "抖音所有类型广告", 
                        url: "https://www.oceanengine.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100302593317.png"
                    },
                    {
                        title: "巨量千川", 
                        description: "抖音广告投放平台", 
                        url: "https://qianchuan.jinritemai.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100302390745.png"
                    },
                    {
                        title: "磁力引擎", 
                        description: "快手开屏、信息流、粉条", 
                        url: "https://e.kuaishou.com/#/e/home",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100302571042-e1696301848547.png"
                    },
                    {
                        title: "磁力智投", 
                        description: "快手广告投放平台", 
                        url: "https://ad.e.kuaishou.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100302374759.png"
                    },
                    {
                        title: "聚光平台", 
                        description: "小红书广告投放平台", 
                        url: "https://ad.xiaohongshu.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100203445160.png"
                    }
                ]
            },
            {
                title: "平台联盟", 
                description: "各大平台联盟", 
                links: [
                    {
                        title: "抖音精选联盟", 
                        description: "抖音平台cps", 
                        url: "https://buyin.jinritemai.com/dashboard/merch-picking-hall",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100203213470.png"
                    },
                    {
                        title: "快手快分销", 
                        description: "快手cps联盟", 
                        url: "https://cps.kwaixiaodian.com/pc/promoter/selection-center/home",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100303111365.png"
                    },
                    {
                        title: "淘宝联盟", 
                        description: "淘宝客", 
                        url: "https://pub.alimama.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696850791-taobaolianmeng.png"
                    },
                    {
                        title: "京东联盟", 
                        description: "京东cps平台", 
                        url: "https://union.jd.com/index",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100911282919.png"
                    },
                    {
                        title: "多多进宝", 
                        description: "拼多多cps联盟", 
                        url: "https://jinbao.pinduoduo.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100911133072.png"
                    }
                ]
            },
            {
                title: "投放工具", 
                description: "广告投放辅助工具", 
                links: [
                    {
                        title: "诸葛智投", 
                        description: "视频号投放管理工具", 
                        url: "https://zgzt.v-ma.com/#/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696317979-img_logo.be64bcc9.png"
                    },
                    {
                        title: "小火龙", 
                        description: "抖音随心推投放工具", 
                        url: "http://www.xiaohuolong.com",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100307205551-e1696317673861.png"
                    },
                    {
                        title: "抖老板带货助手", 
                        description: "多平台数据管理", 
                        url: "https://zs.doulaoban.com/login",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100307321758.png"
                    }
                ]
            },
            {
                title: "数据分析·选品", 
                description: "直播大数据网站推荐", 
                links: [
                    {
                        title: "蝉妈妈", 
                        description: "抖音直播数据、选品平台", 
                        url: "http://www.chanmama.com",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100214511842-e1696258312360.png"
                    },
                    {
                        title: "考古加", 
                        description: "专业数据服务平台", 
                        url: "https://www.kaogujia.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696258513-kaogu.png"
                    },
                    {
                        title: "有米有数", 
                        description: "广告投放数据分析工具", 
                        url: "https://youshu.youcloud.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100307161261-e1696317396637.png"
                    },
                    {
                        title: "巨量算数", 
                        description: "抖音短视频数据工具", 
                        url: "https://trendinsight.oceanengine.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696259305-c1c04-trendinsight.oceanengine.com_.png"
                    }
                ]
            },
            {
                title: "店铺软件", 
                description: "各大平台店铺客户端", 
                links: [
                    {
                        title: "抖店/飞鸽工作台", 
                        description: "抖店/飞鸽工作台", 
                        url: "https://im.jinritemai.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100203292743-e1696313990428.png"
                    },
                    {
                        title: "快手商家工作台", 
                        description: "左下角下载", 
                        url: "https://im.kwaixiaodian.com/pc",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100303111365.png"
                    }
                ]
            },
            {
                title: "办公常用", 
                description: "导航", 
                links: [
                    {
                        title: "飞书", 
                        description: "先进企业协作与管理平台", 
                        url: "https://www.feishu.cn/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100306285885.png"
                    },
                    {
                        title: "腾讯文档", 
                        description: "在线协作平台", 
                        url: "https://docs.qq.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/1696314767-qqdoc.png"
                    },
                    {
                        title: "百度脑图", 
                        description: "百度在线思维导图平台", 
                        url: "https://naotu.baidu.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100306343122.png"
                    },
                    {
                        title: "印象笔记", 
                        description: "随时随地获取、整理、分享笔记", 
                        url: "https://www.yinxiang.com/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100306362137.png"
                    },
                    {
                        title: "金山文档", 
                        description: "协同办公", 
                        url: "https://www.kdocs.cn/",
                        imgSrc: "https://toushoubang.com/wp-content/uploads/2023/10/2023100306402093.png"
                    }
                ]
            }
        ];
        
        // 生成HTML并添加到容器中
        navSections.forEach(section => {
            const sectionHtml = `
                <div class="nav-section mb-8">
                    <div class="nav-section-header mb-4">
                        <h2 class="text-lg sm:text-xl font-bold text-gray-800">${section.title}</h2>
                        <p class="text-sm text-gray-500">${section.description}</p>
                    </div>
                    <div class="nav-links-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        ${section.links.map(link => `
                            <a href="${link.url}" target="_blank" class="nav-link-card">
                                <div class="nav-link-logo">
                                    <img src="${link.imgSrc}" alt="${link.title}" class="w-10 h-10 object-contain">
                                </div>
                                <div class="nav-link-info">
                                    <h3 class="font-medium">${link.title}</h3>
                                    <p class="text-xs text-gray-500">${link.description}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
            
            navLinksContainer.innerHTML += sectionHtml;
        });
        
        // 设置交互功能
        setupLinkEffects();
        setupCategoryToggle();
        setupAnalytics();
    }
    
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