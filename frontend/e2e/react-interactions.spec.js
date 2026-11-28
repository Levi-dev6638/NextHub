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
  const controlPositions = await candidate.evaluate((element) => {
    const profile = element.querySelector('[data-profile]').getBoundingClientRect();
    const status = element.querySelector('[data-status]').getBoundingClientRect();
    return {
      profileTop: profile.top,
      statusTop: status.top,
      profileWidth: profile.width,
      statusWidth: status.width,
      profileHeight: profile.height,
      statusHeight: status.height,
      gap: status.left - profile.right,
    };
  });
  expect(Math.abs(controlPositions.profileTop - controlPositions.statusTop)).toBeLessThan(4);
  expect(Math.abs(controlPositions.profileWidth - controlPositions.statusWidth)).toBeLessThan(2);
  expect(Math.abs(controlPositions.profileHeight - controlPositions.statusHeight)).toBeLessThan(2);
  expect(controlPositions.gap).toBeGreaterThanOrEqual(12);

  const status = candidate.locator('select[data-status]');
  await status.selectOption('Aprovada');
  await expect(status).toHaveValue('Aprovada');
  await expect(page.locator('.toast')).toHaveText('Status atualizado.');

  await candidate.locator('[data-profile]').click();
  const profileModal = page.locator('#candidate-profile');
  await expect(profileModal).toContainText('E-mail');
  await profileModal.locator('[data-resume]').click();
  await expect(profileModal).toHaveCount(0);

  await expect(page.locator('#candidate-resume')).toContainText('Este candidato ainda não enviou um currículo.');
  await page.locator('#candidate-resume button[aria-label="Fechar"]').click();
  await expect(page.locator('#candidate-resume')).toHaveCount(0);

  await page.locator('.sidebar a[data-go="config"]').click();
  await page.locator('#theme2').click();
  await expect(page.locator('body')).toHaveClass(/dark/);
});

test('repete a entrada ao navegar e mantém o hover dos cards', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    window.pageEntryCount = 0;
    document.addEventListener('animationstart', (event) => {
      if (event.animationName === 'page-enter' && event.target.matches('.page')) {
        window.pageEntryCount += 1;
      }
    });
  });

  await page.locator('.sidebar a[data-go="candidaturas"]').click();
  await expect.poll(() => page.evaluate(() => window.pageEntryCount)).toBe(1);
  await page.locator('.sidebar a[data-go="mural"]').click();
  await expect.poll(() => page.evaluate(() => window.pageEntryCount)).toBe(2);

  const card = page.locator('.op-card').first();
  await expect(card).toBeVisible();
  await page.waitForTimeout(350);
  const topBeforeHover = (await card.boundingBox()).y;
  await card.hover();
  await expect.poll(async () => (await card.boundingBox()).y).toBeLessThan(topBeforeHover);
});

test('centraliza cards únicos e aplica sombra distinta no hover', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator('input[name="q"]').fill('Estágio em Dados e BI');
  await page.getByRole('button', { name: 'Buscar oportunidades' }).click();

  const grid = page.locator('.grid').last();
  const card = grid.locator('.op-card');
  await expect(card).toHaveCount(1);

  const layout = await card.evaluate((element) => {
    const cardBounds = element.getBoundingClientRect();
    const gridBounds = element.parentElement.getBoundingClientRect();
    return {
      cardCenter: cardBounds.left + cardBounds.width / 2,
      gridCenter: gridBounds.left + gridBounds.width / 2,
      cardLeft: cardBounds.left,
      cardRight: cardBounds.right,
      viewportWidth: window.innerWidth,
      baseShadow: getComputedStyle(element).boxShadow,
    };
  });
  expect(Math.abs(layout.cardCenter - layout.gridCenter)).toBeLessThan(2);
  expect(layout.cardLeft).toBeGreaterThanOrEqual(0);
  expect(layout.cardRight).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.baseShadow).not.toBe('none');

  await card.hover();
  await expect.poll(() => card.evaluate((element) => getComputedStyle(element).boxShadow))
    .not.toBe(layout.baseShadow);
});

