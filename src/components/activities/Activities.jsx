import { useRef } from "react";
import "./activities.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "LearnAI - AWS/NVIDIA/Anthropic Generative AI Hackathon",
    img: "10k.png",
    desc: <ul>
      <li>Developed a personalized learning platform using AWS Bedrock (Claude Haiku & Sonnet) with RAG for textbook summaries, games, & diagrams</li>
      <li>Implemented features such as multilingual translation (AWS Translate), text-to-speech (AWS Polly), and emotion detection (AWS Rekognition)</li>
      <li>Built a robust backend using FastAPI and SQLAlchemy, enabling seamless user data integration and adaptive learning paths</li>
      <li>Presented to the Director of Technology at AWS, Global Head of Solution Architecture at NVIDIA, Data Science VP at AT&T, and Lead at Anthropic</li>
      <li>Won 1st place with $10,000 cash prize after being shortlisted from 100+ teams, including industry professionals and university students</li>
    </ul>
  },
  {
    id: 2,
    title: "Axxess Hackaton at UTD",
    img: "axxess.png",
    desc: <ul>
      <li>Developed a physical therapy device leveraging Python's scikit-learn library using a linear regression model with 80% accuracy</li>
      <li>Tested for bicep curls using an accelerometer, ultrasonic distance sensor, and conductive stretch sensor for visual validation</li>
      <li>Won 1st place out of 60 teams with 300+ participants for the most robust wearable device utilizing Arduino's API and a backend ML model</li>
    </ul>
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="activities" ref={ref}>
      <div className="progress">
        <h1>Activities</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Activities; 