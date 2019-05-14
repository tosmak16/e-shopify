import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import styles from './SideBar.scss';
import Link from '../Link/Link';

const SideBar = props => {
  const {
    location: { pathname },
    isLoggedIn
  } = props;

  const inSignUpPage = pathname === '/sign-up';

  return (
    <div styleName="main-container">
      <section>
        <div>Logo</div>
      </section>

      <section styleName="side-menu">
        <ul styleName="side-menu__list">
          <li styleName={`side-menu__item ${pathname === '/products' ? 'active' : ''}`}>
            <i className="fas fa-store" />
            <Link to="/products">SHOP</Link>
          </li>
          <li styleName={`side-menu__item ${pathname === '/cart' ? 'active' : ''}`}>
            <i className="fas fa-shopping-cart" />
            <Link to="/cart">CART</Link>
          </li>
          <li styleName={`side-menu__item ${pathname === '/checkout' ? 'active' : ''}`}>
            <i className="fas fa-money-check-alt" />
            <Link to="/checkout">CHECKOUT</Link>
          </li>
          {isLoggedIn && (
            <li styleName="side-menu__item">
              <i className="fas fa-sign-out-alt" />
              <Link to="/sign-in">LOGOUT</Link>
            </li>
          )}

          {!isLoggedIn && inSignUpPage && (
            <li styleName={`side-menu__item ${pathname === '/sign-in' ? 'active' : ''}`}>
              <i className="fas fa-sign-in-alt" />
              <Link to="/sign-in">SIGN IN</Link>
            </li>
          )}

          {!isLoggedIn && !inSignUpPage && (
            <li styleName={`side-menu__item ${pathname === '/sign-up' ? 'active' : ''}`}>
              <i className="fas fa-user-plus" />
              <Link to="/sign-up">SIGN UP</Link>
            </li>
          )}
        </ul>
      </section>
      <div />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.customer.isLoggedIn
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(CSSModules(SideBar, styles, { allowMultiple: true }))
);
