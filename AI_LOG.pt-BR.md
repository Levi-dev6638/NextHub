# Registro de uso de IA (AI_LOG)

[English](AI_LOG.md) · **Português (Brasil)**

Registrem aqui como o time usou inteligência artificial no projeto. O uso de IA é liberado e incentivado, desde que documentado: este arquivo é entregável obrigatório e serve de roteiro para o bloco “IA na prática” da apresentação.

A documentação do projeto deve ser escrita **em inglês** (a versão principal é o [`AI_LOG.md`](AI_LOG.md)), com uma **versão em português** ao lado. Mantenham as duas versões alinhadas.

Mantenham este arquivo na **raiz** do repositório. Incluam as ferramentas utilizadas e, para cada uso relevante, o prompt principal, o que a IA gerou, o que o time aproveitou e o que foi corrigido ou rejeitado — e por quê.

Nunca commitem chaves de API, senhas ou outros segredos. Esses valores vão em `.env` (fora do repositório) e em GitHub Secrets.

## Ferramentas

- GitHub Copilot no VS Code — usado na auditoria e implementação atuais.
- Registros anteriores mantidos pelo time também listam ChatGPT/Codex, Claude e Gemini; esses usos históricos foram registrados pelo time, mas não podem ser verificados independentemente a partir deste repositório.

## Registro

### 24/11/2026 — Especificação do NextHub e direção de implementação
- **Prompt principal:** Gerar e organizar a plataforma NextHub conforme a especificação fornecida, com fluxos de estudante e empresa, interface responsiva e dados de demonstração conectados à API.
- **O que a IA gerou:** No snapshot inicial associado a esse registro, a IA recebeu pedidos para organizar o escopo e propor uma estrutura full stack. Esse snapshot não continha ainda a implementação; a implementação Node/Express e React/Vite foi verificada posteriormente na auditoria de 25/11.
- **O que o time aproveitou:** A documentação registra o escopo pretendido. A implementação atual foi analisada separadamente e está descrita no registro da auditoria de 25/11.
- **O que o time corrigiu ou rejeitou, e por quê:** Nenhum comportamento da implementação é registrado como concluído sem confirmação no código-fonte ou no histórico do repositório. Isso evita apresentar pedidos feitos apenas em conversa como recursos verificados.

### 24/11/2026 — Correções de navegação, interface e interação
- **Prompt principal:** Corrigir detalhes de navegação e interface relacionados a candidaturas e favoritos, ações duplicadas de publicação, posição do botão Publicar no mobile, entrada principal do mural para estudante, avatares, filtros, notificações, acesso ao currículo em PDF e telas iniciais por perfil.
- **O que a IA gerou:** Estes itens foram pedidos de alteração de código durante a conversa do projeto. A IA também revisou estrutura voltada à apresentação e comportamentos solicitados ao trabalhar com atualizações em ZIP.
- **O que o time aproveitou:** Naquele registro, os itens foram tratados como requisitos ou candidatos. A auditoria posterior verificou no código os fluxos efetivamente implementados e corrigiu os defeitos encontrados.
- **O que o time corrigiu ou rejeitou, e por quê:** A distinção entre favoritos e candidaturas foi mantida, assim como a navegação por perfil. Este registro histórico não deve ser interpretado como afirmação sobre o estado atual do código.

### 24/11/2026 — Preparação dos dados de demonstração
- **Prompt principal:** Ampliar as oportunidades e os perfis de candidatos demonstrativos e preparar pacotes atualizados do projeto para o VS Code.
- **O que a IA gerou:** A conversa informa uma ampliação com intenção de produzir 20 oportunidades, 8 perfis de estudantes e 14 candidaturas. Também envolveu preparação e atualização de pacotes ZIP.
- **O que o time aproveitou:** os dados ativos de demonstração foram verificados durante a auditoria local: contêm 20 oportunidades, 10 usuários e 14 candidaturas. A contagem de usuários inclui contas de empresas e não comprova 8 perfis de estudantes. A preparação de ZIP não é declarada como entregável atual.
- **O que o time corrigiu ou rejeitou, e por quê:** Os dados de candidatos e oportunidades são fictícios e servem à demonstração; nenhuma senha real, segredo ou dado pessoal deve ser enviado ao repositório. Uma ampliação de pacote ou dados não deve ser descrita como incluída antes que os arquivos correspondentes existam no repositório.

