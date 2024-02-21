import "./Apps.css";
import { TwFollowCard } from "./TwFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName={"jsMendoza"}
        name={"Jesus Mendoza M"}
      />
      <TwFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName={"jsMendoza13"}
        name={"Jesus Martinez"}
      />
    </section>
  );
}
