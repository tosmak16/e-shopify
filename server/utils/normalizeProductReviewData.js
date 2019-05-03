export default poductReviewData =>
  poductReviewData.map(({ Customer: { name }, review, rating, created_on }) => ({
    name,
    review,
    rating,
    created_on
  }));
