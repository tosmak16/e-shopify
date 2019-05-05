export default {
  quantity: {
    isLength: {
      errorMessage: 'quantity is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'quantity should be a number'
    },
    trim: true
  }
};
