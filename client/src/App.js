import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LockScreen from './screens/LockScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SkillScreen from './screens/SkillScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import EducationScreen from './screens/EducationScreen';
import AchievementScreen from './screens/AchievementScreen';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <main>
        <Row className="main-container">
          <Col md={3} className='p-0'>
            <Sidebar />
          </Col>
          <Col md={9} className='p-0'>
            <div style={{ height: '100vh' }}>
              <Route path='/' component={LockScreen} exact />
              <Route path='/lock' component={LockScreen} exact />
              <PrivateRoute path='/home' component={HomeScreen} exact />
              <PrivateRoute path='/about' component={AboutScreen} exact />
              <PrivateRoute path='/skill' component={SkillScreen} exact />
              <PrivateRoute path='/experience' component={ExperienceScreen} exact />
              <PrivateRoute path='/education' component={EducationScreen} exact />
              <PrivateRoute path='/achievement' component={AchievementScreen} exact />
            </div>
          </Col>
        </Row>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
