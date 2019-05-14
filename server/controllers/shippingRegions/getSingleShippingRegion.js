import ShippingService from '../../services/database/ShippingService';
import getShippingRegionsQuery from '../../queries/getShippingRegionsQuery';

const getTaxes = async (req, res) => {
  const shipping_region_id = req.params.id;
  const shippingRegions = await ShippingService.findAllBy(
    getShippingRegionsQuery({ shipping_region_id })
  );

  if (shippingRegions.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'SPR_02',
        message: 'Shipping region does not exist',
        field: 'NoShippingRegion'
      }
    });
  }

  return res.status(200).send(shippingRegions);
};

export default getTaxes;
