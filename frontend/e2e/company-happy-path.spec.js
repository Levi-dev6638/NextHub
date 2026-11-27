import { expect, test } from '@playwright/test';

test('empresa entra, publica oportunidade e a encontra na própria lista', async ({ page }) => {
  const title = `Oportunidade de teste ${Date.now()}`;

  await page.goto('/');
  await page.locator('#login input[name="email"]').fill('talentos@nexthub.demo');
  await page.locator('#login input[name="password"]').fill('demo1234');
  const loginResponsePromise = page.waitForResponse(response =>
    response.url().endsWith('/api/auth/login'));
  await page.locator('#login .btn-primary').click();
  const loginResponse = await loginResponsePromise;
  expect(loginResponse.status(), await loginResponse.text()).toBe(200);

  await expect(page.locator('.page h1')).toContainText('Bem-vindo');
  await page.locator('.sidebar a[data-go="publicar"]').click();
  await page.locator('#pub select[name="type"]').selectOption({ label: 'Estágio' });
  await page.locator('#pub input[name="title"]').fill(title);
  await page.locator('#pub input[name="company"]').fill('Empresa de Teste');
  await page.locator('#pub textarea[name="description"]').fill('Descrição da oportunidade de teste.');
  await page.locator('#pub .btn-primary').click();

  await expect(page.locator('.toast')).toHaveText('Oportunidade publicada.');
  await expect(page.locator('.page h1')).toHaveText('Minhas oportunidades');
  await expect(page.locator('.list-row').filter({ hasText: title })).toBeVisible();
});
