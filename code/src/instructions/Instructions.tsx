import logo from "../assets/logo.svg";
import "./Instructions.scss";
import wireframe from "../assets/wireframe-sketch.png";

export default function Instructions() {
    return (
        <div className="instructions">
            <div className="body">
                <img src={logo} className="logo" alt="TrainHeroic Logo" />
                <h1>
                    Welcome to the REDACTED<br />front-end code test!
                </h1>
                <p>
                    Below are the two screens to implement.
                    <br />
                    Please see the README.md file in the root of the project for more detailed instructions.
                </p>
                <a href={wireframe} target="_blank" rel="noreferrer">
                    <img src={wireframe} className="wireframe" alt="Wireframe of two pages to implement" />
                </a>
            </div>
        </div>
    );
}
