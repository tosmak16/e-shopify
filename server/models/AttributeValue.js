import { DataTypes } from 'sequelize';

const attributes = {
  attribute_value_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  attribute_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'attribute_value'
};
export default sequelize =>
  sequelize.define('AttributeValue', attributes, { ...options, sequelize });
