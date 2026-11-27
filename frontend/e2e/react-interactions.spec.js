import { expect, test } from '@playwright/test';

async function login(page, email) {
  await page.goto('/');
  await page.locator('#login input[name="email"]').fill(email);
  await page.locator('#login input[name="password"]').fill('demo1234');
  const responsePromise = page.waitForResponse((response) =>
    response.url().endsWith('/api/auth/login'));
  await page.locator('#login .btn-primary').click();
  const response = await responsePromise;
  expect(response.status(), await response.text()).toBe(200);
}

test('estudante alterna favorito e retira candidatura pelo histórico', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');

  const opportunity = page.locator('.op-card').filter({ hasText: 'Estágio em Dados e BI' }).last();
  await opportunity.getByRole('button', { name: 'Favoritar' }).click();
  await expect(opportunity.getByRole('button', { name: 'Remover dos favoritos' })).toBeVisible();

  await page.locator('.sidebar a[data-go="candidaturas"]').click();
  await page.locator('[data-tab="favorites"]').click();
  const savedOpportunity = page.locator('.op-card').filter({ hasText: 'Estágio em Dados e BI' });
  await expect(savedOpportunity).toBeVisible();
  await savedOpportunity.getByRole('button', { name: 'Remover dos favoritos' }).click();
  await expect(savedOpportunity).toHaveCount(0);

  await page.locator('[data-tab="apps"]').click();
  const application = page.locator('.op-card').first();
  await application.getByRole('button', { name: 'Acessar candidatura' }).click();
  page.once('dialog', (dialog) => dialog.accept());
  await page.locator('#modal [data-remove-application]').click();
  await expect(page.locator('.op-card')).toHaveCount(1);
});

test('empresa atualiza candidatura, consulta perfil real e mantém o tema', async ({ page }) => {
  await login(page, 'talentos@nexthub.demo');
  await page.locator('.sidebar a[data-go="candidatos"]').click();

  const candidate = page.locator('.list-row[data-application-id]').first();
  await expect(candidate).toBeVisible();
  const status = candidate.locator('select[data-status]');
  await status.selectOption('Aprovada');
  await expect(status).toHaveValue('Aprovada');
  await expect(page.locator('.toast')).toHaveText('Status atualizado.');

  await candidate.locator('[data-profile]').click();
  await expect(page.locator('#candidate-profile')).toContainText('E-mail');
  await page.locator('#candidate-profile button[aria-label="Fechar"]').click();
  await expect(page.locator('#candidate-profile')).toHaveCount(0);

  await candidate.locator('[data-resume]').click();
  await expect(page.locator('#candidate-resume')).toContainText('Este candidato ainda não enviou um currículo.');
  await page.locator('#candidate-resume button[aria-label="Fechar"]').click();
  await expect(page.locator('#candidate-resume')).toHaveCount(0);

  await page.locator('.sidebar a[data-go="config"]').click();
  await page.locator('#theme2').click();
  await expect(page.locator('body')).toHaveClass(/dark/);
});
