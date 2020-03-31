import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './lightbox';

const Photos = () => (
  <div id="pictures">
    <h1 style={{ fontFamily: 'cursive' }}>Photos</h1>
    <StaticQuery
      query={graphql`
      query {
        carImages: allFile(filter: {sourceInstanceName: { eq: "photos" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
      render={data => <Lightbox carImages={data.carImages.edges} />}
    />
  </div>
);
export default Photos;
