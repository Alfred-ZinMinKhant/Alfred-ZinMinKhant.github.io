import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import { motion } from "framer-motion";
// Lottie JSON will be loaded dynamically by DisplayLottie via `animationPath`
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="skill"
                >
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationPath={"Coding Slide.json"} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
}
