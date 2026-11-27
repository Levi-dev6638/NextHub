import { expect, test } from '@playwright/test';

test('estudante cria conta, sai e entra novamente', async ({ page }) => {
  const email = `cadastro-${Date.now()}@nexthub.test`;

  await page.goto('/');
  await page.locator('#login button#register').click();
  await page.locator('#login select[name="role"]').selectOption('student');
  await page.locator('#login input[name="name"]').fill('Novo Estudante');
  await page.locator('#login input[name="email"]').fill(email);
  await page.locator('#login input[name="password"]').fill('senha-teste-123');
  const registrationResponsePromise = page.waitForResponse(response =>
    response.url().endsWith('/api/auth/register'));
  await page.locator('#login .btn-primary').click();
  const registrationResponse = await registrationResponsePromise;
  expect(registrationResponse.status(), await registrationResponse.text()).toBe(201);
  await expect(page.locator('.page h1')).toContainText('Olá, Novo');

  await page.locator('.sidebar a[data-go="config"]').click();
  await page.locator('#logout').click();
  await expect(page.locator('#login')).toBeVisible();
  await page.locator('#login input[name="email"]').fill(email);
  await page.locator('#login input[name="password"]').fill('senha-teste-123');
  const loginResponsePromise = page.waitForResponse(response =>
    response.url().endsWith('/api/auth/login'));
  await page.locator('#login .btn-primary').click();
  const loginResponse = await loginResponsePromise;
  expect(loginResponse.status(), await loginResponse.text()).toBe(200);
  await expect(page.locator('.page h1')).toContainText('Olá, Novo');
});
