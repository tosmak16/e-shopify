import React from 'react';
import classNames from 'classnames';

import styles from './Tile.scss';

const Tile = ({ children, className }) => {
  const classes = classNames('bare-tile', className);
  return <div styleName={classes}>{children}</div>;
};

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Tile.defaultProps = {
  className: ''
};

export default CSSModules(Tile, styles, { allowMultiple: true });
