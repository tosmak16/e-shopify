import { DataTypes } from 'sequelize';

const attributes = {
  shipping_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  shipping_type: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  shipping_cost: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false
  },
  shipping_region_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'shipping'
};
export default sequelize => sequelize.define('Shipping', attributes, { ...options, sequelize });
