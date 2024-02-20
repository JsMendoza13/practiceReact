export function TwFollowCard({ userName, name, isFollowing }) {
  const addAt = (userName) => `@${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/soundcloud/gorillaz"
          alt="el avatar de ejemplo"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">{addAt(userName)}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-btn">Seguir</button>
      </aside>
    </article>
  );
}
