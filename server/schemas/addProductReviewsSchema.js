export default {
  review: {
    isLength: {
      errorMessage: 'review is required',
      options: { min: 1 }
    },
    trim: true
  },
  rating: {
    isLength: {
      errorMessage: 'rating is required',
      options: { min: 1 }
    },
    matches: {
      options: [/^[0-5]$/],
      errorMessage: 'rating should be a number between 0 and 5'
    },
    trim: true
  }
};
