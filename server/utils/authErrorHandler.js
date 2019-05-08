export default (error, req, res, next) => {
  if (error) {
    res.status(401).send({
      error: {
        status: 401,
        code: 'AUT_01',
        message: error.message,
        field: error.name
      }
    });
  }
};
