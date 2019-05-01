import { DataTypes } from 'sequelize';

const attributes = {
  tax_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tax_type: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tax_percentage: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'tax'
};
export default sequelize => sequelize.define('Tax', attributes, { ...options, sequelize });
