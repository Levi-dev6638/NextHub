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

## [data] — [título da decisão]

- **Decisão:**
- **Alternativas consideradas:**
- **Motivo:**
