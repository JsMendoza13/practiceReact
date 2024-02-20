import "./Apps.css";
import { TwFollowCard } from "./TwFollowCard";
export function App() {
  return (
    <section className="App">
      <TwFollowCard
        isFollowing
        userName={"jsMendoza"}
        name={"Jesus Mendoza M"}
      />
      <TwFollowCard
        isFollowing
        userName={"jsMendoza13"}
        name={"Jesus Martinez"}
      />
    </section>
  );
}
