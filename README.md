# Darren Dev Portfolio

Darren 的个人作品集网站，用于展示 Java 后端研发经验、技术栈、个人项目和联系方式。

当前项目为纯静态实现，页面、样式和交互集中在 `index.html`，静态资源放在 `assets/images/`。双击 `index.html` 即可查看。

## 文件结构

```text
.
├── index.html
├── assets/
│   └── images/
│       ├── wx.png
│       └── 个人作品集.png
├── AGENTS.md
├── PRD.md
├── TECH_DESIGN.md
├── LICENSE
└── README.md
```

## 使用方式

直接打开：

```text
index.html
```

页面中的样式、布局、交互脚本都已内联在 `index.html` 中。微信二维码从本地文件读取：

```text
assets/images/wx.png
```

## 内容维护

- 修改页面内容：编辑 `index.html`
- 替换微信二维码：替换 `assets/images/wx.png`
- 替换预览截图：替换 `assets/images/个人作品集.png`

页面入口使用按钮和原生 JavaScript 打开链接，鼠标悬浮时页面保持干净。
