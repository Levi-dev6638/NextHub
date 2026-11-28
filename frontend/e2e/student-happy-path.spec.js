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
  await page.setViewportSize({ width: 360, height: 800 });
  const filterWidths = await page.locator('.filters > *').evaluateAll(elements =>
    elements.map(element => element.getBoundingClientRect().width));
  expect(filterWidths).toHaveLength(4);
  expect(Math.min(...filterWidths)).toBeGreaterThanOrEqual(280);
  await page.setViewportSize({ width: 1280, height: 800 });

  await page.locator('.sidebar a[data-go="perfil"]').click();

  await page.locator('#profile select[name="interests"]').selectOption('Design');
  await page.locator('#profile .btn-primary').click();
  await expect(page.locator('.toast').filter({ hasText: 'Perfil atualizado.' })).toBeVisible();

  await page.locator('#resume input[name="resume"]').setInputFiles({
    name: 'curriculo.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4\n%%EOF'),
  });
  await page.locator('#resume .btn-primary').click();
  await expect(page.locator('.toast').filter({ hasText: 'Currículo enviado.' })).toBeVisible();

  await page.locator('.sidebar a[data-go="candidaturas"]').click();
  await page.locator('[data-tab="favorites"]').click();
  const favorite = page.locator('.op-card').filter({
    hasText: 'JavaScript do zero ao primeiro projeto',
  });
  await favorite.getByRole('button', { name: 'Candidatar-se' }).click();
  await expect(page.locator('.toast').filter({ hasText: 'Candidatura registrada!' })).toBeVisible();
  await expect(favorite).toContainText('Em análise');
  await expect(favorite.getByRole('button', { name: 'Você já se candidatou' })).toBeDisabled();
  await expect(favorite.getByRole('button', { name: 'Acessar candidatura' })).toBeVisible();

  await page.locator('.sidebar nav a[data-go="mural"]').click();
  await expect(page.locator('.grid').first().locator('.op-card').filter({
    hasText: 'Combina com Design',
  }).first()).toBeVisible();
  await page.locator('input[name="q"]').fill('JavaScript do zero ao primeiro projeto');
  await page.getByRole('button', { name: 'Buscar oportunidades' }).click();
  const appliedOpportunity = page.locator('.op-card').filter({
    hasText: 'JavaScript do zero ao primeiro projeto',
  }).last();
  await appliedOpportunity.getByRole('button', { name: 'Ver', exact: true }).click();
  await expect(page.locator('#modal #apply')).toBeDisabled();
  await expect(page.locator('#modal #apply')).toHaveText('Você já se candidatou');
  await page.locator('#modal #close').click();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();

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
