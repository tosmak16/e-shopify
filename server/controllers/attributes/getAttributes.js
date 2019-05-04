import AttributeService from '../../services/database/AttributeService';

const getAttributes = async (req, res) => {
  const attributes = await AttributeService.findAllBy();

  return res.status(200).send(attributes);
};

export default getAttributes;
