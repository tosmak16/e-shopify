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
  }
};
