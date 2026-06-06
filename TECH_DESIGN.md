# TECH_DESIGN 技术设计文档

## 1. 技术选型

- 页面结构：HTML5
- 样式：内联 CSS
- 交互：原生 JavaScript
- 图标：内联 SVG
- 静态资源：本地文件，位于 `assets/images/`
- 运行方式：浏览器直接打开 `index.html`

## 2. 文件结构

```text
.
├── index.html
├── assets/
│   └── images/
│       ├── wx.png
│       └── 个人作品集.png
├── README.md
├── PRD.md
├── TECH_DESIGN.md
├── AGENTS.md
└── LICENSE
```

## 3. 页面结构

`index.html` 包含完整页面结构、样式和交互逻辑：

- `<style>`：维护全局变量、布局、响应式、项目卡片、联系区等样式。
- `<body>`：包含导航、首页、技术 ticker、关于我、技术栈、项目展示、联系方式和 Footer。
- `<script>`：维护平滑滚动、移动端菜单和按钮打开外部入口。

主要 section：

- `#home`：首页 Hero
- `#about`：关于我
- `#stack`：技术栈
- `#projects`：项目展示
- `#contact`：联系方式

## 4. 样式设计

- 颜色变量统一放在 `:root`。
- 背景使用深色和固定网格纹理。
- 强调色使用绿色：`#00e5a0`。
- 页面主体宽度控制在 `1100px` 内。
- 标签、按钮、项目卡片统一使用小圆角、细边框和低饱和背景。
- 移动端通过 media query 调整为单列布局。

## 5. 交互设计

- 页面内导航使用 `data-scroll` 属性定位目标 section。
- 外部入口使用 `data-open` 属性，由原生 JavaScript 触发。
- `mailto:` 入口使用 `window.location.href` 唤起邮件客户端。
- 外部 URL 使用 `window.open(url, "_blank", "noopener,noreferrer")` 新窗口打开。
- 移动端导航使用 `.mobile-menu.open` 控制展开和收起。

## 6. 图标设计

- 项目卡片图标全部写在 `index.html` 中。
- 图标使用 SVG `viewBox="0 0 24 24"` 规格。
- 图标颜色继承 `.project-icon` 的 `currentColor`。

当前项目图标：

- 采集管理平台：采集汇聚图标
- IDE 初始化模板：模板布局图标
- 酒店民宿代运营官网：网站/地球图标
- 代运营网站：链接图标

## 7. 静态资源

- 微信二维码：`assets/images/wx.png`
- 页面预览图：`assets/images/个人作品集.png`
- 酒店数据采集平台截图：`assets/images/ctrip/`

二维码替换方式：覆盖 `assets/images/wx.png`。

## 8. 维护方式

- 修改页面文案、项目、技术栈：编辑 `index.html`。
- 新增图片：放入 `assets/images/`，使用相对路径引用。
- 新增外部入口：添加带 `data-open` 的按钮。
- 新增页面跳转：添加带 `data-scroll` 的按钮，并确保目标 section 存在。

## 9. 验证方式

手工验证：

- 双击 `index.html` 可打开页面。
- 导航可滚动到对应区域。
- 邮箱、GitHub、项目访问按钮可点击。
- 微信二维码可显示。
- 移动端宽度下导航和项目卡片布局正常。
