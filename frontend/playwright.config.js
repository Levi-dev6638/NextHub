import { defineConfig } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const frontendDir = path.dirname(fileURLToPath(import.meta.url));
const backendDir = path.resolve(frontendDir, '../Back-end');
const backendPort = 18080;
const frontendPort = 15173;
const wrapperCommand = process.platform === 'win32'
  ? '.\\mvnw.cmd spring-boot:run'
  : 'bash ./mvnw spring-boot:run';
const testRunId = `${process.pid}-${Date.now()}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${frontendPort}`,
    headless: true,
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      command: wrapperCommand,
      cwd: backendDir,
      url: `http://localhost:${backendPort}/api/opportunities`,
      timeout: 120_000,
      reuseExistingServer: false,
      env: {
        NEXTHUB_DB_PATH: `target/e2e-${testRunId}.sqlite`,
        NEXTHUB_UPLOAD_DIR: `target/e2e-uploads-${testRunId}`,
        NEXTHUB_CORS_ALLOWED_ORIGIN: `http://localhost:${frontendPort}`,
        SERVER_PORT: String(backendPort),
      },
    },
    {
      command: `npm run dev -- --host localhost --port ${frontendPort} --strictPort`,
      cwd: frontendDir,
      url: `http://localhost:${frontendPort}`,
      timeout: 60_000,
      reuseExistingServer: false,
      env: {
        VITE_API_URL: `http://localhost:${backendPort}/api`,
      },
    },
  ],
});
