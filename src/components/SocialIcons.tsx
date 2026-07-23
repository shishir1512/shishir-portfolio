import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anim = gsap.fromTo(
      ".creatives-button",
      { opacity: 1, pointerEvents: "auto" },
      {
        opacity: 0,
        pointerEvents: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "bottom 30%",
          end: "bottom 10%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="http://www.linkedin.com/in/shishir-kb-1a3015382" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button creatives-button" href="https://docs.google.com/document/d/1IjoLK63CU2tCqulz6fPx0twA9vsuQz3JV00WLlBuJnE/edit?usp=sharing" target="_blank" data-cursor="disable">
        <HoverLinks text="CREATIVES" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
