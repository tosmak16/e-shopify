import { DataTypes } from 'sequelize';

const attributes = {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  shipping_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tax_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    default: '0.00'
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: '0'
  },
  comments: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  auth_code: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  reference: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: false
  },
  shipped_on: {
    type: DataTypes.DATE,
    allowNull: true
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'orders'
};

export default sequelize => sequelize.define('Orders', attributes, { ...options, sequelize });
