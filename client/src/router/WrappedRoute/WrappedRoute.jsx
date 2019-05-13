import React from 'react';
import { Route } from 'react-router-dom';

import AppFrame from '../../components/AppFrame/AppFrame';
import styles from './WrappedRoute.scss';

class WrappedRoute extends React.PureComponent {
  static propTypes = {
    component: PropTypes.node.isRequired
  };

  render() {
    const { component } = this.props;

    const appComponent = () => <AppFrame {...this.props}>{component}</AppFrame>;

    return <Route {...this.props} component={appComponent} />;
  }
}

export default CSSModules(WrappedRoute, styles, { allowMultiple: true });
