import React from 'react';
import Tours from '../components/Tours/Tours';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const tours = ({ data }) => {
  return (
    <Layout>
      hello from tours page
      <Tours tours={data.tours.edges} />
    </Layout>
  );
};

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      totalCount
      edges {
        node {
          id: contentful_id
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default tours;
