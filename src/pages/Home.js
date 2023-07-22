import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [CompanyAbout, setCompanyAbout] = useState("");
  const [amount, setAmount] = useState();

  const handleAmountChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  const handleCompanyAbout = (e) => {
    console.log(e.target.value);
    setCompanyAbout(e.target.value);
  };
  const handleCompanyNameChange = (e) => {
    console.log(e.target.value);
    setCompanyName(e.target.value);
  };

  const handleCreateButtonClick = () => {
    const queryParams = new URLSearchParams();
    queryParams.append("companyName", companyName);
    queryParams.append("CompanyAbout", CompanyAbout);
    queryParams.append("votecost", amount);

    navigate(`/Profile?${queryParams.toString()}`);
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
          <input
            type="text"
            onChange={handleCompanyAbout}
            placeholder="About Company "
          />
          <input
            onChange={handleAmountChange}
            type="number"
            min="0"
            placeholder="Enter the cost of vote"
          />

          <button class="button-30" onClick={handleCreateButtonClick}>
            Create
          </button>
        </div>
      </div>

      {/* <button onClick={() => navigate("/Profile")}>Create</button> */}
    </div>
  );
}
