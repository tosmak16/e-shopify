import { DataTypes } from 'sequelize';

const attributes = {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  attribute_value_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'product_attribute'
};

export default sequelize =>
  sequelize.define('ProductAttribute', attributes, { ...options, sequelize });
