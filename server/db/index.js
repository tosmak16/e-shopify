import DepartmentModel from '../models/Department';
import CategoryModel from '../models/Category';
import ProductModel from '../models/Product';
import ProductCategoryModel from '../models/ProductCategory';
import AttributeModel from '../models/Attribute';
import AttributeValueModel from '../models/AttributeValue';
import ProductAttributeModel from '../models/ProductAttribute';
import ShoppingCartModel from '../models/ShoppingCart';
import OrdersModel from '../models/Orders';
import OrderDetailModel from '../models/OrderDetail';
import ShippingRegionModel from '../models/ShippingRegion';
import CustomerModel from '../models/Customer';
import ShippingModel from '../models/Shipping';
import TaxModel from '../models/Tax';
import AuditModel from '../models/Audit';
import ReviewModel from '../models/Review';
import dbConnect from './config';

// Models setup

const Department = DepartmentModel(dbConnect);
const Category = CategoryModel(dbConnect);
const Product = ProductModel(dbConnect);
const ProductCategory = ProductCategoryModel(dbConnect);
const Attribute = AttributeModel(dbConnect);
const ProductAttribute = ProductAttributeModel(dbConnect);
const AttributeValue = AttributeValueModel(dbConnect);
const ShoppingCart = ShoppingCartModel(dbConnect);
const Orders = OrdersModel(dbConnect);
const OrderDetail = OrderDetailModel(dbConnect);
const Customer = CustomerModel(dbConnect);
const ShippingRegion = ShippingRegionModel(dbConnect);
const Shipping = ShippingModel(dbConnect);
const Tax = TaxModel(dbConnect);
const Audit = AuditModel(dbConnect);
const Review = ReviewModel(dbConnect);

// Models Association

Category.belongsTo(Department, { foreignKey: 'department_id' });
Department.hasMany(Category, { foreignKey: 'department_id' });

ProductCategory.hasMany(Product, { foreignKey: 'product_id' });
Product.belongsTo(ProductCategory, { foreignKey: 'product_id' });

AttributeValue.belongsTo(Attribute, { foreignKey: 'attribute_id' });
Attribute.hasMany(AttributeValue, { foreignKey: 'attribute_id' });

ShoppingCart.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(ShoppingCart, { foreignKey: 'product_id' });

Orders.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Orders, { foreignKey: 'customer_id' });

Orders.belongsTo(Shipping, { foreignKey: 'shipping_id' });
Shipping.hasMany(Orders, { foreignKey: 'shipping_id' });

Orders.belongsTo(Tax, { foreignKey: 'tax_id' });
Tax.hasMany(Orders, { foreignKey: 'tax_id' });

OrderDetail.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(OrderDetail, { foreignKey: 'product_id' });

OrderDetail.belongsTo(Orders, { foreignKey: 'order_id' });
Orders.hasMany(OrderDetail, { foreignKey: 'order_id' });

Customer.belongsTo(ShippingRegion, { foreignKey: 'shipping_region_id' });
ShippingRegion.hasMany(Customer, { foreignKey: 'shipping_region_id' });

Shipping.belongsTo(ShippingRegion, { foreignKey: 'shipping_region_id' });
ShippingRegion.hasMany(Shipping, { foreignKey: 'shipping_region_id' });

Audit.belongsTo(Orders, { foreignKey: 'order_id' });
Orders.hasMany(Audit, { foreignKey: 'order_id' });

Review.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(Review, { foreignKey: 'product_id' });

Review.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Review, { foreignKey: 'customer_id' });

dbConnect.sync();

export {
  Department,
  Category,
  Product,
  ProductCategory,
  Attribute,
  ProductAttribute,
  AttributeValue,
  ShoppingCart,
  Orders,
  OrderDetail,
  ShippingRegion,
  Customer,
  Shipping,
  Tax,
  Audit,
  Review
};
