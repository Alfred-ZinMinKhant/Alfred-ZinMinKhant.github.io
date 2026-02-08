import React, { useState, useEffect, useRef } from 'react';
import './AnimatedStats.scss';
import { motion, useInView } from 'framer-motion';

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 7, suffix: '+', label: 'Years Experience', description: 'Building web apps' },
    { value: 50, suffix: 'K+', label: 'Users Served', description: 'Across platforms' },
    { value: 5000, suffix: '+', label: 'Active Users', description: 'On my websites' },
    { value: 15, suffix: '+', label: 'Technologies', description: 'Mastered & deployed' }
  ];

  return (
    <div className="animated-stats-container" ref={ref}>
      <motion.div 
        className="stats-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-value">
              {isInView && <Counter end={stat.value} duration={2} />}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-description">{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default AnimatedStats;
