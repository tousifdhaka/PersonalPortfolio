import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>TOUSIF AHSAN</motion.h2>
          <motion.h3 variants={textVariants}>BS in Biomedical Engineering & Computer Science Minor
          @ UNIVERSITY OF TEXAS AT DALLAS
          </motion.h3>
          <motion.h1 variants={textVariants}>
            Aspiring BME student with a strong interest in tech and its
            applications. My passion lies in hardware and software developement and their 
            integration in automated systems. This fascination of electronics, robotics,
            or simply the idea of innovation that solves a problem inspires me to work in biotech
            to make people's lives more convenient, fun, and exciting.
          </motion.h1>
          <motion.h1 variants={textVariants}>
            Expected Graduation: May 2025    |    US Citizen   |     GPA: 3.65
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Check out my profile
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        goCOMETS!
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt=""/>
      </div>
    </div>
  );
};

export default Hero;