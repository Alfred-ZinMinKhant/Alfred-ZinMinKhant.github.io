import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { motion } from "framer-motion";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <EducationCard school={school} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
