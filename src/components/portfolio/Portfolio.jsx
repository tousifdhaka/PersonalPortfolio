import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Electrospinning Device - Humidity Control",
    img: "Electspin.png" ,
    desc: <ul>
      <li>Fabricated an enclosed device for tissue-engineered corneal grafts by electrospinning nanofibers with a controlled humidity</li>
      <li>Integrated heat sink, fans, humidifier, MOSFETs, humidity sensor, and pushbuttons with Arduino to achieve a target humidity </li>
        </ul>
  },
  {
    id: 2,
    title: "Computer Network Simulator",
    img: "ntwkSim.png",
    desc: <ul>
    <li>Developed an event-driven simulation framework to model network communication, host behaviors, message passing, & timers </li>
    <li>Designed doubly-linked list and Hashmap data structures to manage future events, ensuring accurate event timer handling</li>
        </ul>
    },
    {
      id: 3,
      title: "Bicep Curl Monitor",
      img: "bicepcurl.png",
      desc: <ul>
      <li>Developed a biomedical device that detects valid bicep curls using sensors and indicates a full rep or invalid rep </li>
      <li>Calibrated accelerometer, ultrasonic distance sensor, and conductive rubber stretch sensors with Arduino to monitor curls </li>
          </ul>
    },
  {
    id: 4,
    title: "E-commerce Webpage",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: <ul>
    <li>Designed a responsive e-commerce website using HTML, CSS, and JavaScript with customized images, banners, texts, etc.</li>
    <li>Employed CSS stylesheets with media queries to optimize the website's layout and appearance, for different screen sizes </li>
        </ul>
  },

  {
    id: 5,
    title: "Automated Robotic Arm",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: <ul>
    <li>Programmed Arduino based on C for automated movement of the robotic arm to pick and transport ping pong balls</li>
    <li>Designed the claw with SolidWorks that is compatible with the arm and can collect the ball from different angles </li>
        </ul>
  },
  {
  id: 6,
    title: "Axxess Hackaton @ UTD",
    img: "axxess.png",
    desc: <ul>
    <li>Developed an embedded device targeted for physical therapy utilizing Python scripts to train valid exercises</li>
    <li>Won 1st place out of 60 teams for the most robust wearable device with backend-based ML </li>
        </ul>
  },
  {
    id: 7,
      title: "Amazon AWS Hackathon @ UTD",
      img: "aws.png",
      desc: <ul>
      <li>Competed in the AWS Jam challenge, solving real-world use of ML, databases, and serverless services</li>
      <li>Ranked 7th place, while learning about AWS cloud console and its tools during the challenge. </li>
          </ul>
    },
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
        <h1>Projects/Activities</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;