import { FC, useState, useEffect } from "react";
import history from "@/utils/history";
import { useParams } from "react-router-dom";
import { RepoData, UserData } from "@/common-interfaces";
import UserCard from "@/components/UserCard/UserCard";
import Loader from "@/components/Loader/Loader";
import "./User.scss";
import { getRepos, getUserInfo } from "@/api";

const User: FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repoData, setRepoData] = useState<Array<RepoData> | []>([]);

  const fetchData = async (): Promise<void> => {
    const { username } = params;
    if (username) {
      try {
        setIsLoading(true);
        const userResult = await getUserInfo(username);
        const repoResult = await getRepos(username);

        const responseUser: UserData | null = userResult.data || null;
        const responseRepo: Array<RepoData> | [] = repoResult.data || [];

        setUserData(responseUser);
        setRepoData(responseRepo);
        setIsLoading(false);
      } catch (error) {
        const message = error.response.data.message ?? "error";
        alert(message);
        setIsLoading(false);
      }
    } else {
      setUserData(null);
      setRepoData([]);
    }
  };

  const cleanUp = (): void => {
    setIsLoading(false);
    setUserData(null);
    setRepoData([]);
  };

  const init = (): (() => void) => {
    fetchData();
    return cleanUp;
  };

  useEffect(init, []);

  return (
    <div className="User">
      <button className="back-button" onClick={() => history.back()}>
        <i className="arrow-right-icon"></i>
      </button>
      <UserCard userData={userData} repoData={repoData} />
      {/* App Loader */}
      {isLoading ? <Loader /> : <></>}
    </div>
  );
};

export default User;
