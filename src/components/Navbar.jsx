/** @jsxImportSource @emotion/react */
import { Component } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { mediaQueries, breakpoints } from '../theme/';
import strings from '../assets/copy/'

const styles = {
  navbar: {
    width: '100%',
    backgroundColor: '#172F6E',
    color: '#FFF',
    marginBottom: '10px',
    height: '80px',
    [mediaQueries(breakpoints.tablet)]: {
    },
    [mediaQueries(breakpoints.mobile)]: {
    }
  },
  languageSelect: {
    margin: '8px',
  },
  navLink: {
    paddingRight: '8px',
    margin: '4px',
    textDecoration: 'none',
  },
  header: {
    padding: '0 25px 0 25px',
    color: '#FFF'
  }
};

function NavSelect(props) {
  const navigate = useNavigate();
  const location = useLocation();

  function getPage(route) {
    let startIndex = 1;
    let segments = route.split("/");

    if (segments[startIndex] === "es") {
      startIndex = 2;
    }

    return segments.slice(startIndex, segments.length).join("/");
  }

  function reload(e) {
    navigate(e.target.value + "/" + getPage(location.pathname), { replace: true });
  }

  return (
    <select
      css={styles.languageSelect}
      onChange={(e) => reload(e)}
      value={location.pathname.split("/")[1] === "es" ? "es" : ""}
    >
      <option value="">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

class Navbar extends Component {
  render() {
    return (
      <div css={styles.navbar} className='nav-container'>
        <h1 css={styles.header}>CTP</h1>
        <NavSelect />
        <Link css={styles.navLink} to="">{strings.nav.home}</Link>
        <Link css={styles.navLink} to="calculator">{strings.nav.calculator}</Link>
        <Link css={styles.navLink} to="eligibility">{strings.nav.eligibility}</Link>
        <Link css={styles.navLink} to="about">{strings.nav.about}</Link>
        <Link css={styles.navLink} to="resources">{strings.nav.resources}</Link>
      </div>
    );
  }
}

export default Navbar;