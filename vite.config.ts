import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  if (command === 'serve' && !env.VITE_GROUP_ID?.trim()) {
    console.warn('\nAviso: Preencha VITE_GROUP_ID no seu .env, confirme com o Tiago o valor.\n');
  }
  return { plugins: [react()], test: { include: ['tests/**/*.test.{ts,tsx}'] } };
});
