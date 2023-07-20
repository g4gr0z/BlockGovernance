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
  const [amount, setAmount] = useState();

  const handleAmountChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  return (
    <div className="homemain">
      <div className="homeheader">
        <button className="homeheaderbutton">
          <Header />
        </button>
        <button class="button-30">0x2g4dd..</button>
      </div>
      <div className="companyname">{companyName}</div>
      <div className="profile">
        <div className="profilevote">
          <Vote />
          <Vote />
          <Vote />
        </div>

        <div>
          <div className="purchasetoken">
            <h2>purchase token</h2>
            <input onChange={handleAmountChange} type="number" min="0" />
            <button class="button-40">buy</button>
          </div>
        </div>
      </div>
      <div className="gobackbutton">
        <button class="button-30" onClick={() => navigate(-1)}>
          go back
        </button>
      </div>
    </div>
  );
}
