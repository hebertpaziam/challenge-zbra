# ZBRA Challenge

- As instruções para o teste estão dentro do diretório `instructions`;
- Indicamos que use React, Angular ou TypeScript (fique à vontade);
- Você terá 3 dias para entregar o projeto (tudo bem se levar um pouco mais de tempo);
- Consideraremos apenas código presente no branch `main`;
- Com este projeto, queremos entender seus conhecimentos!

E por fim, esperamos que você entregue o seu melhor!

---

## Iniciando

Esse é um projeto [Next.js](https://nextjs.org/) iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Primeiramente, instale as dependencias usando o NPM:

```bash
npm install
```

em seguida rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu browser e veja o resultado.

Esse projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para automaticamente otimizar e carregar a Roboto, uma fonte do Google Fonts.

---
## Testes Unitários
Os testes unitários foram desenvolvidos utilizando o [jest](https://jestjs.io/) e com o apoio do [faker.js](https://fakerjs.dev/) para gerar a massa de dados.

É possível rodar os testes de duas maneiras considerando que a primeira tem o objetivo de ser utilizada para desenvolver os testes e a segunda tem o objetivo de ser utilizada em uma futura pipeline de CI/CD

```bash
npm run test
```

ou

```bash
npm run test:ci
```

---
## Testes E2E
Os testes E2E foram desenvolvidos utilizando o [cypress](https://www.cypress.io/) e com o apoio do [faker.js](https://fakerjs.dev/) para gerar a massa de dados.

É possível rodar os testes de duas maneiras considerando que a primeira tem o objetivo de ser utilizada para desenvolver os testes e a segunda tem o objetivo de ser utilizada em uma futura pipeline de CI/CD

```bash
npm run e2e
```

ou

```bash
npm run e2e:ci
```

## Saiba Mais

Para saber mais sobre o Next.js, de uma olhada nos recursos a seguir:

- [Documentação Next.js](https://nextjs.org/docs) - saiba mais sobre as funcionalidades Next.js e sua API.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode conferir [o repositório Next.js no GitHub](https://github.com/vercel/next.js/)
