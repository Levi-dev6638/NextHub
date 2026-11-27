import { expect, test } from '@playwright/test';

test('estudante entra, envia currículo e se candidata a uma oportunidade', async ({ page }) => {
  await page.goto('/');
  await page.locator('#login input[name="email"]').fill('ana@nexthub.demo');
  await page.locator('#login input[name="password"]').fill('demo1234');
  const loginResponsePromise = page.waitForResponse(response =>
    response.url().endsWith('/api/auth/login'));
  await page.locator('#login .btn-primary').click();
  const loginResponse = await loginResponsePromise;
  expect(loginResponse.status(), await loginResponse.text()).toBe(200);

  await expect(page.locator('.page h1')).toContainText('Olá, Ana');
  await page.locator('.sidebar a[data-go="perfil"]').click();

  await page.locator('#resume input[name="resume"]').setInputFiles({
    name: 'curriculo.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4\n%%EOF'),
  });
  await page.locator('#resume .btn-primary').click();
  await expect(page.locator('.toast')).toHaveText('Currículo enviado.');

  await page.locator('.sidebar nav a[data-go="mural"]').click();
  const opportunity = page.locator('.op-card').filter({
    hasText: 'Jovem Aprendiz — Operações Digitais',
  });
  await opportunity.getByRole('button', { name: 'Ver' }).click();
  await page.locator('#modal').getByRole('button', { name: 'Candidatar-se' }).click();
  await expect(page.locator('.toast').filter({ hasText: 'Candidatura registrada!' })).toBeVisible();
  await page.locator('#modal #close').click();

  await page.locator('.sidebar a[data-go="candidaturas"]').click();
  const application = page.locator('.op-card').filter({
    hasText: 'Jovem Aprendiz — Operações Digitais',
  });
  await expect(application).toBeVisible();
  await expect(application).toContainText('Em análise');
});
