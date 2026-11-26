# Decisões do projeto

[English](DECISIONS.md) · **Português (Brasil)**

Este registro descreve as decisões que definem o MVP atual do NextHub. As entradas são agrupadas por tema; decisões posteriores substituem escolhas anteriores quando indicado.

## 23 de novembro de 2026 — Referências para o mural de oportunidades

- **Decisão:** usar InfoJobs e Indeed como referência para padrões conhecidos de busca, filtros e cards de oportunidades, sem reproduzir nenhum dos produtos.
- **Alternativas consideradas:** criar todas as interações do zero ou copiar o layout de um único portal.
- **Motivo:** padrões reconhecíveis facilitam o uso do mural, mantendo a identidade e o escopo próprios do NextHub.

## 24 de novembro de 2026 — Escopo do MVP

- **Decisão:** priorizar um fluxo demonstrável para estudantes e empresas: perfis, oportunidades, busca, recomendações explicáveis, favoritos, candidaturas e acesso ao currículo.
- **Alternativas consideradas:** uma página estática de anúncios ou uma plataforma completa de recrutamento e seleção.
- **Motivo:** um produto local de ponta a ponta demonstra melhor o problema sem exigir integrações desnecessárias nem um processo completo de contratação.

## 25 de novembro de 2026 — Arquitetura oficial da aplicação (substituída em 26 de novembro)

- **Decisão naquele momento:** `frontend/` (React 18 e Vite) e `backend/` (Node.js e Express) eram a aplicação ativa. Os scaffolds anteriores Java/Spring e React/Vite em `Back-end/` e `Front-end/` foram considerados substituídos e removidos do projeto de trabalho.
- **Alternativas consideradas:** manter as duas árvores da aplicação ou tornar o scaffold Java/Spring o back-end oficial.
- **Motivo naquele momento:** a implementação Node/Express continha os fluxos de autenticação, oportunidades, perfil, candidaturas, favoritos e currículo, além dos dados de demonstração. Manter os starters Java/Vite deixaria aplicações concorrentes e não integradas, além de uma pipeline testando a fonte errada.

## 25 de novembro de 2026 — Persistência local em JSON

- **Decisão naquele momento:** preservar os dados existentes de demonstração e execução em `backend/data/` e armazenar PDFs enviados no diretório ignorado `backend/uploads/`.
- **Alternativas consideradas:** introduzir um banco SQL ou um serviço externo de dados.
- **Motivo naquele momento:** os dados locais versionados tornavam a demonstração acadêmica reproduzível e disponível offline; um banco de dados foi considerado desnecessário para a demonstração. Eram necessárias cópias de segurança antes de qualquer manutenção manual.

## 25 de novembro de 2026 — Sessões e proteção de currículos

- **Decisão naquele momento:** manter senhas com hash bcrypt e sessões Express verificadas por perfil; limitar o acesso ao currículo ao estudante proprietário e às empresas com candidaturas para suas próprias oportunidades.
- **Alternativas consideradas:** armazenar credenciais em texto, expor uploads como arquivos estáticos ou integrar um provedor externo de identidade.
- **Motivo:** a abordagem atende ao MVP local e evita acesso público direto aos currículos. Um deploy de produção ainda exige sessões compartilhadas duráveis e armazenamento gerenciado de arquivos.

## 24 de novembro de 2026 — Recomendações explicáveis

- **Decisão:** calcular recomendações deterministicamente a partir de interesses, formação e formato desejado do estudante, exibindo uma justificativa curta para cada correspondência.
- **Alternativas consideradas:** ordenação aleatória, recomendações somente por palavra-chave ou ranking opaco por serviço externo de IA.
- **Motivo:** o resultado é previsível e fácil de explicar na apresentação, sem API externa ou custo de serviço.

## 24 de novembro de 2026 — Navegação de salvos e candidaturas

- **Decisão:** apresentar favoritos como uma aba dentro da área de Candidaturas do estudante, em vez de uma área de navegação separada.
- **Alternativas consideradas:** áreas separadas de Salvos e Candidaturas ou ocultar favoritos do acompanhamento.
- **Motivo:** isso mantém oportunidades salvas e enviadas no mesmo espaço, sem misturar suas visualizações.

## 24 de novembro de 2026 — Navegação responsiva e tema

- **Decisão:** manter navegação específica por perfil, sidebar no desktop, barra inferior no celular e controles de tema claro/escuro em Configurações.
- **Alternativas consideradas:** uma navegação idêntica para ambos os perfis ou um controle permanente de tema na barra mobile.
- **Motivo:** ações específicas por perfil reduzem a poluição visual e a barra mobile permanece focada na navegação.

## 24 de novembro de 2026 — Recursos fora do escopo

- **Decisão:** não incluir gamificação, rankings, scraping automático da web, integrações institucionais externas nem processo seletivo completo das empresas neste MVP.
- **Alternativas consideradas:** ampliar o produto além do fluxo demonstrável de uma semana.
- **Motivo:** esses recursos aumentam a complexidade sem serem necessários para validar a proposta do mural de oportunidades.

## 26 de novembro de 2026 — Migração do back-end para Java e SQLite

- **Decisão:** substituir a API Node/Express pela API Java/Spring Boot oficial, usar Spring Data JPA/Hibernate para persistência e SQLite como banco local persistente.
- **Alternativas consideradas:** manter o Node como API concorrente ou manter os dados apenas em arquivos JSON.
- **Motivo:** atender à arquitetura definida para o projeto, centralizar a persistência em SQLite e usar uma única API REST responsável pelos fluxos do NextHub. Esta decisão substitui as decisões de 25 de novembro sobre back-end e persistência.
