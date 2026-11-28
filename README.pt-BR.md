# NextHub — Mural de Oportunidades

[English](README.md) · **Português (Brasil)**

Eu criei o NextHub para reunir estágios, cursos, trabalhos freelancer e eventos em um mural pesquisável e personalizado para estudantes.

## Problema e solução

Percebi que estudantes encontram oportunidades espalhadas por redes sociais, grupos de conversa e murais físicos. Por isso, centralizei os anúncios no NextHub para ajudar cada estudante a encontrar opções relevantes, manter currículo e interesses no perfil, salvar oportunidades e acompanhar candidaturas. Também incluí um fluxo para empresas publicarem anúncios e gerenciarem candidatos.

## Funcionalidades do MVP

- Implementei cadastro, login e logout para estudantes e empresas.
- Criei o perfil do estudante com cursos, interesses, formação, formato desejado e disponibilidade.
- Adicionei upload de currículo PDF (máximo de 5 MB) e controle de acesso para o candidato e a empresa correspondente.
- Implementei listagem, busca textual e filtros por tipo, formato, assunto e área.
- Incluí detalhes de oportunidades, recomendações explicáveis, favoritos e candidaturas internas ou externas.
- Permiti que empresas criem, editem e encerrem oportunidades, analisem candidatos e atualizem o status das candidaturas. Coloquei o acesso ao currículo dentro do perfil do candidato e deixei a atualização de status junto à ação de perfil. Estudantes também podem retirar as próprias candidaturas.
- Configurei notificações derivadas das candidaturas para serem marcadas como lidas ao serem abertas; a bolinha aparece somente enquanto houver itens não lidos neste navegador.
- Desenvolvi uma interface responsiva com tema claro/escuro, navegação por perfil e barra mobile fixa que respeita a área segura do dispositivo. Mantive as colunas da grade de favoritos mesmo com poucos itens, animei o indicador das abas e centralizei os detalhes das oportunidades em um modal com rolagem interna.
- Preparei dados locais fictícios para a demonstração: 20 oportunidades, 10 usuários e 14 candidaturas.

No fluxo de candidatura interna, exijo um currículo. Para anúncios externos, direciono o estudante ao endereço de inscrição publicado. Calculo as recomendações de forma determinística usando interesses, formação e formato desejado; não chamo serviços externos de IA.

## Tecnologias

- **Front-end:** escolhi React 18, Vite 6, JavaScript e CSS.
- **Back-end:** escolhi Java 25, Spring Boot 3.5, Spring Data JPA, Hibernate 6 e Bean Validation.
- **Persistência:** uso SQLite em `Back-end/data/nexthub.sqlite` e guardo os currículos enviados em `Back-end/uploads/`.
- **Testes e qualidade:** uso JUnit 5, Spring Boot Test, Maven, ESLint e GitHub Actions.

## Estrutura do repositório

```text
.
├── Back-end/
│   ├── src/main/java/br/com/nexthub/
│   ├── src/main/resources/application.properties
│   ├── data/nexthub.sqlite
│   ├── uploads/
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── eslint.config.js
├── .github/workflows/ci.yml
├── .env.example
├── package.json              # Scripts da raiz
└── README.pt-BR.md
```

Organizei `frontend/` e `Back-end/` como a única aplicação ativa. Importo os dados fictícios de `backend/data/seed.json` somente na primeira inicialização e mantenho os dados de execução no SQLite. Antes de qualquer manutenção manual, faço cópias de segurança de `Back-end/data/nexthub.sqlite`.

## Pré-requisitos e instalação

- Java 25 ou superior.
- Node.js 22.13 ou superior e npm.
- Maven Wrapper incluído em `Back-end/`.

Para preparar o projeto, executo estes comandos na raiz do repositório:

```sh
npm ci
npm --prefix frontend ci
copy .env.example .env
```

No macOS/Linux, use `cp .env.example .env` no lugar de `copy`. Esse arquivo configura a URL usada pelo proxy do Vite; o back-end usa os caminhos padrão definidos em `application.properties`, sem exigir um arquivo `.env`.

## Executar localmente

Para executar o NextHub, abro dois terminais na raiz do repositório.

Terminal 1 — API (PowerShell):

```sh
cd Back-end
.\mvnw.cmd spring-boot:run
```

No Git Bash, macOS ou Linux:

```sh
cd Back-end
bash ./mvnw spring-boot:run
```

Terminal 2 — Vite:

```sh
npm run dev:frontend
```

Depois, acesso <http://localhost:5173>; o Vite encaminha minhas requisições `/api` para `http://localhost:8080`.

