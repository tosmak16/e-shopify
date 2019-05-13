import { useState, useEffect } from 'react';

import TextInput, { INPUT_TYPES } from '../TextInput/TextInput';
import styles from './EmailInput.scss';

const EmailInput = props => {
  const [email, setEmail] = useState({
    emailValue: '',
    emailError: ''
  });
  const { emailValue, emailError } = email;
  const { shouldShowCheckMark, updatedEmail, updateEmail, shouldShowErrorMessage } = props;

  const validateInput = value => {
    let errorMessage;
    if (!value.length) {
      errorMessage = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errorMessage = 'Please enter a valid email';
    } else {
      errorMessage = '';
    }
    return errorMessage;
  };

  const inputChange = event => {
    const { value } = event.target;
    const error = validateInput(value);
    setEmail({ emailValue: value, emailError: error });
    updateEmail({ value, error, isValid: error.length === 0 });
  };

  useEffect(() => {
    const { value, error } = updatedEmail;
    setEmail({ emailValue: value, emailError: error });
  }, [updatedEmail]);
  return (
    <div>
      <TextInput
        {...props}
        type={INPUT_TYPES.EMAIL}
        isValid={!emailError.length}
        onChange={inputChange}
        value={emailValue}
        inputDidChange={shouldShowCheckMark}
      />
      {emailError.length > 0 && shouldShowErrorMessage && (
        <span styleName="input-validation-message-label">{emailError}</span>
      )}
    </div>
  );
};

EmailInput.defaultProps = {
  shouldShowCheckMark: false,
  updatedEmail: {
    value: '',
    error: ''
  },
  shouldShowErrorMessage: true
};

EmailInput.propTypes = {
  updateEmail: PropTypes.func.isRequired,
  shouldShowCheckMark: PropTypes.bool,
  updatedEmail: PropTypes.objectOf(PropTypes.any),
  shouldShowErrorMessage: PropTypes.bool
};
export default CSSModules(EmailInput, styles, { allowMultiple: true });
