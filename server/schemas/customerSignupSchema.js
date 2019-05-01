export default {
  name: {
    isLength: {
      errorMessage: 'name should be at least 2 chars long',
      options: { min: 2 }
    },
    trim: true
  },
  email: {
    isEmail: {
      errorMessage: 'email value is invalid'
    }
  },
  password: {
    isLength: {
      errorMessage: 'password should be at least 9 chars long',
      options: { min: 9 }
    },
    matches: {
      options: [/^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*\W.*\W)[a-zA-Z0-9\S]{9,}$/],
      errorMessage:
        'password must contain at least 2 lowercase letters, 2 uppercase letters, 2 digits, and 2 special characters'
    },
    trim: true
  }
};
