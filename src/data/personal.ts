import avatarUrl from '../assets/images/avatar.svg';
import wechatQrUrl from '../assets/images/wechat-qr.svg';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  intro: string;
  avatar: string;
  wechatQr: string;
  email: string;
  github: string;
  summary: string[];
  highlights: string[];
  domains: string[];
  businessScopes: string[];
  aiTooling: string[];
  socialLinks: SocialLink[];
}

export const personalInfo: PersonalInfo = {
  name: 'Darren',
  title: 'Java 后端开发者 · 复杂业务系统架构与重构',
  intro:
    '拥有丰富的互联网研发经验，擅长从 0 到 100 搭建项目、业务重构、服务拆分、数据迁移和系统保障巡检。',
  avatar: avatarUrl,
  wechatQr: wechatQrUrl,
  email: 'guang_yl@163.com',
  github: 'https://github.com/ligyDt',
  summary: [
    '长期参与互联网业务研发，覆盖项目从 0 到 100、既有业务重构、服务拆分、数据迁移和稳定性保障巡检。',
    '业务经验横跨 P2P、社交、保险、金融支付、电商、OA、教育等领域，能够快速理解业务链路并抽象后端模型。',
    '技术上以 Java、Spring Boot、Spring Cloud 为核心，结合消息队列、缓存、搜索、配置中心和 CI/CD 支撑高可用交付。',
    '持续关注 AI 编码和端侧 AI 工具，日常使用多种 AI IDE、插件和 CLI 提升研发效率。',
  ],
  highlights: [
    '项目从 0 到 100',
    '业务重构',
    '服务拆分',
    '数据迁移',
    '系统保障巡检',
  ],
  domains: ['P2P', '社交', '保险', '金融支付', '电商', 'OA', '教育'],
  businessScopes: [
    '贷后',
    '委外',
    '体育社交',
    '保险经代',
    '海外支付',
    'O2O',
    'Workflow',
    'AI 教育',
    '商品',
    '订单',
    '履约',
  ],
  aiTooling: [
    'CodeBuddy',
    'AI Assistant',
    'Lingma',
    'Trae',
    'Trae SOLO',
    'Cursor',
    'Codex',
    'Claude Code',
    'GitHub Copilot',
    '端侧 AI 工具',
  ],
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/ligyDt',
      icon: 'mdi:github',
    },
  ],
};
