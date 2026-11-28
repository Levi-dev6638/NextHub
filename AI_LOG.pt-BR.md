# Registro de uso de IA (AI_LOG)

[English](AI_LOG.md) · **Português (Brasil)**

Uso este registro para contar como utilizei inteligência artificial no projeto. A IA é permitida e incentivada desde que eu documente seu uso: este arquivo é um entregável obrigatório e também serve de roteiro para o bloco “IA na prática” da minha apresentação.

Escrevo a documentação principal do projeto **em inglês** no [`AI_LOG.md`](AI_LOG.md) e mantenho esta **versão em português** alinhada com ela.

Mantenho este arquivo na **raiz** do repositório. Para cada uso relevante, registro as ferramentas, meu prompt principal, o que a IA gerou, o que aproveitei e o que corrigi ou rejeitei — e por quê.

Nunca commito chaves de API, senhas ou outros segredos. Guardo esses valores em um arquivo `.env` fora do repositório ou nos GitHub Secrets.

## Ferramentas

- Usei GitHub Copilot no VS Code na auditoria e implementação atuais.
- Mantive registros históricos que também citam ChatGPT/Codex, Claude e Gemini, mas não consigo verificar esses usos de forma independente neste repositório.

## Registro

### 24/11/2026 — Especificação do NextHub e direção de implementação
- **Prompt principal:** pedi para gerar e organizar a plataforma NextHub conforme a especificação fornecida, com fluxos de estudante e empresa, interface responsiva e dados de demonstração conectados à API.
- **O que recebi da IA:** no snapshot inicial associado a esse registro, pedi à IA que organizasse o escopo e propusesse uma estrutura full stack. Esse snapshot ainda não continha a implementação; confirmei a implementação Node/Express e React/Vite posteriormente, na auditoria de 25/11.
- **O que aproveitei:** mantive na documentação o escopo pretendido e registrei a implementação atual separadamente, com base na auditoria de 25/11.
- **O que corrigi ou rejeitei, e por quê:** só considero um comportamento implementado quando confirmo sua presença no código-fonte ou no histórico do repositório. Assim, não apresento pedidos da conversa como recursos já verificados.

### 24/11/2026 — Correções de navegação, interface e interação
- **Prompt principal:** pedi para corrigir detalhes de navegação e interface relacionados a candidaturas e favoritos, ações duplicadas de publicação, posição do botão Publicar no mobile, entrada principal do mural para estudante, avatares, filtros, notificações, acesso ao currículo em PDF e telas iniciais por perfil.
- **O que pedi à IA:** solicitei alterações de código nesses itens e também pedi revisão de uma estrutura para apresentação e de comportamentos durante atualizações em ZIP.
- **O que aproveitei:** na época, tratei esses itens como requisitos ou possibilidades. Depois, verifiquei no código quais fluxos estavam realmente implementados e corrigi os defeitos encontrados.
- **O que corrigi ou rejeitei, e por quê:** mantive favoritos separados de candidaturas e preservei a navegação por perfil. Este registro histórico não descreve, por si só, o estado atual do código.

### 24/11/2026 — Preparação dos dados de demonstração
- **Prompt principal:** pedi para ampliar as oportunidades e os perfis demonstrativos e preparar pacotes atualizados do projeto para o VS Code.
- **O que recebi da IA:** conversei sobre uma ampliação pretendida para 20 oportunidades, 8 perfis de estudantes e 14 candidaturas, além da preparação de pacotes ZIP.
- **O que aproveitei:** depois, conferi os dados ativos de demonstração na auditoria local: encontrei 20 oportunidades, 10 usuários e 14 candidaturas. Como a contagem inclui empresas, não afirmo que existam 8 perfis de estudantes. Também não apresento a preparação de ZIP como entregável atual.
- **O que corrigi ou rejeitei, e por quê:** trato os dados de candidatos e oportunidades como fictícios e próprios para demonstração; não envio senhas reais, segredos ou dados pessoais ao repositório. Não descrevo uma ampliação como concluída antes de confirmar os arquivos correspondentes.

### 24/11/2026 — Revisão e alinhamento da documentação
- **Prompt principal:** pedi para completar os registros de uso de IA e decisões do projeto em inglês e português, mantendo as versões alinhadas.
- **O que recebi da IA:** sugestões bilíngues para `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` e `DECISIONS.pt-BR.md`, preservando a estrutura existente na raiz.
- **O que aproveitei:** mantenho os arquivos em inglês como versões principais e alinho os arquivos em português a eles.
- **O que corrigi ou rejeitei, e por quê:** não apresento textos ilustrativos ou marcadores de modelo como evidência de implementação. Registro como fatos confirmados somente decisões e detalhes sustentados pelos arquivos do repositório ou por histórico verificável.

