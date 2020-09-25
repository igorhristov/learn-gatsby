import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout2';
import { Helmet } from 'gatsby-plugin-react-helmet';

const Headline = styled.h1`
  display: inline-block;
  color: cornflowerblue;
`;

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <title>My Blog Posts Overview</title>
          <meta name="description" content="Web tutorials"></meta>
          <meta name="keywords" content="React, JavaScript, Gatsby"></meta>
          <meta name="author" content="Igor Hristov"></meta>
        </Helmet>

        <Headline>My Blog Posts</Headline>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <hr />
            <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
              <h3>{node.frontmatter.title}</h3>
              <p>
                <i>{node.frontmatter.date}</i>
              </p>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
