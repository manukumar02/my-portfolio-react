import React, { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';

const Awards = ({ award }) => {
  return (
    <Fragment>
      <section className="resume-section reference-section mb-2">
        <ListGroup>
          <ListGroup.Item>{award}</ListGroup.Item>
        </ListGroup>
      </section>
    </Fragment>
  );
}

export default Awards;