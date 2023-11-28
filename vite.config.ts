import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { PluginOption } from 'vite';
import * as fs from 'fs';

function integratedDevServer(mode: string): PluginOption {
  return {
    name: 'integrate-dev-server',
    enforce: 'post',
    apply: 'serve',
    buildStart() {
      const pathFile = '../backend-faq//public/hot';
      const hostDevServer = 'http://localhost:4000';
      if (mode !== 'production') {
        fs.writeFileSync(pathFile, hostDevServer);
      } else {
        if (fs.existsSync(pathFile)) {
          fs.unlinkSync(pathFile);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), integratedDevServer('dev')],
  server: { port: 4000, origin: 'http://localhost:4000' },
});
