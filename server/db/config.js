import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_config = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    timestamps: false,
    dialect: process.env.DB_DIALECT,
    logging: false
  },

  testing: {
    database: process.env.DB_NAME_TEST,
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    host: process.env.DB_HOST,
    timestamps: false,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
};

const dbConnect = new Sequelize(db_config[process.env.NODE_ENV]);

export default dbConnect;
