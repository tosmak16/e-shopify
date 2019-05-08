const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MSwiaWF0IjoxNTU3MzM1MzYyLCJleHAiOjIzNTczNDE3NjJ9.UFj2fRKRqMOJCGf4cKX24LXYKwzxoc3T1SoyWfTr7dU';

const user = {
  name: 'test name',
  email: 'test@gmail.com',
  password: '123456@aA@bBx'
};

const productReview = {
  review: 'Good',
  rating: 0
};

const addCartData = {
  cart_id: 'b7954c49-2b8e-487b-8fdc-8ac8f52',
  product_id: 1,
  attributes: 'Xv1x'
};

const orderData = {
  cart_id: 'b7954c49-2b8e-487b-8fdc-8ac8f52',
  shipping_id: 1,
  tax_id: 1
};
export { token, user, productReview, addCartData, orderData };
