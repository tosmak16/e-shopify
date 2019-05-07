export default {
  stripeToken: {
    isLength: {
      errorMessage: 'stripeToken is required',
      options: { min: 1 }
    },
    trim: true
  },
  order_id: {
    isLength: {
      errorMessage: 'order_id is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'order_id should be a number'
    },
    trim: true
  },
  amount: {
    isLength: {
      errorMessage: 'amount is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'amount should be a number'
    },
    trim: true
  },
  description: {
    isLength: {
      errorMessage: 'description is required',
      options: { min: 1 }
    },
    trim: true
  }
};
