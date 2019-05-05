import ShippingRegionService from '../../services/database/ShippingRegionService';

const getShippingRegions = async (req, res) => {
  const shippingRegions = await ShippingRegionService.findAllBy();

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

export default getShippingRegions;
