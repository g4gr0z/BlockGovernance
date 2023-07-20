import { useState } from "react";
import "../App.css";
import img from "../images/st.png";

export default function Vote() {
  const [voting, setVoting] = useState(true);
  const [vote, setVote] = useState();

  const handleVoteChange = (e) => {
    console.log(e.target.value);
    setVote(e.target.value);
  };

  return voting ? (
    <div className="vote">
      <button className="votebutton" onClick={() => setVoting(!voting)}>
        <div>
          <p>About this vote sadasd asd as dsadasdasd asdassd asdsad</p>
          <img className="voteimage" src={img} />
        </div>
      </button>
    </div>
  ) : (
    <div className="vote">
      <button className="votebutton2" onClick={() => setVoting(!voting)}>
        <img className="voteimage2 " src={img} />
        <p>vote yes if you are going to hw3GOA else vote no</p>
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
      </button>
    </div>
  );
}
