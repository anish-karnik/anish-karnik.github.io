import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../hooks/useScrollPosition";


const Skills = React.forwardRef(( ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);
  const heading= "Skills";
  const hardSkills = [
  { name: "Python", value: 90 },
  { name: "SQL", value: 80 },
  { name: "Data Structures", value: 95 },
  { name: "C/C++", value: 90 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 70 },
  { name: "HTML/CSS", value: 80 },
  { name: "Golang", value: 70 },
  { name: "Machine Learning", value: 90},
  { name: "Github", value: 85},
  { name: "Docker", value: 80},
  { name: "Git", value: 85},
  { name: "NodeJS", value: 75},
  { name: "ExpressJS", value: 75},
  { name: "Flask", value: 80},
  { name: "MongoDB", value: 80},
  { name: "Socket.IO", value: 60},
  {name: "Network Security and Cryptography", value: 75},

];
const softSkills= [
  { name: "Goal-Oriented", value: 90 },
  { name: "Collaboration", value: 90 },
  { name: "Positivity", value: 100 },
  { name: "Adaptability", value: 85 },
  { name: "Problem Solving", value: 85 },
  { name: "Flexibility", value: 90 },
  { name: "Organization", value: 70 },
  { name: "Creativity", value: 80 },
  {name: "Procastination", value: 5},
  {name: "Open to Feedback", value: 100},
];

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
