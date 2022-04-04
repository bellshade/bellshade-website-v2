import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "@/components/pages/home/Navbar";

describe("Navigation Bar (Navbar) unit test", () => {
  afterEach(cleanup);

  it("Navbar should be showing valid items", () => {
    render(<Navbar />);

    expect(screen.getAllByText("Learning Journey")).not.toBeNull();
    expect(screen.getAllByText("Leaderboard")).not.toBeNull();
    expect(screen.getAllByText("Challenges")).not.toBeNull();
    expect(screen.getAllByText("Team")).not.toBeNull();
    expect(screen.getAllByText("Github")).not.toBeNull();
  });
});
