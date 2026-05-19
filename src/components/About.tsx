import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { skillCategories } from '../data/skills';

// 组件用途：展示个人介绍和 Java 后端技能矩阵。
export function About() {
  const experienceGroups = [
    {
      title: '关键经验',
      items: personalInfo.highlights,
    },
    {
      title: '覆盖领域',
      items: personalInfo.domains,
    },
    {
      title: '业务场景',
      items: personalInfo.businessScopes,
    },
    {
      title: 'AI 工具',
      items: personalInfo.aiTooling,
    },
  ];

  return (
    <section className="bg-zinc-950 px-5 py-24 md:px-8" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            About
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">关于我</h2>
          <div className="space-y-4 text-base leading-8 text-zinc-300">
            {personalInfo.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4 pt-3">
            {experienceGroups.map((group) => (
              <div
                className="rounded-lg border border-white/10 bg-dark p-4"
                key={group.title}
              >
                <h3 className="text-sm font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              className="rounded-lg border border-white/10 bg-dark p-5 shadow-lg shadow-black/10"
              initial={{ opacity: 0, y: 24 }}
              key={category.category}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {category.category}
              </h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                {category.description}
              </p>
              <div className="mt-5 space-y-4">
                {category.list.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-zinc-100">
                        {skill.name}
                      </span>
                      <span className="text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        viewport={{ once: true }}
                        whileInView={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
