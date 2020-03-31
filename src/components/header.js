import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#6495ED',
      marginBottom: '1.45rem',
      fontFamily: 'moderno-fb, sans-serif',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#FFE5B4',
            textDecoration: 'none',
            fontFamily: 'cursive',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <Link
          to="#thewedding"
          style={{
            color: '#FFE5B4',
            textDecoration: 'none',
          }}
        >
          The Wedding&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link
          to="#ourstory"
          style={{
            color: '#FFE5B4',
            textDecoration: 'none',
          }}
        >
          Our Story&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link
          to="#pictures"
          style={{
            color: '#FFE5B4',
            textDecoration: 'none',
          }}
        >
          Pictures&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
