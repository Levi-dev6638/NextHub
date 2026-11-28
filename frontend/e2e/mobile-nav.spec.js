import { expect, test } from '@playwright/test';

test('mantém a navegação móvel completa e fixa durante a rolagem', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 500 });
  const applications = Array.from({ length: 10 }, (_, index) => ({
    id: `application-${index}`,
    status: 'Em análise',
    user: {
      name: `Candidato ${index}`,
      email: `candidate-${index}@example.test`,
      profile: { education: 'Sistemas de Informação' },
    },
    opportunity: { title: `Estágio em QA ${index}` },
  }));

  await page.route('**/api/**', route => {
    const path = new URL(route.request().url()).pathname;
    const responses = {
      '/api/me': {
        user: {
          id: 'mobile-nav-company',
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
  await page.locator('.mobile-nav [data-go="candidatos"]').click();
  await expect(page.locator('.list-row[data-application-id]')).toHaveCount(10);
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));

  const navLayout = await page.locator('.mobile-nav').evaluate(nav => {
    const bounds = nav.getBoundingClientRect();
    const linkBounds = [...nav.querySelectorAll('a')].map(link => {
      const range = document.createRange();
      range.selectNodeContents(link);
      return range.getBoundingClientRect();
    });
    return {
      position: getComputedStyle(nav).position,
      top: bounds.top,
      bottom: bounds.bottom,
      height: bounds.height,
      viewportHeight: window.innerHeight,
      labelsFit: linkBounds.every(rect => rect.top >= bounds.top && rect.bottom <= bounds.bottom),
    };
  });

  expect(navLayout.position).toBe('fixed');
  expect(navLayout.height).toBeGreaterThanOrEqual(72);
  expect(navLayout.bottom).toBe(navLayout.viewportHeight);
  expect(navLayout.labelsFit).toBe(true);
});
