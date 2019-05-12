import styles from './Nav.scss';

const Nav = () => (
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
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
);

export default CSSModules(Nav, styles);
