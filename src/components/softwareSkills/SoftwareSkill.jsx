import React, { useEffect, useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileLimit = 6;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = skillsSection.softwareSkills.length;
  const visibleCount = isMobile && !showAll ? Math.min(mobileLimit, total) : total;

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.slice(0, visibleCount).map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>

        {isMobile && total > mobileLimit && (
          <div className="view-more-wrap">
            <button
              className="view-more-btn"
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `View more (${total - mobileLimit})`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
