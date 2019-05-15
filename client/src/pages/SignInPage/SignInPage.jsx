import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';

import styles from './SignInPage.scss';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { loginUser, facebookLogin } from '../../actions';

const initialData = {
  value: '',
  error: '',
  isValid: false
};
const SignInPage = props => {
  const [password, setPassword] = useState({ ...initialData, passwordStrength: 'weak' });
  const [email, setEmail] = useState(initialData);

  const isFormValid = email.isValid && password.isValid;

  const { loginUser, errorMessage, errorField, history, facebookLogin } = props;

  const handleLoginUser = () =>
    isFormValid ? loginUser({ email: email.value, password: password.value }, history) : '';

  useEffect(() => {
    if (errorField === 'email') {
      return setEmail({ ...email, error: errorMessage });
    }

    return setPassword({ ...password, error: errorMessage });
  }, [errorMessage]);

  return (
    <div styleName="form-content">
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
          shouldShowVisibility
          updatedPassword={password}
        />
      </div>
      <div styleName="button-container">
        <Button disabled={!isFormValid} onClick={handleLoginUser}>
          Continue
        </Button>
      </div>
      <div styleName="sign-in-link-container">
        {`Don't have an account? `}
        <Link to="/app/sign-up">Sign Up</Link>
      </div>
      <FacebookLogin
        appId={process.env.FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name"
        textButton="FACEBOOK"
        callback={({ accessToken }) => facebookLogin({ access_token: accessToken }, history)}
      />
    </div>
  );
};

SignInPage.propTypes = {};

const mapStateToProps = state => ({
  errorMessage: state.customer.errorMessage,
  errorField: state.customer.field
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser, facebookLogin }
  )(CSSModules(SignInPage, styles))
);
