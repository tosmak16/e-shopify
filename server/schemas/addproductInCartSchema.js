export default {
  cart_id: {
    isLength: {
      errorMessage: 'cart_id is required',
      options: { min: 1 }
    },
    trim: true
  },
  product_id: {
    isLength: {
      errorMessage: 'product_id is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'product_id should be a number'
    },
    trim: true
  },
  attributes: {
    isLength: {
      errorMessage: 'attributes are required',
      options: { min: 1 }
    },
    trim: true
  }
};
