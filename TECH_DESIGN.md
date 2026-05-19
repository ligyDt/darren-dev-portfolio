# TECH_DESIGN 技术设计文档



## 1. 技术栈选型（明确版本，贴合开发实际）

- 核心框架：React 18 + TypeScript 5.0+（强类型校验，提升代码可维护性，贴合企业级开发规范）
- 构建工具：Vite 5.0+（替代Webpack，提升开发热更新速度和打包效率）
- 样式框架：Tailwind CSS 3.0+（快速构建响应式布局，统一样式规范，减少自定义CSS冗余）
- 路由管理：React Router 6.0+（实现多页面跳转，管理页面路由，支持路由守卫<可选>）
- 动画效果：Framer Motion 10.0+（实现流畅的滚动、hover、入场/退场动画，配置简单）
- 辅助工具：         
  - eslint + prettier：规范代码格式，避免语法错误，保持代码一致性
  - react-lazyload：实现图片懒加载，优化页面性能
  - iconify：引入简洁技术类图标（如GitHub图标、邮箱图标），贴合深色主题

## 2. 项目目录结构（规范清晰，可复用性强）

```plain
src/
├── assets/                  # 静态资源目录
│   ├── images/              # 图片资源（头像、项目截图等）
│   └── icons/               # 图标资源
├── components/              # 可复用组件目录（按功能拆分）
│   ├── common/              # 公共组件
│   │   ├── Header.tsx       # 顶部导航栏组件
│   │   ├── Footer.tsx       # 底部Footer组件
│   │   └── Button.tsx       # 通用按钮组件（统一样式）
│   ├── Hero.tsx             # 首页Hero组件（大标题+简介+头像）
│   ├── About.tsx            # 关于我组件（个人介绍+技能列表）
│   ├── Projects.tsx         # 项目展示组件（项目卡片列表）
│   └── Contact.tsx          # 联系方式组件（邮箱、GitHub等链接）
├── data/                    # 静态数据存储目录（无需后端接口，便于修改）
│   ├── projects.ts          # 项目数据（数组格式，包含项目所有信息）
│   ├── skills.ts            # 技能数据（数组格式，按分类存储技能信息）
│   └── personal.ts          # 个人基础信息（头像地址、简介、联系方式等）
├── hooks/                   # 自定义Hooks目录（复用逻辑）
│   ├── useScroll.ts         # 滚动相关自定义Hook（控制导航栏样式、滚动动画）
│   └── useLazyLoad.ts       # 图片懒加载Hook
├── styles/                  # 全局样式目录
│   └── global.css           # 全局样式（Tailwind自定义配置、全局动画等）
├── App.tsx                  # 根组件（组合所有功能组件，配置路由）
├── main.tsx                 # 入口文件（渲染根组件，初始化项目）
├── vite-env.d.ts            # Vite环境声明文件
├── tsconfig.json            # TypeScript配置文件
├── tailwind.config.js       # Tailwind CSS配置文件（自定义主题、颜色等）
└── package.json             # 项目依赖配置文件
```

## 3. 数据管理设计（简洁易维护，贴合静态展示需求）

- 数据存储：所有数据（个人信息、项目数据、技能数据）均存储在TypeScript文件中，使用数组+对象格式存储，无需后端数据库，便于后续添加、修改、维护。
- 数据格式规范（示例）：         
  - projects.ts：数组包含多个项目对象，每个对象包含id、name（项目名称）、imgUrl（项目截图地址）、description（项目描述）、techStack（技术栈数组）、githubUrl（GitHub链接）、demoUrl（在线演示链接，可选）。
  - skills.ts：数组包含多个技能分类对象，每个对象包含category（技能分类，如Java核心、框架）、list（技能列表，包含技能名称、熟练度）。
  - personal.ts：对象包含avatar（头像地址）、title（首页大标题）、intro（个人简介）、contact（联系方式对象，包含email、github、socialLinks）。
- 数据调用：组件中直接导入对应数据文件，通过map等方法渲染数据，无需复杂状态管理（如Redux），简化开发流程。

## 4. 核心模块技术实现

1. **首页Hero模块**：使用Framer Motion实现元素入场动画（标题、简介、头像依次入场）；头像使用圆形裁剪，添加轻微阴影效果，贴合深色主题；简介文字使用渐变色强调核心技术关键词。
2. **关于我模块**：个人介绍使用清晰的段落排版，技能列表使用网格布局（PC端多列、移动端单列），每个技能添加熟练度标识（如进度条、文字标注）；使用Framer Motion实现技能列表hover动画。
3. **项目展示模块**：项目卡片使用flex/grid布局，实现响应式适配；项目截图使用懒加载（react-lazyload），点击截图可查看大图；卡片hover时添加缩放、阴影动画，技术栈使用标签样式展示（背景为强调色渐变，文字为白色）。
4. **联系方式模块**：每个联系方式使用“图标+文字+链接”组合，图标使用iconify引入，链接设置target="_blank"（新窗口打开）；布局使用flex垂直排列，间距均匀，适配移动端。
5. **导航栏模块**：固定在页面顶部，滚动时改变背景透明度（从透明变为半透明）；导航项点击时，使用React Router实现平滑跳转，同时添加active样式（强调色下划线）。

## 5. 样式设计规范

- 深色主题配置：在tailwind.config.js中自定义主题，设置backgroundColor: { 'dark': '#0a0a0a' }，textColor: { 'light': '#ffffff' }，强调色渐变（如gradient-to-r from-blue-500 to-purple-600）。
- 组件样式：所有组件使用Tailwind CSS编写，避免自定义CSS；公共组件（如按钮、导航栏）统一样式，确保页面风格一致。
- 响应式配置：使用Tailwind的响应式前缀（sm、md、lg、xl），针对不同屏幕尺寸调整布局（如PC端项目卡片3列、平板端2列、移动端1列）。

## 6. 性能优化方案

- 图片优化：所有图片（头像、项目截图）进行压缩处理，使用懒加载（react-lazyload），避免首屏加载过多资源。
- 代码优化：组件拆分复用，避免重复代码；使用TypeScript强类型校验，减少运行时错误；打包时使用Vite的tree-shaking功能，精简打包体积。
- 动画优化：Framer Motion动画设置合理的duration和easing，避免过度动画导致页面卡顿；滚动动画使用requestAnimationFrame，提升流畅度。

## 7. 部署方案（简易易操作，适合个人部署）

- 打包构建：使用npm run build命令，Vite生成dist打包目录，包含静态HTML、CSS、JS文件。
- 部署方式（推荐2种，按需选择）：        
  - 免费部署：Gitee Pages / GitHub Pages，将dist目录上传至Gitee/GitHub仓库，开启Pages服务，获取在线访问地址。
  - 服务器部署：将dist目录上传至Linux服务器，使用Nginx配置反向代理，绑定域名（可选），实现外网访问。
- 部署注意事项：打包前修改项目基础路径（vite.config.js中base配置），确保部署后页面正常访问；图片路径使用相对路径，避免路径错误。

## 8. 测试方案

- 功能测试：检查所有组件功能（导航跳转、项目链接、联系方式、动画效果）是否正常。
- 兼容性测试：在不同浏览器（Chrome、Edge、Firefox）和不同设备（PC、手机、平板）上测试页面适配情况。
- 性能测试：检查页面加载速度、图片懒加载效果，确保无卡顿、无报错。