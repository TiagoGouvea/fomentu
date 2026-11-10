# Instruções do projeto

Este repositório é a base de um treinamento rápido de programação com IA, ministrado por Tiago
Gouvêa, da App Masters. Os participantes trabalham em grupos independentes; cada cópia da
aplicação representa um único grupo e não deve interagir com dados dos demais grupos.

- Toda documentação criada ou alterada neste projeto DEVE ser escrita em português brasileiro
  (PT-BR), incluindo títulos, explicações, comentários e documentação técnica. A regra vale para
  especificações, planos e listas de tarefas, mesmo quando o template do Spec Kit estiver em inglês.
- Preserve no idioma original identificadores de código, comandos, nomes oficiais e citações ou trechos externos quando a tradução prejudicar sua precisão; explique o contexto em PT-BR.
- `src/` contém o código do frontend da aplicação, incluindo a interface administrativa em
  `src/admin/`. `functions/` contém o backend. A pasta `admin/` na raiz contém apenas scripts de
  gestão da oficina e não é a interface administrativa nem parte do frontend.

- Antes de trabalhar, leia `.specify/memory/constitution.md`,
  `specs/001-base-do-treinamento/spec.md`, o [rascunho das funcionalidades](docs/features-draft.md)
  e os ADRs em `docs/adr/`. O rascunho reúne as quatro funcionalidades que cada grupo deve
  desenvolver no projeto, uma por vez.
- Use o [edital completo de incubação do CRITT](docs/edital-incubacao-critt-2025.md) como referência
  para as informações solicitadas na submissão e os critérios de avaliação dos projetos.
- Considere os ADRs existentes no planejamento. Os grupos podem registrar novas decisões, incluindo
  a de IA, e devem seguir a organização por área definida no ADR 003.
- Use os componentes do Mantine nas interfaces, conforme o ADR 004, e mantenha o tema compartilhado.
- Use somente o grupo desta cópia, configurado por `VITE_GROUP_ID` no `.env.local`, nas operações
  relacionadas ao site. Na área administrativa, identifique e autorize o grupo pela conta
  autenticada e sua claim `groupId`; a variável de ambiente não concede autorização.
- Os tipos mínimos `Project` e `Evaluation` estão em `src/types/entities.ts`. Expanda-os com os
  campos necessários às funcionalidades, conforme a especificação e o planejamento do grupo.
- Atualize o estado das tarefas da base apenas com evidências de implementação e verificação.
- As quatro funcionalidades dos rascunhos são o exercício dos participantes; não as entregue prontas
  durante a preparação da base.
- Trabalhe em uma etapa por vez. Em cada etapa, incluindo especificação, esclarecimento (`clarify`),
  planejamento (`plan`) e verificação (`verify`), revise o resultado com o usuário, resolva dúvidas
  e incorpore os ajustes solicitados. Avance somente após o aceite explícito do usuário.
- Na especificação, prefira perguntar ao usuário sobre os detalhes e critérios de aceite antes de
  considerar a especificação pronta; registre as respostas e explicite premissas que permanecerem.
- Não misture especificação e planejamento: especifique o que deve acontecer e por quê; defina como
  implementar e as decisões técnicas no planejamento.
- Não implemente o sistema durante a especificação ou o planejamento. A implementação ocorre na
  etapa própria, após o planejamento.
- Não implemente testes de segurança das Security Rules do Firebase: os grupos de estudantes
  compartilham o mesmo banco e esse esforço não é prioridade da atividade.
- Divida a implementação em tarefas pequenas e verificáveis, organizadas nas fases e histórias
  do Spec Kit. Não imponha uma quantidade fixa: inclua apenas os passos necessários aos critérios
  de aceite e aproveite a infraestrutura já existente na base.
- Na especificação, indique um cenário automatizado de navegador para o fluxo principal de cada
  funcionalidade. Inclua no máximo um segundo cenário, apenas se ele cobrir um risco relevante que
  o primeiro deixa em aberto. Aproveite os testes existentes e siga o
  [ADR 002](docs/adr/002-estrategia-de-testes.md) para as verificações complementares.
- Quando o usuário pedir para rodar testes ou perguntar como executá-los, ofereça
  `yarn test:e2e:emulador:visual` se houver um teste de navegador pertinente. Na primeira vez,
  sugira que ele rode o comando no próprio terminal para acompanhar o fluxo no Playwright.
  Para acompanhar também o [painel do Firebase](http://localhost:4000), acrescente `--ui` ao comando.
