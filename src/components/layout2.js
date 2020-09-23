import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from 'gatsby';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout2 = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '650px',
            padding: '0 1rem',
          }}
        >
          <header style={{ marginBottom: `1.5rem` }}>
            <h3 style={{ display: 'inline' }}>
              {data.site.siteMetadata.title}
            </h3>
            <ul
              className="my-background"
              style={{ listStyle: 'none', float: 'right' }}
            >
              <ListLink to="/">Home</ListLink>
              <ListLink to="/page-2">page 2</ListLink>
              <ListLink to="/about">About</ListLink>
              <ListLink to="/blog">Blog</ListLink>
            </ul>
          </header>
          {children}
          <footer>footer</footer>
        </div>
      )}
    />
  );
};

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout2;
