import React from 'react';

import Layout from '../components/layout';
import Photos from '../components/photos';
import OurStory from '../components/ourStory';
import TheWedding from '../components/thewedding';

const IndexPage = () => (
  <Layout>
    <TheWedding />
    <br />
    <OurStory />
    <br />
    <Photos />
  </Layout>
);

export default IndexPage;
