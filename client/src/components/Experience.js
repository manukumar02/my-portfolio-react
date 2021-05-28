import React, { Fragment } from 'react';
import { Container, ListGroup, Jumbotron, Card } from 'react-bootstrap';

const Experience = ({ experience }) => {

  return (
    <Fragment>
      <Card className='md-5'>
        <Card.Header>
          <Card.Title>{experience.role}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Title>{experience.company}</Card.Title>
          <Card.Text className='m-0'>{experience.period}</Card.Text>
          <Card.Text className='m-0'>{'Client: ' + experience.client}</Card.Text>
          <Card.Text className='m-0'>{'Project Name: ' + experience.projectName}</Card.Text>
          <Card.Text className='m-0'>{experience.teamSize && 'Team Size: ' + experience.teamSize}</Card.Text>
          <Card.Text as='h4' className='mt-3'>Responsibility:</Card.Text>
          <ListGroup>
            {experience.responsibilities.map(resp =>
              <ListGroup.Item variant='light' key={resp}>{resp}</ListGroup.Item>
            )}
          </ListGroup>
          <Card.Text as='h4' className='mt-3'>Technologies used:</Card.Text>
          <ListGroup horizontal>
            {experience.languages && experience.languages.map(lang =>
              <ListGroup.Item key={lang} className="list-inline-item">{lang}</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>

    </Fragment>
  )
}

export default Experience;