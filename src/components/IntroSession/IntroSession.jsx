import React from "react";
import { motion } from "framer-motion";
import "./IntroSession.css";
import studentImage from "../../assets/images/StudentImage.png";

const IntroSession = () => {
  // Animation for the text section (staggered effect)
  const textSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Duration for each element to appear
        staggerChildren: 0.2, // Stagger between children elements
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="introbox">
      <div className="intro-content">
        <motion.div
          className="text-section"
          initial="hidden"
          animate="visible"
          variants={textSectionVariants}
        >
          <motion.h1 variants={textSectionVariants}>
            Welcome to Sam Institute
          </motion.h1>
          <motion.h4 variants={textSectionVariants}>
            Join us for a transformative learning experience. Learn from the
            best in the industry.
          </motion.h4>
          <motion.div className="button-group" variants={textSectionVariants}>
            <motion.button className="primary-btn" variants={buttonVariants}>
              Get Started
            </motion.button>
            <motion.button className="secondary-btn" variants={buttonVariants}>
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="image-section"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          whileHover={{
            y: [0, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            },
          }}
        >
          <img src={studentImage} alt="Intro Session" />
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSession;
