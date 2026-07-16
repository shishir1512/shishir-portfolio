import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHISHIR
              <br />
              <span>KB</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Driven</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Strategist</div>
              <div className="landing-h2-2">Entrepreneur</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Entrepreneur</div>
              <div className="landing-h2-info-1">Strategist</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
