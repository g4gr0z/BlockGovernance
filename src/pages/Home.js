import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    <>
      <button onClick={() => navigate(-1)}>
        <Header />
      </button>

      <p> Create your governance mechanism in minutes</p>
      <input
        type="text"
        onChange={handleCompanyNameChange}
        placeholder="Company's Name"
      />
      <input type="text" placeholder="Other details" />
      <input type="text" placeholder="Other details" />

      <button onClick={handleCreateButtonClick}>Create</button>
      {/* <button onClick={() => navigate("/Profile")}>Create</button> */}
    </>
  );
}
