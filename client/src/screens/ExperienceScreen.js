import React from 'react'
import resume from '../resume';
import { Jumbotron } from 'react-bootstrap'
import Experience from '../components/Experience';

const ExperienceScreen = () => {
  const { experiences } = resume;
  return (
    <Jumbotron>
      <h1>Work Experience</h1>
      <section className="experience resume-section experience-section mb-5">
        <div className="resume-section-content">
          <div className="resume-timeline position-relative">
            {experiences && experiences.map((exp, index) =>
              <Experience key={index} experience={exp} />
            )}
          </div>
        </div>
      </section>
    </Jumbotron>
  )
}

export default ExperienceScreen;