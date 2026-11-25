# Registro de uso de IA (AI_LOG)

[English](AI_LOG.md) · **Português (Brasil)**

Registrem aqui como o time usou inteligência artificial no projeto. O uso de IA é liberado e incentivado, desde que documentado: este arquivo é entregável obrigatório e serve de roteiro para o bloco “IA na prática” da apresentação.

A documentação do projeto deve ser escrita **em inglês** (a versão principal é o [`AI_LOG.md`](AI_LOG.md)), com uma **versão em português** ao lado. Mantenham as duas versões alinhadas.

Mantenham este arquivo na **raiz** do repositório. Incluam as ferramentas utilizadas e, para cada uso relevante, o prompt principal, o que a IA gerou, o que o time aproveitou e o que foi corrigido ou rejeitado — e por quê.

Nunca commitem chaves de API, senhas ou outros segredos. Esses valores vão em `.env` (fora do repositório) e em GitHub Secrets.

Copiem o modelo abaixo sempre que precisarem de uma entrada nova.

## Ferramentas

- ChatGPT/Codex — assistente de IA utilizado no fluxo de trabalho do projeto.

## Modelo de registro

```markdown
### [data] — [tarefa ou trecho]
- **Prompt principal:**
- **O que a IA gerou:**
- **O que o time aproveitou:**
- **O que o time corrigiu ou rejeitou, e por quê:**
```

## Registro

### 24/11/2026 — Especificação do NextHub e direção de implementação
- **Prompt principal:** Gerar e organizar a plataforma NextHub conforme a especificação fornecida, com fluxos de estudante e empresa, interface responsiva e dados de demonstração conectados à API.
- **O que a IA gerou:** No contexto da conversa, a IA recebeu pedidos para gerar e revisar código da aplicação e documentação do projeto. O commit atual do repositório não contém pastas de código da aplicação nem arquivos de implementação, portanto o resultado da fonte não pode ser atribuído ou marcado como concluído apenas por este repositório.
- **O que o time aproveitou:** A documentação mantida registra o escopo do NextHub e os recursos pretendidos do MVP, enquanto o estado da implementação continua não verificado até que os arquivos da aplicação estejam presentes.
- **O que o time corrigiu ou rejeitou, e por quê:** Nenhum comportamento da implementação é registrado como concluído sem confirmação no código-fonte ou no histórico do repositório. Isso evita apresentar pedidos feitos apenas em conversa como recursos verificados.

### 24/11/2026 — Correções de navegação, interface e interação
- **Prompt principal:** Corrigir detalhes de navegação e interface relacionados a candidaturas e favoritos, ações duplicadas de publicação, posição do botão Publicar no mobile, entrada principal do mural para estudante, avatares, filtros, notificações, acesso ao currículo em PDF e telas iniciais por perfil.
- **O que a IA gerou:** Estes itens foram pedidos de alteração de código durante a conversa do projeto. A IA também revisou estrutura voltada à apresentação e comportamentos solicitados ao trabalhar com atualizações em ZIP.
- **O que o time aproveitou:** Os itens solicitados permanecem como requisitos de produto ou candidatos à implementação no contexto do projeto. Nenhum item é registrado como entregue a menos que apareça em código-fonte versionado ou no histórico do repositório.
- **O que o time corrigiu ou rejeitou, e por quê:** Interações ambíguas ou duplicadas deveriam ser corrigidas sem combinar favoritos e candidaturas nem ocultar comportamentos específicos de perfil. Como não há implementação-fonte disponível no commit atual, as correções solicitadas não são apresentadas como alterações confirmadas.

### 24/11/2026 — Preparação dos dados de demonstração
- **Prompt principal:** Ampliar as oportunidades e os perfis de candidatos demonstrativos e preparar pacotes atualizados do projeto para o VS Code.
- **O que a IA gerou:** A conversa informa uma ampliação com intenção de produzir 20 oportunidades, 8 perfis de estudantes e 14 candidaturas. Também envolveu preparação e atualização de pacotes ZIP.
- **O que o time aproveitou:** Apenas contagens e tarefas de pacote sustentadas por dados versionados ou pelo histórico devem ser mantidas como fatos do repositório. O repositório atual contém apenas documentação e não inclui os arquivos JSON nem o pacote ZIP mencionados, portanto estas contagens não são marcadas como verificadas.
- **O que o time corrigiu ou rejeitou, e por quê:** Os dados de candidatos e oportunidades são fictícios e servem à demonstração; nenhuma senha real, segredo ou dado pessoal deve ser enviado ao repositório. Uma ampliação de pacote ou dados não deve ser descrita como incluída antes que os arquivos correspondentes existam no repositório.

### 24/11/2026 — Revisão e alinhamento da documentação
- **Prompt principal:** Completar os registros de uso de IA e decisões do projeto em inglês e português, mantendo as versões dos dois idiomas alinhadas.
- **O que a IA gerou:** Sugestões de atualização para `AI_LOG.md`, `AI_LOG.pt-BR.md`, `DECISIONS.md` e `DECISIONS.pt-BR.md`, preservando a estrutura bilíngue e os modelos existentes.
- **O que o time aproveitou:** Os arquivos em inglês permanecem como versões principais e os arquivos em português refletem o conteúdo e a estrutura correspondentes.
- **O que o time corrigiu ou rejeitou, e por quê:** Textos ilustrativos ou marcadores de modelo não podem ser apresentados como evidência de implementação do projeto. Apenas decisões registradas e detalhes de implementação sustentados pelos arquivos do repositório ou por histórico verificável são incluídos como fatos confirmados.
