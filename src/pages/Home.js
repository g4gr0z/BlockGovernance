import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");

  const handleCompanyNameChange = (e) => {
    console.log(e.target.value);
    setCompanyName(e.target.value);
  };

  const handleCreateButtonClick = () => {
    navigate(`/Profile?companyName=${encodeURIComponent(companyName)}`);
  };
  return (
    <div>
      <div className="homeheader">
        <button className="homeheaderbutton" onClick={() => navigate(-1)}>
          <Header />
        </button>
        <button class="button-30">0x2g4dd..</button>
      </div>
      <div className="Home">
        <p> Create your governance mechanism in minutes</p>
        <div className="homeform">
          <input
            type="text"
            onChange={handleCompanyNameChange}
            placeholder="Company's Name"
          />
          <input type="text" placeholder="Other details" />
          <input type="text" placeholder="Other details" />

          <button class="button-30" onClick={handleCreateButtonClick}>
            Create
          </button>
        </div>
      </div>

      {/* <button onClick={() => navigate("/Profile")}>Create</button> */}
    </div>
  );
}