### 24/11/2026 — Revisão e alinhamento da documentação
- **Prompt principal:** Completar os registros de uso de IA e decisões do projeto em inglês e português, mantendo as versões dos dois idiomas alinhadas.
- **O que a IA gerou:** Sugestões de atualização para `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` e `DECISIONS.pt-BR.md`, preservando a estrutura bilíngue e os modelos existentes.
- **O que o time aproveitou:** Os arquivos em inglês permanecem como versões principais e os arquivos em português refletem o conteúdo e a estrutura correspondentes.
- **O que o time corrigiu ou rejeitou, e por quê:** Textos ilustrativos ou marcadores de modelo não podem ser apresentados como evidência de implementação do projeto. Apenas decisões registradas e detalhes de implementação sustentados pelos arquivos do repositório ou por histórico verificável são incluídos como fatos confirmados.

### 24/11/2026 — Organização do escopo e criação do protótipo inicial do Mural de Oportunidades

- **Prompt principal:** "Como Engenheiro de Software Sênior e Designer UI/UX, organize o escopo oficial do projeto e crie do zero um protótipo funcional completo e pronto para apresentação do Mural de Oportunidades NextHub para estudantes e jovens. Priorize um fluxo navegável de uma semana, usando HTML/CSS/JavaScript puro no frontend, Node.js com Express no backend, Multer para currículos PDF e dados locais em JSON. Inclua os perfis de candidato e empresa, cadastro e perfil completo, recomendações por match, busca e filtros, salvamento e candidatura, publicação de oportunidades, gestão de candidatos e download de currículos. Registre também o que entrou no escopo e o que foi rejeitado ou retirado, com justificativas técnicas e estratégicas."
- **O que a IA gerou:** uma consolidação oficial das decisões adotadas e dos itens recusados; uma estrutura full stack em HTML/CSS/JavaScript, Node.js/Express e JSON; API REST, upload real de PDFs, dados fictícios pré-populados e telas navegáveis para candidato e empresa. Também foram definidos o nome NextHub, as recomendações por interesses/formato/disponibilidade, a navegação responsiva, o tema claro/escuro e os fluxos de perfil, mural, candidatura, publicação e gestão de candidatos.
- **O que o time aproveitou:** a organização clara do escopo, a arquitetura local simples e estável, os dados fictícios realistas, o fluxo completo de estudante e empresa, a identidade visual moderna, a navegação desktop/mobile e a centralização das configurações.
- **O que o time corrigiu ou rejeitou, e por quê:** o time não delegou as decisões à IA. Mantém gamificação e pontuação fora do escopo, assim como abas separadas de Salvos, botão solto de tema no mobile e frameworks ou bancos externos complexos. Optou por integrar Salvos a Candidaturas, colocar tema e logout em Configurações e usar apenas HTML/CSS/JavaScript, Node.js/Express e JSON para reduzir clics, complexidade visual e riscos de conexão na apresentação.

### 25/11/2026 — Inicialização do projeto frontend

- **Prompt principal:** Inicializar um projeto frontend para a interface do NextHub e organizar a pasta de desenvolvimento do frontend.
- **O que a IA gerou:** o histórico confirma um projeto React com Vite em `Front-end/`, incluindo `package.json`, configuração do Vite, ponto de entrada React e componente inicial da aplicação. Na época desse commit de scaffold, `App.jsx` era a tela inicial do Vite, não uma tela do NextHub; o scaffold sem uso foi removido localmente depois.
- **O que o time aproveitou:** o scaffold React/Vite foi inicialmente versionado. A interface NextHub ativa fica em `frontend/`; o scaffold concorrente foi removido após a decisão arquitetural documentada.
- **O que o time corrigiu ou rejeitou, e por quê:** o conteúdo inicial gerado não foi registrado como implementação do NextHub. Apenas a configuração confirmada foi documentada; telas de recursos, filtros, favoritos e recomendações exigem código correspondente antes de serem considerados concluídos.

### 25/11/2026 — Inicialização do projeto backend

- **Prompt principal:** Inicializar um projeto backend em Java para a API do NextHub.
- **O que a IA gerou:** o histórico confirma um projeto Spring Boot 4.2 em `Back-end/`, usando Java 17 e Maven. O scaffold versionado continha a classe principal Spring e dependências web e de validação, mas não endpoints REST do NextHub; o scaffold sem uso foi removido localmente depois.
- **O que o time aproveitou:** a estrutura Spring Boot foi inicialmente adicionada como scaffold. Depois foi identificada como um backend concorrente sem implementação e removida localmente com autorização do usuário.
- **O que o time corrigiu ou rejeitou, e por quê:** naquele momento, o scaffold Spring ainda não continha os fluxos de API ou persistência do NextHub. A implementação Node/Express era a API ativa na auditoria de 25 de novembro; essa arquitetura foi substituída pela migração Java registrada em 26 de novembro.

