import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Internship Success Predictor",
    img: "int.jpg",
    desc: <ul>
      <li>Developed a supervised learning pipeline to predict internship success rates based on preparation methods from a custom survey</li>
      <li>Implemented ML models including XGBoost, AdaBoost, KNN, Random Forest, Decision Tree, and Logistic Regression, achieving ~74% accuracy and identifying key predictors like GPA, application volume, and mock interviews</li>
      <li>Derived insights showing that consistent effort and technical preparation significantly outperformed static academic traits</li>
    </ul>
  },
  {
    id: 2,
    title: "StudyBuddy",
    img: "sb.png",
    desc: <ul>
      <li>Developed a tutoring tool using React.js with Google Gemini API for flashcards and chatbot, Zoom API for video, leveraging RESTful API</li>
      <li>Implemented a robust backend with Node.js and MongoDB, allowing users to book and manage tutoring sessions with calendar synchronization</li>
    </ul>
  },
  {
    id: 3,
    title: "Electrospinning Device for Tissue-Engineered Corneal Grafts",
    img: "Electspin.png",
    desc: <ul>
      <li>Fabricated an enclosed device for tissue-engineered corneal grafts by electrospinning nanofibers with a controlled humidity</li>
      <li>Integrated heat sink, fans, humidifier, MOSFETs, humidity sensor, and pushbuttons with Arduino to achieve a target humidity</li>
    </ul>
  },
  {
    id: 4,
    title: "Computer Network Simulator",
    img: "ntwkSim.png",
    desc: <ul>
      <li>Developed an event-driven simulation framework to model network communication, host behaviors, message passing, & timers</li>
      <li>Designed doubly-linked list and Hashmap data structures to manage future events, ensuring accurate event timer handling</li>
    </ul>
  },
  {
    id: 5,
    title: "Bicep Curl Monitor",
    img: "bicepcurl.png",
    desc: <ul>
      <li>Developed a biomedical device that detects valid bicep curls using sensors and indicates a full rep or invalid rep</li>
      <li>Calibrated accelerometer, ultrasonic distance sensor, and conductive rubber stretch sensors with Arduino to monitor curls</li>
    </ul>
  },
  {
    id: 6,
    title: "E-commerce Webpage",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: <ul>
      <li>Designed a responsive e-commerce website using HTML, CSS, and JavaScript with customized images, banners, texts, etc.</li>
      <li>Employed CSS stylesheets with media queries to optimize the website's layout and appearance, for different screen sizes</li>
    </ul>
  },
  {
    id: 7,
    title: "Automated Robotic Arm",
    img: "rbtarm.png",
    desc: <ul>
      <li>Programmed Arduino based on C for automated movement of the robotic arm to pick and transport ping pong balls</li>
      <li>Designed the claw with SolidWorks that is compatible with the arm and can collect the ball from different angles</li>
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
    <section >
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

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Technical Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;