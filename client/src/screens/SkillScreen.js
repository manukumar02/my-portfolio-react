import React, { Fragment } from 'react'
import resume from '../resume';
import { Jumbotron, Accordion, Card, Button, Tabs, Tab } from 'react-bootstrap'
import Skill from '../components/Skill'
import Tool from '../components/Tool';

const SkillScreen = () => {
  const { skills, otherSkills } = resume;
  console.log(skills);
  return (
    <>
      <Jumbotron>
        <h1>Skills and Tools</h1>
        <Tabs defaultActiveKey="skills">
          <Tab eventKey="skills" title="Skills">
            <Skill skills={skills} />
          </Tab>
          <Tab eventKey="toold" title="Tools">
            <Tool otherSkills={otherSkills} />
          </Tab>
        </Tabs>
      </Jumbotron>
    </>
  )
}

export default SkillScreen;