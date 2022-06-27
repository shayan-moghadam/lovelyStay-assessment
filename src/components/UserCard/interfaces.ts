import { UserData, RepoData } from "@/common-interfaces";

export interface Props {
  userData: UserData | null;
  repoData: RepoData[] | [];
}
