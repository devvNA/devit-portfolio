describe("Portfolio Website Testing", () => {
  beforeEach(() => {
    // Kunjungi website sebelum setiap test
    cy.visit("http://localhost:3000");
    // Tunggu page load
    cy.wait(2000);
  });

  describe("Navigation & Layout Tests", () => {
    it("should display the navigation menu correctly", () => {
      cy.get("nav").should("be.visible");
      cy.get("nav").find("a").should("have.length.at.least", 4);
      cy.get("nav").contains("Home").should("be.visible");
      cy.get("nav").contains("About").should("be.visible");
      cy.get("nav").contains("Projects").should("be.visible");
      cy.get("nav").contains("Contact").should("be.visible");
    });

    it("should navigate to different sections when clicking menu items", () => {
      // Test navigasi ke About
      cy.get("nav").contains("About").click();
      cy.wait(1000);
      cy.get("#about").should("be.visible");
      cy.wait(1500);

      // Test navigasi ke Projects
      cy.get("nav").contains("Projects").click();
      cy.wait(1000);
      cy.get("#projects").should("be.visible");
      cy.wait(1500);

      // Test navigasi ke Contact
      cy.get("nav").contains("Contact").click();
      cy.wait(1000);
      cy.get("#contact").should("be.visible");
      cy.wait(1500);
    });
  });

  describe("Contact Form Tests", () => {
    beforeEach(() => {
      // Navigasi ke section contact sebelum setiap test form
      cy.get("nav").contains("Contact").click();
      cy.wait(2000); // Tunggu loading section contact
    });

    it("should display contact form with all fields", () => {
      cy.get("form").within(() => {
        cy.get('input[name="name"]').should("be.visible");
        cy.get('input[name="email"]').should("be.visible");
        cy.get('input[name="subject"]').should("be.visible");
        cy.get('textarea[name="message"]').should("be.visible");
        cy.get('button[type="submit"]').should("be.visible");
      });
    });

    it("should validate form inputs", () => {
      cy.get("form").within(() => {
        // Submit form kosong untuk trigger validasi
        cy.get('button[type="submit"]').click();

        // Cek pesan error muncul
        cy.get('input[name="name"]').should("have.attr", "required");
        cy.get('input[name="email"]').should("have.attr", "required");
      });
    });

    it("should allow form submission with valid data", () => {
      cy.get("form").within(() => {
        // Isi form dengan data valid dengan delay
        cy.get('input[name="name"]').type("Test User", { delay: 100 });
        cy.wait(1000);

        cy.get('input[name="email"]').type("test@example.com", { delay: 100 });
        cy.wait(1000);

        cy.get('input[name="subject"]').type("Test Subject", { delay: 100 });
        cy.wait(1000);

        cy.get('textarea[name="message"]').type("This is a test message", {
          delay: 100,
        });
        cy.wait(1500);

        // Submit form dengan delay
        cy.get('button[type="submit"]').click();
        cy.wait(2000); // Tunggu lebih lama setelah submit

        // Bisa ditambahkan assertion untuk success message jika ada
        // cy.get('.success-message').should('be.visible')
      });
    });
  });
});
