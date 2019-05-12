import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './FilterBox.scss';

const FilterBox = ({ heading, filterData, handleClick }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [useIsActive, setUseIsActive] = useState(false);

  const isActive = index => index === currentIndex && useIsActive;

  const onHandleClick = index => {
    if (currentIndex !== index || !useIsActive) {
      handleClick(index);
      setUseIsActive(true);
      setCurrentIndex(index);
    }

    if (currentIndex === index) {
      setUseIsActive(false);
    }

    if (currentIndex === index && !useIsActive) {
      setUseIsActive(true);
    }
  };

  useEffect(() => {
    setUseIsActive(false);
    setCurrentIndex(null);
  }, [filterData]);
  return (
    <div styleName="container">
      <div styleName="header">{heading}</div>
      <div>
        <ul styleName="list-container">
          {filterData.map((item, index) => {
            const { name } = item;
            const uniqueKey = index + item.name;
            return (
              <li
                role="presentation"
                onClick={() => onHandleClick(index)}
                styleName={`list-item ${isActive(index) ? 'active' : ''}`}
                key={uniqueKey}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

FilterBox.propTypes = {
  heading: PropTypes.string.isRequired,
  filterData: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func
};

FilterBox.defaultProps = {
  handleClick: () => {}
};

export default CSSModules(FilterBox, styles, { allowMultiple: true });
