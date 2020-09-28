import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
import { FaHome, FaMap } from 'react-icons';

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour;

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={name}
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>starting from ${price}</p>
            <p> {country}</p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>durations: {days} days</h4>
          <p className={styles.description}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => {
              return (
                <li key={index}>
                  {item.day} : {item.info}
                </li>
              );
            })}
          </ul>
          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default TourTemplate;
