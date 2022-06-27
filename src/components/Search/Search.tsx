import { FC, memo } from "react";
import { SearchProps } from "./interfaces";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import "./Search.scss";

const Search: FC<SearchProps> = ({
  data,
  hasMore,
  loadMoreHandler,
  searchHandler,
  searchQuery,
}): JSX.Element => {
  return (
    <div className="search-wrapper">
      <h1>Front-End Challenge</h1>
      <span className="subTitle">
        Type Desire Github Username And Click
        <span className="finder-icon text-icon"></span>
        or Press <kbd className="keyboard-text">Enter</kbd>
        To Search
      </span>
      <SearchBar searchHandler={searchHandler} />
      <SearchResults
        data={data}
        hasMore={hasMore}
        loadMoreHandler={loadMoreHandler}
        searchQuery={searchQuery}
      />
    </div>
  );
};

function areEqual(prevProps: SearchProps, nextProps: SearchProps): boolean {
  return prevProps?.data === nextProps?.data;
}

export default memo<SearchProps>(Search, areEqual);
