import { cleanup, render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";

afterEach(cleanup);

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// Integration Search Result Tests
test("search result should render and work properly", async () => {
  render(
    <SearchResults
      data={[]}
      hasMore={false}
      loadMoreHandler={() => null}
      searchQuery={undefined}
    />,
  );
  const divElement = await screen.findByTestId("search-results");
  expect(divElement).toBeInTheDocument();
});
