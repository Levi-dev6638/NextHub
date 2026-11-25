# Registro de uso de IA (AI_LOG)

[English](AI_LOG.md) · **Português (Brasil)**

Registrem aqui como o time usou inteligência artificial no projeto. O uso de IA é liberado e incentivado, desde que documentado: este arquivo é entregável obrigatório e serve de roteiro para o bloco “IA na prática” da apresentação.

A documentação do projeto deve ser escrita **em inglês** (a versão principal é o [`AI_LOG.md`](AI_LOG.md)), com uma **versão em português** ao lado. Mantenham as duas versões alinhadas.

Mantenham este arquivo na **raiz** do repositório. Incluam as ferramentas utilizadas e, para cada uso relevante, o prompt principal, o que a IA gerou, o que o time aproveitou e o que foi corrigido ou rejeitado — e por quê.

Nunca commitem chaves de API, senhas ou outros segredos. Esses valores vão em `.env` (fora do repositório) e em GitHub Secrets.

Copiem o modelo abaixo sempre que precisarem de uma entrada nova.

## Ferramentas

- GitHub Copilot, claude, gemini

## Modelo de registro

```markdown
### [data] — [tarefa ou trecho]

- **Prompt principal:**
- **O que a IA gerou:**
- **O que o time aproveitou:**
- **O que o time corrigiu ou rejeitou, e por quê:**
```

## Registro

### 24/11/2026 — Autenticação JWT (exemplo)

- **Prompt principal:** "Gere um middleware de autenticação JWT em Node.js/Express, com tratamento de token expirado e uma rota protegida de exemplo."
- **O que a IA gerou:** um middleware e um exemplo de rota, com uma dependência desatualizada e sem validação de variáveis de ambiente.
- **O que o time aproveitou:** a estrutura do middleware e o fluxo de verificação do token.
- **O que o time corrigiu ou rejeitou, e por quê:** atualizamos a biblioteca, movemos o segredo para variável de ambiente e incluímos testes. O exemplo de rota foi reescrito para se adequar ao nosso modelo de usuário.

### 24/11/2026 — Organização do escopo e criação do protótipo inicial do Mural de Oportunidades

- **Prompt principal:** "Como Engenheiro de Software Sênior e Designer UI/UX, organize o escopo oficial do projeto e crie do zero um protótipo funcional completo e pronto para apresentação do Mural de Oportunidades NextHub para estudantes e jovens. Priorize um fluxo navegável de uma semana, usando HTML/CSS/JavaScript puro no frontend, Node.js com Express no backend, Multer para currículos PDF e dados locais em JSON. Inclua os perfis de candidato e empresa, cadastro e perfil completo, recomendações por match, busca e filtros, salvamento e candidatura, publicação de oportunidades, gestão de candidatos e download de currículos. Registre também o que entrou no escopo e o que foi rejeitado ou retirado, com justificativas técnicas e estratégicas."
- **O que a IA gerou:** uma consolidação oficial das decisões adotadas e dos itens recusados; uma estrutura full stack em HTML/CSS/JavaScript, Node.js/Express e JSON; API REST, upload real de PDFs, dados fictícios pré-populados e telas navegáveis para candidato e empresa. Também foram definidos o nome NextHub, as recomendações por interesses/formato/disponibilidade, a navegação responsiva, o tema claro/escuro e os fluxos de perfil, mural, candidatura, publicação e gestão de candidatos.
- **O que o time aproveitou:** a organização clara do escopo, a arquitetura local simples e estável, os dados fictícios realistas, o fluxo completo de estudante e empresa, a identidade visual moderna, a navegação desktop/mobile e a centralização das configurações.
- **O que o time corrigiu ou rejeitou, e por quê:** o time não delegou as decisões à IA. Mantém gamificação e pontuação fora do escopo, assim como abas separadas de Salvos, botão solto de tema no mobile e frameworks ou bancos externos complexos. Optou por integrar Salvos a Candidaturas, colocar tema e logout em Configurações e usar apenas HTML/CSS/JavaScript, Node.js/Express e JSON para reduzir clics, complexidade visual e riscos de conexão na apresentação.
