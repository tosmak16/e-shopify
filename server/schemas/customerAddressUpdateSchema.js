export default {
  address_1: {
    isLength: {
      errorMessage: 'address_1 is required',
      options: { min: 1 }
    },
    trim: true
  },
  city: {
    isLength: {
      errorMessage: 'city is required',
      options: { min: 1 }
    },
    trim: true
  },
  region: {
    isLength: {
      errorMessage: 'region is required',
      options: { min: 1 }
    },
    trim: true
  },
  postal_code: {
    isLength: {
      errorMessage: 'postal_code is required',
      options: { min: 1 }
    },
    trim: true
  },
  country: {
    isLength: {
      errorMessage: 'country is required',
      options: { min: 1 }
    },
    trim: true
  },
  shipping_region_id: {
    isLength: {
      errorMessage: 'shipping_region_id is required',
      options: { min: 1 }
    },
    matches: {
      options: [/\d+$/],
      errorMessage: 'shipping_region_id should be a number'
    },
    trim: true
  }
};
