import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

import TextInput, { INPUT_TYPES } from '../TextInput/TextInput';
import styles from './PasswordInput.scss';

export const PASSWORD_STRENGTH_TYPE = {
  WEAK: 'weak',
  MEDIUM: 'medium',
  STRONG: 'strong'
};

const PasswordInput = props => {
  const [password, setPassword] = useState({
    value: '',
    error: '',
    passwordStrength: ''
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const validatePassword = (value, placeholder = 'Password') => {
    const { size } = props;
    let error;
    if (!value.length) {
      error = `${placeholder} can not be empty`;
    } else if (value.length < size) {
      error = `${placeholder} should at least be ${size} characters`;
    } else {
      error = '';
    }
    return error;
  };

  const calculatePasswordStrength = value => {
    const results = zxcvbn(value);
    if (results.score <= 1) {
      return PASSWORD_STRENGTH_TYPE.WEAK;
    }
    if (results.score === 2) {
      return PASSWORD_STRENGTH_TYPE.MEDIUM;
    }
    return PASSWORD_STRENGTH_TYPE.STRONG;
  };

  const inputChange = event => {
    const { placeholder, value } = event.target;
    const { onChange } = props;
    const error = validatePassword(value, placeholder);
    const passwordStrength = calculatePasswordStrength(value);
    setPassword({ error, value, passwordStrength });
    return onChange({
      value,
      error,
      isValid: !error.length,
      passwordStrength
    });
  };

  const { value, error, passwordStrength } = password;
  const { showPasswordStrength, shouldShowVisibility, updatedPassword } = props;

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    props.handleVisibilityStatus(!passwordVisibility);
  };

  useEffect(() => {
    setPassword({
      value: updatedPassword.value,
      error: updatedPassword.error,
      passwordStrength: updatedPassword.passwordStrength
    });
  }, [updatedPassword]);

  return (
    <div>
      <TextInput
        {...props}
        type={passwordVisibility ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
        isValid={!error.length}
        onChange={inputChange}
        value={value}
        errorMessage={error}
        onChangePasswordVisibilityStatus={handlePasswordVisibility}
        shouldShowVisibility={shouldShowVisibility}
      />
      {error.length === 0 && value.length > 0 && showPasswordStrength && (
        <span styleName="password-strength-label">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Strength:<span styleName={`password-${passwordStrength}`}>{passwordStrength}</span>
        </span>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number,
  showPasswordStrength: PropTypes.bool,
  shouldShowVisibility: PropTypes.bool,
  handleVisibilityStatus: PropTypes.func
};

PasswordInput.defaultProps = {
  size: 8,
  showPasswordStrength: false,
  shouldShowVisibility: false,
  handleVisibilityStatus: () => {}
};

export default CSSModules(PasswordInput, styles);