### 24/11/2026 — Organização do escopo e criação do protótipo inicial do Mural de Oportunidades

- **Prompt principal:** "Como Engenheiro de Software Sênior e Designer UI/UX, organize o escopo oficial do projeto e crie do zero um protótipo funcional completo e pronto para apresentação do Mural de Oportunidades NextHub para estudantes e jovens. Priorize um fluxo navegável de uma semana, usando HTML/CSS/JavaScript puro no frontend, Node.js com Express no backend, Multer para currículos PDF e dados locais em JSON. Inclua os perfis de candidato e empresa, cadastro e perfil completo, recomendações por match, busca e filtros, salvamento e candidatura, publicação de oportunidades, gestão de candidatos e download de currículos. Registre também o que entrou no escopo e o que foi rejeitado ou retirado, com justificativas técnicas e estratégicas."
- **O que pedi à IA para gerar:** consolidei as decisões adotadas e os itens recusados e defini uma estrutura full stack com HTML/CSS/JavaScript, Node.js/Express e JSON, API REST, upload de PDFs, dados fictícios e telas navegáveis para candidato e empresa. Também defini o nome NextHub, recomendações por interesses/formato/disponibilidade, navegação responsiva, tema claro/escuro e fluxos de perfil, mural, candidatura, publicação e gestão de candidatos.
- **O que aproveitei:** mantive a organização do escopo, a arquitetura local simples, os dados fictícios, os fluxos de estudante e empresa, a identidade visual, a navegação desktop/mobile e as configurações centralizadas.
- **O que corrigi ou rejeitei, e por quê:** tomei as decisões de escopo sem delegá-las à IA. Mantive gamificação e pontuação fora do escopo, assim como abas separadas de Salvos, botão de tema solto no mobile e frameworks ou bancos externos complexos. Integrei Salvos a Candidaturas, coloquei tema e logout em Configurações e escolhi HTML/CSS/JavaScript, Node.js/Express e JSON para reduzir cliques, complexidade visual e riscos de conexão na apresentação.

### 25/11/2026 — Inicialização do projeto frontend

- **Prompt principal:** pedi para inicializar um projeto frontend para a interface do NextHub e organizar a pasta de desenvolvimento.
- **O que recebi da IA:** o histórico confirma que iniciei um projeto React com Vite em `Front-end/`, incluindo `package.json`, configuração do Vite, ponto de entrada React e componente inicial. Naquele commit, `App.jsx` ainda era a tela inicial do Vite, não uma tela do NextHub; depois, removi o scaffold sem uso.
- **O que aproveitei:** inicialmente versionei o scaffold React/Vite. Hoje mantenho a interface ativa do NextHub em `frontend/` e removi o scaffold concorrente depois de decidir a arquitetura.
- **O que corrigi ou rejeitei, e por quê:** não registrei o conteúdo inicial como implementação do NextHub. Documentei somente a configuração confirmada; exijo código correspondente antes de declarar telas, filtros, favoritos ou recomendações como concluídos.

### 25/11/2026 — Inicialização do projeto backend

- **Prompt principal:** pedi para inicializar um projeto backend em Java para a API do NextHub.
- **O que recebi da IA:** o histórico confirma que iniciei um projeto Spring Boot 4.2 em `Back-end/`, com Java 17 e Maven. O scaffold versionado continha a classe principal Spring e dependências web e de validação, mas não endpoints REST do NextHub; depois removi o scaffold sem uso.
- **O que aproveitei:** inicialmente adicionei a estrutura Spring Boot como scaffold. Depois, identifiquei que era um back-end concorrente sem implementação e o removi localmente com autorização.
- **O que corrigi ou rejeitei, e por quê:** naquele momento, o scaffold Spring ainda não continha os fluxos de API ou persistência do NextHub. Na auditoria de 25 de novembro, a API ativa era Node/Express; substituí essa arquitetura pela migração Java registrada em 26 de novembro.

### 25/11/2026 — Auditoria local e finalização da implementação NextHub

