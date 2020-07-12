import React from 'react';

import Layout from '../components/layout';
import Photos from '../components/photos';
import RSVP from '../components/RSVP';
import TheWedding from '../components/thewedding';
import Registry from '../components/registry';
import Background from '../components/background';

const IndexPage = () => (
  <Layout>
    <b>Family & Friends, <br />
    We are saddened to announce that due to COVID-19 and the restrictions for events in place, we have decided to postpone our wedding celebration to August 22, 2020.<p />
    We will be in touch with more details as the date approaches. We will be having a small private ceremony on May 30th with our immediate family and grandparents. <p />
    We love you all and wish everyone could be there with us, but it is important that we keep everyone safe and healthy. We are looking forward to celebrating with everyone in August. <p />
    Love,<br />
    Andrew & Mackenzie</b>
    <p />
    <Background count={0} />
    <p />
    <p />

    <RSVP />
    <hr />

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
