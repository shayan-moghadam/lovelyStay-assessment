import { octokit } from "@/utils/oktokit";

export const getUsers = async (queryString: string, itemLimit: number) => {
  try {
    const result = await octokit.rest.search.users({
      q: queryString,
      per_page: itemLimit,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfo = async (username: string) => {
  try {
    const result = octokit.rest.users.getByUsername({
      username,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const getRepos = async (username: string) => {
  try {
    const result = await octokit.rest.repos.listForUser({
      username,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
