import React from 'react'
import CareerSummary from '../components/CareerSummary';
import resume from '../resume';

const AboutScreen = () => {
  const { careerSummary } = resume;
  return (
    <div>
      <CareerSummary careerSummary={careerSummary} />
    </div>
  )
}

export default AboutScreen;