import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import {
  validateSignUpData,
  validateLoginData,
  validateUpdateCustomerData,
  validateUpdateCustomerAddressData,
  validateUpdateCustomerCreditCardData,
  normalizePaginationParams,
  validateAddProductReviewsData,
  validateProductInCartData,
  validateUpdateItemInCartData,
  validateCreateOrderData,
  validateStripeChargeCustomerData
} from '../middlewares/validationMiddlewares';
import {
  signIn,
  signUp,
  getCustomer,
  updateCustomer,
  updateCustomerAddress,
  updateCustomerCreditCard
} from '../controllers/customers';

import {
  getProducts,
  searchProducts,
  getSingleProduct,
  getProductsByCategory,
  getProductsByDepartment,
  getProductDetails,
  getProductLocation,
  getProductReviews,
  addProductReviews
} from '../controllers/products';

import { getDepartments, getSingleDepartment } from '../controllers/departments';

import {
  getCategories,
  getSingleCategory,
  getCategoriesInProduct,
  getCategoriesInDepartment
} from '../controllers/categories';

import {
  getAttributes,
  getSingleAttributes,
  getAttributeValues,
  getAttributeByProduct
} from '../controllers/attributes';

import { getTaxes, getSingleTax } from '../controllers/taxes';

import { getShippingRegions, getSingleShippingRegion } from '../controllers/shippingRegions';

import {
  generateUniqueCartId,
  addProductInCart,
  getProductInCartList,
  updateCartItem,
  deleteCart,
  moveProductToCart,
  saveItemInCartForLater,
  getSavedItemInCartForLater,
  removeProductInCart,
  getTotalAmountInCart
} from '../controllers/shoppingCart';

import {
  createOrders,
  getOrders,
  getOrdersByCustomer,
  getInfoAboutOrder
} from '../controllers/orders';

import { chargeCustomer } from '../controllers/stripe';

const router = express.Router();

// ************Customers routes *********** //
router.post('/customers', validateSignUpData, signUp);
router.post('/customers/login', validateLoginData, signIn);
router.get('/customer', tokenAuthMiddleware, getCustomer);
router.put('/customer', tokenAuthMiddleware, validateUpdateCustomerData, updateCustomer);
router.put(
  '/customers/address',
  tokenAuthMiddleware,
  validateUpdateCustomerAddressData,
  updateCustomerAddress
);
router.put(
  '/customers/creditCard',
  tokenAuthMiddleware,
  validateUpdateCustomerCreditCardData,
  updateCustomerCreditCard
);

// ********* */ Products routes ************ //
router.get('/products', normalizePaginationParams, getProducts);
router.get('/products/search', normalizePaginationParams, searchProducts);
router.get('/products/:id', getSingleProduct);
router.get('/products/inCategory/:id', normalizePaginationParams, getProductsByCategory);
router.get('/products/inDepartment/:id', normalizePaginationParams, getProductsByDepartment);
router.get('/products/:id/details', getProductDetails);
router.get('/products/:id/locations', getProductLocation);
router.get('/products/:id/reviews', getProductReviews);
router.post(
  '/products/:id/reviews',
  tokenAuthMiddleware,
  validateAddProductReviewsData,
  addProductReviews
);

// ********* */ Departments routes ************ //
router.get('/departments', getDepartments);
router.get('/departments/:id', getSingleDepartment);

// ********* */ Categories routes ************ //
router.get('/categories', normalizePaginationParams, getCategories);
router.get('/categories/:id', getSingleCategory);
router.get('/categories/inProduct/:id', getCategoriesInProduct);
router.get('/categories/inDepartment/:id', getCategoriesInDepartment);

// ********* */ Attributes routes ************ //
router.get('/attributes', getAttributes);
router.get('/attributes/:id', getSingleAttributes);
router.get('/attributes/values/:id', getAttributeValues);
router.get('/attributes/inProduct/:id', getAttributeByProduct);

// ********* */ Tax routes ************ //
router.get('/tax', getTaxes);
router.get('/tax/:id', getSingleTax);

// ********* */ Shipping Region routes ************ //
router.get('/shipping/regions', getShippingRegions);
router.get('/shipping/regions/:id', getSingleShippingRegion);

// ********* */ Shopping Carts routes ************ //
router.get('/shoppingcart/generateUniqueId', generateUniqueCartId);
router.post('/shoppingcart/add', validateProductInCartData, addProductInCart);
router.get('/shoppingcart/:id', getProductInCartList);
router.put('/shoppingcart/update/:id', validateUpdateItemInCartData, updateCartItem);
router.delete('/shoppingcart/empty/:id', deleteCart);
router.get('/shoppingcart/moveToCart/:id', moveProductToCart);
router.get('/shoppingcart/saveForLater/:id', saveItemInCartForLater);
router.get('/shoppingcart/getSaved/:id', getSavedItemInCartForLater);
router.delete('/shoppingcart/removeProduct/:id', removeProductInCart);
router.get('/shoppingcart/totalAmount/:id', getTotalAmountInCart);

// ********* */ Orders routes ************ //
router.post('/orders', tokenAuthMiddleware, validateCreateOrderData, createOrders);
router.get('/orders/inCustomer', tokenAuthMiddleware, getOrdersByCustomer);
router.get('/orders/:id', tokenAuthMiddleware, getOrders);
router.get('/orders/shortDetail/:id', tokenAuthMiddleware, getInfoAboutOrder);

// ********* */ Stripe routes ************ //
router.post('/stripe/charge', validateStripeChargeCustomerData, chargeCustomer);

export default router;
