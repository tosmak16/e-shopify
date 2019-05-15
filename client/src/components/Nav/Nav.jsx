import styles from './Nav.scss';

const Nav = ({ handleClick }) => (
  <nav styleName="nav" className="navbar navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span role="presentation" onClick={handleClick} className="navbar-toggler-icon" />
    </button>
  </nav>
);

export default CSSModules(Nav, styles);
