import "./Nav.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  let location = useLocation();
  console.log(location)

  if (location.pathname !== "/") {
    return (
      <nav className="profile-nav">
        <Link to="/" className="back-button">
          <h3>Back</h3>
        </Link>
        <div className="logo-container">
          <img src={logo} className="logo" alt="TrainHeroic Logo" />
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="home-nav">
        <img src={logo} className="logo" alt="TrainHeroic Logo" />
      </nav>
    )
  }
}