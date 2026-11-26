# NextHub — Mural de Oportunidades

[English](README.md) · **Português (Brasil)**

O NextHub reúne estágios, cursos, oportunidades freelancer e eventos em um mural pesquisável e personalizado para estudantes.

## Problema e solução

Estudantes encontram oportunidades espalhadas por redes sociais, grupos de conversa e murais físicos. O NextHub centraliza os anúncios e ajuda estudantes a encontrar opções relevantes, manter currículo e interesses no perfil, salvar oportunidades e acompanhar candidaturas. Empresas podem publicar anúncios e gerenciar candidatos.

## Funcionalidades do MVP

- Cadastro, login e logout de estudantes e empresas.
- Perfil do estudante com interesses, formação, formato desejado e disponibilidade.
- Upload de currículo PDF (máximo de 5 MB) e acesso controlado pelo candidato e pela empresa correspondente.
- Listagem, busca textual e filtros por tipo, formato, assunto e área.
- Detalhes de oportunidades, recomendações explicáveis, favoritos e candidaturas internas ou externas.
- Criação, edição e encerramento de oportunidades pela empresa; análise de candidatos e atualização do status das candidaturas.
- Interface responsiva, tema claro/escuro e navegação por perfil.
- Dados locais fictícios para demonstração: 20 oportunidades, 10 usuários e 14 candidaturas.

O fluxo de candidatura interna exige currículo. Anúncios externos direcionam para o endereço de inscrição publicado. As recomendações são correspondências determinísticas com interesses, formação e formato desejado; a aplicação não chama serviços externos de IA.

## Tecnologias

- **Front-end:** React 18, Vite 6, JavaScript e CSS.
- **Back-end:** Java 25, Spring Boot 3.5, Spring Data JPA, Hibernate 6 e Bean Validation.
- **Persistência:** SQLite em `Back-end/data/nexthub.sqlite`; currículos enviados ficam em `Back-end/uploads/`.
- **Testes e qualidade:** JUnit 5, Spring Boot Test, Maven, ESLint e GitHub Actions.

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

`frontend/` e `Back-end/` formam a única aplicação ativa. O arquivo `backend/data/seed.json` fornece dados fictícios apenas na primeira inicialização; os dados de execução ficam no SQLite. Faça cópias de segurança de `Back-end/data/nexthub.sqlite` antes de manutenção manual.

## Pré-requisitos e instalação

- Java 25 ou superior.
- Node.js 22.13 ou superior e npm.
- Maven Wrapper incluído em `Back-end/`.

Na raiz do repositório:

```sh
npm ci
npm --prefix frontend ci
copy .env.example .env
```

No macOS/Linux, use `cp .env.example .env` no lugar de `copy`. Esse arquivo configura a URL usada pelo proxy do Vite; o back-end usa os caminhos padrão definidos em `application.properties`, sem exigir um arquivo `.env`.

## Executar localmente

Abra dois terminais na raiz do repositório.

Terminal 1 — API (PowerShell):

```sh
cd Back-end
.\mvnw.cmd spring-boot:run
```

No Git Bash, macOS ou Linux:

```sh
cd Back-end
./mvnw spring-boot:run
```

Terminal 2 — Vite:

```sh
npm run dev:frontend
```

Acesse <http://localhost:5173>. O Vite encaminha requisições `/api` para `http://localhost:8080`.

O back-end cria ou atualiza o arquivo `Back-end/data/nexthub.sqlite` com Hibernate (`ddl-auto=update`) sem apagar dados existentes.

As contas de demonstração usam a senha `demo1234`:

- Estudante: `ana@nexthub.demo`
- Empresa: `talentos@nexthub.demo`

## Endpoints da API

A API Java mantém os contratos usados pelo frontend:

- Autenticação: `POST /api/auth/register`, `/api/auth/login` e `/api/auth/logout`; `GET /api/me`.
- Perfil: `PATCH /api/profile`.
- Oportunidades: `GET` e `POST /api/opportunities`; `PATCH` e `DELETE /api/opportunities/{id}`; `GET /api/company/opportunities`.
- Favoritos: `GET /api/favorites` e `POST /api/favorites/{id}`.
- Candidaturas: `GET /api/applications`, `POST /api/applications/{id}` e `PATCH /api/applications/{id}`.
- Currículos: `POST /api/resume` e `GET /api/resume/{id}`.

## Testes e lint

```sh
npm run lint:frontend
npm run build:frontend
```

Execute os testes Java em um terminal separado. No PowerShell:

```sh
cd Back-end
.\mvnw.cmd test
```

No Git Bash, macOS ou Linux:

```sh
cd Back-end
./mvnw test
```

## CI

O GitHub Actions é executado em pull requests direcionados à `main` e em pushes na `main`. O workflow instala as dependências Node, executa lint e build do front-end e testes Maven do back-end. A configuração está em `.github/workflows/ci.yml`; a execução remota ainda não foi verificada.

## Persistência, segurança e deploy

As tabelas principais são usuários, oportunidades, candidaturas, favoritos e currículos; recomendações são calculadas no frontend a partir do perfil. Hibernate cria ou atualiza as tabelas do SQLite (`ddl-auto=update`); essa opção não substitui migrações versionadas para produção. O seed de `backend/data/seed.json` só é importado quando o banco ainda não contém usuários e não sobrescreve os dados existentes. A autenticação usa sessões HTTP e senhas com hash BCrypt. Os uploads de currículo têm limite de 5 MB e são entregues somente ao estudante dono ou à empresa responsável por uma oportunidade à qual ele se candidatou.

Esta configuração foi preparada para uma demonstração acadêmica local, não para deploy de produção com múltiplas instâncias. Uma publicação pública exige armazenamento compartilhado e durável de sessões, persistência e arquivos gerenciados, HTTPS e backups operacionais. Não há deploy hospedado configurado.

## Equipe

- **Turma:** TDS — turmas mistas 6570, 6756 e 6863
- **Tech lead:** Levi (`Levi-dev6638`)
- **Responsável pela apresentação:** Lucas (`martinszvx`)
- **Integrante:** Giovana (`Giovana-Bernardes`)

## Links

- **Repositório:** <https://github.com/Levi-dev6638/mural-de-oportunidades>
- **Deploy:** Não configurado
