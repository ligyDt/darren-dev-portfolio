import authServiceImage from '../assets/images/project-auth-service.svg';
import monitoringImage from '../assets/images/project-monitoring.svg';
import orderPlatformImage from '../assets/images/project-order-platform.svg';

export interface Project {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  giteeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'order-platform',
    name: '分布式订单管理平台',
    imageUrl: orderPlatformImage,
    description:
      '面向电商业务的订单服务示例，覆盖下单、库存扣减、支付状态同步与异步补偿流程。',
    techStack: ['Spring Boot', 'MyBatis', 'Redis', 'RabbitMQ', 'MySQL'],
    githubUrl: 'https://github.com/ligyDt/order-platform',
    giteeUrl: 'https://gitee.com/darren/order-platform',
  },
  {
    id: 'monitoring-center',
    name: '服务监控与告警中心',
    imageUrl: monitoringImage,
    description:
      '聚合接口耗时、错误率与实例状态，帮助快速定位后端服务运行风险。',
    techStack: ['Spring Cloud', 'Prometheus', 'Grafana', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/ligyDt/monitoring-center',
    demoUrl: 'https://example.com/monitoring-center',
  },
  {
    id: 'auth-service',
    name: '统一认证授权服务',
    imageUrl: authServiceImage,
    description:
      '提供登录、权限校验、Token 刷新和接口级鉴权能力，适合作为多系统统一入口。',
    techStack: ['Spring Security', 'JWT', 'Redis', 'MySQL', 'OpenAPI'],
    githubUrl: 'https://github.com/ligyDt/auth-service',
    giteeUrl: 'https://gitee.com/darren/auth-service',
  },
];
