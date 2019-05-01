import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET_KEY, TOKEN_EXPIRE } = process.env;

export default customerData => jwt.sign(customerData, SECRET_KEY, { expiresIn: TOKEN_EXPIRE });
