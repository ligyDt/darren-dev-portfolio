import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'projects', label: '项目展示' },
  { id: 'contact', label: '联系方式' },
];

// 组件用途：固定顶部导航栏，支持滚动透明度变化和移动端菜单。
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const { activeSection, isScrolled } = useScroll(sectionIds);

  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-white/10 bg-dark/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-transparent bg-dark/0'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <button
          className="text-left text-base font-bold tracking-wide text-white"
          onClick={() => handleNavigate('home')}
          type="button"
        >
          Darren
          <span className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-300 hover:bg-white/10 hover:text-white'
              }`}
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              type="button"
            >
              <span
                className={
                  activeSection === item.id
                    ? 'border-b-2 border-blue-400 pb-1'
                    : 'pb-1'
                }
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <button
          aria-label={isMenuOpen ? '关闭导航菜单' : '打开导航菜单'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          type="button"
        >
          <Icon icon={isMenuOpen ? 'mdi:close' : 'mdi:menu'} width={24} />
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <button
                className={`rounded-lg px-4 py-3 text-left text-base font-medium transition ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-zinc-200 hover:bg-white/10'
                }`}
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
