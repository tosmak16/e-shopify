import { DataTypes } from 'sequelize';

const attributes = {
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'department'
};
export default sequelize => sequelize.define('Department', attributes, { ...options, sequelize });
