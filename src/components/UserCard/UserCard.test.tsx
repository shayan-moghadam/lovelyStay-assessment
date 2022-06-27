import { cleanup, render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

afterEach(cleanup);

// Integration User Card Tests
test("user card should render and work properly", async () => {
  render(<UserCard userData={null} repoData={[]} />);
  const divElement = await screen.findByTestId("user-card");
  const imageElement = await screen.findByTestId("user-image");
  const nameElement = await screen.findByTestId("user-name");
  const listElement = await screen.findByTestId("user-repos");
  expect(divElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src");
  expect(nameElement).not.toHaveValue("");
});
