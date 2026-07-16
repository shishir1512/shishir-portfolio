import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>PRODUCT & STRATEGY</h3>
              <h4>Focus Area</h4>
              <p>
                Spearheading product development, conducting market research, and designing GTM strategies to build user-centric products. Experienced in financial modeling, no-code prototyping, and analytics.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Product Management</div>
                <div className="what-tags">Market Strategy</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Google Analytics</div>
                <div className="what-tags">Jira</div>
                <div className="what-tags">Zapier</div>
                <div className="what-tags">Airtable</div>
                <div className="what-tags">Mixpanel</div>
                <div className="what-tags">Notion</div>
                <div className="what-tags">Slack</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Prototyping</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CREATIVE OPERATIONS</h3>
              <h4>Focus Area</h4>
              <p>
                Directing high-impact brand experiences, managing operational budgets, and leading cross-functional teams. Scaling co-founded ventures, organizing large-scale festivals, and building loyal communities.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Creative Strategy</div>
                <div className="what-tags">Event Management</div>
                <div className="what-tags">Branding</div>
                <div className="what-tags">Public Speaking</div>
                <div className="what-tags">Team Leadership</div>
                <div className="what-tags">GTM Execution</div>
                <div className="what-tags">Shopify</div>
                <div className="what-tags">Bubble</div>
                <div className="what-tags">N8N</div>
                <div className="what-tags">HTML/CSS</div>
                <div className="what-tags">Canva</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
