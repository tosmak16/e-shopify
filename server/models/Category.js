import { DataTypes } from 'sequelize';

const attributes = {
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  tableName: 'category'
};
export default sequelize => sequelize.define('Category', attributes, { ...options, sequelize });
