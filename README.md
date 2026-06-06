# Darren Dev Portfolio

> Java 后端开发者个人作品集网站 — 深色工程展示风格，离线可用，零依赖。

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 简介

Darren Dev Portfolio 是一个单文件静态个人作品集网站，用于展示 Java 后端研发经验、技术栈、已确认的项目成果及联系方式。页面设计采用暗色工程风格，绿色强调色搭配代码感排版，无需任何构建工具或运行时依赖，双击 `index.html` 即可在浏览器中离线打开。

面向面试官、HR 及技术同行，清晰传达开发者在复杂业务系统研发、存量系统重构、服务拆分、数据迁移及稳定性保障等领域的专业能力。

## 功能特性

- **纯静态单文件架构** — 页面结构、样式和脚本全部内联于 `index.html`，无需构建、打包或 Web 服务器
- **离线可用** — 所有资源本地化存储，不依赖外部 CDN 或网络请求
- **深色工程风格** — 暗色网格背景、绿色强调色（`#00e5a0`）、代码字体排版，突出工程研发氛围
- **完整作品集模块** — 包含首页 Hero、关于我、技术栈、项目展示、联系方式五大核心区域
- **响应式布局** — 适配桌面端与移动端，移动端导航自动切换为汉堡菜单，项目卡片改为单列
- **技术关键词跑马灯** — 循环滚动展示 Java、Spring Boot、MySQL、Redis、RocketMQ 等核心技术栈
- **项目卡片网格** — 展示近期项目，标注项目状态、技术栈和已确认的功能模块
- **微信二维码悬浮展示** — hover 触发，使用 fixed 定位智能适配视口空间
- **页面平滑导航** — 锚点滚动、移动端菜单折叠/展开，交互轻量无框架依赖
- **内容克制真实** — 只展示已实现、可面试解释的内容，不包含夸张指标或规划中功能

## 技术栈

| 类别 | 技术 |
|------|------|
| 页面结构 | HTML5 |
| 样式方案 | CSS3（CSS 变量、Grid 布局、Media Query） |
| 交互逻辑 | Vanilla JavaScript（ES6+） |
| 图标方案 | 内联 SVG（24×24 规格，`currentColor` 继承） |
| 静态资源 | 本地 PNG 图片，`assets/images/` 目录管理 |
| 运行环境 | 浏览器（Chrome / Firefox / Safari / Edge） |

## 项目结构

```text
.
├── index.html                  # 单文件页面入口（HTML + CSS + JS）
├── assets/
│   └── images/
│       ├── wx.png              # 微信二维码
│       ├── 个人作品集.png       # 个人作品集预览截图
│       └── ctrip/              # 携程酒店数据采集平台项目截图
├── README.md                   # 项目说明文档
├── PRD.md                      # 产品需求文档
├── TECH_DESIGN.md              # 技术设计文档
├── AGENTS.md                   # Agent / 维护者开发规范
└── LICENSE                     # MIT 开源协议
```

## 快速开始

本项目无依赖、无构建步骤。只需在文件管理器中双击 `index.html`，或在终端中使用浏览器打开：

**macOS**

```bash
open index.html
```

**Windows**

```bash
start index.html
```

**Linux**

```bash
xdg-open index.html
```

也可以使用任意 HTTP 服务器预览（可选）：

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

然后在浏览器中访问 `http://localhost:8080`。

## 页面导航

| 区域 | 锚点 ID | 内容 |
|------|---------|------|
| 首页 Hero | `#home` | 个人定位、简介、技术关键词跑马灯 |
| 关于我 | `#about` | 研发经验、覆盖领域、业务场景 |
| 技术栈 | `#stack` | Java 核心 / 中间件与数据 / 微服务治理 / 工具实践 |
| 项目展示 | `#projects` | 4 个项目卡片（含状态标识与技术栈标签） |
| 联系方式 | `#contact` | 邮箱、GitHub、微信二维码 |

## 自定义指南

### 修改页面文案

编辑 `index.html`，找到对应 section 中的文案内容直接修改，所有内容以中文纯文本为主。

### 更换微信二维码

将新的二维码图片保存为 `assets/images/wx.png`，覆盖原文件即可，无需修改代码。

### 添加新项目卡片

在 `index.html` 的 `#projects` section 中，参照现有 `.project-card` 结构新增卡片：

```html
<article class="project-card">
  <div class="project-icon"><svg>...</svg></div>
  <div class="project-status">状态</div>
  <h3>项目名称</h3>
  <p>简短描述</p>
  <div class="project-stack">
    <span>技术标签</span>
  </div>
  <div class="project-links">
    <button data-open="https://example.com">访问入口</button>
  </div>
</article>
```

### 更新技术栈标签

在 `#stack` section 中增减 `<span class="badge">` 标签即可。

> 更多维护规范和设计约束请参阅 [AGENTS.md](AGENTS.md) 和 [TECH_DESIGN.md](TECH_DESIGN.md)。

## 设计系统

| 属性 | 值 |
|------|-----|
| 主背景色 | `#0c0e0f` |
| 次级背景色 | `#131618` / `#1a1d20` |
| 卡片背景色 | `#1f2428` / `#252b30` |
| 主文字色 | `#e8eaec` |
| 次要文字色 | `#8b9399` |
| 强调色（绿色） | `#00e5a0` |
| 强调色（深） | `#00c98c` |
| Java 标识色 | `#f89820` |
| 等宽字体 | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas` |
| 无衬线字体 | `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont` |
| 内容最大宽度 | `1100px` |
| 圆角 | `6px` / `8px` |
| 边框色 | `rgba(255, 255, 255, 0.07)` |

## 贡献指南

欢迎通过 Issue 和 Pull Request 参与贡献。

### 贡献流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature-name`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/your-feature-name`
5. 发起 Pull Request

### 提交规范

- 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
- 修改页面内容后，验证页面可离线打开、导航滚动正常、移动端布局无溢出
- 内容描述保持真实、平实，不添加未验证或规划中的功能模块
- 涉及样式修改时，确保 CSS 变量使用一致，移动端布局同步适配
- PR 标题简洁明了，描述中附带截图或修改说明

### 发起 Issue

遇到 Bug 或有改进建议时，请发起 Issue 并包含以下信息：

- 浏览器及版本
- 操作系统
- 问题描述与复现步骤
- 预期表现与实际表现
- 相关截图（如有）

## 开源协议

本项目基于 [MIT License](LICENSE) 开源。

---

&copy; 2026 Darren. All rights reserved.
