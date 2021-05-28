import React, { Component, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';

const Education = ({ education }) => {
  return (
    <Fragment>
      <ListGroup className="list-unstyled md-3">
        <ListGroup.Item variant="light">
          <div className="resume-degree font-weight-bold">{education.degree}</div>
          <div className="resume-degree-org">{education.university}</div>
          <div className="resume-degree-time">{education.period}</div>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
}

export default Education;