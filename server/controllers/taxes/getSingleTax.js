import TaxService from '../../services/database/TaxService';

const getTaxes = async (req, res) => {
  const tax_id = req.params.id;
  console.log(tax_id);
  const tax = await TaxService.findById(tax_id);

  if (tax === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'TAX_02',
        message: 'Tax does not exist',
        field: 'NoTax'
      }
    });
  }

  return res.status(200).send(tax);
};

export default getTaxes;
