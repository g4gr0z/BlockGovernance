import Header from "../components/Header";
import Vote from "../components/Vote";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
      <Header />
      <div>
        <h4>{companyName}</h4>
        <Vote />
      </div>

      <div>
        <h2>purchase token</h2>
        <input onChange={handleAmountChange} type="number" min="0" />
        <button>buy</button>
      </div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}
