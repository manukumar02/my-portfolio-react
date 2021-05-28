import React from 'react'
import resume from '../resume';
import { Jumbotron } from 'react-bootstrap';
import Education from '../components/Education';

const EducationScreen = () => {
  const { education } = resume;
  return (
    <Jumbotron>
      <h1>Education</h1>
      {education && education.map((edu, index) =>
        <Education key={index} education={edu} />
      )}

    </Jumbotron>
  )
}

export default EducationScreen;