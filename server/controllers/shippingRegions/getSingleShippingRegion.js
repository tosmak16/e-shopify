import ShippingRegionService from '../../services/database/ShippingRegionService';

const getTaxes = async (req, res) => {
  const shipping_reqion_id = req.params.id;
  const shippingRegion = await ShippingRegionService.findById(shipping_reqion_id);

  if (shippingRegion === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'SPR_02',
        message: 'Shipping Region does not exist',
        field: 'NoShippingRegion'
      }
    });
  }

  return res.status(200).send(shippingRegion);
};

export default getTaxes;
