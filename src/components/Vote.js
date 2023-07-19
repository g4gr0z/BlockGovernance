import { useState } from "react";

export default function Vote() {
  const [voting, setVoting] = useState(true);
  const [vote, setVote] = useState();

  const handleVoteChange = (e) => {
    console.log(e.target.value);
    setVote(e.target.value);
  };

  return voting ? (
    <button onClick={() => setVoting(!voting)}>
      <p>this is a vote</p>
      <img src="" alt="company's image" />
    </button>
  ) : (
    <div>
      <img src="" alt="company's image" />
      <p>vote yes if this else that</p>
      <div>
        <span aria-hidden="true">No</span>
        <input
          onChange={handleVoteChange}
          type="range"
          max="1"
          id="choice"
          name="choice"
        />
        <span aria-hidden="true">Yes</span>
      </div>
    </div>
  );
}
