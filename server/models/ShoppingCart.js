import { DataTypes } from 'sequelize';

const attributes = {
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cart_id: {
    type: DataTypes.CHAR(32),
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attributes: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  buy_now: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: true
  },
  added_on: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'shopping_cart'
};

export default sequelize => sequelize.define('ShoppingCart', attributes, { ...options, sequelize });
