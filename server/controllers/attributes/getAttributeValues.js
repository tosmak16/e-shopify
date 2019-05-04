import AttributeValueService from '../../services/database/AttributeValueService';
import attributeValuesByAttributeIdQuery from '../../queries/attributeValuesByAttributeIdQuery';

const getAttributeValues = async (req, res) => {
  const attribute_id = req.params.id;

  const attributes = await AttributeValueService.findAllBy(
    attributeValuesByAttributeIdQuery(attribute_id)
  );

  return res.status(200).send(attributes);
};

export default getAttributeValues;
