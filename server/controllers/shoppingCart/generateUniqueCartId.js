import uuid from 'uuid';

const generateUniqueCartId = async (req, res) => {
  const cart_id = uuid();

  if (cart_id === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'SHC_02',
        message: 'CartId does not exist',
        field: 'NoCartIdGenerated'
      }
    });
  }

  return res.status(200).send({ cart_id: cart_id.slice(0, 32) });
};

export default generateUniqueCartId;
