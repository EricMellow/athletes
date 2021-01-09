import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="body">
        <img src={logo} className="logo" alt="TrainHeroic Logo" />
        <h1>
          My Athletes
        </h1>
      </div>
    </div>
  );
}