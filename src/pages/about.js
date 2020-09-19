import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout2';

import Greeting from '../components/greeting';

import gatsbyAstronaut from '../images/gatsby-astronaut.png';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About Us</h1>
        <div style={{ textAlign: 'center' }}>
          <img
            style={{ width: '300px' }}
            src={gatsbyAstronaut}
            alt="astronaut"
          />
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose injected humour and the like.
        </p>
        <Greeting name="Igor" greeting="Hi my name is " />
        <Link to="/">Go back to homepage</Link> <br />
        <Link to="/company/team">Go to Team</Link>
      </div>
    </Layout>
  );
};

export default About;
