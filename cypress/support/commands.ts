/// <reference types="cypress" />

// Custom command untuk menambahkan delay sebelum click
Cypress.Commands.add(
  "waitAndClick",
  { prevSubject: "element" },
  (subject, options = {}) => {
    cy.wait(1000); // Tunggu 1 detik sebelum klik
    cy.wrap(subject).click(options);
  },
);

// Custom command untuk typing dengan delay
Cypress.Commands.add(
  "smoothType",
  { prevSubject: "element" },
  (subject, text, options = {}) => {
    cy.wait(500); // Tunggu 0.5 detik sebelum mulai mengetik
    cy.wrap(subject).type(text, { delay: 100, ...options }); // Delay 100ms antar karakter
  },
);

// TypeScript declarations
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to wait 1 second before clicking an element
       * @example cy.get('button').waitAndClick()
       */
      waitAndClick(
        options?: Partial<Cypress.ClickOptions>,
      ): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to type text with delay between characters
       * @example cy.get('input').smoothType('Hello World')
       */
      smoothType(
        text: string,
        options?: Partial<Cypress.TypeOptions>,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
