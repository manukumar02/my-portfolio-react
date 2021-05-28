import React, { Fragment } from 'react';
import { Container, ListGroup, Jumbotron, ProgressBar } from 'react-bootstrap';

const Tool = ({ otherSkills }) => {
  return (
    <div style={{ overflow: 'auto', height: 'calc(100vh - 176px)' }}>
      <ListGroup className="list-unstyled mb-4">
        {otherSkills && otherSkills.map(othSkl =>
          <ListGroup.Item variant="light" key={othSkl} className="mb-2">
            <div className="resume-skill-name">{othSkl}</div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Tool;
