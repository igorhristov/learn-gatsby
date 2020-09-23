import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import styles from './about.module.css';
import astronaut from '../../images/gatsby-astronaut.png';

import Layout from '../../components/layout2';

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="some user" />

    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

const Team = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>The Team</h1>

        <User
          username={data.site.siteMetadata.author}
          avatar={astronaut}
          excerpt="Full-stack web developer. Founder of some website.com"
        />

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

        <Link to="/">Go back to homepage</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Team;
