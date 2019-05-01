import { DataTypes } from 'sequelize';

const attributes = {
  attribute_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'attribute'
};
export default sequelize => sequelize.define('Attribute', attributes, { ...options, sequelize });
