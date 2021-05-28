import React, { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';

const Interest = ({ interest }) => {
  return (
    <Fragment>
      <section className="resume-section interests-section mb-2">
        <ListGroup>
          <ListGroup.Item variant="light">{interest}</ListGroup.Item>
        </ListGroup>
      </section>
    </Fragment>
  );
}

export default Interest;