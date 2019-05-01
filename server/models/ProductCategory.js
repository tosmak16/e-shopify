import { DataTypes } from 'sequelize';

const attributes = {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'product_category'
};

export default sequelize =>
  sequelize.define('ProductCategory', attributes, { ...options, sequelize });
