import React from "react";
import { motion } from "framer-motion";
import "./AnimateOnScroll.scss";

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
}) {
  const distance = 24;
  const initial = {
    opacity: 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
