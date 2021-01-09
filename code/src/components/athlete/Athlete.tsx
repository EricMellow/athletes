import logo from "../../assets/logo.svg";

export default function Athlete() {
  return (
    <div className="athlete">
      <div className="body">
        <img src={logo} className="logo" alt="TrainHeroic Logo" />
        <h1>
          Athlete Name
        </h1>
      </div>
    </div>
  );
}