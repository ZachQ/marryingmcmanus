import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const BackgroundImage = ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
  </div>
);

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "flower.jpg" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query {
    file(relativePath: { eq: "flower.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BackgroundImage;