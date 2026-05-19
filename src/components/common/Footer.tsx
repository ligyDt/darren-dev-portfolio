import { personalInfo } from '../../data/personal';

// 组件用途：展示版权、版本和基础说明。
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark px-5 py-8 text-sm text-zinc-400 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p>个人作品集官网 · V1.0</p>
      </div>
    </footer>
  );
}
