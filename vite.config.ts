import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 构建配置：保持静态站点部署友好的相对基础路径。
export default defineConfig({
  base: './',
  plugins: [react()],
});
