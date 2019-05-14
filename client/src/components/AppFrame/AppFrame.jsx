import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import styles from './AppFrame.scss';
import SideBar from '../SideBar/SideBar';
import Nav from '../Nav/Nav';
import { logoutUser } from '../../actions';

const AppFrame = ({ children, history, location: { pathname }, isLoggedIn, logoutUser }) => {
  if (pathname === '/sign-in' || pathname === 'sign-up') {
    logoutUser();
  }
  return (
    <div styleName="main-container">
      <Nav />
      <div styleName="sidebar-container">
        <SideBar />
      </div>
      <div styleName="main-content">{children}</div>
    </div>
  );
};

AppFrame.propTypes = {};

const mapStateToProps = state => ({
  errorMessage: state.customer.errorMessage,
  errorField: state.customer.field
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(CSSModules(AppFrame, styles))
);
