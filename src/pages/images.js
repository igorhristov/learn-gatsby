import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Images from '../components/examples/images';

const images = () => {
  return (
    <Layout>
      <Link to="/">Back to home</Link> <br />
      <Images />
    </Layout>
  );
};

export default images;
