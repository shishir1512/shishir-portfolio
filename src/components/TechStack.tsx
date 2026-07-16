import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const tools = [
  "Figma",
  "Adobe XD",
  "Canva",
  "Spreadsheets",
  "Notion",
  "Slack",
  "Power BI",
  "GitHub",
  "Google Analytics",
  "Meta Ads",
  "Jira",
  "Zapier",
  "Airtable",
  "Mixpanel",
  "Lovable",
  "Bubble",
  "Claude",
  "Semrush",
  "Capcut",
  "Wordpress",
  "Shopify",
  "N8N"
];

const skills = [
  "UI/UX",
  "Public Speaking",
  "Financial Analysis",
  "Marketing Strategy",
  "Prototyping",
  "Product Management",
  "Data Analytics",
  "Event Management",
  "Branding",
  "Positioning",
  "No-Code",
  "Investor Pitching",
  "Team Leadership",
  "GTM Execution",
  "Behavioral Economics"
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="skills">
      <div className="techstack-container">
        <h2 className="title">Tools & Skills</h2>
        
        <div className="marquee-wrapper">
          <Marquee speed={45} gradient={true} gradientColor="#0b080c" direction="left" autoFill={true}>
            {tools.map((tool, idx) => (
              <div key={`tool-${idx}`} className="skill-card tool-card">
                <span>{tool}</span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="marquee-wrapper">
          <Marquee speed={40} gradient={true} gradientColor="#0b080c" direction="right" autoFill={true}>
            {skills.map((skill, idx) => (
              <div key={`skill-${idx}`} className="skill-card strategy-card">
                <span>{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
