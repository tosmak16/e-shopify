import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import styles from './SignUpPage.scss';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

import NameInput from '../../components/NameInput/NameInput';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

import { registerUser } from '../../actions';

const initialData = {
  value: '',
  error: '',
  isValid: false
};

const SignUpPage = props => {
  const [name, setName] = useState(initialData);
  const [email, setEmail] = useState(initialData);
  const [password, setPassword] = useState({ ...initialData, passwordStrength: 'weak' });

  const { registerUser, errorMessage, errorField, history } = props;

  useEffect(() => {
    if (errorField === 'email') {
      return setEmail({ ...email, error: errorMessage });
    }

    if (errorField === 'password') {
      return setPassword({ ...password, error: errorMessage });
    }
    setName({ ...name, error: errorMessage });
  }, [errorMessage]);

  const isFormValid = name.isValid && email.isValid && password.isValid;

  const handleRegisterUser = () =>
    isFormValid
      ? registerUser({ name: name.value, email: email.value, password: password.value }, history)
      : '';

  return (
    <div styleName="form-content">
      <div styleName="input-container">
        <NameInput
          name="name"
          id="name"
          placeholder="Name"
          label="Name"
          onChange={inputData => setName(inputData)}
        />
      </div>

      <div styleName="input-container">
        <EmailInput
          updateEmail={setEmail}
          updatedEmail={email}
          label="Email"
          placeholder="Email"
          id="Email-input"
        />
      </div>
      <div styleName="input-container">
        <PasswordInput
          name="password"
          id="password"
          placeholder="Password"
          label="Password"
          onChange={passwordValue => setPassword(passwordValue)}
          showPasswordStrength
          shouldShowVisibility
          updatedPassword={password}
        />
      </div>
      <div styleName="button-elipsis-group">
        <div styleName="button-container">
          <Button disabled={!isFormValid} onClick={handleRegisterUser}>
            Continue
          </Button>
        </div>
      </div>
      <div styleName="sign-in-link-container">
        Have an account?&nbsp;
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessage: state.customer.errorMessage,
  errorField: state.customer.field
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      registerUser
    }
  )(CSSModules(SignUpPage, styles))
);
