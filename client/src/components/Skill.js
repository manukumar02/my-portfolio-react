import React, { Fragment } from 'react';
import { Container, ListGroup, Jumbotron, ProgressBar } from 'react-bootstrap';

const Skill = ({ skills }) => {
  return (
    <div style={{ overflow: 'auto', height: 'calc(100vh - 176px)' }}>
      <ListGroup className="list-unstyled mb-4">
        {skills && skills.map(skill =>
          <ListGroup.Item variant="light" key={skill.name} className="mb-2">
            <div className="resume-skill-name">{skill.name}</div>
            <ProgressBar variant="success" now={skill.percent} label={`${skill.percent}%`} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Skill;