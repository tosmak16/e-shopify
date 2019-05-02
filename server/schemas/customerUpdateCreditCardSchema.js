export default {
  credit_card: {
    isLength: {
      errorMessage: 'credit_card is required',
      options: { min: 1 }
    },
    trim: true
  }
};
