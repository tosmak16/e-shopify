import { useState, useEffect } from 'react';

import TextInput, { INPUT_TYPES } from '../TextInput/TextInput';

import styles from './ZipCodeInput.scss';

const ZipCodeInput = props => {
  const [zipCode, setZipCode] = useState({
    value: '',
    error: ''
  });
  const validateZipCode = value => {
    let error = '';
    if (!/^\d{5}(?:[-\s]\d{4})?$/.test(value)) {
      error = 'Enter  a  valid Zip code';
    }
    return error;
  };
  const { updatedZipCode } = props;
  const inputChange = ({ target: { value } }) => {
    const errorMessage = validateZipCode(value);
    const zip = {
      value,
      error: errorMessage
    };
    setZipCode(zip);
    props.onChange(zip);
  };

  const { value, error } = zipCode;

  useEffect(() => {
    setZipCode({
      value: updatedZipCode.value,
      error: updatedZipCode.error
    });
  }, [updatedZipCode]);

  return (
    <TextInput
      {...props}
      id="input-zip-code"
      type={INPUT_TYPES.TEXT}
      placeholder="Zip Code"
      value={value}
      isValid={!error.length}
      onChange={inputChange}
      errorMessage={error}
    />
  );
};

ZipCodeInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CSSModules(ZipCodeInput, styles, { allowMultiple: true });
