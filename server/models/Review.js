import { DataTypes } from 'sequelize';

const attributes = {
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'review'
};
export default sequelize => sequelize.define('Review', attributes, { ...options, sequelize });
