import { DataTypes } from 'sequelize';

const attributes = {
  audit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  tableName: 'audit',
  timestamps: false
};
export default sequelize => sequelize.define('Audit', attributes, { ...options, sequelize });
