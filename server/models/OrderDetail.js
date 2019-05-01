import { DataTypes } from 'sequelize';

const attributes = {
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attributes: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unit_cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'order_detail'
};

export default sequelize => sequelize.define('OrderDetail', attributes, { ...options, sequelize });
