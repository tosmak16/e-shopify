export default {
  email: {
    isLength: {
      errorMessage: 'email is required',
      options: { min: 1 }
    },
    trim: true
  },
  password: {
    isLength: {
      errorMessage: 'password is required',
      options: { min: 1 }
    },
    trim: true
  }
};
