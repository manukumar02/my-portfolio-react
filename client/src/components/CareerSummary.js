import React, { Fragment } from 'react';
import { Container, ListGroup, Jumbotron } from 'react-bootstrap';

const CareerSummary = ({ careerSummary }) => {

  return (
    <Fragment>
      <Jumbotron>
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
        <ListGroup>
          {careerSummary.map(career =>
            <ListGroup.Item variant="light" key={career} >{career}</ListGroup.Item>
          )}
        </ListGroup>
      </Jumbotron>
    </Fragment>
  )
}

export default CareerSummary;