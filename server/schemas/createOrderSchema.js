export default {
  cart_id: {
    isLength: {
      errorMessage: 'cart_id is required',
      options: { min: 1 }
    },
    trim: true
  },
  shipping_id: {
    isLength: {
      errorMessage: 'shipping_id is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'shipping_id should be a number'
    },
    trim: true
  },
  tax_id: {
    isLength: {
      errorMessage: 'tax_id is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'tax_id should be a number'
    },
    trim: true
  }
};
