# Decisões do projeto

[English](DECISIONS.md) · **Português (Brasil)**

Registrem aqui as decisões importantes do time. Cada entrada deve ser curta e trazer o que foi decidido, as alternativas consideradas e o motivo da escolha.

A documentação do projeto deve ser escrita **em inglês** (a versão principal é o [`DECISIONS.md`](DECISIONS.md)), com uma **versão em português** ao lado. Mantenham as duas versões alinhadas.

Mantenham este arquivo na **raiz** do repositório. Incluam uma entrada nova para cada decisão relevante (stack, arquitetura, recorte do MVP, o que ficou de fora, caminhos que vocês tentaram e abandonaram etc.). Este arquivo serve de roteiro para o bloco de decisões da apresentação.

Copiem o modelo abaixo sempre que precisarem de uma entrada nova.

## Modelo

```markdown
## [data] — [título da decisão]
- **Decisão:**
- **Alternativas consideradas:**
- **Motivo:**
```

## 23/11/2026 — Referências de mercado para a experiência do mural

- **Decisão:** usar o **InfoJobs** e o **Indeed** como referências de inspiração para organizar e apresentar as oportunidades no mural.
- **Alternativas consideradas:** criar uma experiência totalmente original; reproduzir exatamente o layout de uma única plataforma; combinar padrões de múltiplos portais de vagas.
- **Motivo:** essas plataformas já oferecem padrões claros e familiares, como busca objetiva, filtros úteis e cards concisos com informações essenciais. O mural pode aproveitar esses aprendizados sem copiar os produtos: o objetivo é manter uma navegação simples e criar uma identidade própria, mais próxima da proposta do projeto.

## 24/11/2026 — Definição oficial do MVP do NextHub

- **Decisão:** entregar um MVP responsivo, completo de ponta a ponta e demonstrável em uma semana. O estudante deve conseguir cadastrar perfil e currículo PDF, visualizar recomendações e candidaturas, salvar oportunidades e publicar seu interesse. A empresa deve conseguir publicar oportunidades e visualizar os candidatos inscritos.
- **Alternativas consideradas:** reduzir o MVP a um mural estático; adicionar um processo seletivo completo; criar um marketplace de vagas com busca externa e integração institucional.
- **Motivo:** o fluxo completo é mais valioso para a apresentação do que uma lista extensa de funcionalidades pela metade. O escopo cobre pesquisa, recomendação, candidatura básica e publicação sem exigir serviços externos ou infraestrutura complexa.

## 24/11/2026 — Stack planejada do MVP
- **Decisão:** planejar o MVP com frontend React/Vite e backend Java/Spring Boot, sujeito à implementação realmente versionada.
- **Alternativas consideradas:** HTML/CSS/JavaScript puro com Node.js e Express; bancos SQL/NoSQL externos.
- **Motivo:** a base confirmada no repositório usa React 19 com Vite no frontend e Java 17 com Spring Boot no backend. Este registro descreve o plano documentado e não afirma que API ou recursos estavam concluídos antes de haver evidência no código.

## 24/11/2026 — Identidade visual e navegação por papel

- **Decisão:** adotar o nome NextHub, fundo claro com modo escuro acessível, azul escuro como cor principal e etiquetas por categoria: laranja para Estágio, rosa para Evento, verde para Freelancer e roxo para Curso. O desktop usa Sidebar fixa e o mobile usa Bottom Navigation Bar.
- **Alternativas consideradas:** identidade genérica sem marca própria; navegação igual para candidato e empresa; troca de tema acessada por botão solto em telas pequenas.
- **Motivo:** uma identidade própria melhora o reconhecimento da apresentação e as cores categorizadas aceleram a leitura. Navegações específicas deixam cada perfil mais objetivo, e a Bottom Bar oferece uma experiência próxima de aplicativo móvel.

## 24/11/2026 — Recomendações explicáveis no mural

- **Decisão:** calcular recomendações comparando interesses, formato e disponibilidade do estudante com os dados das oportunidades. As correspondências devem aparecer abaixo da busca e informar um motivo curto, como “combina com seu interesse em Tecnologia e Remoto”.
- **Alternativas consideradas:** lista aleatória; ranking opaco por inteligência artificial; recomendação baseada apenas em palavras-chave.
- **Motivo:** o alinhamento simples é determinístico, fácil de explicar na apresentação e suficiente para demonstrar personalização sem caixa-preta ou custo de API externa.

## 24/11/2026 — Unificação de Salvos e Candidaturas

- **Decisão:** remover uma aba separada de Salvos e mostrar oportunidades salvas em uma divisão discreta dentro da área de Candidaturas do estudante.
- **Alternativas consideradas:** manter abas independentes de Salvos e Candidaturas; listar somente candidaturas realizadas.
- **Motivo:** a unificação reduz um clique e mantém em um só local as oportunidades acompanhadas pelo estudante. A separação visual deve ser discreta para não poluir a interface.

## 24/11/2026 — Configurações centralizadas

- **Decisão:** concentrar troca de tema Claro/Escuro e logout em uma única tela de Configurações, no desktop e no mobile.
- **Alternativas consideradas:** botão solto de tema no cabeçalho ou navbar mobile; ações separadas nas diferentes telas.
- **Motivo:** centralizar ações globais reduz ruído visual, preserva espaço na navegação mobile e cria uma experiência consistente entre os dois perfis.

## 24/11/2026 — Perfil acadêmico e currículo

