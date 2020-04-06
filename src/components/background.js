import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Background = (props) => (
  <div id="background" style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <StaticQuery
      query={graphql`
      query {
        flower: allFile(filter: {sourceInstanceName: { eq: "background" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
      render={data => <Img fluid={data.flower.edges[props.count].node.childImageSharp.fluid} />}
    />
  </div>
);
export default Background;