Configurei o back-end para criar ou atualizar `Back-end/data/nexthub.sqlite` com Hibernate (`ddl-auto=update`) sem apagar dados existentes. Também posso configurar a origem permitida pelo CORS com `NEXTHUB_CORS_ALLOWED_ORIGIN` (padrão: `http://localhost:5173`).

Para demonstrar os fluxos, uso estas contas fictícias, ambas com a senha `demo1234`:

- Estudante: `ana@nexthub.demo`
- Empresa: `talentos@nexthub.demo`

## Front-end

Organizei o front-end com React, JSX, Vite e React Router. Coloquei as páginas em `frontend/src/pages/`, os componentes compartilhados em `frontend/src/components/` e a comunicação com a API em `frontend/src/services/api.js`. Uso a URL após `#` na navegação do React Router (por exemplo, `http://localhost:5173/#/mural`). Mantive a identidade visual e os layouts responsivos em `frontend/public/css/style.css`.

## Endpoints da API

Na API Java, mantive os contratos usados pelo frontend:

- Autenticação: `POST /api/auth/register`, `/api/auth/login` e `/api/auth/logout`; `GET /api/me`.
- Perfil: `PATCH /api/profile`.
- Oportunidades: `GET` e `POST /api/opportunities`; `PATCH` e `DELETE /api/opportunities/{id}`; `GET /api/company/opportunities`.
- Favoritos: `GET /api/favorites` e `POST /api/favorites/{id}`.
- Candidaturas: `GET /api/applications`, `POST /api/applications/{id}`, `PATCH /api/applications/{id}` e `DELETE /api/applications/{id}` para o estudante dono retirar a própria candidatura.
- Currículos: `POST /api/resume` e `GET /api/resume/{id}`.

## Testes e lint

```sh
npm run lint:frontend
npm run build:frontend
npm --prefix frontend run test:e2e
```

Para validar a API, executo os testes Java em um terminal separado. No PowerShell:

```sh
cd Back-end
.\mvnw.cmd test
```

No Git Bash, macOS ou Linux:

```sh
cd Back-end
bash ./mvnw test
```

Com os testes de integração do back-end, valido cadastro, atualização do perfil com persistência dos cursos, upload de currículo, envio e retirada de candidatura e publicação de oportunidades pela empresa. Com os 14 testes de navegador, valido cadastro e login, candidatura, publicação pela empresa, leitura de notificações, currículo e perfil de candidatos, interações de cards, abas, modais e navegação mobile durante a rolagem. Para rodar os testes de navegador, instalo o Chromium uma vez e executo:

```sh
cd frontend
npm ci
npx playwright install chromium
npm run test:e2e
```

Configurei o Playwright para iniciar a API e o Vite automaticamente e usar um SQLite temporário, separado do meu banco local.

## CI

Configurei o GitHub Actions para executar em pull requests direcionados à `main` e em pushes na `main`. O workflow instala as dependências Node, executa lint e build do front-end, testes Maven do back-end e fluxos E2E com Playwright. Mantive essa configuração em `.github/workflows/ci.yml`. A última execução que verifiquei para `dev`, no commit `7be0a89`, terminou com sucesso ([execução 7](https://github.com/Levi-dev6638/NextHub/actions/runs/45915995752)).

## Persistência, segurança e deploy

Modelei as tabelas principais para usuários, oportunidades, candidaturas, favoritos e currículos; calculo as recomendações no front-end a partir do perfil. Uso Hibernate (`ddl-auto=update`) para criar ou atualizar as tabelas SQLite, mas reconheço que essa opção não substitui migrações versionadas em produção. Importo `backend/data/seed.json` somente quando o banco ainda não tem usuários e não sobrescrevo registros existentes. Protegi a autenticação com sessões HTTP e senhas com hash BCrypt. Limitei os currículos enviados a 5 MB e permito acesso somente ao estudante dono ou à empresa responsável por uma oportunidade à qual ele se candidatou.

Preparei esta configuração para uma demonstração acadêmica local, não para um deploy de produção com múltiplas instâncias. Antes de publicar o projeto, eu precisaria adicionar armazenamento compartilhado e durável para sessões, persistência e arquivos, além de HTTPS e backups operacionais. Ainda não configurei um deploy hospedado.

## Equipe

- **Minha turma:** TDS — turmas mistas 6570, 6756 e 6863
- **Tech lead:** Levi (`Levi-dev6638`)
- **Responsável pela apresentação:** Lucas (`martinszvx`)
- **Integrante:** Giovana (`Giovana-Bernardes`)

## Links

- **Repositório:** <https://github.com/Levi-dev6638/mural-de-oportunidades>
- **Deploy:** Não configurado