- **Decisão:** incluir dados básicos, interesses, formato, disponibilidade, cursos detalhados e upload real de currículo em PDF. Exibir uma barra de conclusão calculada pelos campos preenchidos e pelo currículo enviado.
- **Alternativas consideradas:** perfil limitado a nome e interesses; armazenamento fictício do currículo; sistema de pontos, nível ou ranking.
- **Motivo:** esses dados sustentam o match e permitem que a empresa avalie o candidato. A barra de conclusão orienta o preenchimento sem transformar o produto em um sistema gamificado.

## 24/11/2026 — Dados locais e reset da demonstração

- **Decisão:** manter pelo menos 12 oportunidades realistas em JSON e disponibilizar um script Python simples para repovoar os dados antes da apresentação.
- **Alternativas consideradas:** cadastro manual durante a demo; banco SQL local; banco externo em nuvem.
- **Motivo:** dados pré-carregados evitam telas vazias e permitem uma demonstração previsível. Arquivos locais são fáceis de resetar, versionar e executar offline.

## 24/11/2026 — Itens rejeitados do MVP

- **Decisão:** deixar fora sistema de pontuação, gamificação e ranking; processo seletivo completo das empresas; varredura automática da internet; bancos externos complexos; botão permanente de tema na navegação mobile; e abas separadas de Salvos.
- **Alternativas consideradas:** implementar todos esses extras durante a semana; manter apenas uma seleção parcial desses recursos.
- **Motivo:** esses itens aumentariam o tempo de implementação, a complexidade técnica ou a poluição visual sem serem essenciais para validar o problema central. O grupo prioriza um fluxo profissional, direto e estável.

**## 25/11/2026 — Separação entre frontend e backend**

- **Decisão:** organizar o projeto NextHub em duas aplicações independentes: frontend na pasta `Front-end/`, utilizando React 19 e Vite, e backend na pasta `Back-end/`, utilizando Java 17 e Spring Boot.
- **Alternativas consideradas:** manter tudo em uma única aplicação; utilizar Node.js e Express no backend; manter a estrutura inicial sem separar as tecnologias.
- **Motivo:** a separação permite que as equipes trabalhem de forma independente em cada camada, facilita a manutenção e estabelece uma arquitetura mais organizada e escalável.

**## 25/11/2026 — Inicialização do frontend com Vite**

- **Decisão:** utilizar Vite para inicializar e gerenciar a aplicação React do frontend.
- **Alternativas consideradas:** configurar manualmente toda a estrutura React; utilizar outras ferramentas de inicialização, como Create React App.
- **Motivo:** o Vite oferece inicialização rápida, servidor de desenvolvimento e configuração simplificada, facilitando o desenvolvimento e a execução da interface.

**## 25/11/2026 — Backend baseado em Java e Spring Boot**

- **Decisão:** utilizar Java 17 e Spring Boot para estruturar o backend, mantendo seus arquivos diretamente na pasta `Back-end/` do repositório.
- **Alternativas consideradas:** utilizar Node.js com Express; manter uma pasta de projeto Java aninhada dentro de outra pasta `Back-end/`.
- **Motivo:** Spring Boot oferece uma estrutura organizada para desenvolver APIs e facilita a implementação das regras de negócio. Manter os arquivos diretamente na pasta principal do backend evita níveis desnecessários de diretórios.

**## 25/11/2026 — Comunicação entre frontend e backend**

- **Decisão:** estabelecer a comunicação entre React e Spring Boot por meio de uma API, utilizando JSON para enviar e receber dados.
- **Alternativas consideradas:** compartilhar arquivos diretamente entre as aplicações; utilizar Node.js como intermediário; concentrar frontend e backend em uma única aplicação.
- **Motivo:** a comunicação por API REST com JSON mantém as aplicações independentes, utiliza um formato amplamente adotado e permite que cada camada evolua sem depender da implementação interna da outra.

**## 25/11/2026 — Execução independente das aplicações**

- **Decisão:** manter comandos de inicialização independentes para frontend e backend, permitindo executar e testar cada aplicação separadamente durante o desenvolvimento.
- **Alternativas consideradas:** executar as duas aplicações por meio de um único processo; depender da inicialização manual de ferramentas externas para cada alteração.
- **Motivo:** a execução independente facilita a identificação de erros, os testes e o desenvolvimento paralelo das equipes.

## 25/11/2026 — Inicialização do frontend e do backend
- **Decisão:** inicializar o frontend em `Front-end/` com React e Vite e o backend em `Back-end/` com Java 17 e Spring Boot.
- **Alternativas consideradas:** implementar frontend e backend em um único projeto Node.js; manter o projeto apenas em estrutura documental; iniciar o backend já conectado a banco de dados.
- **Motivo:** a configuração versionada fornece áreas separadas de desenvolvimento e configurações iniciais de build. O frontend contém a aplicação inicial do Vite e o backend contém a classe principal Spring e dependências básicas; nenhum dos dois deve ser descrito como implementação completa do NextHub neste estágio.

## 25/11/2026 — Estado de verificação da implementação no repositório
- **Decisão:** não marcar recursos solicitados ou relatados apenas em conversa como implementados até que exista código-fonte ou commit verificável no repositório.
- **Alternativas consideradas:** apresentar atualizações em ZIP ou relatórios de conversa como concluídos; documentar todos os comportamentos solicitados como entregues.
- **Motivo:** as evidências atuais confirmadas são a estrutura dos projetos, a aplicação inicial React e a aplicação inicial Spring. Fluxos de oportunidades, candidatos, candidaturas, favoritos e PDF devem ser confirmados no código antes de serem registrados como concluídos.
