import { useState } from 'react';
import TextInput, { INPUT_TYPES } from '../TextInput/TextInput';

const NameInput = props => {
  const [name, setName] = useState({
    value: '',
    error: ''
  });

  const validateName = (value, placeholder = 'This field') => {
    let error;
    if (!value.length) {
      error = `${placeholder} can not be empty`;
    } else if (value.length < 2) {
      error = `${placeholder} should at least be two characters`;
    } else if (!/^[a-zA-Z '.-]*$/.test(value)) {
      error = `${placeholder} is invalid`;
    } else {
      error = '';
    }
    return error;
  };

  const inputChange = event => {
    const { placeholder, value } = event.target;
    const { onChange } = props;
    const error = validateName(value, placeholder);
    // set state
    setName({ error, value });
    // pass change to parent component
    return onChange({ value, error, isValid: !error.length });
  };

  const { value, error } = name;

  return (
    <div>
      <TextInput
        {...props}
        type={INPUT_TYPES.TEXT}
        isValid={!error.length}
        onChange={inputChange}
        value={value}
        errorMessage={error}
      />
    </div>
  );
};

NameInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default NameInput;
