import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
export default function Intro() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h2>About the project</h2>
      <h3>A tool or a platform which makes decentralized governance easy</h3>
      <p>click the button to go to the project :</p>
      <button onClick={() => navigate("/Home")}>Project</button>
    </>
  );
}
