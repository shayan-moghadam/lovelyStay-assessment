import { FC, useEffect, useState, useRef } from "react";
import Loader from "@/components/Loader/Loader";
import Search from "@/components/Search/Search";
import { UserData } from "@/common-interfaces";
import { getUsers } from "@/api";
import "./Home.scss";

const Home: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<UserData> | []>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemLimit = useRef<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async (value: string): Promise<void> => {
    if (value) {
      try {
        setIsLoading(true);
        const queryString = `${value} in:login type:user`;
        const result = await getUsers(queryString, itemLimit.current);

        const totalCount = result.data.total_count;

        if (itemLimit.current >= totalCount) setHasMore(false);

        const response: Array<UserData> | [] = result.data?.items || [];

        setData(response);
        setIsLoading(false);
      } catch (error) {
        const message = error.response.data.message ?? "error";
        alert(message);
        setIsLoading(false);
      }
    } else {
      setData([]);
    }
  };

  const loadMoreHandler = () => {
    itemLimit.current = itemLimit.current + 10;
    fetchData(searchQuery);
  };

  const searchHandler = (value: string) => {
    itemLimit.current = 10;
    setHasMore(true);
    setSearchQuery(value);
    fetchData(value);
  };

  const cleanUp = (): void => {
    itemLimit.current = 10;
    setIsLoading(false);
    setHasMore(false);
    setSearchQuery("");
    setData([]);
  };

  const init = (): (() => void) => {
    return cleanUp;
  };

  useEffect(loadMoreHandler, [itemLimit]);

  useEffect(init, []);

  return (
    <div className="Home">
      {/* Search Component */}
      <Search
        data={data}
        hasMore={hasMore}
        loadMoreHandler={loadMoreHandler}
        searchQuery={searchQuery}
        searchHandler={searchHandler}
      />
      {/* App Loader */}
      {isLoading ? <Loader /> : <></>}
    </div>
  );
};

export default Home;
