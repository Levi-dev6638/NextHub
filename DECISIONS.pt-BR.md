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

## 23/11/2026 — Escolha da stack de back-end (exemplo)

- **Decisão:** usar Node.js com Express no back-end.
- **Alternativas consideradas:** Java com Spring Boot; Python com FastAPI.
- **Motivo:** o time já tem mais familiaridade com JavaScript, e o prazo de uma semana favorece uma stack na qual todos conseguem contribuir desde o primeiro dia.

## 23/11/2026 — Referências de mercado para a experiência do mural

- **Decisão:** usar o **InfoJobs** e o **Indeed** como referências de inspiração para organizar e apresentar as oportunidades no mural.
- **Alternativas consideradas:** criar uma experiência totalmente original; reproduzir exatamente o layout de uma única plataforma; combinar padrões de múltiplos portais de vagas.
- **Motivo:** essas plataformas já oferecem padrões claros e familiares, como busca objetiva, filtros úteis e cards concisos com informações essenciais. O mural pode aproveitar esses aprendizados sem copiar os produtos: o objetivo é manter uma navegação simples e criar uma identidade própria, mais próxima da proposta do projeto.

## 23/11/2026 — Separação entre back-end em Java e front-end em Node.js, HTML e CSS

- **Decisão:** usar Java no back-end e Node.js com HTML e CSS no front-end.
- **Alternativas consideradas:** Node.js com Express em todo o projeto; Java com Spring Boot em todo o projeto; Python com FastAPI no back-end.
- **Motivo:** a combinação permite explorar duas tecnologias de back-end com propostas diferentes: Java oferece uma base madura e estruturada, enquanto Node.js atende à camada de apresentação e à integração com HTML e CSS. A decisão será validada durante a implementação do MVP e pode ser ajustada caso surjam limitações técnicas ou de integração.

## 24/11/2026 — Definição oficial do MVP do NextHub

- **Decisão:** entregar um MVP responsivo, completo de ponta a ponta e demonstrável em uma semana. O estudante deve conseguir cadastrar perfil e currículo PDF, visualizar recomendações e candidaturas, salvar oportunidades e publicar seu interesse. A empresa deve conseguir publicar oportunidades e visualizar os candidatos inscritos.
- **Alternativas consideradas:** reduzir o MVP a um mural estático; adicionar um processo seletivo completo; criar um marketplace de vagas com busca externa e integração institucional.
- **Motivo:** o fluxo completo é mais valioso para a apresentação do que uma lista extensa de funcionalidades pela metade. O escopo cobre pesquisa, recomendação, candidatura básica e publicação sem exigir serviços externos ou infraestrutura complexa.

## 24/11/2026 — Stack final do MVP

- **Decisão:** usar HTML5, CSS3 e JavaScript ES6+ no front-end, Node.js com Express no back-end, Multer para upload de currículo PDF e arquivos JSON locais para usuários, oportunidades e candidaturas.
- **Alternativas consideradas:** Java com Spring Boot no back-end; React ou Vue no front-end; bancos SQL/NoSQL externos.
- **Motivo:** esta combinação permite integração simples, baixa complexidade de ambiente e execução local no VS Code. HTML/CSS/JS facilita o desenvolvimento colaborativo no prazo de uma semana, enquanto Express fornece uma API REST direta e JSON garante demonstração offline estável.

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
