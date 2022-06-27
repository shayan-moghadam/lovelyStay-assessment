import { FC, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "@/common-interfaces";
import { SearchResultsProps } from "../interfaces";
import "./SearchResults.scss";

const SearchResults: FC<SearchResultsProps> = ({
  data,
  hasMore,
  loadMoreHandler,
  searchQuery,
}): JSX.Element => {
  const navigate = useNavigate();
  // Use Refs For Accessibility
  const searchContentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const goToUserPage = (username: string) => {
    if (username) {
      navigate(`/user/${username}`);
    }
  };
  return (
    <div
      className="search-results"
      ref={searchContentRef}
      data-testid="search-results"
    >
      {data?.length ? (
        <ul className="search-list">
          {(data as Array<UserData>)?.map(
            ({ id, login }: UserData, index: number) => (
              <li
                key={id}
                data-testid="user-item"
                onClick={() => goToUserPage(login)}
              >
                {index + 1}.<span>{login}</span>
              </li>
            ),
          )}
          {hasMore ? (
            <button
              className="load-more"
              onClick={() => loadMoreHandler()}
              ref={buttonRef}
            >
              LOAD MORE
            </button>
          ) : (
            <></>
          )}
        </ul>
      ) : searchQuery?.length ? (
        <span className="no-data">No Data Found !</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchResults;
