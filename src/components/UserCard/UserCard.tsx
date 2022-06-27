import { FC } from "react";
import { Props } from "./interfaces";
import "./UserCard.scss";

const defaultUserValues = { name: "", avatar_url: "", login: "", bio: "" };

const UserCard: FC<Props> = ({ userData, repoData }) => {
  const { name, avatar_url, login, bio } = userData || defaultUserValues;

  return (
    <div className="user-card" data-testid="user-card">
      <div className="card-header">
        <img
          src={avatar_url}
          alt={login}
          className="card-avatar"
          data-testid="user-image"
        />
        <span className="card-name" data-testid="user-name">
          {name ?? login}
        </span>
        <p className="subtitle">{bio}</p>
        <span className="repo-count">
          Total number of repositories :{" "}
          {repoData?.length
            ? repoData?.length >= 30
              ? "+30"
              : repoData?.length
            : 0}
        </span>
      </div>
      <div className="card-body" data-testid="user-repos">
        <span className="card-body-title">Repositories List</span>
        <div className="repo-box-wrapper">
          {repoData?.length ? (
            repoData.map(
              ({ name, visibility, html_url, description }, index: number) => (
                <div className="repo-box" key={index}>
                  <div className="name-wrapper">
                    <a href={html_url} target="_blank">
                      <span className="name">{name}</span>
                    </a>
                    <span className="public">{visibility}</span>
                  </div>
                  <p className="desc">{description}</p>
                </div>
              ),
            )
          ) : (
            <span>No Repo Found !</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
