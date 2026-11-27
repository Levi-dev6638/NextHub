import { expect, test } from '@playwright/test';

async function openCompanyApp(page, applications) {
  await page.route('**/api/**', route => {
    const path = new URL(route.request().url()).pathname;
    const responses = {
      '/api/me': {
        user: {
          id: 'company-notification-test',
          name: 'Empresa Teste',
          email: 'empresa@example.test',
          role: 'company',
          profile: {},
        },
      },
      '/api/opportunities': [],
      '/api/applications': applications,
    };

    return route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(responses[path] ?? {}),
    });
  });
  await page.goto('/');
  await expect(page.locator('#bell')).toBeVisible();
}

test('marca notificação como lida e remove a bolinha', async ({ page }) => {
  await openCompanyApp(page, [{
    id: 'application-notification-test',
    user: { name: 'Candidato Teste', email: 'candidato@example.test' },
    opportunity: { title: 'Estágio de Teste' },
    status: 'Enviada',
  }]);

  await expect(page.locator('#bell .notification-dot')).toHaveCount(1);
  await page.locator('#bell').click();
  await expect(page.locator('#notifications')).toContainText('Nova candidatura recebida');
  await page.locator('#notifications [data-notification-view]').click();
  await expect(page.locator('#notifications')).toHaveCount(0);
  await expect(page.locator('#bell .notification-dot')).toHaveCount(0);

  await page.locator('#bell').click();
  await expect(page.locator('#notifications')).toContainText('Você não tem notificações no momento.');
  await expect(page.locator('#notifications [data-notification-view]')).toHaveCount(0);

  await page.reload();
  await expect(page.locator('#bell .notification-dot')).toHaveCount(0);
});

test('não mostra a bolinha quando não há notificações', async ({ page }) => {
  await openCompanyApp(page, []);

  await expect(page.locator('#bell .notification-dot')).toHaveCount(0);
  await page.locator('#bell').click();
  await expect(page.locator('#notifications')).toContainText('Você não tem notificações no momento.');
});

test('mantém o link de currículo longo dentro do painel do perfil', async ({ page }) => {
  await page.route('**/api/**', route => {
    const path = new URL(route.request().url()).pathname;
    const responses = {
      '/api/me': {
        user: {
          id: 'student-profile-test',
          name: 'Lucas Martins',
          email: 'lucas@example.test',
          role: 'student',
          profile: {
            resume: '/api/resume/test',
            resumeName: 'Currículo_2026.docx (1).pdf',
          },
        },
      },
      '/api/opportunities': [],
      '/api/favorites': [],
      '/api/applications': [],
    };

    return route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(responses[path] ?? {}),
    });
  });
  await page.goto('/');
  await page.locator('.sidebar [data-go="perfil"]').click();

  const resumeLink = page.locator('.layout > .panel').nth(1).locator('a.btn');
  await expect(resumeLink).toBeVisible();
  const overflowsPanel = await resumeLink.evaluate(element => {
    const panel = element.parentElement;
    return element.scrollWidth > element.clientWidth ||
      element.getBoundingClientRect().right > panel.getBoundingClientRect().right + 1;
  });
  expect(overflowsPanel).toBe(false);
});
