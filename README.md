# hello-lvserv

App mínimo para o primeiro deploy no lvserv: um servidor HTTP em Node, sem dependências, com `Dockerfile` e `.env.example`.

Publique esta pasta como um repositório público no GitHub e cadastre a URL no painel. O passo a passo está em `docs/epic2-relatorio.md`, na seção do roteiro do primeiro deploy.

- Porta: 3000, detectada pelo `EXPOSE`.
- Variável opcional: `GREETING`, o texto da resposta.
