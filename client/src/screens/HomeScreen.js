import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import resume from '../resume';
import image from '../image.jpeg';
import { Container, Row, Col } from 'react-bootstrap';
import { getUserInfo } from '../actions/userInfoActions';

const sectionStyle = {
  backgroundImage: `url(${image})`
}

const HomeScreen = ({ location, history }) => {
  const { title, name, email, phone, linkedin, github } = resume;
  const redirect = location.search ? location.search.split('=')[1] : '/';
  // const { title, name, email, phone, linkedin, github } = useSelector(state => state.userInfo)
  const [updatedName, setUpdatedName] = useState([]);
  const [updatedTitle, setUpdatedTitle] = useState([]);

  const dispatch = useDispatch();
  const { unlockInfo } = useSelector(state => state.unlockInfo);

  // const userInfo = useSelector(state => state.userInfo);
  // const { loading, error, userData } = userInfo;

  // console.log(unlockInfo);

  useEffect(() => {
    // if (unlockInfo) {s
    //   history.push(redirect);
    // }
    // dispatch(getUserInfo(unlockInfo.email))

    name.split('').forEach((value, index) => {
      setTimeout(() => {
        setUpdatedName(oldValue => [...oldValue, value]);
      }, 100 * index);
    });

    title.split('').forEach((value, index) => {
      setTimeout(() => {
        setUpdatedTitle(oldValue => [...oldValue, value]);
      }, 150 * index);
    });
  }, [history, redirect, name, title])

  return (
    <div style={sectionStyle} className='back-image'>
      <Container>
        <Row>
          {/* <Col md={4}>md=4</Col> */}
          <Col md={{ span: 9, offset: 1 }}>
            <div className="media flex-column flex-md-row">
              {/* <img className="mr-3 img-fluid picture mx-auto" src={image} alt="" /> */}
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  {/* {updatedName.map(text => ( 
                    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{text}</h1>
                  ))} */}
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{updatedName}</h1>
                  <h3 className="title mb-3 text-white">{updatedTitle}</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className='text-white'>
                        <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />{email.toUpperCase()}
                      </span>
                    </li>
                    <li>
                      <span className="text-white"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6" />{phone}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 1, offset: 1 }}>
            <div className="secondary-info ml-md-auto mt-2">
              <ul className="resume-social list-unstyled">
                <li className="mb-3">
                  <a href={linkedin} className='text-white'>
                    <span className="fa-container text-center mr-2">
                      <i className="fab fa-linkedin-in fa-fw" />
                    </span>
                    <span>Linkedin</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a href={github} className='text-white'>
                    <span className="fa-container text-center mr-2">
                      <i className="fab fa-github-alt fa-fw" />
                    </span>
                    <span>Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default HomeScreen;