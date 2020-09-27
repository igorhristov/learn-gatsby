import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    example: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <Wraper>
      <article>
        <h3>basic image</h3>
        <img className="basic" src={img1} />
        <h2>Content</h2>
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>

      </article>
      <article>
        <h3>fluid image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />

        <div className="small">
          <Image fluid={data.example.childImageSharp.fluid} />
        </div>
        <h2>Content</h2>
      </article>
    </Wraper>
  );
};

const Wraper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  .basic {
    width: 100%;
  }
  .small {
    width: 200px;
  }

  article {
    border: 3px solid darkred;
    padding: 1rem 0;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 0.8rem;
    grid-column-gap: 0.8rem;
  }
`;

export default Images;
