import { useEffect } from "react";
import { setAllTimeline } from "./utils/GsapScroll";
import "./styles/Career.css";

const Career = () => {
  useEffect(() => {
    setAllTimeline();
  }, []);
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>TheTallMirror</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Generated ₹1L sales in Week 1 with a 60% gross margin, including driving ₹36K during a 4-hour flea market sprint without any ads. Built sales channels, pricing and GTM strategy from scratch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UG / BBA Scholar</h4>
                <h5>IVB & IIMB</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Pursuing dual degrees: UG in Entrepreneurship at the Institute of Venture Building and a BBA (DBE) at IIM Bangalore.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative & Ops Lead</h4>
                <h5>SOUTHSIDE.BLR</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Conceptualized themes and graphics for 15+ Bangalore clubs, driving 40% footfall growth and securing 100% sold-out events. Managed 5K+ ticket inventory generating ₹20L+ cumulative revenue.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leadership Roles</h4>
                <h5>Various Initiatives</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Cultural Secretary managing festival budgets; Invictus Captain securing Red Bull sponsorship; MC/Magician for 16 large-scale events driving ₹1Cr+ cumulative revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
