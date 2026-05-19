import { useEffect, useState } from 'react';

export interface ScrollState {
  activeSection: string;
  isScrolled: boolean;
}

export const useScroll = (sectionIds: string[]): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    activeSection: sectionIds[0] ?? 'home',
    isScrolled: false,
  });

  useEffect(() => {
    let animationFrame = 0;

    // 核心逻辑说明：用 requestAnimationFrame 合并滚动计算，降低频繁滚动时的状态更新压力。
    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 24;
      const nextActive =
        sectionIds.find((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) {
            return false;
          }

          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }) ?? sectionIds[0] ?? 'home';

      setScrollState((currentState) => {
        if (
          currentState.isScrolled === nextScrolled &&
          currentState.activeSection === nextActive
        ) {
          return currentState;
        }

        return {
          activeSection: nextActive,
          isScrolled: nextScrolled,
        };
      });
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return scrollState;
};
