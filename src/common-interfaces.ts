export interface UserData {
  id: number;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  name?: string;
  bio?: string;
}
export interface RepoData {
  name: string;
  visibility: string;
  html_url: string;
  description: string;
}
