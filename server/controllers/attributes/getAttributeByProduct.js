import ProductAttributeService from '../../services/database/ProductAttributeService';
import attributesInProductAttributesQuery from '../../queries/attributesInProductAttributesQuery';
import AttributeValueService from '../../services/database/AttributeValueService';
import attributeValuesByAttributeListQuery from '../../queries/attributeValuesByAttributeListQuery';

const getAttributeByProduct = async (req, res) => {
  const product_id = req.params.id;
  const attributesInproductAttributes = await ProductAttributeService.findAllBy(
    attributesInProductAttributesQuery(product_id)
  );

  if (attributesInproductAttributes.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'ATT_01',
        message: `No attributes match product Id: ${product_id}`,
        field: 'NoAttribute'
      }
    });
  }

  const normalizedAttributesInproductAttributes = attributesInproductAttributes.map(item =>
    Number(item.attribute_value_id)
  );

  const attributes = await AttributeValueService.findAllBy(
    attributeValuesByAttributeListQuery(normalizedAttributesInproductAttributes)
  );

  const normalizedAttributes = attributes.map(
    ({ attribute_value_id, value, Attribute: { name } }) => ({
      attribute_name: name,
      attribute_value_id,
      attribute_value: value
    })
  );

  return res.status(200).send(normalizedAttributes);
};

export default getAttributeByProduct;
