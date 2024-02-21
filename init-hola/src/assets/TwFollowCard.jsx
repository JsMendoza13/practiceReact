import { useState } from "react";

export function TwFollowCard({ formatUserName, userName, name }) {
  //Se carga Hooks
  const [isFollowing, setIsFollowing] = useState(false);

  //rederizado condicional
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-btn is-following"
    : "tw-followCard-btn";

  //Funcion Handle
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/soundcloud/gorillaz"
          alt="el avatar de ejemplo"
        />

        {/*asi se pone un comentario en JSX*/}

        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followcard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
