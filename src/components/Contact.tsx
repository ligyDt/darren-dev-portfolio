import { Icon } from '@iconify/react';
import { personalInfo } from '../data/personal';
import { Button } from './common/Button';

// 组件用途：提供邮箱、开源主页和微信二维码等可点击联系方式。
export function Contact() {
  const contactLinks = [
    {
      id: 'email',
      label: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: 'mdi:email-outline',
      title: '邮箱',
    },
    {
      id: 'github',
      label: personalInfo.github.replace('https://', ''),
      href: personalInfo.github,
      icon: 'mdi:github',
      title: 'GitHub',
    },
  ];

  const handleOpenContact = (href: string) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }

    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-zinc-950 px-5 py-24 md:px-8" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            联系方式
          </h2>
          <p className="text-base leading-8 text-zinc-300">
            欢迎围绕 Java 后端、微服务实践、数据库优化和招聘机会进行交流。
          </p>
          <Button
            href={`mailto:${personalInfo.email}`}
            rel="noreferrer"
            target="_blank"
          >
            <Icon icon="mdi:send-outline" width={20} />
            发送邮件
          </Button>
        </div>

        <div className="grid max-w-3xl gap-4 xl:grid-cols-[minmax(280px,360px)_minmax(220px,280px)] xl:items-start">
          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <button
                className="flex min-h-24 items-center gap-4 rounded-lg border border-white/10 bg-dark p-4 text-left transition hover:border-blue-400/60 hover:bg-white/[0.06]"
                key={link.id}
                onClick={() => handleOpenContact(link.href)}
                type="button"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Icon icon={link.icon} width={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-zinc-400">
                    {link.title}
                  </span>
                  <span className="mt-1 block truncate text-sm font-semibold text-white sm:text-base">
                    {link.label}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-dark p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Icon icon="mdi:wechat" width={22} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">微信沟通</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  企业招聘需求可扫码添加
                </p>
              </div>
            </div>
            <img
              alt="Darren 微信二维码"
              className="mx-auto aspect-square w-full max-w-64 rounded-lg bg-white p-3"
              loading="lazy"
              src={personalInfo.wechatQr}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
