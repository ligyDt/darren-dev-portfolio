# Darren Dev Portfolio

Darren 的个人作品集网站，用于展示 Java 后端研发经验、技术栈、项目成果和招聘联系方式。项目基于 React + TypeScript + Tailwind CSS 构建，采用深色主题和响应式布局，适配 PC 与移动端。

## 功能特性

- 首页 Hero：展示个人定位、核心能力和快速联系入口。
- 关于我：展示互联网研发经验、业务领域、业务场景、AI 工具使用情况和技能矩阵。
- 项目展示：以卡片形式展示项目截图、项目描述、技术栈和源码/演示入口。
- 联系方式：展示邮箱、GitHub 和微信二维码，方便企业招聘沟通。
- 交互体验：导航平滑滚动、移动端菜单、Framer Motion 动画、项目截图大图预览。
- 隐私体验：页面可点击入口不使用可悬停展示 URL 的 `<a href>` 链接，避免鼠标浮上去时展示浮动链接。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Lazyload
- Iconify
- ESLint + Prettier

## 快速开始

```bash
npm install
npm run dev
```

开发服务默认运行在：

```text
http://127.0.0.1:5173/
```

## 常用命令

```bash
npm run dev      # 启动本地开发服务
npm run lint     # 运行 ESLint 检查
npm run build    # 类型检查并构建 dist
npm run preview  # 预览构建产物
npm run format   # 使用 Prettier 格式化
```

## 目录结构

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── common/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   └── Projects.tsx
├── data/
│   ├── personal.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useLazyLoad.ts
│   └── useScroll.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

## 内容维护

- 个人介绍、邮箱、GitHub、微信二维码路径：`src/data/personal.ts`
- 项目信息、技术栈、源码/演示入口：`src/data/projects.ts`
- 技能分类和熟练度：`src/data/skills.ts`
- 微信二维码占位图：`src/assets/images/wechat-qr.svg`

替换真实微信二维码时，可以直接替换 `src/assets/images/wechat-qr.svg`，或新增图片后在 `personal.ts` 中更新 import。

## 构建部署

```bash
npm run build
```

构建产物会生成在 `dist/` 目录，可部署到 GitHub Pages、Gitee Pages、Vercel、Netlify 或 Nginx 静态站点。

当前 `vite.config.ts` 使用 `base: './'`，适合部署到子路径或静态目录。如部署到固定域名根路径，也可以按需改为 `/`。

## 质量检查

提交或部署前建议执行：

```bash
npm run lint
npm run build
```

当前项目要求 TypeScript 类型检查、ESLint 检查和 Vite 构建均通过后再发布。
