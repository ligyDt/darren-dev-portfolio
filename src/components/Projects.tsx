import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { projects, type Project } from '../data/projects';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { Button } from './common/Button';

// 组件用途：展示项目卡片、技术栈、源码链接和截图大图预览。
export function Projects() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const lazyLoadOptions = useLazyLoad(260);

  return (
    <section className="bg-dark px-5 py-24 md:px-8" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            项目展示
          </h2>
          <p className="text-base leading-8 text-zinc-300">
            聚焦 Java 后端常见业务场景，覆盖订单、监控、认证等核心服务能力。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-lg shadow-black/10"
              key={project.id}
              transition={{ duration: 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 24px 80px rgba(59, 130, 246, 0.18)',
              }}
            >
              <button
                aria-label={`查看 ${project.name} 项目截图大图`}
                className="block w-full bg-zinc-900 text-left"
                onClick={() => setPreviewProject(project)}
                type="button"
              >
                <LazyLoad {...lazyLoadOptions} once>
                  <img
                    alt={`${project.name} 项目截图`}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                    src={project.imageUrl}
                  />
                </LazyLoad>
              </button>

              <div className="space-y-5 p-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    className="min-h-10 px-3 py-2"
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    <Icon icon="mdi:github" width={18} />
                    GitHub
                  </Button>
                  {project.giteeUrl ? (
                    <Button
                      className="min-h-10 px-3 py-2"
                      href={project.giteeUrl}
                      rel="noreferrer"
                      target="_blank"
                      variant="ghost"
                    >
                      <Icon icon="simple-icons:gitee" width={18} />
                      Gitee
                    </Button>
                  ) : null}
                  {project.demoUrl ? (
                    <Button
                      className="min-h-10 px-3 py-2"
                      href={project.demoUrl}
                      rel="noreferrer"
                      target="_blank"
                      variant="ghost"
                    >
                      <Icon icon="mdi:open-in-new" width={18} />
                      在线演示
                    </Button>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {previewProject ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
        >
          <div className="w-full max-w-5xl rounded-lg border border-white/10 bg-zinc-950 p-4 shadow-2xl shadow-black">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-white md:text-lg">
                {previewProject.name}
              </h3>
              <button
                aria-label="关闭项目截图预览"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/10 hover:text-white"
                onClick={() => setPreviewProject(null)}
                type="button"
              >
                <Icon icon="mdi:close" width={24} />
              </button>
            </div>
            <img
              alt={`${previewProject.name} 项目大图`}
              className="max-h-[76vh] w-full rounded-lg object-contain"
              loading="lazy"
              src={previewProject.imageUrl}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
