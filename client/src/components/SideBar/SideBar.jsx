import styles from './SideBar.scss';
import Link from '../Link/Link';

const SideBar = () => (
  <div styleName="main-container">
    <section>
      <div>Logo</div>
    </section>

    <section styleName="side-menu">
      <ul styleName="side-menu__list">
        <li styleName="side-menu__item active">
          <Link to="/a">SHOP</Link>
        </li>
        <li styleName="side-menu__item">
          <Link to="/a">CART</Link>
        </li>
        <li styleName="side-menu__item">
          <Link to="/a">CHECKOUT</Link>
        </li>
      </ul>
    </section>
    <div />
  </div>
);

export default CSSModules(SideBar, styles, { allowMultiple: true });
