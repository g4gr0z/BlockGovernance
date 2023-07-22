import Header from "../components/Header";
import Vote from "../components/Vote";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const companyName = searchParams.get("companyName") || "Default Company"; // Use a default value if companyName is not provided
  const companyAbout = searchParams.get("CompanyAbout") || "Default About";
  const votecost = searchParams.get("votecost") || "Default Amount";

  const [Headline, setHeadline] = useState("Headline");
  const [About, SetAbout] = useState("this is about the vote");
  const [images, setImages] = useState([]);
  const [allVotes, setAllVotes] = useState([]);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleHeadlineChange = (e) => {
    console.log(e.target.value);
    setHeadline(e.target.value);
  };
  const handleAboutChange = (e) => {
    console.log(e.target.value);
    SetAbout(e.target.value);
  };

  const handleCreatePost = () => {
    if (Headline.trim() && About.trim() && images.length > 0) {
      const newVote = {
        headline: Headline,
        about: About,
        image: images,
      };

      setAllVotes([...allVotes, newVote]);
      console.log(allVotes);
      setHeadline("");
      SetAbout("");
      setImages([]);
    }
  };
  return (
    <div className="homemain">
      <div className="homeheader">
        <button className="homeheaderbutton">
          <Header />
        </button>
        <h1 className="companynameheader">{companyName}</h1>

        <button class="button-30">0x2g4dd..</button>
      </div>
      {/* <div className="companyname">{companyName}</div>
      <h1 className="companyname">{votecost}</h1> */}

      <div className="profile">
        <div className="profileabout2">
          <div className="profileabout">
            <h1 children="h1about">About </h1>
            <h3>{companyName}</h3>
            <p className="companyabout">{companyAbout}</p>
          </div>
        </div>

        <div className="profilevote">
          {allVotes.length > 0 ? (
            // If there are votes, map and render the Vote components
            allVotes.map((vote, index) => (
              <Vote
                key={index}
                headline={vote.headline}
                about={vote.about}
                image={vote.image}
              />
            ))
          ) : (
            // If no votes available, display "NO VOTES AVAILABLE"
            <p>NO VOTES AVAILABLE</p>
          )}
        </div>

        <div>
          <div className="createpost">
            <h2>Create vote</h2>

            <input
              onChange={handleHeadlineChange}
              type="text"
              placeholder="Enter Headline"
            />
            <p>Enter the vote description :</p>
            <input onChange={handleAboutChange} type="text" />
            {/* <input onChange={handleAmountChange} type="number" min="0" /> */}
            <p>Enter company's logo :</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
            <button class="button-40" onClick={handleCreatePost}>
              Create
            </button>
          </div>
          <div className="gobackbutton">
            <button class="button-30" onClick={() => navigate(-1)}>
              go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
