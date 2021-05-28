import React from 'react';
import resume from '../resume';
import { Jumbotron } from 'react-bootstrap';
import Awards from '../components/Awards';
import Interest from '../components/Interest';

const AchievementScreen = () => {
  const { awardsAndActivities, interests } = resume;
  console.log(interests);
  return (
    <Jumbotron>
      <h1>Achievements</h1>
      {awardsAndActivities && awardsAndActivities.map((award, index) =>
        <Awards key={index} award={award} />
      )}
      <h1 className='mt-5'>Interests</h1>
      {interests && interests.map((intr, index) =>
        <Interest key={index} interest={intr} />
      )}
    </Jumbotron>
  )
}

export default AchievementScreen;