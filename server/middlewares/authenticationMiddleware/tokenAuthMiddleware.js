import jwt from 'jsonwebtoken';

/**
 * @description auth method serves  as middleware for authentication
 * it verifies token.
 *
 * @function auth
 *
 * @param {object} req HTTP request
 *
 * @param {object} res HTTP response
 *
 * @param {function} next
 *
 * @returns { object } response message object
 */
const tokenAuthMiddleware = (req, res, next) => {
  let token = req.headers['USER-KEY'] || req.headers['user-key'] || '';
  if (token.startsWith('Bearer ')) {
    // Removes Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          error: {
            status: 401,
            code: 'AUT_02',
            message: err.message,
            field: err.name
          }
        });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    res.status(401).send({
      error: {
        status: 401,
        code: 'AUT_01',
        message: 'Authorization token not provided.',
        field: 'NoAuth'
      }
    });
  }
};

export default tokenAuthMiddleware;
