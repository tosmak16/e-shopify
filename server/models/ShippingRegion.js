import { DataTypes } from 'sequelize';

const attributes = {
  shipping_region_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  shipping_region: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'shipping_region'
};
export default sequelize =>
  sequelize.define('ShippingRegion', attributes, { ...options, sequelize });
