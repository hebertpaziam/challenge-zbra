/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import { faker } from "@faker-js/faker";

// Cypress E2E Test
describe("App", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("http://localhost:3000/");
  });

  it("should render all items with empty state", () => {
    cy.get(".main-form .title").should("have.text", "Valide sua senha");

    cy.get(".text-field label[for='name']").should("have.text", "Nome");
    cy.get(".text-field input[id='name']")
      .should("not.have.value")
      .should("have.attr", "name", "name")
      .should("have.attr", "placeholder", "Digite seu nome");

    cy.get(".text-field label[for='email']").should("have.text", "E-mail");
    cy.get(".text-field input[id='email']")
      .should("not.have.value")
      .should("have.attr", "name", "email")
      .should("have.attr", "placeholder", "Digite seu e-mail");

    cy.get(".text-field label[for='password']").should("have.text", "Senha");
    cy.get(".text-field input[id='password']")
      .should("not.have.value")
      .should("have.attr", "name", "password")
      .should("have.attr", "placeholder", "Digite sua senha");

    cy.get(".text-field .feedback")
      .should("have.length", 3)
      .should("not.have.text");

    cy.get(".alert-box").should("not.exist");

    cy.get(".action-button")
      .should("have.text", "Enviar")
      .should("be.disabled");
  });

  it("should render smoothly with responsivity", () => {
    //SETUP
    cy.intercept("POST", "**/valid-passwords/results*", {
      delay: 300,
      statusCode: 201,
    });
    const seed = Array.from({ length: 5 }, () =>
      faker.number.int({ min: 2, max: 7 })
    );

    cy.get(".text-field input[id='name']").type(faker.person.fullName());
    cy.get(".text-field input[id='email']").type(faker.internet.email());
    cy.get(".text-field input[id='password']").type(
      [...seed, seed[0]].sort((a, b) => a - b).join("")
    );
    cy.get(".main-form").submit();

    //DESKTOP VIEW
    cy.viewport("macbook-16");

    cy.get(".main-form .content").should("have.css", "gap", "19.2px");

    cy.get(".main-form .footer")
      .should("have.css", "flex-direction", "row")
      .should("have.css", "margin-top", "0px");

    cy.get(".alert-box").should("have.css", "text-align", "start");

    cy.get(".action-button")
      .should("have.css", "width", "140px")
      .should("have.css", "padding", "16px 20px");

    //MOBILE VIEW
    cy.viewport("iphone-xr");
    cy.wait(300);

    cy.get(".main-form .content").should("have.css", "gap", "16px");

    cy.get(".main-form .footer")
      .should("have.css", "flex-direction", "column")
      .should("have.css", "margin-top", "384.922px");

    cy.get(".alert-box").should("have.css", "text-align", "center");

    cy.get(".action-button")
      .should("have.css", "width", "318px")
      .should("have.css", "padding", "8px");
  });

  describe("Validation failure", () => {
    it("should render name required validation errors", () => {
      cy.get(".text-field input[id='name']").click().focus().blur();
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Nome é obrigatório"
      );
    });

    it("should render email required validation errors", () => {
      cy.get(".text-field input[id='email']").click().focus().blur();
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "E-mail é obrigatório"
      );
    });

    it("should render email pattern validation error", () => {
      cy.get(".text-field input[id='email']").type(faker.lorem.word());
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Endereço de e-mail inválido"
      );
    });

    it("should render password required validation error", () => {
      cy.get(".text-field input[id='password']").click().focus().blur();
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha é obrigatória"
      );
    });

    it("should render password less than six digits validation error", () => {
      cy.get(".text-field input[id='password']")
        .clear()
        .type(`${faker.number.int({ max: 99999 })}`);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve conter 6 dígitos"
      );
    });

    it("should render password more than six digits validation error", () => {
      cy.get(".text-field input[id='password']")
        .clear()
        .type(`${faker.number.int({ min: 1000000 })}`);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve conter 6 dígitos"
      );
    });

    it("should render password min value validation error", () => {
      cy.get(".text-field input[id='password']")
        .clear()
        .type(`${faker.number.int({ min: 100000, max: 184758 })}`);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve ser maior ou igual a 184759"
      );
    });

    it("should render password max value validation error", () => {
      cy.get(".text-field input[id='password']")
        .clear()
        .type(`${faker.number.int({ min: 856921, max: 999999 })}`);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve ser menor ou igual a 856920"
      );
    });

    it("should render password same adjacents validation error", () => {
      const seed = [2, 3, 4, 5, 6, 7]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .join("");

      cy.get(".text-field input[id='password']").clear().type(seed);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve conter 2 dígitos adjacentes iguais"
      );
    });

    it("should render password ascendent adjacents validation error", () => {
      const seed = Array.from({ length: 3 }, () =>
        faker.number.int({ min: 2, max: 7 })
      );

      const descAdjacents = [...seed, ...seed].sort((a, b) => b - a).join("");

      cy.get(".text-field input[id='password']").clear().type(descAdjacents);
      cy.get(".text-field.-error .feedback").should(
        "contain.text",
        "Senha deve conter dígitos numa sequência crescente ou de mesmo valor"
      );
    });
  });

  describe("Validation successful", () => {
    it("should render all valid items", () => {
      cy.intercept("POST", "**/valid-passwords/results*", {
        delay: 300,
        statusCode: 201,
      });
      const seed = Array.from({ length: 5 }, () =>
        faker.number.int({ min: 2, max: 7 })
      );
      const validPassword = [...seed, seed[0]].sort((a, b) => a - b).join("");

      cy.get(".text-field input[id='name']").type(faker.person.fullName());
      cy.get(".text-field input[id='email']").type(faker.internet.email());
      cy.get(".text-field input[id='password']").type(validPassword);

      cy.get(".text-field .feedback").should("not.have.class", "-error");

      cy.get(".text-field.-success input[id='password']")
        .parent()
        .siblings(".feedback")
        .should("have.text", "Senha válida!");

      cy.get(".action-button")
        .should("be.enabled")
        .click()
        .should("have.text", "Enviando...");

      cy.get(".alert-box.-success")
        .should("exist")
        .should("have.text", "Resultado enviado com sucesso!");
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
