import { useRef } from "react";
import "./services.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Technical Solutions Engineer",
    img: "epic.jpg",
    /*
    desc: <ul>
      <li>Description point 1</li>
      <li>Description point 2</li>
      <li>Description point 3</li>
      <li>Description point 4</li>
      <li>Description point 5</li>
    </ul>
    */
  },
  {
    id: 2,
    title: "Web Technologies Engineering Intern",
    img: "ti.png",
    desc: <ul>
      <li>Interned in the Product and Portfolio Marketing - Embedded Processing team to optimize the ti.com UI/UX search experience</li>
      <li>Spearheaded C2000 MCU tool folder optimization with SDKs, hardware, driver, etc. packaging using OneRelease & PIM</li>
      <li>Optimized user experience by cleaning up 40% of unmaintained reference designs by analyzing activity counts on PAD & eMSG</li>
      <li>Developed 3rd party partner ecosystem to share their story on ti.com and linked their products using PIM, eMSG, and DAM</li>
      <li>Utilized Atlassian Suite including Jira and Confluence for project management, maintaining timelines and deliverables</li>  
    </ul>
  },
  {
    id: 3,
    title: "Engineering Team Lead - Capstone Project",
    img: "ti.png",
    desc: <ul>
      <li>Led a group of six students to develop a PPG-based wearable device for TI's Medical Systems Engineering</li>
      <li>Integrated TI's MCU with BLE and an AFE4432 (analog front-end) for PPG signal acquisition via SPI on a custom PCB board</li>
      <li>Developed a mobile app using React for real-time data visualization of the PPG signal, SpO2, and HR of the patient, for both iOS and Android</li>
      <li>Utilized TI's Code Composer Studio (C) for signal acquisition and backend data processing, operating at a 10% duty cycle</li>
      <li>Managed project timelines and milestones while collaborating with TI engineers with Gantt charts, weekly stand-ups, and sprints</li>
      <li>Won Outstanding Project out of roughly 40 teams with 250+ engineering students at Expo while presenting to industry experts</li>
    </ul>
  },
  {
    id: 4,
    title: "Humanoid, Biorobotics, and Smart Systems (HBS) Lab - Undergraduate Researcher",
    img: "HBS.png",
    desc: <ul>
      <li>Implemented Computer Vision features on socially assistive robot for patients with neurological impairments like Alzheimer's</li>
      <li>Integrated the Stereolabs ZED AI camera on NVIDIA CUDA to accelerate real-time depth sensing and improve muscle-actuated hand movement</li>
      <li>Utilized SICK TiM-320 LiDAR sensor for 2D depth sensing, leveraging their SOPAS software using time-of-flight technology</li>
    </ul>
  },
  {
    id: 5,
    title: "Embedded Systems Engineer",
    img: "DFR.png",
    desc: <ul>
      <li>Collaborated in the development of a Digital Dashboard Display mounted behind the steering wheel of the car</li>
      <li>Implemented a custom Linux image with Qt5 for an STM32MP1 device using Yocto, enabling advanced GUI applications</li>
      <li>Set up and maintained terminal access and managed serial output for debugging and performance monitoring</li>
    </ul>
  },
  {
    id: 6,
    title: "Steering and Suspension Engineer",
    img: "Steering.png",
    desc: <ul>
      <li>Utilized MATLAB scripts to find optimal wheel angles to calibrate the Ackermann steering angle</li>
      <li>Used SolidWorks for modeling column tubing connection with U-joints, rack-and-pinion gears, steering linkages, etc.</li>
      <li>Achieved a 34% performance improvement in the annual FSAE competition in Michigan compared to the previous year</li>
    </ul>
  },
  {
    id: 7,
    title: "Pediatric Neurology Research Intern",
    img: "UTSW.png",
    desc: <ul>
      <li>Studied Lafora Disease, a genetic disorder that accumulates polyglucosan bodies in the brain causing seizures</li>
      <li>Develoeped Malin and RBCK1 lentiviral plasmids using DNA Polymerase for mice injections with altered genetic material</li>
      <li>Discovered that malin overexpression induces ubiquitination (suppress tumor growth) for target proteins in MEF (stem cells)</li>
    </ul>
  },
  {
    id: 8,
    title: "Customer Service Representative",
    img: "amazon.png",
    desc: <ul>
      <li>Demonstrated a strong commitment to customer satisfaction by delivering exceptional service for pickups and returns</li>
      <li>Trained new hires and actively contributed to process optimization initiatives to reduce processing times</li>
      <li>Achieved first place in receiving the highest number of positive surveys in a month for six months consecutively</li>
    </ul>
  },
  {
    id: 9,
    title: "IT Specialist - Electronic Medical Records (EMR) Management",
    img: "adp.jpg",
    desc: <ul>
      <li>Produced EMRs of roughly 800 patients per day and maintained records of patient data on DrChrono</li>
      <li>Optimized testing processes with efficient online registration forms linked with barcodes for optimal check-in and out</li>
      <li>Led a team of roughly 10 employees during supervisor's absence to ensure a smooth flow of testing</li>
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

const Services = () => {
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
    <div className="services" ref={ref}>
      <div className="progress">
        <h1>Professional Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Services;