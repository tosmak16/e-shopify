import { DataTypes } from 'sequelize';

const attributes = {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  credit_card: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  address_1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address_2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  day_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  eve_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mob_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  shipping_region_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: 1
  }
};

const options = {
  freezeTableName: true,
  timestamps: false,
  tableName: 'customer'
};
export default sequelize => sequelize.define('Customer', attributes, { ...options, sequelize });
