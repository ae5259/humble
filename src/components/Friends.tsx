import { Friend } from "../types";

export default function Friends() {
  const friends: Friend[] = [
    {
      name: "tapnisu",
      link: "https://tapni.su",
      image: "https://avatars.githubusercontent.com/u/57483029?v=4",
    },
  ];

  return (
    <>
      <h2>friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.name}>
            <img
              src={friend.image}
              alt={friend.name}
              width={"30px"}
              style={{ marginRight: "20px" }}
            />
            <a href={friend.link} target="_blank" rel="noopener noreferrer">
              {friend.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
