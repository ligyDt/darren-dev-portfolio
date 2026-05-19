import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { personalInfo } from '../data/personal';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { Button } from './common/Button';

const heroStats = [
  { label: '核心方向', value: '复杂业务后端' },
  { label: '业务经验', value: '金融 / 电商 / 教育' },
  { label: '工程能力', value: '重构 / 拆分 / 迁移' },
];

// 组件用途：首页首屏展示个人定位、简介、行动按钮和头像。
export function Hero() {
  const lazyLoadOptions = useLazyLoad(320);

  const handleScrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-24"
      id="home"
    >
      <div className="space-y-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Darren Dev Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {personalInfo.title.split('·')[0].trim()}
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.title.split('·')[1]?.trim()}
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            {personalInfo.intro}
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.18, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button onClick={handleScrollToProjects}>
            <Icon icon="mdi:briefcase-outline" width={20} />
            查看项目
          </Button>
          <Button
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <Icon icon="mdi:email-outline" width={20} />
            联系我
          </Button>
        </motion.div>

        <motion.dl
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.32, duration: 0.8, ease: 'easeOut' }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {heroStats.map((item) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              key={item.label}
            >
              <dt className="text-xs text-zinc-400">{item.label}</dt>
              <dd className="mt-2 text-sm font-semibold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.94 }}
        transition={{ delay: 0.24, duration: 0.8, ease: 'easeOut' }}
        className="mx-auto w-full max-w-sm"
      >
        <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-500/10">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <LazyLoad {...lazyLoadOptions} once>
            <img
              alt={`${personalInfo.name} 头像`}
              className="mx-auto aspect-square w-64 rounded-full border border-white/10 bg-zinc-900 object-cover shadow-xl shadow-purple-500/20"
              loading="lazy"
              src={personalInfo.avatar}
            />
          </LazyLoad>
          <div className="mt-6 space-y-2 text-center">
            <p className="text-xl font-bold text-white">{personalInfo.name}</p>
            <p className="text-sm leading-6 text-zinc-400">
              用业务理解、工程经验和 AI 工具交付可靠后端系统
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