- **Prompt principal:** forneci uma solicitação detalhada de auditoria, pedindo consolidação da arquitetura, correções funcionais, revisão de segurança, testes automatizados reais, pipeline compatível, documentação bilíngue e verificação. Também pedi explicitamente que nada fosse enviado ao GitHub.
- **IA/ferramentas utilizadas:** GitHub Copilot no VS Code, PowerShell, Node.js/npm, Git local e `npm audit` para inspeção e validação do repositório.
- **O que alterei com ajuda da IA:** confirmei que `frontend/` e `backend/` contêm a aplicação ativa React/Vite e Express, enquanto `Front-end/` e `Back-end/` contêm projetos iniciais concorrentes; adicionei testes de integração com armazenamento temporário isolado; reforcei a validação de perfil, oportunidades, sessões e PDFs; atualizei o Multer; adicionei lint do front-end; exibi recomendações; implementei edição de oportunidades da empresa; corrigi a descrição e a carga horária dos cards; e alinhei a CI e a documentação à aplicação ativa.
- **O que mantive:** preservei os dados JSON de demonstração e os fluxos existentes do NextHub. Autorizei a remoção local dos starters duplicados. Meus testes usam dados fora do repositório e os removem ao terminar. Também naveguei localmente pelo formulário de edição da empresa e pelas justificativas de recomendação do estudante sem salvar alterações.
- **O que corrigi ou rejeitei, e por quê:** não tratei os starters Java e React como o produto funcional. Não fiz push, pull request, merge ou outra alteração remota no GitHub e não afirmei que uma execução remota do Actions estivesse verde, pois não a consultei.
- **Como verifiquei:** passaram os 8 testes de integração do back-end, o lint e o build de produção do frontend; as duas verificações `npm audit` informaram zero vulnerabilidades conhecidas. Também verifiquei no navegador o formulário de edição e as recomendações explicáveis. Um smoke test HTTP local serviu o frontend (200) e bloqueou uma requisição anônima à API privada (401). Não consultei o GitHub Actions remotamente.

### 26/11/2026 — Migração para API Java e SQLite

- **Prompt principal:** pedi para substituir o back-end Node/Express e JSON por Java/Spring Boot, Hibernate/JPA e SQLite, manter a integração com React/Vite, preservar os fluxos existentes e documentar e verificar a migração.
- **O que pedi à IA para gerar ou alterar:** adicionei a API Spring Boot, entidades e repositórios JPA, carga inicial de dados, login por sessão com senhas BCrypt, endpoints REST e persistência SQLite. Removi a API Express concorrente e o scaffold React sem uso; atualizei o proxy, scripts da raiz, CI e documentação bilíngue; corrigi a URL do Maven Wrapper e documentei comandos de PowerShell e Git Bash.
- **O que aproveitei:** mantive a interface React/Vite ativa e as contas e oportunidades fictícias, usando SQLite para os dados de execução. Configurei o seed JSON para ser lido somente quando o banco ainda não tiver usuários.
- **O que corrigi ou rejeitei, e por quê:** substituí a decisão anterior por Node/Express e a mantive somente como histórico. Não incluí o arquivo local com dados de conta na migração. Não fiz push nem afirmo que houve execução remota do workflow.
- **Como verifiquei:** passou o teste do back-end Java (1 teste, 0 falhas), assim como lint e build de produção do frontend. Verifiquei login e consulta de oportunidades por smoke test contra a API em execução. Não executei o GitHub Actions remotamente.

### 26/11/2026 — Ajustes visuais e solicitação dos botões “Ver currículo”

- **Prompt principal:** pedi para registrar meus ajustes visuais e criar botões para visualizar os currículos dos candidatos.
- **O que pedi à IA para gerar ou alterar:** durante a implementação, adicionei temporariamente botões “Ver currículo” e um visualizador de PDF à área de candidatos. Depois reverti essas alterações de código.
- **O que aproveitei:** registrei o pedido e a decisão de interface para orientar uma implementação futura.
- **O que corrigi ou rejeitei, e por quê:** não afirmo que os botões ou o visualizador estejam disponíveis no código atual, pois desfiz as alterações correspondentes.

### 26/11/2026 — Testes de caminho feliz do frontend e do backend

- **Prompt principal:** pedi testes automatizados de caminho feliz para o frontend e o backend.
- **O que pedi à IA para gerar ou alterar:** adicionei fluxos Playwright para cadastro e novo login de estudante, envio de currículo e candidatura, além da publicação de uma oportunidade pela empresa. Também adicionei testes MockMvc para cadastro, atualização de perfil, currículo e candidatura de estudante, além de login, publicação e consulta de oportunidade pela empresa. Os testes usam arquivos SQLite isolados, podem ser executados localmente e entraram na CI. Tornei a origem CORS configurável para permitir portas isoladas de teste.
- **O que aproveitei:** meus testes exercitam o frontend React/Vite e a API Spring Boot reais usando SQLite. Preservei as alterações locais existentes no JSON.
- **O que corrigi ou rejeitei, e por quê:** não afirmo que a CI remota foi executada. Ao examinar a interface, identifiquei que o perfil envia o campo `courses`, rejeitado pela API; não alterei esse fluxo nesta solicitação focada em testes.
- **Como verifiquei:** passaram os 3 fluxos Playwright, os 3 testes Java, o lint e o build de produção do frontend. Não executei o workflow remoto do GitHub Actions.

