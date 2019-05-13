import PropTypes from 'prop-types';

import styles from './AppFrame.scss';
import SideBar from '../SideBar/SideBar';
import Nav from '../Nav/Nav';

const AppFrame = ({ children }) => {
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

export default CSSModules(AppFrame, styles);
