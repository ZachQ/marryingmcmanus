import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div
    style={{
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
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: 'rgb(122, 128, 125)',
            textDecoration: 'none',
            fontFamily: 'cursive',
          }}
        >
          Andrew McManus & Mackenzie Baucom
        </Link>
      </h1>
      <br />
      <ul style={{ listStyle: 'none', textAlign: 'center' }}>
        <Link
          to="#thewedding"
          style={{
            color: 'rgb(122, 128, 125)',
            textDecoration: 'none',
          }}
        >
          The Wedding&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link
          to="#registry"
          style={{
            color: 'rgb(122, 128, 125)',
            textDecoration: 'none',
          }}
        >
          Registry&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link
          to="#pictures"
          style={{
            color: 'rgb(122, 128, 125)',
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
