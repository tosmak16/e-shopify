import { DataTypes } from 'sequelize';

const attributes = {
  product_id: {
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
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  discounted_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    default: '0.00'
  },
  image: {
    type: DataTypes.STRING(150)
  },
  image_2: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  thumbnail: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  display: {
    type: DataTypes.SMALLINT(6),
    allowNull: false,
    default: '0'
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'product'
};

export default sequelize => sequelize.define('Product', attributes, { ...options, sequelize });