### 25/11/2026 — Auditoria local e finalização da implementação NextHub

- **Prompt principal:** O usuário forneceu uma solicitação detalhada de auditoria do projeto, pedindo consolidação da arquitetura, correções funcionais, revisão de segurança, testes automatizados reais, pipeline compatível, documentação bilíngue e verificação. Também pediu explicitamente que nada fosse enviado ao GitHub.
- **IA/ferramentas utilizadas:** GitHub Copilot no VS Code, PowerShell, Node.js/npm, Git local e `npm audit` para inspeção e validação do repositório.
- **O que a IA gerou ou alterou:** confirmou que `frontend/` e `backend/` contêm a aplicação ativa React/Vite e Express, enquanto `Front-end/` e `Back-end/` contêm projetos iniciais concorrentes; adicionou testes de integração com armazenamento temporário isolado; reforçou a validação de perfil, oportunidades, sessões e PDFs; atualizou o Multer; adicionou lint do front-end; exibiu recomendações, adicionou edição de oportunidades da empresa e corrigiu a descrição e a carga horária dos cards; e alinhou a CI e a documentação à aplicação ativa.
- **O que foi mantido nesta implementação:** os dados JSON de demonstração e os fluxos existentes do NextHub. O usuário autorizou a remoção local dos starters duplicados. Os testes usam dados fora do repositório e os removem ao terminar. Uma navegação local no browser verificou o formulário de edição da empresa e as justificativas das recomendações do estudante sem salvar alterações.
- **O que foi corrigido ou rejeitado, e por quê:** as árvores iniciais Java e React não foram tratadas como produto funcional. Não houve push, pull request, merge nem outra alteração remota no GitHub. Não se afirma que uma execução remota do GitHub Actions esteja verde; ela não foi consultada.
- **Verificação registrada neste trabalho:** os 8 testes de integração do back-end passaram; lint e build de produção do front-end passaram; as duas verificações `npm audit` informaram zero vulnerabilidades conhecidas; e uma navegação local no browser verificou o formulário de edição da empresa e as recomendações explicáveis para o estudante. Um smoke test HTTP local serviu o front-end (200) e bloqueou uma requisição anônima à API privada (401). Nenhuma execução remota do GitHub Actions foi consultada.

### 26/11/2026 — Migração para API Java e SQLite

- **Prompt principal:** Substituir o back-end ativo Node/Express e JSON por Java/Spring Boot, Hibernate/JPA e SQLite, manter a integração com o frontend React/Vite, preservar os fluxos existentes e documentar e verificar a migração.
- **O que a IA gerou ou alterou:** adicionou a API Spring Boot, entidades e repositórios JPA, carga inicial de dados de demonstração, login por sessão com senhas BCrypt, endpoints REST e persistência local SQLite; removeu a API Express concorrente e o scaffold React sem uso; atualizou o proxy do frontend, scripts da raiz, CI e documentação bilíngue. Também corrigiu a URL da distribuição do Maven Wrapper e documentou os comandos de PowerShell e Git Bash.
- **O que o time aproveitou:** a interface React/Vite ativa e as contas e oportunidades fictícias de demonstração, com SQLite como persistência de execução. O seed JSON é lido somente quando o banco ainda não contém usuários.
- **O que o time corrigiu ou rejeitou, e por quê:** a decisão arquitetural anterior por Node/Express foi explicitamente substituída e permanece apenas como histórico. O arquivo local com dados de conta do usuário não faz parte da migração e não deve ser commitado. Não se afirma que houve push ou execução remota do workflow.
- **Verificação:** o teste do back-end Java passou (1 teste, 0 falhas), assim como lint e build de produção do frontend. Login e consulta de oportunidades foram verificados por smoke test contra a API em execução. O GitHub Actions ainda não foi executado remotamente.

### 26/11/2026 — Ajustes visuais e solicitação dos botões “Ver currículo”

- **Prompt principal:** O usuário pediu para registrar os ajustes de estilo que fez e a solicitação de criar botões para visualizar os currículos dos candidatos.
- **O que a IA gerou ou alterou:** durante a implementação, a área de candidatos recebeu botões “Ver currículo” e uma visualização do PDF. Essas alterações de código foram posteriormente revertidas pelo usuário.
- **O que o time aproveitou:** o pedido e a decisão de interface ficam registrados para orientar uma implementação futura.
- **O que foi corrigido ou rejeitado, e por quê:** este registro não afirma que os botões ou a visualização estejam disponíveis no código atual, pois as alterações correspondentes foram desfeitas.

