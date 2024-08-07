const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

//console.log('BASE_URL:', process.env.BASE_URL); // Verifica que las variables de entorno se están cargando

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 5,    //esta seccion es para aumentar la cantidad de reintentos de re ejecucion de nuestros steps test, tarda un segundo entre intento e intento
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    headless: true,   //esto si esta en false se ejecutan los naveegadores y si es true se ejecuta en segundo plano o background
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
