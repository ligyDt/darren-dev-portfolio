export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  description: string;
  list: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Java 核心',
    description: '面向对象、集合、并发、JVM 调优与常见性能排查。',
    list: [
      { name: 'Java 8+', level: 92 },
      { name: 'JVM', level: 82 },
      { name: '并发编程', level: 84 },
    ],
  },
  {
    category: '后端框架',
    description: '围绕 Spring 生态构建可维护、可扩展的业务服务。',
    list: [
      { name: 'Spring Boot', level: 94 },
      { name: 'Spring Cloud', level: 86 },
      { name: 'MyBatis', level: 88 },
      { name: 'Dubbo', level: 82 },
    ],
  },
  {
    category: '中间件',
    description: '缓存、消息队列、限流与异步任务的业务落地。',
    list: [
      { name: 'Redis', level: 88 },
      { name: 'RocketMQ', level: 84 },
      { name: 'RabbitMQ', level: 80 },
      { name: 'Elasticsearch', level: 76 },
    ],
  },
  {
    category: '数据存储',
    description: '表结构设计、索引优化、文档存储和读写链路稳定性。',
    list: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 82 },
      { name: 'MyBatis', level: 88 },
      { name: 'SQL 优化', level: 86 },
    ],
  },
  {
    category: '微服务治理',
    description: '服务注册、配置管理、任务调度和发布链路治理。',
    list: [
      { name: 'Nacos', level: 84 },
      { name: 'Apollo', level: 80 },
      { name: 'XXL-JOB', level: 78 },
      { name: 'CI/CD', level: 82 },
    ],
  },
  {
    category: '数据与 AI',
    description: '搜索、流式计算、对象存储与大模型业务接入实践。',
    list: [
      { name: 'Flink', level: 72 },
      { name: 'OSS', level: 82 },
      { name: 'Ali LLM', level: 76 },
      { name: 'AI 编码工具', level: 88 },
    ],
  },
];
