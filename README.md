# 驼铃电商工具箱

一站式电商运营工具集合，助力商家高效经营

## 项目介绍

驼铃电商工具箱是一个集合了各类电商运营工具的导航网站，包括电商知识库、补单计算器、ROI计算器、直播工具、店铺管理工具等。本项目旨在为电商从业者提供一个便捷的工具集合，提高工作效率。

## 功能特点

- 电商知识库：从新手到高手的电商知识体系
- 电商黑科技：品退、差评方法等实用技巧
- 补单计算器：快速计算补单数量，提升店铺指标
- 千川计算器：计算广告投放ROI，优化投放效果
- 直播中控工具：自动弹窗、自动发言等直播辅助功能
- 规则中心：集合多平台规则，帮助商家合规经营
- 多平台导航：包含各大电商平台的官方工具入口

## 项目结构

```
TLS-DS-Toolbox/
├── index.html          # 主页面
├── css/                # 样式文件
│   ├── main.css        # 主样式表
│   ├── social.css      # 社交媒体样式
│   ├── roi.css         # ROI计算器样式
│   └── budan.css       # 补单计算器样式
├── js/                 # JavaScript文件
│   ├── main.js         # 主脚本文件
│   ├── social.js       # 社交媒体脚本
│   ├── roi.js          # ROI计算器脚本
│   └── budan.js        # 补单计算器脚本
└── pages/              # 子页面
    ├── rules.html      # 规则中心
    ├── roi.html        # ROI计算器
    └── budan.html      # 补单计算器
```

## 技术栈

- HTML5
- CSS3
- JavaScript
- Tailwind CSS (CDN)
- 响应式设计

## 代码优化记录

### 2023-06-30 代码清理优化
- 删除了index.html中未使用的CSS样式类
- 移除了main.js中冗余的JavaScript代码
- 清理了main.css中重复定义和未使用的样式
- 优化了响应式布局，确保在各种设备上正常显示
- 统一了头部和底部与内容区域宽度，保持UI一致性

## 使用说明

1. 克隆仓库到本地
```bash
git clone https://github.com/TLS-802/TLS-DS-Toolbox.git
```

2. 使用浏览器打开index.html即可访问主页
3. 点击相应的工具卡片可以进入对应的工具页面

## 贡献指南

欢迎对本项目进行贡献！如果你有任何改进意见或新功能建议，请按以下步骤操作：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件