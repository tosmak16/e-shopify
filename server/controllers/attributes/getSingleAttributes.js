import AttributeService from '../../services/database/AttributeService';

const getSingleAttributes = async (req, res) => {
  const attributes = await AttributeService.findById(req.params.id);

  if (attributes === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'ATT_01',
        message: 'Attribute does not exist',
        field: 'NoAttribute'
      }
    });
  }

  return res.status(200).send(attributes);
};

export default getSingleAttributes;
