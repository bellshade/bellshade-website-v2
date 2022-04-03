import fetch from "node-fetch";

describe('"Meet Our Team" unit test', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#team").scrollIntoView();
  });

  it("should be visible", () => {
    cy.get("#team").should("be.visible");
  });

  it("should be contains the same thing from api", () => {
    return new Cypress.Promise((resolve, reject) =>
      fetch("https://api.bellshade.org/")
        .then((response) => response.json())
        .then((result) => {
          cy.get("#team").within(() => {
            cy.get(".team-card").should("have.length", result.length);

            cy.wrap(result).each((data) => {
              cy.get(".team-card").within(() => {
                // Mengecek src gambar apakah ada di listnya
                cy.get("img")
                  .invoke("attr", "src")
                  .then((src) => {
                    const uri = new URL(`http://example.com${src}`);

                    expect(
                      result.findIndex(
                        (user) =>
                          user.avatar_url === uri.searchParams.get("url")
                      ) > -1
                    ).to.be.true;
                  });

                // Mengecek attribut href a
                cy.get("a")
                  .invoke("attr", "href")
                  .then((href) => {
                    expect(
                      result.findIndex((user) => user.html_url === href) > -1
                    ).to.be.true;
                  });

                // Mengecek keterangan nama
                cy.get("span").contains(data.name);

                // Mengecek tooltip apakah ada didalam element
                cy.get(".tooltip.top")
                  .invoke("attr", "pesan")
                  .then((pesan) => {
                    expect(result.findIndex((user) => user.name === pesan) > -1)
                      .to.be.true;
                  });
              });
            });
          });
        })
        .then(resolve)
        .catch(reject)
    );
  });
});