### 26/11/2026 — Testes de caminho feliz do frontend e do backend

- **Prompt principal:** O usuário pediu testes automatizados para o frontend e o backend que cubram os caminhos felizes.
- **O que a IA gerou ou alterou:** adicionou fluxos de navegador Playwright para cadastro e novo login de estudante, envio de currículo e candidatura, e publicação de oportunidade pela empresa; adicionou fluxos de API MockMvc para cadastro, atualização de perfil, envio de currículo e candidatura de estudante, além de login, publicação e consulta da oportunidade pela empresa. Os testes usam arquivos SQLite isolados, podem ser executados localmente e foram incluídos na CI. A origem CORS passou a ser configurável para permitir portas isoladas de teste.
- **O que o time aproveitou:** os testes exercitam o frontend React/Vite e a API Spring Boot reais usando SQLite. As alterações locais existentes no JSON do usuário foram preservadas.
- **O que foi corrigido ou rejeitado, e por quê:** não se afirma que a CI remota foi executada. A tela de perfil atualmente envia o campo `courses`, que a API rejeita; isso foi identificado ao examinar o fluxo da interface e não foi alterado nesta solicitação focada em testes.
- **Verificação:** os 3 fluxos Playwright e os 3 testes Java passaram; lint e build de produção do frontend passaram. O workflow remoto do GitHub Actions não foi executado.

### 27/11/2026 — Correções de perfil, notificações, candidaturas e mobile

- **Prompt principal:** O usuário pediu para executar a aplicação local, diagnosticar erros ao salvar o perfil, fazer notificações desaparecerem após a leitura, corrigir a retirada de candidatura e ajustar problemas de interface mobile.
- **IA/ferramentas utilizadas:** GitHub Copilot no VS Code, PowerShell, Java 25, Maven Wrapper, npm e Playwright.
- **O que a IA gerou ou alterou:** adicionou validação e persistência dos cursos do perfil no SQLite; criou o endpoint `DELETE /api/applications/{id}` com verificação de propriedade; passou a registrar notificações lidas por usuário no `localStorage` e mostrar a bolinha somente quando houver itens não lidos; permitiu a quebra de nomes longos de currículo no perfil; e ajustou a barra mobile fixa para rolagem e áreas seguras do dispositivo.
- **O que o time aproveitou:** as correções de perfil, candidatura, notificações e navegação mobile. O JDK 25 local e os servidores frontend/API foram usados somente na verificação e não são entregáveis do repositório.
- **O que foi corrigido ou rejeitado, e por quê:** mudanças exploratórias no visualizador de currículo e no layout dos cards de candidatos foram revertidas a pedido do usuário e não fazem parte das alterações finais. O espaçamento dos cards foi restaurado em vez de manter o recuo à direita proposto.
- **Verificação:** os 3 testes Java do back-end passaram; os 7 testes Playwright passaram; o build de produção do frontend passou. Não houve execução remota do GitHub Actions nem alterações no GitHub. O estado de leitura das notificações é local a cada navegador e não é sincronizado entre dispositivos.

### 27/11/2026 — Ações de oportunidades e animações de interface

- **Prompt principal:** O usuário pediu para organizar as ações de oportunidades, ajustar o botão de fechar e adicionar animações ao projeto.
- **O que a IA gerou ou alterou:** deixou apenas “Ver” na lista da empresa e moveu “Editar” e “Encerrar oportunidade” para os detalhes; removeu o fundo e a borda do X de fechar, mantendo o hover na cor primária; adicionou animações sutis para cards, páginas, navegação, botões, modais e mensagens de feedback, incluindo saída dos modais e mensagens.
- **O que o time aproveitou:** o novo fluxo de ações, os efeitos visuais discretos e o respeito à preferência de movimento reduzido do sistema.
- **O que foi corrigido ou rejeitado, e por quê:** a proposta inicial de deixar o botão de fechar vermelho e em formato de quadrado foi ajustada conforme as instruções do usuário: apenas o X, com hover na cor primária e movimento de elevação/aumento.
- **Verificação:** lint, build de produção do frontend e `git diff --check` passaram. Os testes de navegador não foram executados nesta etapa; o servidor de teste do back-end requer Java 25, enquanto o ambiente disponível estava com Java 21.
