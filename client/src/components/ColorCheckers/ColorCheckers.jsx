import { useState } from 'react';
import classNames from 'classnames';

import styles from './ColorCheckers.scss';

const ColorCheckers = ({ colorData, onBoxClick }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (name, index) => {
    onBoxClick(name);
    return currentIndex !== index ? setCurrentIndex(index) : null;
  };

  return (
    <div styleName="color-grid">
      {colorData.map(({ color, name, id }, index) => (
        <span
          role="presentation"
          onClick={() => handleClick(name, index)}
          key={id + name}
          style={{ backgroundColor: color }}
          styleName={`color-box ${index === currentIndex ? 'selected' : ''}`}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default CSSModules(ColorCheckers, styles, { allowMultiple: true });
