import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useState, useEffect } from 'react';

import styles from './AppFrame.scss';
import SideBar from '../SideBar/SideBar';
import Nav from '../Nav/Nav';
import { logoutUser } from '../../actions';
import Loader from '../../components/Loader/Loader';
import verifyToken from '../../utils/verifyToken';

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.FADE
};

const AppFrame = ({
  children,
  history,
  location: { pathname },
  isLoggedIn,
  logoutUser,
  productsIsLoading,
  departmentsIsLoading,
  categoriesIsLoading,
  productIsLoading,
  attributesInProductIsLoading,
  cartIsLoading,
  customerIsLoading,
  shippingRegionIsLoading,
  orderLoading,
  accessToken,
  requiresAuth
}) => {
  const [showSideBarOnMobile, setSideBarOnMobile] = useState(false);

  const handleVerifyUserAndRender = (token, authCheckIsRequired) => {
    if (!verifyToken(token) && authCheckIsRequired) {
      return logoutUser(history);
    }
  };

  useEffect(() => {
    handleVerifyUserAndRender(accessToken, requiresAuth);
  }, [requiresAuth]);

  const sideBarDisplayClass = showSideBarOnMobile ? 'show' : 'hide';

  const showLoader =
    departmentsIsLoading ||
    productIsLoading ||
    categoriesIsLoading ||
    attributesInProductIsLoading ||
    cartIsLoading ||
    customerIsLoading ||
    shippingRegionIsLoading ||
    orderLoading;
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div styleName="main-container">
        <Nav handleClick={() => setSideBarOnMobile(!showSideBarOnMobile)} />
        <div styleName={`sidebar-container ${sideBarDisplayClass}`}>
          <SideBar
            handleLogOut={() => logoutUser(history)}
            showSideBarOnMobile={showSideBarOnMobile}
          />
        </div>
        {<div styleName="main-content">{children}</div>}
        {showLoader && <Loader />}
      </div>
    </AlertProvider>
  );
};

AppFrame.propTypes = {};

const mapStateToProps = state => ({
  errorMessage: state.customer.errorMessage,
  errorField: state.customer.field,
  productsIsLoading: state.products.isFetching,
  departmentsIsLoading: state.departments.isFetching,
  categoriesIsLoading: state.categories.isFetching,
  productIsLoading: state.product.isFetching,
  attributesInProductIsLoading: state.attributesInProduct.isFetching,
  cartIsLoading: state.cart.isLoading,
  customerIsLoading: state.customer.isFetching,
  shippingRegionIsLoading: state.shippingRegion.isFetching,
  orderLoading: state.order.isFetching,
  accessToken: state.customer.data.accessToken
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(CSSModules(AppFrame, styles, { allowMultiple: true }))
);
