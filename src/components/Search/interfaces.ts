import { UserData } from "@/common-interfaces";

export interface SearchBarProps {
  searchHandler: (arg0: string) => void;
}

export interface SearchResultsProps {
  data: UserData[];
  hasMore: boolean;
  loadMoreHandler: () => void;
  searchQuery: string | undefined;
}

export interface SearchProps extends SearchBarProps, SearchResultsProps {}
