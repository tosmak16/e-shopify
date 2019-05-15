import { useState, useEffect } from 'react';

import styles from './PlainModal.scss';
import { iconClose } from '../../../assets/icons';

const PlainModal = props => {
  const { children, shouldModalBeVisible, exposeIsModalVisible, isCloseIconVisible } = props;
  const [isModalVisible, setIsModalVisible] = useState(shouldModalBeVisible);
  const handleCloseModalViaOverLayClose = ({ stopPropagation, target: { id } }) => {
    if (id !== 'modal') {
      return stopPropagation;
    }
    exposeIsModalVisible(false);
    return setIsModalVisible(false);
  };

  const handleCloseModalViaCloseIcon = () => {
    exposeIsModalVisible(false);
    return setIsModalVisible(false);
  };

  const modalVisibilityClass = isModalVisible ? 'modal--visible' : 'modal--hidden';

  useEffect(() => {
    setIsModalVisible(shouldModalBeVisible);
  }, [shouldModalBeVisible]);

  return (
    <div
      styleName={`modal ${modalVisibilityClass}`}
      id="modal"
      role="presentation"
      onClick={handleCloseModalViaOverLayClose}
    >
      <div styleName="modal__container" id="modal__container">
        {isCloseIconVisible && (
          <div
            styleName="modal__close-icon"
            role="presentation"
            onClick={handleCloseModalViaCloseIcon}
          >
            <img src={iconClose} alt="Close" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

PlainModal.propTypes = {
  shouldModalBeVisible: PropTypes.bool,
  children: PropTypes.node,
  exposeIsModalVisible: PropTypes.func,
  isCloseIconVisible: PropTypes.bool
};

PlainModal.defaultProps = {
  shouldModalBeVisible: false,
  children: null,
  exposeIsModalVisible: () => {},
  isCloseIconVisible: false
};

export default CSSModules(PlainModal, styles, { allowMultiple: true });
