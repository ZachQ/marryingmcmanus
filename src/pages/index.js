import React from 'react';

import Layout from '../components/layout';
import Photos from '../components/photos';
import OurStory from '../components/ourStory';
import TheWedding from '../components/thewedding';
import Registry from '../components/registry';
import Background from '../components/background';

const IndexPage = () => (
  <Layout>
    <Background count={2} size={1000}/>
    <br />
    {/* <BackgroundImage /> */}
    <TheWedding />
    <br />
    <hr />
    <Registry />
    <br />
    <hr />
    <Photos />
    <br />
  </Layout>
);

export default IndexPage;
