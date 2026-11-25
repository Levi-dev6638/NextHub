# Briefing do tema: Mural de oportunidades

[English](BRIEFING.md) · **Português (Brasil)**

**Hack com IA: Codando com Inteligência**  
Senac na Prática · Técnico em Desenvolvimento de Sistemas  
Área: vida no campus e comunidade  
Imersão de 23/11 a 29/11 · apresentações em 30/11 e 01/12

Este briefing é o ponto de partida do **seu** tema. Leiam com calma, recortem um MVP que caiba em uma semana e registrem as decisões. Vocês vão transformar este problema em um produto real, com front-end e back-end, repositório organizado e uso documentado de IA. Esta é uma imersão colaborativa: a banca avalia o que o time construiu, decidiu e aprendeu.

## Tema e contexto

**Mural de oportunidades** — Agregador de vagas de estágio, cursos e eventos, com recomendação personalizada.

Vagas de estágio, cursos livres, oficinas, palestras e eventos da área aparecem espalhados: um cartaz no mural, um recado no grupo, um link que alguém encaminhou tarde demais. Quando o estudante percebe, o prazo passou. O que falta não é só “mais um feed”: é um lugar em que essas oportunidades da vida no campus e no entorno possam ser encontradas, filtradas e aproximadas do interesse de cada pessoa.

Vocês vão montar um agregador com cara de mural vivo, em que a recomendação ajuda o estudante a ver o que faz sentido para ele — e não uma lista infinita e genérica.

## Público e personas

- **Estudante em busca de estágio, curso ou evento:** quer filtrar, entender o essencial e guardar o que interessa.
- **Quem divulga uma oportunidade:** professor, empresa parceira, coletivos ou a própria equipe, publicando um recorte claro (título, tipo, prazo, link).
- **Estudante que ainda está explorando a área:** se beneficia de recomendações explicáveis, não de uma caixa-preta.

## Objetivo

Entregar um MVP que reúne oportunidades de estágio, cursos e eventos, permite buscar e filtrar, guarda um perfil de interesses e recomenda itens a partir desse perfil — com a IA ajudando a organizar e a personalizar.

## Requisitos mínimos (MVP)

O recorte abaixo é realista para uma semana. Fechem-no no primeiro dia e registrem no `DECISIONS.md` o que entra, o que fica de fora e por quê. É melhor um fluxo completo e demonstrável do que uma lista longa pela metade.

1. Cadastrar uma oportunidade com tipo (estágio, curso ou evento), título, descrição, datas ou prazo e um link ou contato.
2. Listar, buscar e filtrar por tipo, prazo ou assunto.
3. Ver a página de detalhe com as informações essenciais.
4. O estudante informa interesses (temas, formato, disponibilidade aproximada).
5. O sistema recomenda oportunidades a partir desse perfil, de forma visível na interface.
6. Salvar ou favoritar uma oportunidade para acompanhar depois.

## Onde a IA entra

O uso de IA é liberado e incentivado — no produto e no processo — e precisa aparecer no `AI_LOG.md`. Algumas frentes concretas neste tema:

- Recomendar itens com base no perfil, deixando visível por que aquele item apareceu.
- Gerar um resumo curto de descrições longas.
- Sugerir etiquetas de assunto a partir do texto da oportunidade.
- Ajudar quem vai publicar a completar um anúncio incompleto (prazo, tipo, público).

Não publiquem, sem revisão de vocês, um texto ou uma decisão automática da IA como se já fosse a versão final.

## Extras opcionais

Só depois que o MVP estiver em pé. São ideias, não obrigações:

- Visão em calendário dos eventos da semana.
- Aviso quando uma oportunidade salva estiver perto do prazo.
- Marcar “já me candidatei” ou “não me interessa”.
- Uma pequena base inicial (dados de exemplo) para a demo não depender de dezenas de cadastros ao vivo.

## Fora de escopo

Para proteger o prazo e o foco do produto:

- Processo seletivo completo das empresas (currículo, testes, acompanhamento de candidatura oficial).
- Varredura automática de toda a internet em busca de vagas.
- Garantia de estágio ou de vaga em curso.
- Um portal institucional oficial de empregabilidade do Senac.

## Perguntas para guiar o time

Usem estas perguntas no primeiro dia, ao definir o MVP, e de novo antes da demo:

- De onde vem o primeiro conjunto de oportunidades na demo — um cadastro manual de exemplo é suficiente e honesto?
- Como vocês explicam uma recomendação, em vez de só mostrar um bloco “para você”?
- O que acontece com eventos e vagas cujo prazo já passou?
- Como o perfil de interesses é editado quando a pessoa muda de ideia?
- Que informação mínima uma oportunidade precisa ter para entrar no mural?

## Entregáveis e como a banca avalia

Esta é uma **imersão colaborativa** de uma semana, com times de 3 ou 4 estudantes do TDS. A banca avalia o trabalho de **vocês**, no próprio projeto — um retorno formativo, não uma comparação com outros times.

**O que precisa estar pronto no repositório** (raiz), em **inglês** (versão principal) e em **português** (`.pt-BR`), com o link entre os idiomas no topo de cada arquivo:

- `README.md` e `README.pt-BR.md`
- `DECISIONS.md` e `DECISIONS.pt-BR.md`
- `AI_LOG.md` e `AI_LOG.pt-BR.md`

A aplicação precisa ter **front-end e back-end**. O back-end pode ser **Java**, **Python** ou **Node.js** (isolados ou combinados, desde que integrados). O front-end é obrigatório (web, desktop ou mobile). Justifiquem a stack no `DECISIONS.md`. Também são obrigatórios o histórico com Conventional Commits, o trabalho via Pull Request com revisão, a proteção da `main` e uma pipeline de **GitHub Actions** verde (build, lint e testes) em PRs e na `main`. Não commitem segredos. No primeiro dia, adicionem o professor como colaborador: **adrianoanschau@gmail.com**.

O **congelamento do código** é no domingo, **29/11, às 23h59**. As apresentações são em **15 minutos + 5 minutos de perguntas**, nos dias 30/11 e 01/12, no Senac de Canoas, Sala 103. Ensaiem a demo e o roteiro (problema e solução, demo ao vivo, fluxo de trabalho, decisões, IA na prática e CI/CD).

A avaliação tem **duas bancas, com o mesmo peso**:

- **Banca Técnica (50%):** qualidade de código e arquitetura; Git, Conventional Commits e PRs; CI/CD; domínio do código nas perguntas.
- **Banca de Inovação e Impacto (50%):** originalidade; impacto (o problema real e para quem); experiência do usuário; clareza do pitch; uso criativo da IA.

Qualquer pessoa do time pode ser perguntada sobre qualquer parte do projeto. Usem a IA com inteligência, registrem o que ela gerou e o que vocês corrigiram, e assumam o código que forem apresentar.

Bom trabalho — e que a semana seja intensa, colaborativa e bem documentada.