### 27/11/2026 — Correções de perfil, notificações, candidaturas e mobile

- **Prompt principal:** pedi para executar a aplicação local, diagnosticar erros ao salvar o perfil, fazer notificações desaparecerem após a leitura, corrigir a retirada de candidatura e ajustar problemas de interface mobile.
- **IA/ferramentas utilizadas:** GitHub Copilot no VS Code, PowerShell, Java 25, Maven Wrapper, npm e Playwright.
- **O que alterei com ajuda da IA:** adicionei validação e persistência dos cursos do perfil no SQLite; criei o endpoint `DELETE /api/applications/{id}` com verificação de propriedade; passei a registrar notificações lidas por usuário no `localStorage` e a mostrar a bolinha somente quando há itens não lidos; permiti a quebra de nomes longos de currículo no perfil; e ajustei a barra mobile fixa para rolagem e áreas seguras do dispositivo.
- **O que aproveitei:** mantive as correções de perfil, candidatura, notificações e navegação mobile. Usei o JDK 25 local e os servidores frontend/API somente para verificar a aplicação; eles não são entregáveis do repositório.
- **O que corrigi ou rejeitei, e por quê:** reverti alterações exploratórias no visualizador de currículo e no layout dos cards de candidatos; elas não fazem parte do resultado final. Restaurei o espaçamento dos cards em vez de manter o recuo à direita proposto.
- **Como verifiquei:** passaram os 3 testes Java do back-end, os 7 testes Playwright e o build de produção do frontend. Não executei o GitHub Actions remotamente nem fiz alterações no GitHub. O estado de leitura das notificações permanece local a cada navegador e não é sincronizado entre dispositivos.

### 27/11/2026 — Ações de oportunidades e animações de interface

- **Prompt principal:** pedi para organizar as ações de oportunidades, ajustar o botão de fechar e adicionar animações ao projeto.
- **O que pedi à IA para gerar ou alterar:** deixei apenas “Ver” na lista da empresa e movi “Editar” e “Encerrar oportunidade” para os detalhes; removi o fundo e a borda do X, mantendo o hover na cor primária; adicionei animações sutis para cards, páginas, navegação, botões, modais e mensagens, incluindo a saída dos modais e mensagens.
- **O que aproveitei:** mantive o novo fluxo de ações, os efeitos visuais discretos e o respeito à preferência de movimento reduzido do sistema.
- **O que corrigi ou rejeitei, e por quê:** ajustei a proposta inicial de deixar o botão de fechar vermelho e quadrado conforme pedi: mantive apenas o X, com hover na cor primária e movimento de elevação/aumento.
- **Como verifiquei:** passaram lint, build de produção do frontend e `git diff --check`. Não executei os testes de navegador nessa etapa porque o servidor de teste do back-end requeria Java 25 e o ambiente disponível estava com Java 21.

### 27/11/2026 — Ajustes de cards, modais, abas e análise de candidatos

- **Prompt principal:** pedi para corrigir o alinhamento de cards com poucos itens, centralizar e tornar rolável o modal de detalhes, animar o indicador das abas e reorganizar as ações de candidatos.
- **IA/ferramentas utilizadas:** GitHub Copilot no VS Code, React, CSS, PowerShell e Playwright.
- **O que alterei com ajuda da IA:** mantive a largura e o alinhamento das colunas de favoritos mesmo com poucos resultados; adicionei indicador azul deslizante nas abas; renderizei modais em um portal no `document.body`, limitei sua altura à viewport e habilitei rolagem interna; ajustei a cobertura do overlay em telas pequenas; organizei o status e o acesso ao perfil do candidato em controles de mesmo tamanho, alinhando o status à direita; e movi “Ver currículo” para dentro do modal de perfil. Também ajustei sombras, entradas e hover dos cards, animação de entrada das páginas, destaque temporário de notificações e empilhamento de toasts, respeitando movimento reduzido.
- **O que aproveitei:** mantive as correções de layout e os fluxos de navegação do currículo e do perfil, preservando as cores e funcionalidades existentes dos modais.
- **O que corrigi ou rejeitei, e por quê:** removi “Ver currículo” da linha do candidato para reduzir ações visíveis; o currículo continua acessível pelo modal “Ver perfil”. Preservei o tamanho horizontal e o design geral do modal de oportunidade.
- **Como verifiquei:** passaram lint, build de produção do frontend e `git diff --check`; também passaram os 14 testes E2E após os ajustes finais. Não fiz push nem executei o GitHub Actions remotamente.
