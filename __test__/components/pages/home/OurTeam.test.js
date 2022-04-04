import { render, screen, cleanup } from "@testing-library/react";
import OurTeam, { MemberCard } from "@/components/pages/home/OurTeam";

const oneUser = {
  login: "AdhyWiranto44",
  name: "Adhy Wiranto",
  html_url: "https://github.com/AdhyWiranto44",
  avatar_url: "https://avatars.githubusercontent.com/u/30892092?v=4",
};

const team = [
  oneUser,
  {
    login: "AdityaFitrianaNS",
    name: "Aditya Fitriana NS",
    html_url: "https://github.com/AdityaFitrianaNS",
    avatar_url: "https://avatars.githubusercontent.com/u/89055857?v=4",
  },
  {
    login: "AlfatArdiansa",
    name: "Alfat Ardiansa",
    html_url: "https://github.com/AlfatArdiansa",
    avatar_url: "https://avatars.githubusercontent.com/u/53366314?v=4",
  },
  {
    login: "ItsArul",
    name: "Kiyo",
    html_url: "https://github.com/ItsArul",
    avatar_url: "https://avatars.githubusercontent.com/u/88574877?v=4",
  },
  {
    login: "KimmyKx",
    name: "Kim",
    html_url: "https://github.com/KimmyKx",
    avatar_url: "https://avatars.githubusercontent.com/u/87674246?v=4",
  },
];

describe("Our Team unit test", () => {
  afterEach(cleanup);

  it("render one member properly", () => {
    render(<MemberCard {...oneUser} />);

    // Apakah gambarnya berhasil terender ke dokumen
    expect(screen.getByRole("img")).toBeInTheDocument();

    // Apakah anchor berhasil terender ke dokumen
    // dan href sesuai dengan apa yang diharapkan
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").href).toEqual(oneUser.html_url);

    // Apakah nama member berhasil terender ke dokumen
    expect(screen.getByText(oneUser.name)).toBeInTheDocument();

    // Apakah alt berhasil terender ke gambar di dokumen
    expect(screen.getByAltText(oneUser.login)).toBeInTheDocument();
  });

  it("render the team users", () => {
    render(<OurTeam members={team} />);

    // Apakah tulisan "Meet Our Team" ada di dokumen
    expect(screen.getByText("Meet Our Team")).toBeInTheDocument();

    // Mengecek apakah gambar tersebut ada, panjangnya sesuai,
    // dan alt gambar tersebut dirender bedasarkan username github
    expect(screen.getAllByRole("img")).not.toBeNull();
    expect(screen.getAllByRole("img").length).toBe(team.length);
    expect(screen.getAllByRole("img").map((img) => img.alt)).toEqual(
      team.map((member) => member.login)
    );

    // Mengecek apakah anchor tersebut ada, panjangnya sesuai, dan
    // href anchor tersebut dirender bedasarkan url profile github
    expect(screen.getAllByRole("link")).not.toBeNull();
    expect(screen.getAllByRole("link").length).toBe(team.length);
    expect(screen.getAllByRole("link").map((link) => link.href)).toEqual(
      team.map((member) => member.html_url)
    );

    // Mengecek apakah nama member tim ada di dokumen
    team.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
    });
  });
});