test('mantém tamanho e alinhamento dos cards com poucos favoritos', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');
  await page.setViewportSize({ width: 1920, height: 1080 });

  const populatedGrid = page.locator('.grid').last();
  const opportunities = populatedGrid.locator('.op-card');
  await expect.poll(() => opportunities.count()).toBeGreaterThan(4);
  const populatedLayout = await opportunities.first().evaluate((element) => {
    const bounds = element.getBoundingClientRect();
    return { left: bounds.left, width: bounds.width };
  });

  await page.locator('.sidebar a[data-go="candidaturas"]').click();
  await page.locator('[data-tab="favorites"]').click();
  const favorites = page.locator('.grid .op-card');
  await expect(favorites).toHaveCount(2);
  const favoriteLayout = await favorites.first().evaluate((element) => {
    const bounds = element.getBoundingClientRect();
    return { left: bounds.left, width: bounds.width };
  });

  expect(Math.abs(favoriteLayout.width - populatedLayout.width)).toBeLessThan(2);
  expect(Math.abs(favoriteLayout.left - populatedLayout.left)).toBeLessThan(2);
});

test('desliza o indicador azul ao trocar de aba', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');
  await page.locator('.sidebar a[data-go="candidaturas"]').click();

  const indicator = page.locator('.tab-indicator');
  const initialPosition = (await indicator.boundingBox()).x;
  const transitionProperty = await indicator.evaluate((element) => (
    getComputedStyle(element).transitionProperty
  ));
  expect(transitionProperty).toContain('left');

  await page.locator('[data-tab="favorites"]').click();
  await expect.poll(async () => (await indicator.boundingBox()).x)
    .toBeGreaterThan(initialPosition + 40);
});

test('mantém o modal de oportunidade centralizado e rolável em tela baixa', async ({ page }) => {
  await login(page, 'ana@nexthub.demo');
  await page.setViewportSize({ width: 1024, height: 360 });

  const opportunity = page.locator('.grid').last()
    .locator('.op-card')
    .filter({ hasText: 'Estágio em Desenvolvimento Front-end' })
    .first();
  await opportunity.getByRole('button', { name: 'Ver' }).click();

  const overlay = page.locator('#modal');
  const modal = overlay.locator('.modal');
  await expect(modal).toBeVisible();
  await expect.poll(() => modal.evaluate((element) => (
    element.getAnimations().every((animation) => animation.playState !== 'running')
  ))).toBe(true);
  const geometry = await modal.evaluate((element) => {
    const modalBounds = element.getBoundingClientRect();
    const overlayBounds = element.parentElement.getBoundingClientRect();
    const backdrop = element.closest('.modal-backdrop');
    const topLeftElement = document.elementFromPoint(10, 10);
    return {
      left: modalBounds.left,
      top: modalBounds.top,
      right: modalBounds.right,
      bottom: modalBounds.bottom,
      width: modalBounds.width,
      height: modalBounds.height,
      scrollHeight: element.scrollHeight,
      clientHeight: element.clientHeight,
      overlayLeft: overlayBounds.left,
      overlayTop: overlayBounds.top,
      overlayWidth: overlayBounds.width,
      overlayHeight: overlayBounds.height,
      overlayCoversSidebar: backdrop.contains(topLeftElement),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  });

  expect(geometry.overlayLeft).toBe(0);
  expect(geometry.overlayTop).toBe(0);
  expect(geometry.overlayWidth).toBe(geometry.viewportWidth);
  expect(geometry.overlayHeight).toBe(geometry.viewportHeight);
  expect(geometry.overlayCoversSidebar).toBe(true);
  expect(Math.abs(geometry.left + geometry.width / 2 - geometry.viewportWidth / 2)).toBeLessThan(2);
  expect(Math.abs(geometry.top + geometry.height / 2 - geometry.viewportHeight / 2)).toBeLessThan(2);
  expect(geometry.right).toBeLessThanOrEqual(geometry.viewportWidth);
  expect(geometry.bottom).toBeLessThanOrEqual(geometry.viewportHeight);
  expect(geometry.clientHeight).toBeLessThanOrEqual(geometry.viewportHeight - 36);
  expect(geometry.scrollHeight).toBeGreaterThan(geometry.clientHeight);
});
