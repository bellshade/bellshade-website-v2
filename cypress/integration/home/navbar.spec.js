const iconSun = "M18 6.31a1 1 0 0 0 1-1v-3.4a1 1 0 0 0-2 0v3.4a1 1 0 0 0 1 1Z";
const iconMoon =
  "M29.2 26.72a12.07 12.07 0 0 1-6.3-22.28A13.68 13.68 0 0 0 19.49 4a14 14 0 0 0 0 28a13.82 13.82 0 0 0 10.9-5.34a11.71 11.71 0 0 1-1.19.06Z";

describe("Navigation Bar (Navbar) component unit test", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      // Di konteks ini unit test akan menggunakan
      // ukuran layar desktop dengan resolusi
      // 1366x768
      cy.viewport("macbook-11");

      cy.visit("/");
      cy.scrollTo(0, 0);
    });

    it("button should not be visible", () => {
      cy.get("nav button.menu-btn").should("be.not.visible");
    });

    it("mobile menu should be visible", () => {
      cy.get("nav .mobile-menu").should("not.visible");
    });

    it("button should be change the icon", () => {
      const buttonClass = "nav .space-x-8:nth-of-type(2) button.border.shadow";

      // Pertama-tama dia bakalan icon matahari dulu
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconSun);
        });

      cy.get(buttonClass).click();

      // Yang ini icon bulan setelah dipencet
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconMoon);
        });

      cy.get(buttonClass).click();

      // Di test lagi apakah kembali ke icon semula (icon matahari)
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconSun);
        });
    });
  });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      // Di konteks ini unit test akan menggunakan
      // ukuran layar mobile dengan resolusi
      // 414x846
      cy.viewport("samsung-note9");

      cy.visit("/");
      cy.scrollTo(0, 0);
    });

    it("button should be visible", () => {
      cy.get("nav button.menu-btn").should("be.visible");
    });

    it("mobile menu should not be visible", () => {
      cy.get("nav .mobile-menu").should("not.be.visible");
    });

    it("shows mobile menu after the menu button clicked", () => {
      cy.get("nav button.menu-btn").click();
      cy.get("nav .mobile-menu").should("be.visible");
    });

    it("button should be change the icon", () => {
      const buttonClass =
        "nav .justify-between.space-x-8.py-6.px-6 button.border.shadow";

      // Di buka dulu navbarnya
      cy.get("nav button.menu-btn").click();

      // Apakah icon pertama kali itu icon matahari atau bukan
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconSun);
        });

      cy.get(buttonClass).click();

      // Seharusnya jadi icon bulan setelah dipencet
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconMoon);
        });

      cy.get(buttonClass).click();

      // Harusnya balik lagi ke icon awal (icon matahari)
      cy.get(buttonClass)
        .find("svg")
        .within(() => {
          cy.get("path").should("have.attr", "d", iconSun);
        });

      // Ditutup lagi navbarnya
      cy.get("nav button.menu-btn").click();

      // Mastiin bener bener ketutup
      cy.get("nav .mobile-menu").should("not.be.visible");
    });
  });
});
